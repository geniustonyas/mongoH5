import type { ApiResponseData } from '@/types/global.d'

export interface Category {
  cId: number
  name: string
}

export enum AdvertisementType {
  Image = 1,
  Video = 2,
  Text = 3
}

export interface Advertisements {
  adId?: number
  type: AdvertisementType | string | null
  content: string | null
  titles: string | null
  description: string | null
  thumbnail: string | null
  url: string | null
  pId: number | string | null
  vipExempt: number
  status: number
  sort: number
  target?: number
  beginTime?: string | null
  endTime?: string | null
  updateTime?: string | null
  addTime?: string | null
}

export interface ConfigResponse {
  systemSettings: Record<string, any>
  tags: any[]
  categorys: any[]
}

// 短信参数
export interface SmsParams {
  phone: string
  type: string
}

export type AdvertisementsResp = ApiResponseData<Advertisements[]>
