<template>
  <div class="page">
    <header class="header">
      <div class="head-search">
        <div class="hs-a">
          <img @click="router.push({ name: 'index' })" :src="getAssetsFile('logo.png')" />
        </div>
        <div @click="router.push({ name: 'search' })" class="hs-b">
          <div class="sb-i">
            <input />
            <i class="mvfont mv-search1" />
          </div>
          <div class="sb-t">
            <Swipe :autoplay="3000" :vertical="true" :show-indicators="false" :touchable="false" style="line-height: 50px">
              <SwipeItem>番号/片名/演员</SwipeItem>
              <SwipeItem>
                永久域名:
                <span>{{ appStore.searchInputText }}</span>
              </SwipeItem>
            </Swipe>
          </div>
        </div>
        <div class="hs-c">
          <a @click="router.push({ name: 'history' })"><i class="mvfont mv-lishishijian-" /></a>
          <a @click="router.push({ name: 'home' })"><i class="mvfont mv-touxiang1" /></a>
        </div>
      </div>
      <div class="category-tabs">
        <Tabs v-model:active="activeId" class="vant-tabs" @click-tab="clickTab">
          <Tab title="首页" name="0" />
          <Tab v-for="category in appStore.categorys" :key="category.d" :title="category.t" />
        </Tabs>
        <div class="search-icon">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
    </header>
    <main class="main">
      <Swipe v-model="activeId" :show-indicators="false" :loop="false" @change="swipePage" lazy-render ref="swipeRef">
        <SwipeItem>
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div class="index-content">
              <!--Banner-->
              <nav id="index-banner" class="swiper-container">
                <Swipe class="my-swipe" :autoplay="3000" lazy-render>
                  <SwipeItem v-for="ad in appStore.getAdvertisementById(1).items" :key="ad.id">
                    <a :href="ad.targetUrl">
                      <img :src="appStore.cdnUrl + '/' + ad.imgUrl" :alt="ad.title" />
                    </a>
                  </SwipeItem>
                </Swipe>
              </nav>
              <nav class="i-m-b">
                <a @click.prevent="openDownloadPage" href="#">
                  <i class="mvfont mv-appxiazai" />
                  <span>APP下载</span>
                </a>
                <a @click="router.push({ name: 'share' })">
                  <i class="mvfont mv-fenxiang3" />
                  <span>分享好友</span>
                </a>
                <a @click="router.push({ name: 'spare' })">
                  <i class="mvfont mv-yizhangtong" />
                  <span>防丢失</span>
                </a>
                <a>
                  <i class="mvfont mv-changjianwenti" />
                  <span>常见问题</span>
                </a>
              </nav>

              <nav v-if="recommendedVideos && recommendedVideos.length > 0" class="mv-t-l">
                <div class="m-a">
                  <div class="a-l">
                    <i class="mvfont mv-xietiao" />
                    <span>热门推荐</span>
                  </div>
                  <div class="a-r">
                    <i class="mvfont mv-right" />
                  </div>
                </div>
                <div class="m-b">
                  <VideoGridItem v-for="video in recommendedVideos" :key="video.id" :video="video" />
                </div>
              </nav>

              <nav v-if="latestVideos && latestVideos.length > 0" class="mv-t-l">
                <div class="m-a">
                  <div class="a-l">
                    <i class="mvfont mv-xietiao" />
                    <span>最新视频</span>
                  </div>
                  <div class="a-r">
                    <i class="mvfont mv-right" />
                  </div>
                </div>
                <div class="m-b">
                  <VideoGridItem v-for="video in latestVideos" :key="video.id" :video="video" />
                </div>
              </nav>
            </div>
          </PullRefresh>
        </SwipeItem>
        <SwipeItem v-for="category in appStore.categorys" :key="category.d">
          <PullRefresh v-model="refreshing" @refresh="handleCategoryChange(true)">
            <div class="category-content">
              <div class="mv-swiper" @touchstart.stop @touchmove.stop>
                <swiper :modules="modules" :slides-per-view="2" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :space-between="10">
                  <swiper-slide v-for="categoryBanner in categoryBannerMap[category.d]" :key="categoryBanner.id">
                    <a @click="router.push({ name: 'play', params: { id: categoryBanner.id } })">
                      <img :src="categoryBanner.poster" :alt="categoryBanner.title" />
                    </a>
                  </swiper-slide>
                </swiper>
              </div>
              <section class="m-l-b">
                <nav class="b-a">
                  <span :class="{ active: query.SubChannelId == '' }" @click="selectCategory('')">全部</span>
                  <span v-for="cates in category.s" :key="cates.d" :class="{ active: query.SubChannelId == cates.d }" @click="selectCategory(cates.d)">
                    {{ cates.t }}
                  </span>
                </nav>
                <nav class="b-b">
                  <span v-for="sort in sortOptions" :key="sort.value" :class="{ active: query.SortType == sort.value }" @click="changeSort(sort.value)">
                    {{ sort.label }}
                  </span>
                </nav>
                <nav class="mv-t-l">
                  <div class="m-b" v-if="categoryVideosMap[category.d]">
                    <VideoGridItem v-for="video in categoryVideosMap[category.d]" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
                  </div>
                  <div class="au-pagination-box" v-if="categoryTotalPages[category.d] > 1">
                    <div class="pb-x">
                      <a @click="changePage(parseInt(categoryPageIndex[category.d]) - 1)" :class="{ disabled: categoryPageIndex[category.d] == 1 }">上一页</a>
                    </div>
                    <div class="pb-x">
                      <input v-model="categoryPageIndex[category.d]" @change="handlePageChange" type="number" min="1" :max="categoryTotalPages[category.d]" />
                      <span>/ {{ categoryTotalPages[category.d] }}</span>
                    </div>
                    <div class="pb-x">
                      <a @click="changePage(parseInt(categoryPageIndex[category.d]) + 1)" :class="{ disabled: categoryPageIndex[category.d] == categoryTotalPages[category.d] }">下一页</a>
                    </div>
                  </div>
                </nav>
              </section>
            </div>
          </PullRefresh>
        </SwipeItem>
      </Swipe>
      <div class="pop-fixed" id="popNews" v-if="appStore.showAnnouncement">
        <div class="pop-container">
          <div class="pop-bd news">
            <div class="pn-x" />
            <div class="pn-a">
              <h3>系统公告</h3>
            </div>
            <div class="pn-b" v-html="appStore.getAdvertisementById(3).items[0].introduction" />
            <div class="pn-c">
              <a @click="appStore.hasShownAnnouncement = false">我已阅读</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { getIndexVideoListApi, getVideoListApi } from '@/api/video'
