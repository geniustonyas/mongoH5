<template>
  <div class="page">
    <header class="header index-header">
      <div class="head-search">
        <div class="hs-a">
          <img @click="router.push({ name: 'index' })" :src="getAssetsFile('logo.png')" />
        </div>
        <div @click="router.push({ name: 'search' })" class="hs-b">
          <div class="sb-i">
            <input id="searchInput" class="search-inputs" />
            <i class="mvfont mv-search1" />
          </div>
          <div class="sb-t" v-if="appStore.searchInputText && keepAlive">
            <swiper @swiper="searchSwiper" :modules="[Autoplay]" :slides-per-view="1" :auto-height="true" direction="vertical" :centered-slides="true" :loop="true" :autoplay="{ delay: 3000, disableOnInteraction: false } as any" :nested="true" style="line-height: 50px">
              <swiper-slide v-for="item in appStore.searchInputText.split(',')" :key="item">
                <span>{{ item }}</span>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <!-- <div class="hs-c">
          <a @click="router.push({ name: 'history' })"><i class="mvfont mv-lishishijian-" /></a>
          <a @click="router.push({ name: 'home' })"><i class="mvfont mv-touxiang1" /></a>
        </div> -->
        <div class="hs-c">
          <a class="c-hot" @click="router.push({ name: 'hotVideo' })"><i class="mvfont mv-zhutirebangbeifen" /></a>
        </div>
      </div>
      <div class="category-tabs">
        <Tabs v-model:active="activeId" class="vant-tabs" @click-tab="clickTab" title-active-color="transparent">
          <Tab title="首页" name="0" />
          <Tab v-for="category in appStore.categorys" :key="category.d" :title="category.t" />
        </Tabs>
        <div class="search-icon">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
    </header>
    <main class="main">
      <swiper @swiper="onSwiper" :slides-per-view="1" :auto-height="true" :loop="false" @slide-change="swipePage">
        <swiper-slide>
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div class="index-content">
              <!--Banner-->
              <nav v-if="bannerAdvertisement && bannerAdvertisement.length > 0 && keepAlive" id="index-banner" class="swiper-container">
                <swiper class="my-swipe" :modules="[Autoplay, Pagination]" :slides-per-view="1" :pagination="{ clickable: true } as any" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :nested="true">
                  <swiper-slide v-for="ad in bannerAdvertisement" :key="ad.id">
                    <a target="_blank" :href="ad.targetUrl">
                      <img v-lazy-decrypt="ad.imgUrl" :alt="ad.title" />
                    </a>
                  </swiper-slide>
                </swiper>
              </nav>
              <nav class="i-m-b">
                <div class="b-row">
                  <a @click.prevent="openDownloadPage" href="#">
                    <span><i class="mvfont mv-appxiazai" /></span>
                    <small>APP下载</small>
                  </a>
                  <a @click="router.push({ name: 'share' })">
                    <span><i class="mvfont mv-fenxiang3" /></span>
                    <small>分享好友</small>
                  </a>
                  <a @click="router.push({ name: 'spare' })">
                    <span><i class="mvfont mv-yizhangtong" /></span>
                    <small>防丢失</small>
                  </a>
                  <a>
                    <span><i class="mvfont mv-changjianwenti" /></span>
                    <small>常见问题</small>
                  </a>
                  <a @click="showToast('暂未开通')">
                    <span><i class="mvfont mv-vip1" /></span>
                    <small>开通VIP</small>
                  </a>
                </div>
              </nav>

              <nav v-if="latestVideos && latestVideos.length > 0" class="mv-t-l">
                <div class="m-a">
                  <div class="a-l">
                    <i class="mvfont mv-xietiao" />
                    <span>最新视频</span>
                  </div>
                  <div class="a-r">
                    <i @click="router.push({ name: 'videoList', params: { id: 1 } })" class="mvfont mv-right" />
                  </div>
                </div>
                <div class="m-b">
                  <VideoGridItem v-for="video in latestVideos" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                </div>
              </nav>

              <nav v-if="recommendedVideos && recommendedVideos.length > 0" class="mv-t-l">
                <div class="m-a">
                  <div class="a-l">
                    <i class="mvfont mv-xietiao" />
                    <span>热门推荐</span>
                  </div>
                  <div class="a-r">
                    <i @click="router.push({ name: 'videoList', params: { id: 2 } })" class="mvfont mv-right" />
                  </div>
                </div>
                <div class="m-b">
                  <VideoGridItem v-for="video in recommendedVideos" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                </div>
              </nav>
            </div>
          </PullRefresh>
        </swiper-slide>
        <swiper-slide v-for="category in appStore.categorys" :key="category.d">
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div class="category-content">
              <div v-if="categoryBannerVideosMap[category.d] && categoryBannerVideosMap[category.d].length > 0 && keepAlive" class="mv-swiper">
                <swiper :modules="[Autoplay]" :slides-per-view="2" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :nested="true">
                  <swiper-slide v-for="video in categoryBannerVideosMap[category.d]" :key="video.id">
                    <a @click="router.push({ name: 'play', params: { id: video.id } })">
                      <img v-lazy-decrypt="video.imgUrl" :alt="video.title" />
                    </a>
                  </swiper-slide>
                </swiper>
              </div>
              <section class="m-l-b">
                <swiper v-if="category.s && category.s.length > 0" class="b-a" :modules="[FreeMode]" :free-mode="true as any" :slides-per-view="7" :space-between="10" :loop="false" :nested="true" @touch-start="handleTouchStart" :no-swiping="true" :no-swiping-class="'swiper-no-swiping'" :threshold="0" :touch-release-on-edges="false">
                  <swiper-slide :class="{ active: query.SubChannelId == '' }" @click="selectCategory('')">全部</swiper-slide>
                  <swiper-slide v-for="cates in category.s" :key="cates.d" :class="{ active: categorySubChannelId[query.ChannelId] == cates.d }" @click="selectCategory(cates.d)">
                    {{ cates.t }}
                  </swiper-slide>
                </swiper>
                <nav class="b-b">
                  <span v-for="sort in sortOptions" :key="sort.value" :class="{ active: categorySortType[query.ChannelId] == sort.value }" @click="changeSort(sort.value)">
                    {{ sort.label }}
                  </span>
                </nav>
                <nav class="mv-t-l">
                  <div class="m-b" v-if="categoryVideosMap[category.d]">
                    <VideoGridItem v-for="video in categoryVideosMap[category.d]" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                  </div>

                  <template v-if="categoryTotalPages[category.d] > 1">
                    <div class="au-pagination-box" v-if="categoryTotalPages[category.d] > 9">
                      <div class="pb-x">
                        <a @click="changePage(categoryPageIndex[category.d] - 1)" :class="{ disabled: categoryPageIndex[category.d] == 1 }">上一页</a>
                      </div>
                      <div class="pb-x">
                        <input v-model="categoryPageIndex[category.d]" @change="handlePageChange" type="number" min="1" :max="categoryTotalPages[category.d]" />
                        <span>/ {{ categoryTotalPages[category.d] }}</span>
                      </div>
                      <div class="pb-x">
                        <a @click="changePage(categoryPageIndex[category.d] + 1)" :class="{ disabled: categoryPageIndex[category.d] == categoryTotalPages[category.d] }">下一页</a>
                      </div>
                    </div>
                    <div v-else class="more-box"><a v-if="categoryPageIndex[category.d] < categoryTotalPages[category.d]" @click="loadMore">加载更多</a></div>
                  </template>
                </nav>
              </section>
            </div>
          </PullRefresh>
        </swiper-slide>
      </swiper>
      <!-- 首页弹窗 -->
      <Popup v-model:show="showPopup" position="center" :style="{ background: 'transparent' }" :close-on-click-overlay="false">
        <a target="_blank" :href="currentPopAd.targetUrl"><img v-lazy-decrypt="currentPopAd.imgUrl" alt="广告图片" style="width: 80%; height: auto; display: block; margin: 0 auto" /></a>
        <Icon name="close" size="30" @click="closePopup" style="display: block; text-align: center; margin: 20px auto" />
      </Popup>
    </main>
    <Footer active-menu="index" />
    <DownloadPop />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick, computed, watch, onMounted, onActivated, onDeactivated } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getIndexVideoListApi, getVideoListApi } from '@/api/video'
