import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactsStore = defineStore('contacts', () => {
  const contacts = ref([
    {
      id: 1,
      icon: 'whatsup-contacts',
      text: '+7 988 787-72-30',
    },
    {
      id: 2,
      icon: 'inst-contacts',
      text: '@bulatova_zukhra  Telegram',
    },
    {
      id: 4,
      icon: 'tg-contacts',
      text: '@zukhra_bulatova',
    },
  ])

  return {
    contacts,
  }
})
