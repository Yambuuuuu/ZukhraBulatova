// plugins/click-outside.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    // Обязательно для SSR
    getSSRProps() {
      return {}
    },

    mounted(el, binding) {
      // 1. Извлекаем обработчик и исключения
      let handler: (event: Event) => void
      let excludeSelectors: string[] = []

      if (typeof binding.value === 'function') {
        handler = binding.value
      }
      else if (typeof binding.value === 'object' && binding.value !== null) {
        handler = binding.value.handler
        const exclude = binding.value.exclude
        if (exclude) {
          excludeSelectors = Array.isArray(exclude) ? exclude : [exclude]
        }
      }
      else {
        console.warn('[v-click-outside] Invalid binding value')
        return
      }

      if (typeof handler !== 'function') return

      // 2. Обработчик клика
      const clickOutsideEvent = (event: Event) => {
        // Клик внутри целевого элемента — игнорируем
        if (el === event.target || el.contains(event.target as Node)) {
          return
        }

        // Проверяем, не попал ли клик в исключённые элементы
        for (const selector of excludeSelectors) {
          const excludedElements = document.querySelectorAll(selector)
          for (const excludedEl of excludedElements) {
            if (excludedEl === event.target || excludedEl.contains(event.target as Node)) {
              return // клик по исключению — ничего не делаем
            }
          }
        }

        // Клик снаружи и не в исключениях — вызываем обработчик
        handler(event)
      }

      el.clickOutsideEvent = clickOutsideEvent
      document.body.addEventListener('click', el.clickOutsideEvent)
    },

    beforeUnmount(el) {
      if (el.clickOutsideEvent) {
        document.body.removeEventListener('click', el.clickOutsideEvent)
        delete el.clickOutsideEvent
      }
    }
  })
})