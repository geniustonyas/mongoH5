import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      loading: false
    }
  },
  getters: {},
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading
    }
  }
})
