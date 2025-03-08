import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { TokenPrefix, getToken } from '@/utils/auth'
import { useUserStoreHook } from '@/store/user'
import { showNotify } from 'vant'
// import { showToast } from 'vant'
import decryptionService from '@/utils/decryptionService'

const isDev = import.meta.env.DEV

/**
 * 开发环境下的日志函数
 * 只在开发环境（import.meta.env.DEV）下打印日志
 * 生产环境自动禁用所有日志
 * 快速定位加密/解密相关问题
 * 查看请求和响应的完整生命周期
 * 更容易调试 API 交互问题
 * 理解数据在传输过程中的变化
 */
const logRequest = (config: AxiosRequestConfig, originalData?: any) => {
  if (!isDev) return

  console.group(`🚀 Request: ${config.url}`)
  console.log('Method:', config.method?.toUpperCase())
  if (originalData) {
    console.log('Original Request Data:', originalData)
  }
  console.log('Encrypted Request Data:', config.data)
  console.log('Headers:', config.headers)
  console.groupEnd()
}

const logResponse = (response: AxiosResponse, decryptedData: any) => {
  if (!isDev) return

  console.group(`✨ Response: ${response.config.url}`)
  console.log('Status:', response.status)
  // console.log('Original Response:', response.data)
  console.log('Decrypted Response:', decryptedData)
  console.log('Response Headers:', response.headers)
  console.groupEnd()
}

const logError = (error: any, context: string) => {
  if (!isDev) return

  console.group(`❌ Error in ${context}`)
  console.error('Error:', error)
  console.error('Stack:', error.stack)
  console.groupEnd()
}

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
          const originalData = config.data
          config.data = decrypt.encryptData(JSON.stringify(config.data))
          // 记录请求日志
          logRequest(config, originalData)
          // 移除标志以避免发送到服务器
          delete config.headers['X-Should-Encrypt']
        } else {
          logRequest(config)
        }

        return config
      },
      (error) => {
        logError(error, 'Request Interceptor')
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

        try {
          const decryptedData = decrypt.decryptResponseData(encryptedData)
          const parsedData = JSON.parse(decryptedData)

          // 记录响应日志
          logResponse(response, parsedData)

          response.data = parsedData

          if (parsedData.code === '401') {
            useUserStoreHook().clearLogin()
            showNotify({ type: 'danger', message: '登录已过期，请重新登录' })
            return Promise.reject(new Error('Unauthorized'))
          } else if (parsedData.code !== '200') {
            // 显示错误信息
            showNotify({ type: 'danger', message: parsedData.message || '请求失败' })
            return Promise.reject(parsedData)
          }
          return response
        } catch (parseError) {
          logError(parseError, 'Response Parsing')
          showNotify({ type: 'danger', message: '数据解析失败' })
          throw new Error('解密后的数据不是有效的 JSON 格式')
        }
      },
      (error) => {
        logError(error, 'Response Interceptor')
        if (error.response?.status === 401) {
          useUserStoreHook().clearLogin()
          showNotify({ type: 'danger', message: '登录已过期，请重新登录' })
        } else {
          // 显示网络错误信息
          showNotify({
            type: 'danger',
            message: error.response?.data?.msg || error.message || '网络请求失败'
          })
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
