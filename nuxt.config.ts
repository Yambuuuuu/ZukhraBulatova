// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  // Версия совместимости
  compatibilityDate: '2024-11-01',
  // Основные настройки
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  // SSR режим
  ssr: true,

  // Целевая среда
  devtools: { enabled: true },

  devServer: {
    port: 8084,
  },

  // Модули
  modules: ['@nuxt/eslint', '@nuxt/image', '@pinia/nuxt', '@nuxt/fonts'],

  // Конфигурация @nuxt/image
  image: {
    // Отключить оптимизацию для SVG
    format: ['webp', 'png', 'jpg'],
  },

  // Автоимпорт компонентов
  components: true,

  // Конфигурация Vite (Stylus preprocessor)
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'vue-inline-svg',
      ],
    },
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