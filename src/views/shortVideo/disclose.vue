<template>
  <HomeLayout>
    <div class="beauty-image-Container page">
      <section class="vp-main">
        <div class="vpm-bd">
          <div class="vm-h">
            <div class="h-m">
              <a @click="router.push({ name: 'shortVideo' })">{{ douyin }}</a>
              <a @click="router.push({ name: 'disclose' })" class="active">吃瓜</a>
              <a @click="showToast('建设中...')">短剧</a>
            </div>
            <div class="h-r">
              <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
            </div>
          </div>
          <div class="vm-a" />
          <div class="vm-b">
            <swiper v-if="bbsList.length > 0" :direction="'vertical'" :modules="modules" :virtual="{ slides: bbsList.length, enabled: true, addSlidesBefore: 2, addSlidesAfter: 2 } as undefined" :slides-per-view="1" :space-between="0" @slide-change="slideChange" style="width: 100%; height: 100%">
              <swiper-slide v-for="(bbs, index) in bbsList" :key="bbs.id + '-' + index" :virtual-index="bbs.id + '+' + index">
                <div class="v-a" :class="{ shrink: showComment }">
                  <swiper :id="'swiper-' + index" :modules="[Autoplay, Pagination]" @swiper="(swiper) => onSwiper(index, swiper)" :slides-per-view="1" :pagination="getPaginationStyle(bbs.imgs) as any" :centered-slides="true" :autoplay="{} as any" :loop="false" :nested="true" style="width: 100%; height: 100%">
                    <swiper-slide v-for="img in bbs.imgs.split(',')" :key="bbs.id + '|' + img">
                      <img v-lazy-decrypt="img" :alt="img" loading-img="default2.gif" error-img="default2.gif" />
                    </swiper-slide>
                  </swiper>
                </div>
                <div class="v-b" :class="{ hidden: showComment }">
                  <a @click="toggleLike()">
                    <i :class="['mvfont', 'mv-xihuan', { active: bbsDetail && bbsDetail.like == '1' }]" />
                    <b>{{ bbsDetail ? bbsDetail.likeCount : 0 }}</b>
                  </a>
                  <a @click="showCommentComponent(bbsDetail?.id)">
                    <i class="mvfont mv-pinglun3" />
                    <b>{{ bbsDetail ? bbsDetail.commentCount : 0 }}</b>
                  </a>
                  <a @click="toggleCollection()">
                    <i :class="['mvfont', 'mv-shoucang', { active: bbsDetail && bbsDetail.collect }]" />
                    <b>{{ bbsDetail ? bbsDetail.collectionCount : 0 }}</b>
                  </a>
                  <a @click="handleShare"><i class="mvfont mv-zhuanfa" /><b>分享</b></a>
                </div>
                <div class="v-c" :class="{ hidden: showComment }">
                  <h3>
                    @芒果TV官方-<span>{{ appStore.spareData.OfficialDomain }}</span>
                  </h3>
                  <p>
                    <b v-html="decodeHtmlEntities(bbs.title || '')" />
                    <template v-if="bbsDetail && bbsDetail.subChannel">
                      <span>#{{ bbsDetail.channel.title }}</span>
                      <span>#{{ bbsDetail.subChannel.title }}</span>
                    </template>
                  </p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
      <Popup v-model:show="showSharePopup" teleport="body" position="center" :overlay="false" round>
        <div class="share-popup">
          <p>分享链接已复制，赶快去分享给好友吧！</p>
        </div>
      </Popup>
      <Comment v-if="bbsDetail" v-model:show-comment="showComment" :post-id="bbsDetail.id" @comment-added="updateCommentCount" teleport-target=".vpm-bd" />
    </div>
  </HomeLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, nextTick } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { getBbsListApi, getBbsDetailApi, bbsLikeApi, bbsCollectionApi } from '@/api/bbs'
import type { Bbs } from '@/types/bbs'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { douyin } from '@/utils/cryptedData'
import { decodeHtmlEntities } from '@/utils'
import Comment from '@/components/comment.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Virtual, Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/virtual'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'

