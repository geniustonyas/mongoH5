import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { useUserStoreHook } from '@/store/modules/user'
import { useAppStoreHook } from '@/store/modules/app'
import { get, merge } from 'lodash-es'
import { TokenPrefix, getToken } from '@/utils/auth'

let loadingRequestCount = 0 // loading请求数

/** 创建请求实例 */
function createService() {
  const service = axios.create()
  // 请求拦截
  service.interceptors.request.use(
    (config) => {
      loadingRequestCount = loadingRequestCount + 1 // 统计请求数
      if (config.method?.toLowerCase() == 'post') {
        if (!config.data || !config.data.noLoading) {
          useAppStoreHook().loading = true
        }
      }
      if (config.method?.toLowerCase() == 'get') {
        if (!config.params || !config.params.noLoading) {
          useAppStoreHook().loading = true
        }
      }
      return config
    },
    // 发送失败
    (error) => {
      loadingRequestCount = 0
      useAppStoreHook().loading = false
      Promise.reject(error)
    }
  )
  // 响应拦截（可根据具体业务作出相应的调整）
  service.interceptors.response.use(
    (response) => {
      loadingRequestCount--
      if (loadingRequestCount <= 0) {
        useAppStoreHook().loading = false
      }
      const {
        data,
        data: { code }
      } = response
      if (code === undefined) {
        return data
      } else {
        switch (parseInt(code)) {
          case 200:
            return data
          case 400:
            return Promise.reject(data.message)
          case 401:
            useUserStoreHook().clearLogin()
            return Promise.reject(data.message)
          default:
            return Promise.reject(data)
        }
      }
    },
    (error) => {
      loadingRequestCount = 0
      useAppStoreHook().loading = false
      return Promise.reject(error)
    }
  )
  return service
}

/** 创建请求方法 */
function createRequestFunction(service: AxiosInstance) {
  return function <T>(config: AxiosRequestConfig): Promise<T> {
    const configDefault = {
      headers: {
        // 携带 Token
        Authorization: `${TokenPrefix}${getToken()}`,
        'Accept-Language': localStorage.getItem('lang'),
        'X-Timezone-Offset': new Date().getTimezoneOffset(),
        'Content-Type': get(config, 'headers.Content-Type', 'application/x-www-form-urlencoded; charset=utf-8')
      },
      withCredentials: true, // 发送cookies,authorization header或TLS客户端等资格证书, 主要用于跨域.
      timeout: 5000,
      baseURL: import.meta.env.VITE_BASE_API,
      data: {}
    }
    return service(merge(configDefault, config))
  }
}

/** 用于网络请求的实例 */
export const service = createService()
/** 用于网络请求的方法 */
export const request = createRequestFunction(service)
