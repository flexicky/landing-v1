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

export function useAuth() {
  const user = useState<AuthUser | null>('auth:user', () => null)
  const status = useState<AuthStatus>('auth:status', () => 'idle')
  // useRequestFetch forwards the incoming cookie during SSR; in the browser it
  // remains a same-origin request to the Nuxt server routes.
  const requestFetch = useRequestFetch()

  async function restore(): Promise<boolean> {
    if (status.value === 'authenticated' && user.value) return true
    if (status.value === 'unauthenticated') return false

    status.value = 'loading'
    try {
      const response = await requestFetch<AuthApiResponse>('/api/auth/me')
      user.value = response.user ?? null
      status.value = user.value ? 'authenticated' : 'unauthenticated'
      return status.value === 'authenticated'
    } catch {
      user.value = null
      status.value = 'unauthenticated'
      return false
    }
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
    restore,
    signIn,
    signUp,
    signOut,
    getErrorMessage: apiErrorMessage,
  }
}
