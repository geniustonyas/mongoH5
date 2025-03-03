import { request } from '@/utils/axios'
import { ApiResponseData } from '@/types/global'
import { NovelBookCategoriesRequest, NovelBookCategoryItem, NovelIndexResponseData, NovelListRequest, NovelListResponse } from '@/types/novel'

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
