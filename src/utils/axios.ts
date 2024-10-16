import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { useAppStoreHook } from '@/store/app'
// import { useUserStoreHook } from '@/store/user'
import { merge } from 'lodash-es'
import { TokenPrefix, getToken } from '@/utils/auth'
import { ApiResponseData } from '@/types/api.d'

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
  // 响应拦截
  service.interceptors.response.use(
    (response) => {
      loadingRequestCount--
      if (loadingRequestCount <= 0) {
        useAppStoreHook().loading = false
      }
      const { data } = response
      return data
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
  return function <T>(config: AxiosRequestConfig): Promise<ApiResponseData<T>> {
    const configDefault = {
      headers: {
        Authorization: `${TokenPrefix}${getToken()}`
      },
      // withCredentials: true, // 发送cookies,authorization header或TLS客户端等资格证书, 主要用于跨域.
      timeout: 60 * 1000,
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
