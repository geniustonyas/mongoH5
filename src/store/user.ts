import { defineStore } from 'pinia'
import { getUserInfo } from '@/api/user'
import store from '@/store'
import type { UserInfo } from '@/types/user'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userInfo: {
        userId: '',
        inviteUserId: '',
        userName: '',
        nickName: '',
        realName: '',
        idCardNo: '',
        phone: '',
        email: '',
        lastLoginIp: '',
        lastLoginTime: '',
        country: '',
        region: '',
        city: '',
        loginIp: '',
        inviteCode: '',
        isVip: '',
        vipExpiryDate: '',
        updateTime: '',
        addTime: ''
      } as UserInfo,
      showLoginDialog: false
    }
  },
  getters: {},
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    },

    async fetchUserInfo() {
      try {
        const response = await getUserInfo()
        if (response.code == 200 && response.data) {
          this.userInfo = response.data
        } else {
          throw new Error(response.message || '获取用户信息失败')
        }
      } catch (error) {
        console.error('获取用户信息失败:', error)
      }
    },

    clearLogin() {
      this.userInfo = {
        userId: '',
        inviteUserId: '',
        userName: '',
        nickName: '',
        realName: '',
        idCardNo: '',
        phone: '',
        email: '',
        lastLoginIp: '',
        lastLoginTime: '',
        country: '',
        region: '',
        city: '',
        loginIp: '',
        inviteCode: '',
        isVip: '',
        vipExpiryDate: '',
        updateTime: '',
        addTime: ''
      }
    }
  }
})

// 导出一个可以在 setup 外部使用的函数
export function useUserStoreHook() {
  return useUserStore(store)
}
