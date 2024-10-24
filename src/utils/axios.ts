import axios, { AxiosResponse, CancelTokenSource, InternalAxiosRequestConfig } from 'axios'
import { TokenPrefix, getToken } from '@/utils/auth'
import { useUserStoreHook } from '@/store/user'
import { showToast } from 'vant'
import { ApiResponseData } from '@/types/api.d'

// 扩展 InternalAxiosRequestConfig 接口以包含 shouldCancel 属性
interface CustomInternalAxiosRequestConfig extends InternalAxiosRequestConfig {
  shouldCancel?: boolean
}

// 创建一个取消令牌源
let cancelTokenSource: CancelTokenSource | null = null

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_API, // 使用 Vite 的环境变量
  headers: {
    Authorization: `${TokenPrefix}${getToken()}`,
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  },
  timeout: 8000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const customConfig = config as CustomInternalAxiosRequestConfig
    if (customConfig.shouldCancel && cancelTokenSource) {
      cancelTokenSource.cancel('请求被取消')
    }
    cancelTokenSource = axios.CancelToken.source()
    customConfig.cancelToken = cancelTokenSource.token
    return customConfig as InternalAxiosRequestConfig
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse<ApiResponseData<any>>) => {
    const data = response.data
    if (data.code === undefined) {
      return response // 返回整个 response 对象
    } else {
      if (data.code == '200') {
        return response // 返回整个 response 对象
      } else if (data.code == '401') {
        useUserStoreHook().clearLogin()
      } else {
        showToast('服务器错误：' + data.code)
      }
      return Promise.reject(response) // 返回整个 response 对象
    }
  },
  (error) => {
    if (error.response?.status === 401) {
      useUserStoreHook().clearLogin()
    }
    return Promise.reject(error)
  }
)

export default service
export { cancelTokenSource }
