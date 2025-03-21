export interface DramaListRequestParams {
  PageIndex: number
  PageSize: number
  ChannelId?: number | string
  GenderChannelType?: number | string
  SortType?: number | string // 排序类型  0 综合，1 最新，2最热，3 好评 , 4 收藏量
}

export enum DramaSortType {
  All = 0,
  New = 1,
  Hot = 2,
  Like = 3,
  Collect = 4
}

export enum DramaGenderType {
  All = 0,
  Male = 1,
  Female = 2
}

export enum DramaChannelType {
  All = 0
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
  collect: boolean // 是否收藏
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
  introduction: string // 简介
  viewCount: string
  likeCount: string
  commentCount: string
  collectionCount: string
  first: DramaEpisode
  items: DramaEpisode[]
  like: boolean
  collect: boolean
}

export interface DramaCategoryItem {
  id: string | number
  sortNo?: string | number
  title: string | number
  active?: boolean
}

// 剧集列表项视图模型
export interface DramaItemVM extends DramaItem {
  poster: string
  virtualIndex: string | number
}

export interface Bbs {
  channel: {
    id: string
    title: string
  }
  collect?: boolean
  collectionCount: string
  commentCount: string
  content?: string
  createTime: string
  hateCount: string
  id: string
  imgs: string
  isCollected?: boolean
  like?: string
  likeCount: string
  next?: Bbs
  prev?: Bbs
  subChannel: {
    id: string
    title: string
  }
  title: string
  user: {
    avatar: string
    code: string
    id: string
    invitationCode: string
    nickName: string
    realName: string
    userName: string
  }
  videos: string
  viewCount: string
  imageCount: string
}

// 在 video.ts 中直接定义接口
export interface BbsListRequest {
  PageIndex?: number
  PageSize?: number
  SortType?: number | string
  ChannelId?: number | string
  SubChannelId?: number | string
  ActressId?: number | string
  KeyWord?: string
}

export type BbsListResponse = {
  items: Bbs[]
  pageCount: string
  pageIndex: string
  pageSize: string
  recordCount: string
}

export interface BbsCategoryItem {
  actress: {
    id: string
    name: string
  }[]
  id: string
  img: string
  title: string
  postCount: string
}

export interface BbsCategoryResponse {
  id: string
  items: BbsCategoryItem[]
  title: string
}

export interface BbsSubCategoryDetailResponse {
  coverImage: string
  dayNewPostCount: string
  description: string
  id: string
  postCount: string
  title: string
  actress: {
    id: string
    title: string
  }[]
}

export interface BbsRelatedRecommendRequest {
  id: string | number
  PageIndex?: number
  PageSize?: number
}

export interface BbsComment {
  content: string
  createTime: string
  hateCount: string
  id: string
  like: string
  likeCount: string
  postId: string
  user: {
    avatar: string
    code: string
    id: string
    invitationCode: string
    nickName: string
    realName: string
    userName: string
  }
}

export type BbsCommentListResponse = {
  items: BbsComment[]
  pageCount: string
  pageIndex: string
  pageSize: string
  recordCount: string
}

export type STSTokenResponse = {
  accessKeyId: string
  secretAccessKey: string
  sessionToken: string
}

export interface CreatePostRequest {
  ChannelId: string | number
  SubChannelId: string | number
  Title: string
  Content: string
  Imgs?: string
  Videos?: string
  KeyWords?: string
}
