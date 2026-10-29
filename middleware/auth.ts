export default defineNuxtRouteMiddleware(async (to) => {
  const { restore } = useAuth()
  const authenticated = await restore()

  if (!authenticated) {
    return navigateTo({
      path: '/login',
      query: { redirect: to.fullPath },
    })
  }
})
