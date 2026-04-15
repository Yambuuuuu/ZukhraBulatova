import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  const applyTheme = () => {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark-theme')
      } else {
        document.documentElement.classList.remove('dark-theme')
      }
    }
  }

  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      }
      applyTheme()
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  const setTheme = (dark: boolean) => {
    isDark.value = dark
    applyTheme()
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  if (process.client) {
    watch(isDark, () => {
      applyTheme()
    })
  }

  return {
    isDark,
    initTheme,
    toggleTheme,
    setTheme,
  }
})
