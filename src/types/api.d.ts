/** 所有 api 接口的响应数据都应该准守该格式 */
interface ApiResponseData<T> {
  code: number
  data?: T
  message: string
}

/** 返回任意data */
interface anyResp {
  code: number
  data?: any
  message: string
}
