import type { AuthApiResponse, AuthStatus, AuthUser } from '~/types/auth'

function apiErrorMessage(error: unknown): string {
  if (error && typeof error === 'object') {
    const value = error as {
      data?: { statusMessage?: string; message?: string }
      statusMessage?: string
      message?: string
    }
    return value.data?.message || value.data?.statusMessage || value.message || value.statusMessage || 'Не удалось выполнить запрос. Попробуйте ещё раз.'
  }

  return 'Не удалось выполнить запрос. Попробуйте ещё раз.'
}

function apiErrorStatus(error: unknown): number | undefined {
  if (!error || typeof error !== 'object') return undefined
  const value = error as {
    status?: number
    statusCode?: number
    response?: { status?: number }
    data?: { statusCode?: number }
  }
  return value.statusCode ?? value.status ?? value.response?.status ?? value.data?.statusCode
}

export function useAuth() {
  const user = useState<AuthUser | null>('auth:user', () => null)
  const status = useState<AuthStatus>('auth:status', () => 'idle')
  // useRequestFetch forwards the incoming cookie during SSR; in the browser it
  // remains a same-origin request to the Nuxt server routes.
  const requestFetch = useRequestFetch()

  async function refreshSession(): Promise<boolean> {
    const previousUser = user.value
    const hadAuthenticatedSession = status.value === 'authenticated' && Boolean(previousUser)
    status.value = 'loading'

    try {
      const response = await requestFetch<AuthApiResponse>('/api/auth/me')
      user.value = response.user ?? null
      status.value = user.value ? 'authenticated' : 'unauthenticated'
    } catch (error) {
      const responseStatus = apiErrorStatus(error)
      if (responseStatus === 401 || responseStatus === 403) {
        user.value = null
        status.value = 'unauthenticated'
      } else if (hadAuthenticatedSession && previousUser) {
        // Keep the last confirmed session during temporary Gateway/network errors.
        user.value = previousUser
        status.value = 'authenticated'
      } else {
        user.value = null
        status.value = 'unauthenticated'
      }
    }

    return status.value === 'authenticated' && Boolean(user.value)
  }

  async function restore(): Promise<boolean> {
    if (status.value === 'authenticated' && user.value) return true
    if (status.value === 'unauthenticated') return false
    return refreshSession()
  }

  async function fetchProfile() {
    const response = await requestFetch<AuthApiResponse>('/api/auth/me')
    if (!response.user) throw new Error('Не удалось загрузить профиль.')
    user.value = response.user
    status.value = 'authenticated'
    return response.user
  }

  async function signIn(email: string, password: string): Promise<AuthUser> {
    status.value = 'loading'
    try {
      await requestFetch<AuthApiResponse>('/api/auth/login', {
        method: 'POST',
        body: { email, password },
      })
      return await fetchProfile()
    } catch (error) {
      user.value = null
      status.value = 'unauthenticated'
      throw new Error(apiErrorMessage(error))
    }
  }

  async function signUp(email: string, password: string): Promise<boolean> {
    status.value = 'loading'
    try {
      const response = await requestFetch<AuthApiResponse>('/api/auth/register', {
        method: 'POST',
        body: { email, password },
      })

      if (response.authenticated === false) {
        user.value = null
        status.value = 'unauthenticated'
        return false
      }

      await fetchProfile()
      return true
    } catch (error) {
      user.value = null
      status.value = 'unauthenticated'
      throw new Error(apiErrorMessage(error))
    }
  }

  async function signOut(): Promise<void> {
    try {
      await requestFetch('/api/auth/logout', { method: 'POST' })
    } finally {
      user.value = null
      status.value = 'unauthenticated'
    }
  }

  return {
    user,
    status,
    isAuthenticated: computed(() => status.value === 'authenticated' && Boolean(user.value)),
    refreshSession,
    restore,
    signIn,
    signUp,
    signOut,
    getErrorMessage: apiErrorMessage,
  }
}