import { Tabs, Tab, Swipe, SwipeItem, PullRefresh } from 'vant'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useAppStoreHook } from '@/store/app'
import decryptionService from '@/utils/decryptionService'
import type { VideoListRequest, Video } from '@/types/video'
import { getAssetsFile } from '@/utils'
import { Autoplay } from 'swiper/modules'
import type { SwipeInstance } from 'vant'
import { throttle } from 'lodash-es'
import 'swiper/css'

import Footer from '@/components/layout/Footer.vue'
import VideoGridItem from '@/components/VideoGridItem.vue'

const router = useRouter()

const appStore = useAppStoreHook()

const decrypt = new decryptionService()

const swipeRef = ref<SwipeInstance>()
const modules = [Autoplay]

const refreshing = ref(false)

const activeId = ref(0)
const recommendedVideos = ref<Video[]>([])
const latestVideos = ref<Video[]>([])

const categoryVideosMap = ref({})
const categoryBannerMap = ref({})
const categoryTotalPages = ref({})
const categoryPageIndex = ref({})

const sortOptions = [
  { label: '按最新', value: 1 },
  { label: '按最热', value: 2 },
  { label: '按好评', value: 3 }
]

const query = reactive<VideoListRequest>({
  ChannelId: '',
  SubChannelId: '',
  SortType: 2,
  IsFirst: true,
  PageIndex: 1,
  PageSize: 20
})

