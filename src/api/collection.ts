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
