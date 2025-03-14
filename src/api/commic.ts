import { request } from '@/utils/axios'
import { ApiResponseData } from '@/types/global'
import {
  AddCommicToCollectionParams,
  CommicBookCategoriesRequest,
  CommicBookCategoryItem,
  CommicCategory,
  CommicChapterDetailResponse,
  CommicCollectionListRequest,
  CommicDetailResponse,
  CommicIndexResponseData,
  CommicListRequest,
  CommicListResponse,
  CommicRecommendParams,
  CommicRecommendResponse
} from '@/types/commic'

// 获取漫画首页列表
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

// 获取漫画或者漫画分页列表
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

// 漫画/漫画类型列表
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

// 获取漫画详情
export function getCommicDetail(bookId: number | string) {
  return request<ApiResponseData<CommicDetailResponse>>({
    url: 'Web/ComicsInfo',
    method: 'post',
    data: { id: bookId, PageSize: 999 }, // 给一个足够大的章节数用来获取全部章节
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取小说或者漫画大家最喜欢分页列表
export function getCommiclAllLikeList(params: CommicListRequest) {
  return request<ApiResponseData<CommicListResponse>>({
    url: 'Web/ComicsAllLikes',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取推荐漫画列表
export function getRecommendCommicList(params: CommicRecommendParams) {
  return request<ApiResponseData<CommicRecommendResponse>>({
    url: 'Web/ComicsList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 更新漫画阅读量
export function updateCommicReadCount(type: CommicCategory, bookId: number | string) {
  return request<ApiResponseData>({
    url: '/Web/UpdateComicsCount',
    method: 'post',
    data: { type, id: bookId },
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 更新漫画阅读进度
export function updateCommicReadProgress(bookId: number | string, chapterId: number | string) {
  return request<ApiResponseData>({
    url: '/Web/UpdateComicsReadingProcess',
    method: 'post',
    data: { bookId: bookId, id: chapterId },
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

//  获取漫画章节详情
export function getCommicChapterDetail(bookId: number | string, chapterId: number | string) {
  return request<ApiResponseData<CommicChapterDetailResponse>>({
    url: '/Web/ComicsChapterDetails',
    method: 'post',
    data: { bookId, id: chapterId },
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 添加漫画到收藏
export function addCommicToCollection(params: AddCommicToCollectionParams) {
  return request<ApiResponseData>({
    url: '/Web/AddComicsFavorite',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}

// 获取漫画收藏列表
export function getCommicCollectionList(params: CommicCollectionListRequest) {
  return request<ApiResponseData<CommicRecommendResponse>>({
    url: '/Web/MemberComicsFavoriteList',
    method: 'post',
    data: params,
    headers: {
      'X-Should-Encrypt': '1'
    }
  })
}
