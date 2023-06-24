import { ref } from 'vue'
import { defineStore } from 'pinia'
import { sysConfigState } from './types'
import store from '@/store'

export const useAppStore = defineStore('app', () => {
  const loading = ref(false)
  const sysConfig = ref<sysConfigState | null>(null)
  const showSideBar = ref(false)

  return {
    loading,
    sysConfig,
    showSideBar
  }
})
export function useAppStoreHook() {
  return useAppStore(store)
}
