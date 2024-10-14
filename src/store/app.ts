import { defineStore } from 'pinia'
import { getConfigApi } from '@/api/app'
import store from '@/store'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      loading: false,
      systemSettings: {
        customer_cdn_link: '',
        customer_service_link: '',
        homepage_announcement: ''
      },
      tags: [],
      categorys: []
    }
  },
  getters: {},
  actions: {
    setLoading(loading: boolean) {
      this.loading = loading
    },

    async fetConfig() {
      try {
        const response = await getConfigApi()
        this.systemSettings = response.data.systemSettings || {}
        this.tags = response.data.tags || []
        this.categorys = response.data.categorys || []
      } catch (error) {
        console.error('获取系统配置失败:', error)
      }
    }
  }
})

// 导出一个可以在 setup 外部使用的函数
export function useAppStoreHook() {
  return useAppStore(store)
}
