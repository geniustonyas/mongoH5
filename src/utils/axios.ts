import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { TokenPrefix, getToken } from '@/utils/auth'
import { useUserStoreHook } from '@/store/user'
import { showToast } from 'vant'
import { ApiResponseData } from '@/types/global'

// 解析 VITE_BASE_API 环境变量
const apiUrls = import.meta.env.VITE_BASE_API.split('|')

// 缓存第一个可用的 API 地址
let cachedApiUrl: string | null = null

// 检查 API 地址的可用性
const checkApiAvailability = async (url: string): Promise<boolean> => {
  try {
    const response = await axios.post(`${url}Web/Config`, { timeout: 3000 })
    return response.status === 200
  } catch (error) {
    return false
  }
}

// 获取可用的 API 地址
const getAvailableApiUrl = async (): Promise<string> => {
  if (cachedApiUrl) {
    return cachedApiUrl
  }
  for (const url of apiUrls) {
    if (await checkApiAvailability(url)) {
      cachedApiUrl = url
      break
    }
  }
  if (!cachedApiUrl) {
    throw new Error('No available API URL found')
  }
  return cachedApiUrl
}

// 创建 axios 实例
const createAxiosInstance = async (): Promise<AxiosInstance> => {
  const baseURL = await getAvailableApiUrl()
  return axios.create({
    baseURL,
    headers: {
      Authorization: `${TokenPrefix}${getToken()}`,
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    timeout: 8000
  })
}

let servicePromise: Promise<AxiosInstance> | null = null

// 初始化 axios 实例
const initializeAxios = () => {
  if (!servicePromise) {
    servicePromise = createAxiosInstance()
  }
  return servicePromise
}

// 请求拦截器和响应拦截器的设置
const setupInterceptors = (service: AxiosInstance) => {
  service.interceptors.request.use(
    (config) => {
      const abortController = new AbortController()
      config.signal = abortController.signal as AbortSignal
      ;(config as any).abortController = abortController

      config.headers['Authorization'] = `${TokenPrefix}${getToken()}`

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  service.interceptors.response.use(
    (response: AxiosResponse<ApiResponseData<any>>) => {
      const data = response.data
      if (data.code === undefined) {
        return response
      } else {
        if (data.code == '200') {
          return response
        } else if (data.code == '401') {
          useUserStoreHook().clearLogin()
        } else {
          showToast('服务器错误：' + data.code)
        }
        return Promise.reject(response)
      }
    },
    (error) => {
      if (error.response?.status === 401) {
        useUserStoreHook().clearLogin()
      }
      return Promise.reject(error)
    }
  )
}

// 通用请求函数
export const request = async <T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const service = await initializeAxios()
  setupInterceptors(service)
  return service.request<T>(config)
}
