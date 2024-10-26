import { ApiResponseData } from '@/types/api.d'

export interface IndexVideoResponse {
  Recommended: Video[]
  Latest: Video[]
}

export interface Video {
  id: string
  title: string
  channelId: string
  channelName: string
  addTime: string
  clarity: string
  duration: string
  imgDomain: string
  imgUrl: string
  viewCount: string
  likeCount: string
  playDomain: string
  playUrl: string
  trailerDomain?: string
  trailerUrl?: string
  poster?: string
}

// 在 video.ts 中直接定义接口
export interface VideoListRequest {
  PageIndex?: number
  PageSize?: number
  KeyWord?: string
  ChannelId?: number | string
  SubChannelId?: number | string
  TagIds?: string
  SortType?: string | number
  IsFirst?: boolean
  ActressId?: number | string
  RankType?: number | string
}

// 修改 VideoListResponse 的定义
export type VideoListResponse = {
  items: Video[]
  newVideos: Video[]
  pageCount: string
  pageIndex: string
  pageSize: string
  recordCount: string
}

// 获取视频详情
export interface VideoDetailResponse {
  id: string
  title: string
  viewCount: string
  likeCount: string
  hateCount: string
  collectionCount: string
  addTime: string
  playDomain: string
  playUrl: string
  tags: {
    id: string
    title: string
  }[]
  licks: Video[]
  poster?: string
  like?: number | string
  collect?: boolean
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

export type addRecordResponse = ApiResponseData<addRecordDataResp>
