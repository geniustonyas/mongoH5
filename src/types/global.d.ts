/** 所有 api 接口的响应数据都应该准守该格式 */
export interface ApiResponseData<T = any> {
  code: number | string
  data: T
  message: string
  errors?: {
    [key: string]: string[]
  }
}

declare global {
  interface Window {
    Hls: any
    Plyr: any
  }
}

export {}