import { Popup, showToast } from 'vant'
import Clipboard from 'clipboard'
import HomeLayout from '@/components/layout/HomeLayout.vue'

const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
const modules = [Virtual]

const swipers = ref<Map<number, any>>(new Map())
const currentSlideIndex = ref(0)

const bbsList = ref<Bbs[]>([])
const bbsDetail = ref<Bbs | null>(null)
const initPageIndex = computed(() => Math.floor(Math.random() * (appStore.discloseRandomMax - appStore.discloseRandomMin + 1)) + appStore.discloseRandomMin)
const pageIndex = ref(initPageIndex.value)
const showSharePopup = ref(false)
const clipboard = ref<Clipboard | null>(null)
const showComment = ref(false)
const currentPostId = ref<string | null>(null)

const fetchBbsList = async () => {
  try {
    const {
      data: { data }
    } = await getBbsListApi({
      PageIndex: pageIndex.value,
      PageSize: 5,
      SortType: 1
    })
    if (data && data.items) {
      bbsList.value.push(...data.items)
      console.log(bbsList.value)
    }
  } catch (error) {
    console.error('获取BBS列表失败:', error)
  }
}

const fetchBbsDetail = async (bbsId: number) => {
  try {
    const {
      data: { data }
    } = await getBbsDetailApi(bbsId)
    bbsDetail.value = data
    // 修改列表的数据
    bbsList.value[currentSlideIndex.value].imgs = data.imgs
    if (bbsList.value[currentSlideIndex.value].imgs.split(',').length > 20) {
      // 获取到当前swiper 下面的pagination 元素
      const currentSwiper = swipers.value.get(currentSlideIndex.value)
      if (currentSwiper) {
        currentSwiper.pagination.el.classList.add('swiper-pagination-bullets')
        currentSwiper.pagination.el.style.top = '60px'
        currentSwiper.pagination.el.style.setProperty('display', 'unset', 'important')
        currentSwiper.pagination.el.style.setProperty('bottom', 'unset', 'important')
      }
    }
  } catch (error) {
    console.error('获取BBS详情失败:', error)
  }
}

const onSwiper = (index: number, swiper: any) => {
  swipers.value.set(index, swiper)
  swiper.autoplay.stop()
}

