import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

import { loginApi, thirdLoginApi, getUserProfileApi, loginOutApi, refreshTokenApi, setDefultLangApi } from '@/api/user/index'
import { getNewMessageCountApi } from '@/api/home/index'

import router from '@/router'
import store from '@/store'
import { LoginData, getUserProfileData, thirdData } from '@/api/user/types'
import { setToken, clearToken } from '@/utils/auth'
import { UserInfoType } from './types'

import { cloneDeep } from 'lodash-es'

export const useUserStore = defineStore('userInfo', () => {
  const userInfo = <UserInfoType>reactive({
    address: '',
    balance: '',
    btcUnit: {
      currencyUnit: '',
      rate: ''
    },
    country: '',
    countryCode: '',
    dateOfBirth: '',
    defaultCurrencyCode: '',
    email: '',
    id: '',
    inVisible: '',
    integral: '',
    integralMultiple: '',
    isBindGoogleAuth: false,
    nextVipRequiredTotalBetAmount: '',
    phoneNumber: '',
    subCode: '',
    totalBetAmount: '',
    updatePassWordTime: '',
    userName: '',
    vip: '',
    vipCode: '',
    zipcode: ''
  })
  const defaultUserInfo = cloneDeep<UserInfoType>(userInfo)
  const refreshUserInfoTimer = ref<null | number>(null)
  const refreshTokenTimer = ref<null | number>(null)
  const newMessageCountTimer = ref<null | number>(null)
  const newMessageCount = ref<number>(0)
  const lineCode = ref('')

  // 获取用户信息
  const getUserInfo = (data: getUserProfileData) => {
    return new Promise((resolve, reject) => {
      getUserProfileApi(data)
        .then((resp) => {
          Object.assign(userInfo, resp.data as UserInfoType)
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 获取用户信息
  const setDefultLang = () => {
    return new Promise((resolve, reject) => {
      setDefultLangApi({ noLoading: true })
        .then((resp) => {
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  // 刷新用户信息.
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

  // 刷新token
  const refreshToken = () => {
    if (refreshTokenTimer.value) {
      clearInterval(refreshTokenTimer.value)
    }
    refreshTokenTimer.value = window.setInterval(() => {
      refreshTokenApi({ noLoading: true })
    }, 1 * 60 * 1000)
  }

  // 获取新消息数量
  const getNewMessageCount = () => {
    return new Promise((resolve, reject) => {
      getNewMessageCountApi({ noLoading: true })
        .then((resp) => {
          newMessageCount.value = parseInt(resp.data?.announcementCount) + parseInt(resp.data?.personalLetterCount)
          resolve(resp)
        })
        .catch((error: any) => {
          reject(error)
        })
    })
  }

  // 刷新新消息数量
  const refreshNewMessageCount = () => {
    getNewMessageCount()
    if (newMessageCountTimer.value) {
      clearInterval(newMessageCountTimer.value)
    }
    newMessageCountTimer.value = window.setInterval(() => {
      getNewMessageCount()
    }, 1 * 60 * 1000)
  }

  // 登录
  const login = (loginForm: LoginData) => {
    return new Promise((resolve, reject) => {
      loginApi(loginForm)
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
  const thirdLogin = (loginForm: thirdData) => {
    return new Promise((resolve, reject) => {
      thirdLoginApi(loginForm)
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
      loginOutApi()
        .then((resp) => {
          setTimeout(() => {
            clearLogin()
          }, 100)
          resolve(resp)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }

  const clearLogin = () => {
    Object.assign(userInfo, defaultUserInfo)
    if (refreshUserInfoTimer.value) {
      clearInterval(refreshUserInfoTimer.value)
    }
    if (refreshTokenTimer.value) {
      clearInterval(refreshTokenTimer.value)
    }
    if (newMessageCountTimer.value) {
      clearInterval(newMessageCountTimer.value)
    }
    clearToken()
    router.push({ name: 'login' })
  }

  return {
    userInfo,
    refreshUserInfoTimer,
    newMessageCount,
    lineCode,
    getUserInfo,
    refreshUserInfo,
    setDefultLang,
    refreshToken,
    getNewMessageCount,
    refreshNewMessageCount,
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
