export interface CollectionItem {
  id: string
  imgUrl: string | null
  title: string
  likeCount: string
  collectionCount: string
  channelName: string
  channelId: string
  cssClass: string
  viewCount: string
  introduction: string
  author?: string
  videoCount: string
}

export interface CollectionListResponse {
  items: CollectionItem[]
  pageIndex: number // 当前页码
  pageSize: number // 每页大小
  pageCount: number // 总页数
  recordCount: number // 总记录数
}

export interface HomeCollectionCountResponse {
  count: string
  items: {
    id: string
    title: string
    cssClass: string
  }[]
}
