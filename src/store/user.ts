import { defineStore } from 'pinia'
import { getUserInfo } from '@/api/user'
import store from '@/store'
import type { UserInfo } from '@/types/user'
import { clearToken } from '@/utils/auth'

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
        const { data } = await getUserInfo()
        if (data.code == 200 && data.data) {
          this.userInfo = data.data
        } else {
          this.clearLogin()
        }
      } catch (error) {
        this.clearLogin()
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
      clearToken()
    }
  }
})

// 导出一个可以在 setup 外部使用的函数
export function useUserStoreHook() {
  return useUserStore(store)
}