import { Tabs, Tab, PullRefresh, Popup, Icon, showToast } from 'vant'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useAppStoreHook } from '@/store/app'
import type { VideoListRequest, Video } from '@/types/video'
import { getAssetsFile } from '@/utils'
import { Autoplay, Pagination, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'

import Footer from '@/components/layout/Footer.vue'
import VideoGridItem from '@/components/VideoGridItem.vue'
import DownloadPop from '@/components/DownloadPop.vue'

const router = useRouter()
const route = useRoute()
const appStore = useAppStoreHook()

const keepAlive = ref(true)
const swiperInstance = ref<any>(null)
const searchSwiperInstance = ref<any>(null)

const refreshing = ref(false)

const activeId = ref(0)
const recommendedVideos = ref<Video[]>([])
const latestVideos = ref<Video[]>([])

const categoryVideosMap = ref({})
const categoryBannerVideosMap = ref({})
const categoryTotalPages = ref({})
const categoryPageIndex = ref({})
const categorySortType = ref({})
const categorySubChannelId = ref({})

const sortOptions = [
  { label: '按最新', value: 1 },
  { label: '按最热', value: 2 },
  { label: '按好评', value: 3 }
]

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}

const searchSwiper = (swiper: any) => {
  searchSwiperInstance.value = swiper
}

