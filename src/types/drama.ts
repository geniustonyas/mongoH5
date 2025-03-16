export interface DramaListRequestParams {
  PageIndex: number
  PageSize: number
  ChannelId: number | string
  GenderChannelType: number | string
}

export interface DramaDetailRequestParams {
  Id: number | string
}

export interface DramaEpisode {
  id: string
  playUrl: string
}

export interface DramaItem {
  id: string
  title: string
  imgUrl: string
  movieStatus: number // 0: 未开始, 1: 正在播放, 2: 已结束
  channelName: string
  channelId: string
  addTime: string // 日期时间字符串
  episodeCount: string // 总集数
  currentEpisodes: string // 当前集数
  genderChannelType: number // 性别频道类型
  viewCount: string // 浏览量
  likeCount: string // 点赞数
  commentCount: string // 评论数
  collectionCount: string // 收藏数
  first: DramaEpisode // 第一集信息
}

export interface DramaListResponse {
  items: DramaItemVM[]
  pageIndex: number // 当前页码
  pageSize: number // 每页大小
  pageCount: number // 总页数
  recordCount: number // 总记录数
}

export interface DramaDetailResponse {
  id: string
  title: string
  imgUrl: string
  movieStatus: number // 0: 未开始, 1: 正在播放, 2: 已结束
  channelName: string
  channelId: string
  addTime: string // 日期时间字符串
  episodeCount: string // 总集数
  currentEpisodes: string // 当前集数
  genderChannelType: number // 性别频道类型
  viewCount: string
  likeCount: string
  commentCount: string
  collectionCount: string
  first: DramaEpisode
  items: DramaEpisode[]
  like: boolean
  collect: boolean
}

// 剧集列表项视图模型
export interface DramaItemVM extends DramaItem {
  poster: string
}
