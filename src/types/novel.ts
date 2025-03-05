export enum NovelCategory {
  Book = 0,
  Comic = 1
}

export enum BookStatus {
  All = -1,
  Single = 0,
  Serial = 1,
  Finished = 2
}

export enum NovelStatus {
  All = -1,
  Serial = 0,
  Finished = 1
}

export interface NovelIndexResponseData {
  categories: NovelBookCategoryItem[]
  end: NovelIndexListItem[]
  hots: NovelIndexListItem[]
  newhots: NovelIndexListItem[]
  news: NovelIndexListItem[]
  recommends: NovelIndexListItem[]
  serial: NovelIndexListItem[]
}

export interface NovelIndexListItem {
  id: string
  categoryId: string
  categoryName: string
  title: string
  coverUrl: string
  favoriteCount: string
  readCount: string
  status: number
  statusText?: string
}

export interface NovelListItem {
  id: string
  title: string
  author: string
  coverurl: string
  status: number
  readCount: string
  favoriteCount: string
  averageRating: number
  categoryName: string
}

export interface NovelBookCategoriesRequest {
  OType: NovelCategory
}

export interface NovelListResponse {
  items: NovelListItem[]
  pageIndex: string
  pageSize: string
  pageCount: string
  recordCount: string
}

export interface NovelBookCategoryItem {
  id: string | number
  name: string | number
}

export interface NovelListRequest {
  Type?: NovelCategory
  KeyWord?: string
  BookStatus?: BookStatus
  CategoryId?: string | number
  IsRecommend?: 0 | 1
  ReadingCount?: 0 | 1
  FavoriteCount?: 0 | 1
  CreateTime?: 0 | 1
  PageIndex?: number
  PageSize?: number
}

export interface NovelChapter {
  id: string
  title: string
}

export interface NovelBookInfo {
  id: string
  title: string
  coverUrl: string
  author: string
  readCount: string
  favoriteCount: string
  description: string
  updateAt: string
}

export interface NovelDetailResponse {
  items: NovelChapter[]
  newVideos: {
    book: NovelBookInfo
    chapterId: string
  }
  pageIndex: string
  pageSize: string
  pageCount: string
  recordCount: string
}
