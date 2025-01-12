import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { TokenPrefix, getToken } from '@/utils/auth'
import { useUserStoreHook } from '@/store/user'
// import { showToast } from 'vant'
import decryptionService from '@/utils/decryptionService'

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

  const useCurrentDomain = import.meta.env.VITE_USE_CURRENT_DOMAIN === 'true'
  if (useCurrentDomain) {
    const protocol = window.location.protocol
    const host = window.location.hostname
    cachedApiUrl = `${protocol}//api.${host.split('.').slice(-2).join('.')}`
  } else {
    for (const url of apiUrls) {
      if (await checkApiAvailability(url)) {
        cachedApiUrl = url
        break
      }
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

const setupInterceptors = (service: AxiosInstance) => {
  //@ts-ignore
  if (service.interceptors.request.handlers.length === 0) {
    service.interceptors.request.use(
      (config) => {
        const abortController = new AbortController()
        config.signal = abortController.signal as AbortSignal
        ;(config as any).abortController = abortController

        config.headers['Authorization'] = `${TokenPrefix}${getToken()}`

        // 检查请求头中的 X-Should-Encrypt 标志
        if (config.headers['X-Should-Encrypt'] === '1') {
          const decrypt = new decryptionService()
          config.data = decrypt.encryptData(JSON.stringify(config.data))
          // 移除标志以避免发送到服务器
          delete config.headers['X-Should-Encrypt']
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }

  //@ts-ignore
  if (service.interceptors.response.handlers.length === 0) {
    service.interceptors.response.use(
      async (response: AxiosResponse<any>) => {
        const decrypt = new decryptionService()
        const encryptedData = response.data

        const decryptedData = decrypt.decryptResponseData(encryptedData)
        try {
          const parsedData = JSON.parse(decryptedData)
          response.data = parsedData

          // 检查解密后的数据中的权限错误
          if (parsedData.code == '401') {
            useUserStoreHook().clearLogin()
            return Promise.reject(new Error('Unauthorized'))
          } else if (parsedData.code !== '200') {
            // showToast('服务器错误：' + parsedData.code)
            return Promise.reject(parsedData)
          }
          console.log(response.data)
          return response
        } catch (parseError) {
          throw new Error('解密后的数据不是有效的 JSON 格式')
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
}

// 通用请求函数
export const request = async <T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
  const service = await initializeAxios()
  setupInterceptors(service)
  return service.request<T>(config)
}
