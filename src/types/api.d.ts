/** 所有 api 接口的响应数据都应该准守该格式 */
export interface ApiResponseData<T> {
  code: number
  data: T
  message: string
  errors?: {
    [key: string]: string[]
  }
}

/** 分页数据接口 */
export interface PaginatedData<T> {
  data: T[]
  page: number
  pageSize: number
  totalPages: number
  total: number
}

/** 返回任意data */
export interface anyResp {
  code: number
  data?: any
  message: string
}

/** 声明动态对象 */
export interface dynamicObject {
  [idx: string]: any
}

/** 支持分页的 API 响应数据 */
export type PaginatedApiResponseData<T> = ApiResponseData<PaginatedData<T>>

declare function initNECaptchaWithFallback(param1: any, param2: any, param3: any): any

export {}
