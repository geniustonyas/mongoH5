import { request } from '@/utils/axios'
import {
  BbsListRequest,
  BbsListResponse,
  BbsCategoryResponse,
  Bbs,
  BbsRelatedRecommendRequest,
  BbsCommentListResponse,
  BbsSubCategoryDetailResponse,
  STSTokenResponse,
  CreatePostRequest
} from '@/types/bbs'

import type { ApiResponseData } from '@/types/global.d'

/** 获取BBS列表 */
export function getBbsListApi(data: BbsListRequest) {
  return request<ApiResponseData<BbsListResponse>>({
    url: 'BBS/PostList',
    method: 'post',
    data: data
  })
}

/** 获取收藏列表 */
export function getBbsCollectionListApi(data: { PageIndex: number; PageSize: number }) {
  return request<ApiResponseData<BbsListResponse>>({
    url: 'BBS/CollectPostList',
    method: 'post',
    data
  })
}

/** 获取BBS分类 */
export function getBbsCategoryApi() {
  return request<ApiResponseData<BbsCategoryResponse[]>>({
    url: 'BBS/ChanelList',
    method: 'post'
  })
}

/** 获取BBS二级分类详情 */
export function getBbsSubCategoryDetailApi(data: { Id: string | number }) {
  return request<ApiResponseData<BbsSubCategoryDetailResponse>>({
    url: 'BBS/SubChannelDetail',
    method: 'post',
    data
  })
}

/** 获取BBS详情 */
export function getBbsDetailApi(id: string | number) {
  return request<ApiResponseData<Bbs>>({
    url: 'BBS/PostDetail',
    method: 'post',
    data: { id }
  })
}

/** 获取BBS相关推荐 */
export function getBbsRelatedRecommendApi(data: BbsRelatedRecommendRequest) {
  return request<ApiResponseData<BbsListResponse>>({
    url: 'BBS/RelatedRecommendList',
    method: 'post',
    data
  })
}

/** BBS点赞 */
export function bbsLikeApi(data: { PostId: string | number; Like: string | number }) {
  return request<ApiResponseData<any>>({
    url: 'BBS/Like',
    method: 'post',
    data
  })
}

/** BBS收藏 */
export function bbsCollectionApi(data: { PostId: string | number; Collect: boolean; Ids: string }) {
  return request<ApiResponseData<any>>({
    url: 'BBS/Collect',
    method: 'post',
    data
  })
}

/** BBS评论列表 */
export function getBbsCommentListApi(data: { Id: string | number; PageSize: number; PageIndex: number }) {
  return request<ApiResponseData<BbsCommentListResponse>>({
    url: 'BBS/PostCommentList',
    method: 'post',
    data
  })
}

/** BBS评论点赞 */
export function bbsCommentLikeApi(data: { CommentId: string | number; Like: string | number }) {
  return request<ApiResponseData<any>>({
    url: 'BBS/LikeComment',
    method: 'post',
    data
  })
}

/** 发表评论  */
export function bbsCommentApi(data: { PostId: string | number; Content: string }) {
  return request<ApiResponseData<any>>({
    url: 'BBS/CreateComment',
    method: 'post',
    data
  })
}

/** 获取STS Token */
export function getSTSTokenApi() {
  return request<ApiResponseData<STSTokenResponse>>({
    url: 'BBS/GetSTSToken',
    method: 'post'
  })
}

/** 创建帖子 */
export function createPostApi(data: CreatePostRequest) {
  return request<ApiResponseData<any>>({
    url: 'Member/CreatePost',
    method: 'post',
    headers: {
      'X-Should-Encrypt': '1'
    },
    data
  })
}
