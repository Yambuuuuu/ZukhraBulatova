// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Версия совместимости
  compatibilityDate: "2024-11-01",
  // Основные настройки
  app: {
    head: {
      title: 'ZB',
      htmlAttrs: {
        lang: 'ru'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  
  // SSR режим
  ssr: true,
  
  // Целевая среда
  devtools: { enabled: true },
  
  // Модули
  modules: [
    // Модули можно добавить здесь
  ],
  
  // Автоимпорт компонентов
  components: true,
  
  // Конфигурация сборки
  nitro: {
    preset: 'node-server',
    // Настройка обработки ошибок
    routeRules: {
      '/**': { swr: false }
    }
  }
})