const query = reactive<VideoListRequest>({
  ChannelId: '',
  SubChannelId: '',
  SortType: 2,
  IsFirst: true,
  PageIndex: 1,
  PageSize: 20
})

const showPopup = ref(false)
const currentPopAdIndex = ref(0)
const bannerAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(2).items
  return tmp || []
})
const popAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(3).items
  return tmp || []
})
const currentPopAd = computed(() => {
  var item = popAdvertisement.value[currentPopAdIndex.value]
  return item || {}
})

// 监听邀请码
watch(
  () => route.query.inviteCode,
  (newVal) => {
    if (newVal) {
      localStorage.setItem('inviteCode', newVal as string)
    }
  },
  { immediate: true }
)

const closePopup = () => {
  if (currentPopAdIndex.value < popAdvertisement.value.length - 1) {
    currentPopAdIndex.value++
    showPopup.value = true
  } else {
    showPopup.value = false
    appStore.hasShownAnnouncement = false
  }
}

const fetchVideos = async (params: VideoListRequest, loadMore = false) => {
  const currentChannelId = params.ChannelId // 保存当前的 ChannelId
  const isFirst = params.IsFirst
  try {
    const {
      data: { data }
    } = await getVideoListApi(params)
    if (data && Array.isArray(data.items)) {
      if (loadMore) {
        categoryVideosMap.value[currentChannelId] = categoryVideosMap.value[currentChannelId].concat(data.items)
      } else {
        categoryVideosMap.value[currentChannelId] = data.items
      }
      if (isFirst) {
        categoryBannerVideosMap.value[currentChannelId] = data.newVideos
      }
      query.IsFirst = false
      categoryTotalPages.value[currentChannelId] = parseInt(data.pageCount)
      categoryPageIndex.value[currentChannelId] = parseInt(data.pageIndex)
      nextTick(() => {
        swiperInstance.value.updateAutoHeight()
      })
    } else {
      console.error('响应数据结构不正确')
      return []
    }
  } catch (error) {
    console.error(`获取视频列表失败:`, error)
    return []
  }
}

const fetchIndexVideos = async () => {
  try {
    const {
      data: { data }
    } = await getIndexVideoListApi()
    // 解密视频
    recommendedVideos.value = data.Recommended
    latestVideos.value = data.Latest
  } catch (error) {
    console.error(`获取首页视频列表失败:`, error)
    return []
  }
}

// 选择二级分类
const selectCategory = async (categoryId: string | number) => {
  query.PageIndex = 1
  query.SubChannelId = categoryId
  categoryPageIndex.value[query.ChannelId] = query.PageIndex
  categorySortType.value[query.ChannelId] = query.SortType
  categorySubChannelId.value[query.ChannelId] = query.SubChannelId
  query.IsFirst = false
  await fetchVideos(query)
}

