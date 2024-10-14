import { defineStore } from 'pinia'
import { getConfig } from '@/api/user'
import store from '@/store'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {}
    }
  },
  getters: {},
  actions: {
    async fetchUserInfo() {
      try {
        const response = await getConfig()
        this.userInfo = response.data
      } catch (error) {
        console.error('获取用户信息失败:', error)
      }
    },

    clearLogin() {
      this.userInfo = {}
    }
  }
})

// 导出一个可以在 setup 外部使用的函数
export function useUserStoreHook() {
  return useUserStore(store)
}
