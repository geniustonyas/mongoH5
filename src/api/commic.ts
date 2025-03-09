import { request } from '@/utils/axios'
import { ApiResponseData } from '@/types/global'
import {
  CommicBookCategoriesRequest,
  CommicBookCategoryItem,
  CommicCategory,
  CommicChapterDetailResponse,
  CommicDetailResponse,
  CommicIndexResponseData,
  CommicListRequest,
  CommicListResponse,
  CommicRecommendParams,
  CommicRecommendResponse
} from '@/types/commic'

// 获取小说首页列表
export function getCommicIndexList() {
  return request<ApiResponseData<CommicIndexResponseData>>({
    url: 'Web/IndexComicsList',
    method: 'post',
    data: {},
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取小说或者漫画分页列表
export function getCommicList(params: CommicListRequest) {
  return request<ApiResponseData<CommicListResponse>>({
    url: 'Web/ComicsList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 小说/漫画类型列表
export function getCommicCategory(params: CommicBookCategoriesRequest) {
  return request<ApiResponseData<CommicBookCategoryItem[]>>({
    url: 'Web/BookCategories',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取小说详情
export function getCommicDetail(bookId: number | string) {
  return request<ApiResponseData<CommicDetailResponse>>({
    url: 'Web/CommicInfo',
    method: 'post',
    data: { id: bookId, PageSize: 999 }, // 给一个足够大的章节数用来获取全部章节
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取推荐小说列表
export function getRecommendCommicList(params: CommicRecommendParams) {
  return request<ApiResponseData<CommicRecommendResponse>>({
    url: 'Web/CommicList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 更新小说阅读量
export function updateCommicReadCount(type: CommicCategory, bookId: number | string) {
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
export function updateCommicReadProgress(bookId: number | string, chapterId: number | string) {
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
export function getCommicChapterDetail(bookId: number | string, chapterId: number | string) {
  return request<ApiResponseData<CommicChapterDetailResponse>>({
    url: '/Web/ChapterDetails',
    method: 'post',
    data: { bookId, id: chapterId },
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}
