import type { H3Event } from 'h3'
import { createError, deleteCookie, getCookie, setCookie } from 'h3'
import type { AuthUser } from '~/types/auth'

export const AUTH_COOKIE_NAME = 'tochka_access_token'
const DEFAULT_ACCESS_TOKEN_TTL = 60 * 60
const MAX_COOKIE_TTL = 60 * 60 * 24 * 30

type GatewayRecord = Record<string, unknown>
type GatewayMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface GatewayRequestOptions {
  method: GatewayMethod
  body?: unknown
  accessToken?: string
}

function isRecord(value: unknown): value is GatewayRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function recordAt(value: unknown, ...keys: string[]): GatewayRecord | undefined {
  if (!isRecord(value)) return undefined
  for (const key of keys) {
    if (isRecord(value[key])) return value[key] as GatewayRecord
  }
  return undefined
}

function firstString(source: GatewayRecord, keys: string[]): string | null {
  for (const key of keys) {
    const value = source[key]
    if (typeof value === 'string' && value.trim()) return value.trim()
    if (typeof value === 'number' && Number.isFinite(value)) return String(value)
  }
  return null
}

function getPublicMessage(value: unknown): string | null {
  if (!isRecord(value)) return null
  const message = firstString(value, ['message', 'error_description', 'error', 'detail', 'statusMessage'])
  if (!message) return null
  return message.replace(/[\r\n\t]+/g, ' ').slice(0, 220)
}

function getStatusCode(error: unknown): number | undefined {
  if (!isRecord(error)) return undefined
  const candidate = error.statusCode ?? error.status
  return typeof candidate === 'number' && candidate >= 400 && candidate <= 599 ? candidate : undefined
}

function resolveGatewayUrl(baseUrl: string, path: string): string {
  if (/^https?:\/\//i.test(path)) return path
  return `${baseUrl.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}

export async function requestGateway<T = unknown>(
  event: H3Event,
  path: string,
  options: GatewayRequestOptions,
): Promise<T> {
  const config = useRuntimeConfig(event)
  const baseUrl = String(config.gatewayBaseUrl || 'http://localhost:8080')
  const url = resolveGatewayUrl(baseUrl, path)
  const headers: Record<string, string> = {}

  if (options.accessToken) headers.Authorization = `Bearer ${options.accessToken}`

  try {
    return await $fetch(url, {
      method: options.method,
      body: options.body as Record<string, unknown> | undefined,
      headers,
      retry: 0,
      timeout: 12_000,
    }) as T
  } catch (error) {
    const upstreamStatus = getStatusCode(error)
    const statusCode = upstreamStatus && upstreamStatus < 500 ? upstreamStatus : 502
    const responseData = isRecord(error) ? error.data : undefined
    const message = getPublicMessage(responseData)
      || (upstreamStatus && upstreamStatus < 500
        ? 'Проверьте введённые данные и попробуйте ещё раз.'
        : 'Не удалось связаться с сервером. Попробуйте позже.')

    throw createError({
      statusCode,
      message,
      data: { message },
    })
  }
}

export function ensureGatewaySuccess(payload: unknown, fallbackStatus: number): void {
  if (!isRecord(payload)) return
  if (payload.ok === false || payload.success === false) {
    const message = getPublicMessage(payload) || 'Запрос не выполнен. Проверьте данные и попробуйте ещё раз.'
    const statusCode = message.toLowerCase().includes('уже') || message.toLowerCase().includes('exists')
      ? 409
      : fallbackStatus
    throw createError({
      statusCode,
      message,
      data: { message },
    })
  }
}

export function extractAccessToken(payload: unknown): string | null {
  if (!isRecord(payload)) return null
  const tokenKeys = ['access_token', 'accessToken', 'token']
  const directToken = firstString(payload, tokenKeys)
  if (directToken) return directToken

  for (const childKey of ['login_data', 'loginData', 'data', 'result', 'auth']) {
    const child = payload[childKey]
    if (!isRecord(child)) continue
    const childToken = firstString(child, tokenKeys)
    if (childToken) return childToken
    const nested = extractAccessToken(child)
    if (nested) return nested
  }

  return null
}

function tokenTtlSeconds(payload: unknown): number {
  if (!isRecord(payload)) return DEFAULT_ACCESS_TOKEN_TTL
  const nested = recordAt(payload, 'login_data', 'loginData', 'data', 'result')
  const sources = nested ? [nested, payload] : [payload]

  for (const source of sources) {
    for (const key of ['expires_at', 'expiresAt', 'expires_in', 'expiresIn', 'expires']) {
      const raw = source[key]
      let timestamp: number | undefined
      if (typeof raw === 'number' && Number.isFinite(raw)) timestamp = raw
      if (typeof raw === 'string' && raw.trim()) {
        const asNumber = Number(raw)
        timestamp = Number.isFinite(asNumber) ? asNumber : Date.parse(raw) / 1000
      }
      if (!timestamp || !Number.isFinite(timestamp) || timestamp <= 0) continue

      const now = Math.floor(Date.now() / 1000)
      // Core's protobuf names this field expires_in but sends a Unix timestamp.
      // Duration-style gateways usually return a much smaller number of seconds.
      const seconds = timestamp > 100_000_000 ? timestamp - now : timestamp
      return Math.max(60, Math.min(seconds, MAX_COOKIE_TTL))
    }
  }

  return DEFAULT_ACCESS_TOKEN_TTL
}

export function setAuthCookie(event: H3Event, token: string, payload: unknown): void {
  const ttl = tokenTtlSeconds(payload)
  setCookie(event, AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ttl,
  })
}

export function clearAuthCookie(event: H3Event): void {
  deleteCookie(event, AUTH_COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })
}

export function getAuthCookie(event: H3Event): string | undefined {
  return getCookie(event, AUTH_COOKIE_NAME)
}

export function normalizeAuthUser(payload: unknown): AuthUser | null {
  if (!isRecord(payload)) return null

  const userRecord = recordAt(payload, 'user', 'profile')
    || recordAt(recordAt(payload, 'data') ?? {}, 'user', 'profile')
    || recordAt(payload, 'data')
    || payload
  const id = firstString(userRecord, ['id', 'user_id', 'userId', 'uid'])
  const email = firstString(userRecord, ['email', 'user_email', 'userEmail'])
  const name = firstString(userRecord, ['name', 'display_name', 'displayName', 'full_name', 'fullName'])

  // Core's Me response always contains user_id. The fallback keeps the adapter
  // compatible with Gateway responses that return only an email profile.
  if (!id && !email && !name) return null

  return {
    id: id || email || 'user',
    name,
    email,
    telegramUsername: firstString(userRecord, ['telegram_username', 'telegramUsername']),
    maxUsername: firstString(userRecord, ['max_username', 'maxUsername']),
  }
}
