import { request } from '@/utils/axios'
import { ApiResponseData } from '@/types/global'
import { NovelBookCategoriesRequest, NovelBookCategoryItem, NovelListRequest, NovelListResponse } from '@/types/novel'

/** 获取小说或者漫画列表 */
export function getNovelList(params: NovelListRequest) {
  return request<ApiResponseData<NovelListResponse>>({
    url: 'Web/NovelList',
    method: 'post',
    data: params
  })
}

// 小说/漫画类型列表
export function getNovelCategory(params: NovelBookCategoriesRequest) {
  return request<ApiResponseData<NovelBookCategoryItem[]>>({
    url: 'Web/BookCategories',
    method: 'post',
    data: params
  })
}
