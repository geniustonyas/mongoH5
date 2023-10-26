import { request } from '@/utils/axios'
import type * as Affiliate from './types'

// 获取
export function getAmountCountChart() {
  return request<Affiliate.getAnnouncementListData>({
    url: 'Member/GetAnnouncementList',
    method: 'post'
  })
}
