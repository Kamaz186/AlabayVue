// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '~/assets/css/global.css',
  ],
  serverMiddleware: [
    { path: '/api/food', handler: '~/api/food.js' },
  ],
})