import { defineStore } from 'pinia'
import { sysConfigState } from './types'
// import piniaStore from '@/store/index'

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,
    sysConfig: null as sysConfigState | null,
    showSideBar: false
  }),
  getters: {},
  actions: {
    setLoading(status: boolean) {
      this.loading = status
    },
    setSideBar(status: boolean) {
      this.showSideBar = status
    }
  }
})
// export function useAppOutsideStore() {
//   return useAppStore(piniaStore)
// }
