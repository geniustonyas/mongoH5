import type { I18n } from 'vue-i18n'

declare module 'vue' {
  interface ComponentCustomProperties {
    $t: I18n['global']['t']
    $i18n: I18n['global']
  }
}

/** 所有 api 接口的响应数据都应该准守该格式 */
export interface ApiResponseData<T = any> {
  code: number | string
  data: T
  message: string
  errors?: {
    [key: string]: string[]
  }
}

export type DataWithAd<T> = T | (AdsItem & { isAd: true })

declare global {
  const $t: I18n['global']['t']
  const $i18n: I18n['global']
  interface Window {
    Hls: any
    Plyr: any
    $t: I18n['global']['t']
    $i18n: I18n['global']
  }
}

export interface dynamicObject {
  [idx: string]: any
}

export {}
