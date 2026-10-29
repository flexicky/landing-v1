import { defineEventHandler, readBody } from 'h3'
import { parseEmailCredentials } from '~/server/utils/credentials'
import { ensureGatewaySuccess, extractAccessToken, requestGateway, setAuthCookie } from '~/server/utils/gateway'

export default defineEventHandler(async (event) => {
  const credentials = parseEmailCredentials(await readBody(event))
  const config = useRuntimeConfig(event)
  const payload = await requestGateway<unknown>(event, String(config.gatewayRegisterPath), {
    method: 'POST',
    body: credentials,
  })

  ensureGatewaySuccess(payload, 400)
  const accessToken = extractAccessToken(payload)

  if (accessToken) {
    setAuthCookie(event, accessToken, payload)
    return { ok: true, authenticated: true }
  }

  // Some gateways acknowledge account creation without returning a session.
  // In that case the user can continue by signing in with the new credentials.
  return { ok: true, authenticated: false }
})
