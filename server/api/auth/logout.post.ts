import { defineEventHandler } from 'h3'
import { clearAuthCookie } from '~/server/utils/gateway'

export default defineEventHandler((event) => {
  clearAuthCookie(event)
  return { ok: true }
})
