export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  return {
    provide: {
      asset: (path: string): string => {
        const base = config.app.baseURL.replace(/\/$/, '')
        return `${base}${path.startsWith('/') ? path : '/' + path}`
      },
    },
  }
})
