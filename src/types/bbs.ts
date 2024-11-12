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
  image?: string
  decryptImage?: string[]
  imgUrlDecrypted?: boolean
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
