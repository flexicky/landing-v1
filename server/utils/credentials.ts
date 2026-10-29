import { createError } from 'h3'

type Credentials = { email: string; password: string }

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

export function parseEmailCredentials(body: unknown): Credentials {
  const email = isRecord(body) && typeof body.email === 'string' ? body.email.trim() : ''
  const password = isRecord(body) && typeof body.password === 'string' ? body.password : ''

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 100) {
    throw createError({ statusCode: 400, message: 'Укажите корректную электронную почту.' })
  }
  if (password.length < 6 || password.length > 200) {
    throw createError({ statusCode: 400, message: 'Пароль должен содержать от 6 до 200 символов.' })
  }

  return { email, password }
}
