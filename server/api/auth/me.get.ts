import { createError, defineEventHandler } from 'h3'
import {
  clearAuthCookie,
  ensureGatewaySuccess,
  getAuthCookie,
  normalizeAuthUser,
  requestGateway,
} from '~/server/utils/gateway'

export default defineEventHandler(async (event) => {
  const accessToken = getAuthCookie(event)
  if (!accessToken) {
    throw createError({ statusCode: 401, message: 'Необходимо войти в аккаунт.' })
  }

  const config = useRuntimeConfig(event)
  let payload: unknown
  try {
    payload = await requestGateway<unknown>(event, String(config.gatewayMePath), {
      method: 'GET',
      accessToken,
    })
    ensureGatewaySuccess(payload, 401)
  } catch (error) {
    const value = error as { statusCode?: number; status?: number }
    if (value.statusCode === 401 || value.statusCode === 403 || value.status === 401 || value.status === 403) {
      clearAuthCookie(event)
    }
    throw error
  }

  const user = normalizeAuthUser(payload)
  if (!user) {
    clearAuthCookie(event)
    throw createError({
      statusCode: 502,
      message: 'Gateway вернул профиль в неизвестном формате.',
    })
  }

  return { ok: true, user }
})