// 切换页码
const changePage = async (newPage: number) => {
  if (newPage >= 1 && newPage <= categoryTotalPages.value[query.ChannelId]) {
    categoryPageIndex.value[query.ChannelId] = newPage
    query.PageIndex = newPage
    query.IsFirst = false
    await fetchVideos(query)
    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    nextTick(() => {
      window.scrollTo(0, 0)
    })
  }
}

// 加载更多
const loadMore = async () => {
  const newPage = query.PageIndex + 1
  if (newPage >= 1 && newPage <= categoryTotalPages.value[query.ChannelId]) {
    query.PageIndex = newPage
    query.IsFirst = false
    await fetchVideos(query, true)
  }
}

// 点击tab滑动到对应分类, 并重新获取数据
const clickTab = () => {
  if (swiperInstance.value) {
    swiperInstance.value.slideTo(activeId.value, 0)
  }
  // query.ChannelId = appStore.categorys[activeId.value - 1].d
  // if (!categoryVideosMap.value[query.ChannelId] || categoryVideosMap.value[query.ChannelId].length == 0) {
  //   handleCategoryChange()
  // } else {
  //   query.SubChannelId = ''
  // }
}

// 切换分类
const handleCategoryChange = async (isRefresh = false) => {
  query.PageIndex = 1
  categoryPageIndex.value[query.ChannelId] = 1
  if (isRefresh) {
    refreshing.value = true
  }
  if (activeId.value == 0) {
    await fetchIndexVideos()
    refreshing.value = false
  } else {
    query.IsFirst = true
    await fetchVideos(query)
    refreshing.value = false
  }
}

const swipePage = (swiper: any) => {
  activeId.value = swiper.activeIndex
  query.ChannelId = activeId.value == 0 ? '' : appStore.categorys[activeId.value - 1].d
  // 如果没有数据。则重新获取数据
  if (categoryVideosMap.value[query.ChannelId] == undefined) {
    query.PageIndex = 1
    categoryPageIndex.value[query.ChannelId] = 1
    query.SubChannelId = ''
    query.SortType = 1
    categorySortType.value[query.ChannelId] = query.SortType
    handleCategoryChange()
  }
  nextTick(() => {
    window.scrollTo(0, 0)
  })
}

// 分类页切换排序
const changeSort = async (sortValue) => {
  query.SortType = sortValue
  query.PageIndex = 1
  categoryPageIndex.value[query.ChannelId] = 1
  categorySortType.value[query.ChannelId] = query.SortType
  await fetchVideos(query)
}

// 页码变化
const handlePageChange = async () => {
  if (categoryPageIndex.value[query.ChannelId] >= 1 && categoryPageIndex.value[query.ChannelId] <= categoryTotalPages.value[query.ChannelId]) {
    query.PageIndex = categoryPageIndex.value[query.ChannelId]
    await fetchVideos(query)

    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    window.scrollTo(0, 0)
  }
}

const handleTouchStart = (event: any) => {
  event.preventDefault()
}

// 立即执行
;(async () => {
  await handleCategoryChange()
  if (appStore.advertisement.length == 0) {
    await appStore.fetAdvertisement()
  }
})()

const openDownloadPage = () => {
  const ua = navigator.userAgent
  if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
    window.open(appStore.iosDownloadUrl, '_blank')
  } else {
    window.open(appStore.androidDownloadUrl, '_blank')
  }
}

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const header = document.querySelector('.index-header')!
  const hmB = document.querySelector('.search-icon') as HTMLElement

  if (header && hmB) {
    if (scrollTop > 100) {
      hmB.style.display = 'block'
      header.classList.add('fixed')
    } else {
      hmB.style.display = 'none'
      header.classList.remove('fixed')
    }
  }
}

onActivated(() => {
  const header = document.querySelector('.index-header')
  if (header) {
    header.classList.remove('fixed')
  }
  keepAlive.value = true
})

onDeactivated(() => {
  keepAlive.value = false
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
</script>
<style scoped>
.category-content {
  min-height: 550px;
}
</style>
