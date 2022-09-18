import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => {
    return { language: 'en' }
  },
  actions: {
    setLanguage (lg: string) {
      this.language = lg
    }
  },
})