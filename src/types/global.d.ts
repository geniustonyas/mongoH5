import type { Video } from '@/types/video'
import type { AdsItem } from '@/types/app'

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

export interface VideoWithAd extends Video, AdsItem {
  isAd: boolean
}

declare global {
  interface Window {
    Hls: any
    Plyr: any
  }
}

export {}
