// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  // Версия совместимости
  compatibilityDate: '2024-11-01',
  // Основные настройки
  app: {
    baseURL: '/ZukhraBulatova/',
    head: {
      title: 'Zukhra Bulatova',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // SSR режим
  ssr: true,

  // Целевая среда
  devtools: { enabled: true },

  // Модули
  modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt'],

  // Конфигурация @nuxt/image
  image: {
    // Отключить оптимизацию для SVG
    format: ['webp', 'png', 'jpg'],
  },

  // Автоимпорт компонентов
  components: true,

  // Конфигурация Vite (Stylus preprocessor)
  vite: {
    css: {
      preprocessorOptions: {
        stylus: {
          imports: [
            resolve(process.cwd(), 'styles/mixins.styl'),
            resolve(process.cwd(), 'styles/variables.styl'),
          ],
        },
      },
    },
  },

  // Конфигурация сборки
  nitro: {
    preset: 'github-pages',
  },
})