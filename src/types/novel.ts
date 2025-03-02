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
  Type: NovelCategory
  KeyWord?: string
  BookStatus: BookStatus
  CategoryId?: string | number
  IsRecommend?: 0 | 1
  ReadingCount?: 0 | 1
  FavoriteCount?: 0 | 1
  CreateTime?: 0 | 1
  PageIndex: number
  PageSize: number
}
