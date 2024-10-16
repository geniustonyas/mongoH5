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

// 新增一个接口来描述分页数据结构
export interface VideoListData {
  data: Video[]
  currentPage: number
  pageSize: number
  total: number
  totalPages: number
}

export interface addRecordData {
  type: number
  videoId: number
}

export interface addRecordDataResp {
  isActive: boolean
  message?: string
}

export interface getRecordData {
  type: number
  search: string | null
  beginTime: string | null
  endTime: string | null
  pageSize: number
  page: number
  sortOrder: string | null
}

// 修改 VideoListResponse 的定义
export type VideoListResponse = PaginatedApiResponseData<Video>

export type VideoDetailResponse = ApiResponseData<Video>

export type addRecordResponse = ApiResponseData<addRecordDataResp>
