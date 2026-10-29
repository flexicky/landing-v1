export interface AuthUser {
  id: string
  name: string | null
  email: string | null
  telegramUsername?: string | null
  maxUsername?: string | null
}

export type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated'

export interface AuthApiResponse {
  ok: boolean
  user?: AuthUser
  authenticated?: boolean
  message?: string
}