const fetchVideos = async (params: VideoListRequest) => {
  try {
    const response = await getVideoListApi(params)
    if (response.data && Array.isArray(response.data.items)) {
      const videoList = await Promise.all(
        response.data.items.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
        }))
      )
      if (activeId.value == 0) {
        return videoList
      } else {
        const swiperList = await Promise.all(
          response.data.newVideos.map(async (video) => ({
            ...video,
            poster: await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
          }))
        )

        categoryVideosMap.value[query.ChannelId] = videoList
        categoryBannerMap.value[query.ChannelId] = swiperList
        categoryTotalPages.value[query.ChannelId] = response.data.pageCount
        categoryPageIndex.value[query.ChannelId] = response.data.pageIndex
      }
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
    const response = await getIndexVideoListApi()
    // 解密视频
    recommendedVideos.value = await Promise.all(
      response.data.Recommended.map(async (video: Video) => ({
        ...video,
        poster: await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
      }))
    )
    latestVideos.value = await Promise.all(
      response.data.Latest.map(async (video: Video) => ({
        ...video,
        poster: await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
      }))
    )
  } catch (error) {
    console.error(`获取首页视频列表失败:`, error)
    return []
  }
}

// 选择二级分类
const selectCategory = async (categoryId: string | number) => {
  query.PageIndex = 1 // 重置页码
  categoryPageIndex.value[query.ChannelId] = 1
  query.SubChannelId = categoryId
  await fetchVideos(query)
}

// 切换页码
const changePage = async (newPage: number) => {
  if (newPage >= 1 && newPage <= categoryTotalPages.value[query.ChannelId]) {
    categoryPageIndex.value[query.ChannelId] = newPage
    query.PageIndex = newPage
    await fetchVideos(query)
    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    nextTick(() => {
      const mainElement = document.querySelector('.category-content')
      if (mainElement) {
        mainElement.scrollTop = 0 // 重置滚动条到顶部
      }
    })
  }
}

// 点击tab滑动到对应分类, 并重新获取数据
const clickTab = () => {
  swipeRef.value.swipeTo(activeId.value, { immediate: true })
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
    await fetchVideos(query)
    refreshing.value = false
  }
}

const swipePage = throttle(async (index: number) => {
  activeId.value = index
  query.ChannelId = activeId.value == 0 ? '' : appStore.categorys[activeId.value - 1].d
  if (!categoryVideosMap.value[query.ChannelId] || categoryVideosMap.value[query.ChannelId].length == 0) {
    handleCategoryChange()

    // 预加载下一个swipeItem的内容
    // if (!categoryVideosMap.value[appStore.categorys[activeId.value].d] || categoryVideosMap.value[appStore.categorys[activeId.value].d].length == 0) {
    //   await fetchVideos({ ...query, ChannelId: appStore.categorys[activeId.value].d })
    // }
  } else {
    query.SubChannelId = ''
  }
}, 200)

// 分类页切换排序
const changeSort = async (sortValue) => {
  query.SortType = sortValue
  query.PageIndex = 1
  categoryPageIndex.value[query.ChannelId] = 1
  await fetchVideos(query)
}

// 页码变化
const handlePageChange = async () => {
  if (categoryPageIndex.value[query.ChannelId] >= 1 && categoryPageIndex.value[query.ChannelId] <= categoryTotalPages.value[query.ChannelId]) {
    query.PageIndex = categoryPageIndex.value[query.ChannelId]
    await fetchVideos(query)

    // 使用 Vue 的 nextTick 确保 DOM 更新后再重置滚动条
    nextTick(() => {
      const mainElement = document.querySelector('.category-content')
      if (mainElement) {
        mainElement.scrollTop = 0 // 重置滚动条到顶部
      }
    })
  }
}

// 立即执行
;(async () => {
  await handleCategoryChange()
})()

const openDownloadPage = () => {
  const baseUrl = window.location.origin + import.meta.env.BASE_URL
  window.open(baseUrl + 'appdownload/index.html', '_blank')
}

function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const header = document.querySelector('.header')!
  const hmB = document.querySelector('.search-icon') as HTMLElement

  if (scrollTop > 100) {
    hmB.style.display = 'block'
    header.classList.add('fixed')
  } else {
    hmB.style.display = 'none'
    header.classList.remove('fixed')
  }
}

// 使用 passive 选项来提高滚动性能
window.addEventListener('scroll', handleScroll, { passive: true })
</script>

<style scoped>
.category-content {
  min-height: 550px;
}
</style>
