import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useContactsStore = defineStore('contacts', () => {
  const contacts = ref([
    {
      id: 1,
      icon: 'whatsup-contacts',
      text: '+7 988 787-72-30',
      link: 'https://wa.me/79887877230',
    },
    {
      id: 2,
      icon: 'inst-contacts',
      text: '@bulatova_zukhra',
      link: 'https://www.instagram.com/bulatova_zukhra',
    },
    {
      id: 4,
      icon: 'tg-contacts',
      text: '@zukhra_bulatova',
      link: 'https://t.me/zukhra_bulatova',
    },
  ])

  return {
    contacts,
  }
})
