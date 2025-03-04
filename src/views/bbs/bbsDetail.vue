<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>详情</span>
      </div>
    </header>
    <main class="b-b-b">
      <div class="bbs-detail">
        <div class="d-a" v-html="decodeHtmlEntities(detail?.title || '')" />
        <div class="d-b">
          <div class="b-l">
            <div class="l-a" v-lazy:background-image="{ src: getAssetsFile('logo-4.png') }" />
            <div class="l-b">
              <h3>{{ detail?.user?.nickName || '芒果TV官方' }}</h3>
              <span>{{ detail?.createTime || '' }}</span>
            </div>
          </div>
          <div v-if="detail" class="b-r">
            <span><i class="mvfont mv-kan" />{{ formatNumber(detail.viewCount) }}</span>
            <span><i class="mvfont mv-pinglun" />{{ formatNumber(detail.commentCount) }}</span>
            <span><i class="mvfont mv-zan" />{{ formatNumber(detail.likeCount) }}</span>
            <span><i class="mvfont mv-like" />{{ formatNumber(detail.collectionCount) }}</span>
          </div>
        </div>
        <div class="d-c" v-html="decodeHtmlEntities(detail?.content || '')" />
        <div class="d-d">
          <img v-for="(img, index) in bbsImgs" :key="index" v-lazy-decrypt="img" @click="showPreview(index)" />
        </div>

        <div class="au-ad">
          <img v-if="bannerAdvertisement.length > 0" @click="openAd(bannerAdvertisement[0].targetUrl, '社区详情横幅', 'click', bannerAdvertisement[0].id)" :key="bannerAdvertisement[0].id" v-lazy-decrypt="bannerAdvertisement[0].imgUrl" :alt="bannerAdvertisement[0].title" />
        </div>
        <div class="bbs-d-ne">
          <div class="item" v-if="detail?.prev?.id" @click="handleBbsClick(detail.prev)">
            <div class="i-a"><i class="mvfont mv-left" />上一篇</div>
            <div class="i-b" v-html="`<span>#${detail.prev?.channel?.title}-${detail.prev?.subChannel?.title}</span>${decodeHtmlEntities(detail.prev?.title || '')}`" />
          </div>
          <div class="item" v-if="detail?.next?.id" @click="handleBbsClick(detail.next)">
            <div class="i-a">下一篇<i class="mvfont mv-right" /></div>
            <div class="i-b" v-html="`<span>#${detail.next?.channel?.title}-${detail.next?.subChannel?.title}</span>${decodeHtmlEntities(detail.next?.title || '')}`" />
          </div>
        </div>

        <div class="au-t-c">
          <div class="a-t">
            <div class="t-l"><i class="mvfont mv-xietiao" />相关推荐</div>
          </div>
          <div class="a-c">
            <BbsListItem :bbs-list="relatedList" :bbs-click="handleBbsClick" />
            <div class="more-box"><a v-if="pageCount > 1 && pageIndex < pageCount" @click="loadMore">加载更多</a></div>
          </div>
        </div>
      </div>
    </main>
    <footer class="footer">
      <div class="p-bbs">
        <span><i @click="handleShare" class="mvfont mv-fenxiang" /><small>分享</small></span>
        <span>
          <i @click="showComment = true" class="mvfont mv-pinglun" />
          <small v-if="Number(detail?.commentCount) == 0">评论</small>
          <b v-else>{{ detail?.commentCount ? formatNumber(detail?.commentCount) : 0 }}</b>
        </span>
        <span>
          <i :class="['mvfont', 'mv-zan', { active: detail?.like == '1' }]" @click="toggleLike" />
          <small v-if="Number(detail?.likeCount) == 0">赞</small>
          <b v-else>{{ detail?.likeCount ? formatNumber(detail?.likeCount) : 0 }}</b>
        </span>
        <span>
          <i :class="['mvfont', 'mv-like', { active: detail?.collect }]" @click="toggleCollection" />
          <small v-if="Number(detail?.collectionCount) == 0">收藏</small>
          <b v-else>{{ detail?.collectionCount ? formatNumber(detail?.collectionCount) : 0 }}</b>
        </span>
      </div>
    </footer>

    <ImagePreview v-model:show="showImagePreview" :images="bbsImgs" ref="imgPreviewRef" :start-position="imgPreviewIndex" :loop="false">
      <template #image="{ src, style }">
        <img v-lazy-decrypt="src" :style="[{ width: '100%' }, style]" />
      </template>
    </ImagePreview>

    <Popup v-model:show="showSharePopup" position="center" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>

    <Comment v-model:show-comment="showComment" :post-id="detail?.id" />
    <NavBar active-menu="bbs" />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, computed } from 'vue'
