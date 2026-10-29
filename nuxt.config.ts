export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  components: [{ path: '~/components', pathPrefix: false }],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Точка — рабочее пространство без лишнего шума',
      meta: [
        {
          name: 'description',
          content:
            'Соберите задачи, планы и командные договорённости в одном спокойном рабочем пространстве.',
        },
        { name: 'theme-color', content: '#f5f6f2' },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
  runtimeConfig: {
    gatewayBaseUrl: process.env.NUXT_GATEWAY_BASE_URL || 'http://localhost:8080',
    gatewayLoginPath: process.env.NUXT_GATEWAY_LOGIN_PATH || '/api/v1/auth/login',
    gatewayRegisterPath: process.env.NUXT_GATEWAY_REGISTER_PATH || '/api/v1/auth/register',
    gatewayMePath: process.env.NUXT_GATEWAY_ME_PATH || '/api/v1/auth/me',
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
})
