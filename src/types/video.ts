export interface IndexVideoResponse {
  Recommended: Video[]
  Latest: Video[]
}

export interface Video {
  id: string
  title: string
  channelId: string
  channelName: string
  subChannelId?: string
  subChannelName?: string
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
  resolution?: string
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
  VideoType?: number | string
}

export type VideoListResponse = {
  items: Video[]
  newVideos?: Video[]
  pageCount: string
  pageIndex: string
  pageSize: string
  recordCount: string
}

// 获取视频详情
export interface VideoDetailResponse {
  id: string
  title: string
  channelId: string
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
