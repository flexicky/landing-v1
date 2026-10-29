export default defineNuxtRouteMiddleware(async () => {
  const { restore } = useAuth()
  const authenticated = await restore()

  if (authenticated) return navigateTo('/workspace')
})
