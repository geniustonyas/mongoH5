import { request } from '@/utils/axios'
import type { CollectionListResponse } from '@/types/collection'
import type { ApiResponseData } from '@/types/global.d'

/** 获取收藏的合集列表 */
export function getCollectCollectionListApi(data: { PageIndex: number; PageSize: number }) {
  return request<ApiResponseData<CollectionListResponse>>({
    url: 'Collection/CollectList',
    method: 'post',
    headers: {
      'X-Should-Encrypt': '1'
    },
    data
  })
}

/** 收藏合集 */
export function addCollectionToCollectionApi(data: { Id: string; Collect: boolean; Ids: string; VideoId: string }) {
  return request<ApiResponseData<any>>({
    url: 'Collection/Collect',
    method: 'post',
    headers: {
      'X-Should-Encrypt': '1'
    },
    data
  })
}