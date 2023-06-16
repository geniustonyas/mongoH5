import { defineStore } from 'pinia'
import store from '@/store'
import { login as userLogin, getUserProfile } from '@/api/user/index'
import { LoginData } from '@/api/user/types'
import { setToken, clearToken } from '@/utils/auth'
import { UserState } from './types'
import router from '@/router'

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user_name: undefined,
    avatar: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    blogJuejin: undefined,
    blogZhihu: undefined,
    blogGithub: undefined,
    profileBio: undefined,
    devLanguages: undefined
  }),
  getters: {
    userProfile(state: UserState): UserState {
      return { ...state }
    }
  },
  actions: {
    // 设置用户的信息
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial)
    },
    // 重置用户信息
    resetInfo() {
      this.$reset()
    },
    // 获取用户信息
    async info() {
      const result = await getUserProfile({ UserName: '' })
      this.setInfo(result.data)
    },

    // 异步登录并存储token
    async login(loginForm: LoginData) {
      const result = await userLogin(loginForm)
      const token = result?.data?.token
      if (token) {
        setToken(token)
      }
      return result
    },
    // Logout
    async logout() {
      this.resetInfo()
      clearToken()
      router.push({ name: 'login' })
    }
  }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
