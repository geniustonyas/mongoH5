import { PaginatedApiResponseData, ApiResponseData } from '@/types/api.d'

export interface Video {
  videoId: number
  title: string
  cId: number
  description: string | null
  shortDesc: string | null
  keyword: string | null
  resolution: string | null
  type: number
  hasEpisodes: number
  totalEpisodes: number
  status: number
  vipExclusive: number
  director: string | null
  posterDomain: string
  playDomain: string
  downloadDomain: string | null
  poster: string
  playUrl: string
  downloadUrl: string | null
  viewKey: string
  playTime: string | null
  clickCounts: number
  goodCounts: number
  noGoodCounts: number
  favoriteCounts: number
  userId: number
  releaseDate: string | null
  isReviewed: number
  reviewedAt: string | null
  updateTime?: string
  addTime?: string
  tags: string[]
  categoryName: string
}

// 在 video.ts 中直接定义接口
export interface VideoQueryParams {
  search?: string
  categoryId?: number
  tagId?: number
  vipExclusive?: 0 | 1
  pageSize?: number
  page?: number
  sortBy?: 'clickCounts' | 'goodCounts' | 'favoriteCounts' | 'addTime'
  beginTime?: string
  endTime?: string
}

export type VideoListResponse = PaginatedApiResponseData<Video>
export type VideoDetailResponse = ApiResponseData<Video>
