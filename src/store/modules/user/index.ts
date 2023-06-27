import { defineStore } from 'pinia'
import store from '@/store'

import { login as userLogin, thirdLogin as userThirdLogin, getUserProfile, loginout, refreshToken } from '@/api/user/index'
import { LoginData, getUserProfileData, thirdLoginData } from '@/api/user/types'
import { setToken, clearToken } from '@/utils/auth'

import { UserInfoType } from './types'
import router from '@/router'
import { ref, reactive } from 'vue'

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = <UserInfoType>reactive({
    id: undefined,
    userName: undefined,
    integral: undefined,
    isBindGoogleAuth: undefined,
    vip: undefined,
    email: undefined,
    dateOfBirth: undefined,
    phoneNumber: undefined,
    countryCode: undefined,
    country: undefined,
    defaultCurrencyCode: undefined,
    balance: undefined,
    btcUnit: {
      currencyUnit: undefined,
      rate: undefined
    },
    address: undefined,
    zipcode: undefined,
    updatePassWordTime: undefined
  })
  const defaultUserInfo = JSON.parse(JSON.stringify(userInfo))
  const refreshUserInfoTimer = ref<null | number>(null)
  const refreshTokenTimer = ref<null | number>(null)

  const getUserInfo = (data: getUserProfileData) => {
    return new Promise((resolve, reject) => {
      getUserProfile(data)
        .then((resp) => {
          // userInfo =
          Object.assign(userInfo, resp.data as UserInfoType)
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const refreshUserInfo = () => {
    return new Promise((resolve, reject) => {
      getUserInfo({ noLoading: true })
        .then((resp) => {
          if (refreshUserInfoTimer.value) {
            clearInterval(refreshUserInfoTimer.value)
          }
          refreshUserInfoTimer.value = window.setInterval(() => {
            getUserInfo({ noLoading: true })
          }, 1 * 60 * 1000)
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const refreshTokenTime = () => {
    if (refreshTokenTimer.value) {
      clearInterval(refreshTokenTimer.value)
    }
    refreshTokenTimer.value = window.setInterval(() => {
      refreshToken()
    }, 1 * 60 * 1000)
  }

  // 登录
  const login = (loginForm: LoginData) => {
    return new Promise((resolve, reject) => {
      userLogin(loginForm)
        .then((resp) => {
          const token = resp.data?.token
          if (token) {
            setToken(token)
          }
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 第三方登录
  const thirdLogin = (loginForm: thirdLoginData) => {
    return new Promise((resolve, reject) => {
      userThirdLogin(loginForm)
        .then((resp) => {
          const token = resp.data?.token
          if (token) {
            setToken(token)
          }
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // Logout
  const logout = () => {
    return new Promise((resolve, reject) => {
      loginout()
        .then((resp) => {
          clearLogin()
          router.push({ name: 'login' })
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const clearLogin = () => {
    Object.assign(userInfo, defaultUserInfo as UserInfoType)
    if (refreshUserInfoTimer.value) {
      clearInterval(refreshUserInfoTimer.value)
    }
    if (refreshTokenTimer.value) {
      clearInterval(refreshTokenTimer.value)
    }
    clearToken()
  }

  return {
    userInfo,
    refreshUserInfoTimer,
    getUserInfo,
    refreshUserInfo,
    refreshTokenTime,
    login,
    thirdLogin,
    logout,
    clearLogin
  }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
  return useUserStore(store)
}