const slideChange = async (swiper) => {
  try {
    const previousIndex = currentSlideIndex.value
    currentSlideIndex.value = swiper.activeIndex
    if (previousIndex === currentSlideIndex.value) return

    // 播放当前swiper
    const currentSwiper = swipers.value.get(currentSlideIndex.value)
    if (currentSwiper) {
      currentSwiper.autoplay.start()
    }
    // 停止上一个swiper的自动播放
    const previousSwiper = swipers.value.get(previousIndex)
    if (previousSwiper) {
      previousSwiper.autoplay.stop()
    }
    const isSlidingDown = currentSlideIndex.value > previousIndex
    const destroyIndex = isSlidingDown ? currentSlideIndex.value - 2 : currentSlideIndex.value + 2
    if (destroyIndex >= 0 && swipers.value.has(destroyIndex)) {
      // const destroySwiper = swipers.value.get(destroyIndex)
      // destroySwiper.destroy(true, true)
      // swipers.value.delete(destroyIndex)
    }

    // 获取bbs详情
    const currentBbs = bbsList.value[currentSlideIndex.value]
    if (currentBbs) {
      await fetchBbsDetail(parseInt(currentBbs.id))
    }

    if (bbsList.value.length - currentSlideIndex.value < 3) {
      pageIndex.value++
      await fetchBbsList()
    }
  } catch (error) {
    console.error('滑动失败:', error)
  }
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.id == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

// 点赞
const toggleLike = async () => {
  if (!checkLogin()) return
  if (!bbsDetail.value) return
  const newLikeStatus = bbsDetail.value.like == '1' ? 0 : 1
  try {
    const { data } = await bbsLikeApi({ PostId: bbsDetail.value.id, Like: newLikeStatus })
    if (data) {
      bbsDetail.value.like = newLikeStatus.toString()
      const newLikeCount = Number(bbsDetail.value.likeCount) + (newLikeStatus ? 1 : -1)
      bbsDetail.value.likeCount = Math.max(newLikeCount, 0).toString()
    }
  } catch (error) {
    console.error('点赞失败:', error)
  }
}

// 收藏
const toggleCollection = async () => {
  if (!checkLogin()) return
  if (!bbsDetail.value) return
  const newCollectStatus = !bbsDetail.value.collect
  try {
    const { data } = await bbsCollectionApi({ PostId: bbsDetail.value.id, Collect: newCollectStatus, Ids: '' })
    if (data) {
      bbsDetail.value.collect = newCollectStatus
      const newCollectionCount = Number(bbsDetail.value.collectionCount) + (newCollectStatus ? 1 : -1)
      bbsDetail.value.collectionCount = Math.max(newCollectionCount, 0).toString()
    }
  } catch (error) {
    console.error('收藏失败:', error)
  }
}

// 复制分享链接
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

// 根据图片数量返回分页器类型
const getPaginationStyle = (imgs: string) => {
  const imgCount = imgs.split(',').length
  if (imgCount > 20) {
    return {
      enabled: true,
      type: 'fraction',
      renderFraction: (currentClass: string, totalClass: string) => {
        return `<div class="fraction-pagination"><span class="${currentClass}"></span> / <span class="${totalClass}"></span></div>`
      }
    }
  }
  return {
    enabled: true,
    type: 'bullets'
  }
}

const showCommentComponent = (postId: string | undefined) => {
  if (postId) {
    currentPostId.value = postId
    showComment.value = true
  }
}

// 处理评论弹窗的打开和关闭时分页的显示隐藏和自动播放
const handleCommentToggle = (isVisible: boolean) => {
  const currentSwiper = swipers.value.get(currentSlideIndex.value)
  if (isVisible) {
    // 当打开评论弹窗时，停止自动播放，并隐藏分页器
    if (currentSwiper) {
      currentSwiper.autoplay.stop()
      currentSwiper.pagination.el.style.visibility = 'hidden'
    }
  } else {
    // 当关闭评论弹窗时，继续自动播放，并延迟200ms显示分页器
    if (currentSwiper) {
      currentSwiper.autoplay.start()
      setTimeout(() => {
        currentSwiper.pagination.el.style.visibility = 'visible'
      }, 200)
    }
  }
  updateSwiperSize()
}

// 更新swiper尺寸
const updateSwiperSize = () => {
  const currentSwiper = swipers.value.get(currentSlideIndex.value)
  nextTick(() => {
    if (currentSwiper) {
      currentSwiper.update()
    }
  })
}

// 当comment更新评论数量时，更新bbsDetail的评论数量
const updateCommentCount = () => {
  if (bbsDetail.value) {
    bbsDetail.value.commentCount = (Number(bbsDetail.value.commentCount) + 1).toString()
  }
}

// 监听 showComment 的变化
watch(showComment, (newVal) => {
  handleCommentToggle(newVal)
})

onMounted(async () => {
  await fetchBbsList()
  if (bbsList.value.length > 0) {
    await fetchBbsDetail(parseInt(bbsList.value[0].id))
    // 启动第一个swiper的自动播放
    const firstSwiper = swipers.value.get(0)
    console.log(firstSwiper)
    if (firstSwiper) {
      firstSwiper.autoplay.start()
    }
  }
  // 给body加上 noscrolling class (先移除在添加)
  // document.body.classList.remove('noscrolling')
  // document.body.classList.add('noscrolling')
})

onBeforeRouteLeave(() => {
  swipers.value.clear()

  // document.body.classList.remove('noscrolling')
  // setTimeout(() => {
  //   document.body.classList.remove('noscrolling')
  // }, 200)
})
</script>
<style scoped>
.page .beauty-image-Container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 5.5rem + env(safe-area-inset-bottom));
  overflow: hidden;
}
</style>
