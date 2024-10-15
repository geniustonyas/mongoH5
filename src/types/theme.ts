import type { ApiResponseData } from '@/types/api.d'

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

export interface ThemeTag {
  tId: number
  pid: number
  name: string
  status: number
  icon: string
  sort: number
  video_count: number
  children?: ThemeTag[]
}

// export interface ThemeTagResponse {
//   message: string
//   code: number
//   data: ThemeTag[]
//   errors: null | any
// }

export type ThemeTagResp = ApiResponseData<ThemeTag>
export type AdvertisementsResp = ApiResponseData<Advertisements[]>
export type ConfigResp = ApiResponseData<ConfigResponse>
