export default defineNuxtRouteMiddleware(async () => {
  const nuxtApp = useNuxtApp()

  // SSR has already checked the session for this page request. Reuse that
  // serialized state during hydration instead of issuing the same request twice.
  if (import.meta.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return

  const { refreshSession } = useAuth()
  await refreshSession()
})
