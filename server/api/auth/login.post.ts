import { createError, defineEventHandler, readBody } from 'h3'
import { parseEmailCredentials } from '~/server/utils/credentials'
import { ensureGatewaySuccess, extractAccessToken, requestGateway, setAuthCookie } from '~/server/utils/gateway'

export default defineEventHandler(async (event) => {
  const credentials = parseEmailCredentials(await readBody(event))
  const config = useRuntimeConfig(event)
  const payload = await requestGateway<unknown>(event, String(config.gatewayLoginPath), {
    method: 'POST',
    body: credentials,
  })

  ensureGatewaySuccess(payload, 401)
  const accessToken = extractAccessToken(payload)
  if (!accessToken) {
    throw createError({
      statusCode: 502,
      message: 'Gateway ответил без access token. Проверьте формат ответа REST API.',
    })
  }

  setAuthCookie(event, accessToken, payload)
  return { ok: true }
})
