import { request } from '@/utils/axios'
import { ApiResponseData } from '@/types/global'
import {
  AddNovelCollectionRequest,
  NovelBookCategoriesRequest,
  NovelBookCategoryItem,
  NovelCategory,
  NovelChapterDetailResponse,
  NovelCollectionListRequest,
  NovelDetailResponse,
  NovelIndexResponseData,
  NovelListRequest,
  NovelListResponse,
  NovelRecommendParams,
  NovelRecommendResponse
} from '@/types/novel'

// 获取小说首页列表
export function getNovelIndexList() {
  return request<ApiResponseData<NovelIndexResponseData>>({
    url: 'Web/IndexNovelList',
    method: 'post',
    data: {},
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取小说或者漫画分页列表
export function getNovelList(params: NovelListRequest) {
  return request<ApiResponseData<NovelListResponse>>({
    url: 'Web/NovelList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 小说/漫画类型列表
export function getNovelCategory(params: NovelBookCategoriesRequest) {
  return request<ApiResponseData<NovelBookCategoryItem[]>>({
    url: 'Web/BookCategories',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取小说详情
export function getNovelDetail(bookId: number | string) {
  return request<ApiResponseData<NovelDetailResponse>>({
    url: 'Web/NovelInfo',
    method: 'post',
    data: { id: bookId, PageSize: 999 }, // 给一个足够大的章节数用来获取全部章节
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取推荐小说列表
export function getRecommendNovelList(params: NovelRecommendParams) {
  return request<ApiResponseData<NovelRecommendResponse>>({
    url: 'Web/NovelList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 更新小说阅读量
export function updateNovelReadCount(type: NovelCategory, bookId: number | string) {
  return request<ApiResponseData>({
    url: '/Web/UpdateCount',
    method: 'post',
    data: { type, id: bookId },
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 更新小说阅读进度
export function updateNovelReadProgress(bookId: number | string, chapterId: number | string) {
  return request<ApiResponseData>({
    url: '/Web/UpdateReadingProcess',
    method: 'post',
    data: { bookId: bookId, id: chapterId },
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

//  获取小说章节详情
export function getNovelChapterDetail(bookId: number | string, chapterId: number | string) {
  return request<ApiResponseData<NovelChapterDetailResponse>>({
    url: '/Web/ChapterDetails',
    method: 'post',
    data: { bookId, id: chapterId },
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 小说收藏列表
export function getCollectionList(params: NovelCollectionListRequest) {
  return request<ApiResponseData<NovelRecommendResponse>>({
    url: '/Web/MemberFavoriteList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 加入小说收藏列表
export function addNovelToCollection(params: AddNovelCollectionRequest) {
  return request<ApiResponseData>({
    url: '/Web/AddFavorite',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}
