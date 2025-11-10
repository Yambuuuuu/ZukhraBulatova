// @ts-nocheck
/* eslint-disable */
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // Состояние темы (по умолчанию светлая)
  const isDark = ref(false)

  // Инициализация темы из localStorage
  const initTheme = () => {
    if (process.client) {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        isDark.value = savedTheme === 'dark'
      }
      // Если нет сохраненной темы, остается светлая по умолчанию (isDark = false)
      applyTheme()
    }
  }

  // Применить тему к документу
  const applyTheme = () => {
    if (process.client) {
      if (isDark.value) {
        document.documentElement.classList.add('dark-theme')
      } else {
        document.documentElement.classList.remove('dark-theme')
      }
    }
  }

  // Переключить тему
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  // Установить конкретную тему
  const setTheme = (dark) => {
    isDark.value = dark
    applyTheme()
    if (process.client) {
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  // Следим за изменениями темы
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
