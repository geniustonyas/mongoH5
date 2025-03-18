export enum CommicCategory {
  Book = 0,
  Comic = 1
}

export enum CommicStatus {
  All = -1,
  Serial = 1,
  Finished = 0
}

export interface CommicIndexResponseData {
  categories: CommicBookCategoryItem[]
  end: CommicIndexListItem[]
  hots: CommicIndexListItem[]
  newhots: CommicIndexListItem[]
  news: CommicIndexListItem[]
  recommends: CommicIndexListItem[]
  serial: CommicIndexListItem[]
}

export interface CommicIndexListItem {
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

export interface CommicListItem {
  id: string
  title: string
  author: string
  coverUrl: string
  status: number
  readCount: string
  favoriteCount: string
  averageRating: number
  categoryName: string
  statusText?: string
}

export interface CommicBookCategoriesRequest {
  OType: CommicCategory
}

export interface CommicListResponse {
  items: CommicListItem[]
  pageIndex: string
  pageSize: string
  pageCount: string
  recordCount: string
}

export interface CommicBookCategoryItem {
  id: string | number
  name: string | number
}

// 通用选项接口
export interface TabOption {
  id: string | number
  name: string
  active: boolean
}

export interface CategoryWithActive extends CommicBookCategoryItem {
  active?: boolean
}

export interface CommicListRequest {
  Type?: CommicCategory
  KeyWord?: string
  BookStatus?: CommicStatus
  CategoryId?: string | number
  IsRecommend?: 0 | 1
  ReadingCount?: 0 | 1
  FavoriteCount?: 0 | 1
  CreateTime?: 0 | 1
  PageIndex?: number
  PageSize?: number
}

export interface CommicChapter {
  id: string
  title: string
}

export interface CommicBookInfo {
  id: string
  title: string
  coverUrl: string
  coverurl: string
  author: string
  readCount: string
  favoriteCount: string
  description: string
  updateAt: string
  categoryId?: string
  categoryName?: string
  status?: number
  statusText?: string
}

export interface CommicDetailResponse {
  items: CommicChapter[]
  newVideos: {
    book: CommicBookInfo
    chapterId: string
  }
  pageIndex: string
  pageSize: string
  pageCount: string
  recordCount: string
}

export interface CommicRecommendParams {
  Type?: number
  KeyWord?: string
  BookStatus?: number
  CategoryId?: number
  IsRecommend?: boolean
  ReadingCount?: number
  FavoriteCount?: number
  CreateTime?: number
  PageIndex: number
  PageSize: number
}

// 默认参数值
export const DEFAULT_RECOMMEND_PARAMS: CommicRecommendParams = {
  Type: CommicCategory.Book,
  BookStatus: CommicStatus.All,
  PageIndex: 1,
  PageSize: 10
}

export interface CommicChapterDetailResponse {
  id: string
  title: string
  contents: string
}

export interface AddCommicToCollectionParams {
  id: string | number
  type: string | number // 类型： 0：小说，1：漫画
}

export interface CommicCollectionListRequest {
  PageIndex: number
  PageSize: number
}

export interface CommicRecommendResponse {
  items: CommicBookInfo[]
  pageIndex: string
  pageSize: string
  pageCount: number | string
  recordCount: string
}