import { getAssetsFile, decodeHtmlEntities, openAd, insertAds, formatNumber } from '@/utils'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { getBbsDetailApi, getBbsRelatedRecommendApi, bbsLikeApi, bbsCollectionApi } from '@/api/bbs'
import BbsListItem from '@/components/BbsListItem.vue'
import Comment from '@/components/Comment.vue'
import NavBar from '@/components/layout/NavBar.vue'
import type { Bbs } from '@/types/bbs'
import { ImagePreview, Popup } from 'vant'
import Clipboard from 'clipboard'
import 'swiper/css'
import 'swiper/css/pagination'

const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()
const detail = ref<Bbs | null>(null)
const relatedList = ref<Bbs[]>([])
const pageIndex = ref(1)
const pageCount = ref(0)
const showComment = ref(false)
const showSharePopup = ref(false)
const clipboard = ref<Clipboard | null>(null)
const bbsImgs = ref<string[]>([])
const imgPreviewIndex = ref(0)
const showImagePreview = ref(false)

const bannerAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(4).items
  return tmp || []
})

const fetchDetail = async (id: string) => {
  try {
    const response = await getBbsDetailApi(id)
    const { data } = response
    if (data) {
      detail.value = data.data
      bbsImgs.value = detail.value?.imgs.split(',') || []
      fetchRelatedList()
    }
  } catch (error) {
    console.error('获取详情失败:', error)
  }
}

const showPreview = (index: number) => {
  showImagePreview.value = true
  imgPreviewIndex.value = index
}

// 获取社区帖子广告
const bbsListAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(30).items
  return tmp || []
})

const fetchRelatedList = async () => {
  try {
    const {
      data: { data }
    } = await getBbsRelatedRecommendApi({ id: detail.value?.id || '', PageIndex: pageIndex.value, PageSize: 10 })
    if (data && Array.isArray(data.items)) {
      // 插入广告
      data.items = insertAds(data.items, bbsListAdvertisement.value, 5, 7, false)

      relatedList.value = relatedList.value.concat(data.items)
      pageCount.value = parseInt(data.pageCount)
    }
  } catch (error) {
    console.error('获取相关推荐失败:', error)
  }
}

const loadMore = () => {
  pageIndex.value += 1
  fetchRelatedList()
}

const toggleLike = async () => {
  if (!checkLogin()) return
  if (!detail.value) return
  const newLikeStatus = detail.value.like == '1' ? 0 : 1
  try {
    const { data } = await bbsLikeApi({ PostId: detail.value.id, Like: newLikeStatus })
    if (data) {
      detail.value.like = newLikeStatus.toString()
      const newLikeCount = Number(detail.value.likeCount) + (newLikeStatus ? 1 : -1)
      detail.value.likeCount = Math.max(newLikeCount, 0).toString()
    }
  } catch (error) {
    console.error('点赞失败:', error)
  }
}

const toggleCollection = async () => {
  if (!checkLogin()) return
  if (!detail.value) return
  const newCollectStatus = !detail.value.collect
  try {
    const { data } = await bbsCollectionApi({ PostId: detail.value.id, Collect: newCollectStatus, Ids: '' })
    if (data) {
      detail.value.collect = newCollectStatus
      const newCollectionCount = Number(detail.value.collectionCount) + (newCollectStatus ? 1 : -1)
      detail.value.collectionCount = Math.max(newCollectionCount, 0).toString()
    }
  } catch (error) {
    console.error('收藏失败:', error)
  }
}

const handleShare = () => {
  if (clipboard.value) {
    clipboard.value.destroy()
  }
  clipboard.value = new Clipboard('.share-button', {
    text: () => window.location.href
  })

  clipboard.value?.on('success', () => {
    showSharePopup.value = true
    setTimeout(() => {
      showSharePopup.value = false
    }, 2000)
    clipboard.value?.destroy()
  })

  clipboard.value?.on('error', () => {
    console.error('复制失败')
    clipboard.value?.destroy()
  })

  const button = document.createElement('button')
  button.className = 'share-button'
  document.body.appendChild(button)
  button.click()
  document.body.removeChild(button)
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.id == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

onBeforeRouteLeave(() => {
  showComment.value = false
})

const handleBbsClick = (post: Bbs) => {
  pageIndex.value = 1
  relatedList.value = []
  detail.value = {} as Bbs
  bbsImgs.value = []
  fetchDetail(post.id).then(() => {
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  })
}

;(async () => {
  const id = route.params.id
  if (id) {
    fetchDetail(id as string).then(() => {
      nextTick(() => {
        window.scrollTo(0, 0)
      })
    })
  }
  if (appStore.advertisement.length == 0) {
    appStore.fetAdvertisement()
  }
})()
</script>
