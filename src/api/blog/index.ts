import { request } from '@/utils/axios'
import type * as Blog from './types'

/** 获取优惠列表 */
export function getBlogPinApi() {
  return request<Blog.getBlogPinResp>({
    url: 'Blog/Pin',
    method: 'post'
  })
}

/** 获取博客列表 */
export function getBlogListApi(data: Blog.getBlogListData) {
  return request<Blog.getBlogListResp>({
    url: 'Blog/list',
    method: 'post',
    data
  })
}

/** 获取博客详情 */
export function getBlogDetailsApi(data: Blog.getBlogDetailsData) {
  return request<Blog.getBlogDetailsResp>({
    url: 'Blog/Detail',
    method: 'post',
    data
  })
}
