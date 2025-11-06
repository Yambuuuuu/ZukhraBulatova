import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAdvantagesStore = defineStore('advantages', () => {
  // Состояние
  const advantages = ref([
    {
      id: 1,
      icon: 'hat',
      description: '150+ довольных результатом учеников',
    },
    {
      id: 2,
      icon: 'prezi',
      description: 'увлекательные интерактивные материалы',
    },
    {
      id: 3,
      icon: 'arrow',
      description: 'Персональные уроки с гарантией прогресса от A1 до fluency ',
    },
  ])

  // Геттеры
  const getAllAdvantages = () => advantages.value

  const getAdvantageById = (id) => {
    return advantages.value.find(advantage => advantage.id === id)
  }

  // Действия
  const addAdvantage = (advantage) => {
    advantages.value.push({
      id: advantages.value.length + 1,
      ...advantage,
    })
  }

  const updateAdvantage = (id, updatedData) => {
    const index = advantages.value.findIndex(adv => adv.id === id)
    if (index !== -1) {
      advantages.value[index] = { ...advantages.value[index], ...updatedData }
    }
  }

  const removeAdvantage = (id) => {
    const index = advantages.value.findIndex(adv => adv.id === id)
    if (index !== -1) {
      advantages.value.splice(index, 1)
    }
  }

  // Экспортируем всё, что используется во внешних компонентах
  return {
    // Состояние
    advantages,

    // Геттеры
    getAllAdvantages,
    getAdvantageById,

    // Действия
    addAdvantage,
    updateAdvantage,
    removeAdvantage,
  }
})
