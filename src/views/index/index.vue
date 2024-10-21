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
              <SwipeItem>永久域名:<span>mg51.tv</span></SwipeItem>
              <SwipeItem>永久域名:<span>mg91.tv</span></SwipeItem>
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
          <Tab v-for="category in appStore.categorys" :key="category.cId" :title="category.categoryName" />
        </Tabs>
        <div class="search-icon">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
    </header>
    <main class="main">
      <Swipe v-model="activeId" :show-indicators="false" @change="swipePage" lazy-render ref="swipeRef">
        <SwipeItem>
          <div class="index-content">
            <!--Banner-->
            <nav id="index-banner" class="swiper-container">
              <Swipe class="my-swipe" :autoplay="3000" lazy-render>
                <SwipeItem v-for="ad in bannerAds" :key="ad.adId">
                  <a :href="ad.url" :target="ad.target == 1 ? '_blank' : '_self'">
                    <img :src="appStore.systemSettings.customer_cdn_link + ad.thumbnail" :alt="ad.titles" />
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

            <nav v-if="hottestVideos && hottestVideos.length > 0" class="mv-t-l">
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
                <VideoGridItem v-for="video in hottestVideos" :key="video.videoId" :video="video" />
              </div>
            </nav>

            <nav v-if="topRatedVideos && topRatedVideos.length > 0" class="mv-t-l">
              <div class="m-a">
                <div class="a-l">
                  <i class="mvfont mv-xietiao" />
                  <span>评分最高</span>
                </div>
                <div class="a-r">
                  <i class="mvfont mv-right" />
                </div>
              </div>
              <div class="m-b">
                <VideoGridItem v-for="video in topRatedVideos" :key="video.videoId" :video="video" />
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
                <VideoGridItem v-for="video in latestVideos" :key="video.videoId" :video="video" />
              </div>
            </nav>
          </div>
        </SwipeItem>
        <SwipeItem v-for="category in appStore.categorys" :key="category.cId">
          <div class="category-content">
            <div class="mv-swiper" @touchstart.stop @touchmove.stop>
              <swiper :modules="modules" :slides-per-view="2" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :space-between="10">
                <swiper-slide v-for="ad in bannerAds" :key="ad.adId">
                  <a :href="ad.url" :target="ad.target == 1 ? '_blank' : '_self'">
                    <img :src="appStore.systemSettings.customer_cdn_link + ad.thumbnail" :alt="ad.titles" />
                  </a>
                </swiper-slide>
              </swiper>
            </div>
            <section class="m-l-b">
              <nav class="b-a">
                <span :class="{ active: selectedCategory == '' }" @click="selectCategory('')">全部</span>
                <span v-for="cates in category.children" :key="cates.cId" :class="{ active: selectedCategory == cates.cId }" @click="selectCategory(cates.cId)">
                  {{ 'categoryName' in cates ? cates.categoryName : '全部' }}
                </span>
              </nav>
              <nav class="b-b">
                <span v-for="sort in sortOptions" :key="sort.value" :class="{ active: query.sortBy == sort.value }" @click="changeSort(sort.value)">
                  {{ sort.label }}
                </span>
              </nav>
              <nav class="mv-t-l">
                <div class="m-b" v-if="categoryVideosMap[category.cId]">
                  <VideoGridItem v-for="video in categoryVideosMap[category.cId]" :key="video.videoId" :video="video" @click="router.push({ name: 'play', params: { id: video.videoId } })" />
                </div>
                <div class="au-pagination-box" v-if="totalPages > 1">
                  <div class="pb-x">
                    <a @click="changePage(query.page - 1)" :class="{ disabled: query.page == 1 }">上一页</a>
                  </div>
                  <div class="pb-x">
                    <input v-model="query.page" @change="handlePageChange" type="number" min="1" :max="totalPages" />
                    <span>/ {{ totalPages }}</span>
                  </div>
                  <div class="pb-x">
                    <a @click="changePage(query.page + 1)" :class="{ disabled: query.page == totalPages }">下一页</a>
                  </div>
                </div>
              </nav>
            </section>
          </div>
        </SwipeItem>
      </Swipe>
      <div class="pop-fixed" id="popNews" v-show="appStore.hasShownAnnouncement">
        <div class="pop-container">
          <div class="pop-bd news">
            <div class="pn-x" />
            <div class="pn-a">
              <h3>系统公告</h3>
            </div>
            <div class="pn-b" v-html="appStore.systemSettings.homepage_announcement" />
            <div class="pn-c">
              <a @click="appStore.setAnnouncementShown()">我已阅读</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { getAdListApi } from '@/api/app'
import { getVideoListApi } from '@/api/video'
import { Tabs, Tab, Swipe, SwipeItem } from 'vant'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useAppStoreHook } from '@/store/app'
import decryptionService from '@/utils/decryptionService'
import type { VideoQueryParams, Video } from '@/types/video'
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

const activeId = ref(0)
const bannerAds = ref([])
const latestVideos = ref<Video[]>([])
const hottestVideos = ref<Video[]>([])
const topRatedVideos = ref<Video[]>([])

const categoryVideosMap = ref({}) // 用于存储每个分类的 categoryVideos

const selectedCategory = ref('')

const sortOptions = [
  { label: '按最新', value: 'addTime' as const },
  { label: '按最热', value: 'clickCounts' as const },
  { label: '按好评', value: 'goodCounts' as const }
]

const query = reactive<VideoQueryParams>({
  categoryId: '',
  pageSize: 20,
  page: 1,
  sortBy: ''
})

const currentPage = ref(1)
const totalPages = ref(1)

// 获取banner广告
const fetchBannerAds = async (adPosition: number) => {
  try {
    const response = await getAdListApi(adPosition)
    bannerAds.value = response.data || []
  } catch (error) {
    console.error('获取banner广告失败:', error)
  }
}

const fetchVideos = async () => {
  try {
    const response = await getVideoListApi(query)
    if (response.data && Array.isArray(response.data.data)) {
      const decryptedVideos = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
      // 首页直接返回数据
      if (activeId.value == 0) {
        return decryptedVideos
      } else {
        categoryVideosMap.value[query.categoryId] = decryptedVideos
        console.log(query.categoryId)
        console.log(categoryVideosMap.value)
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

// 选择二级分类
const selectCategory = async (categoryId: string) => {
  selectedCategory.value = categoryId
  currentPage.value = 1 // 重置页码
  query.categoryId = parseInt(categoryId)
  await fetchVideos()
}

// 切换页码
const changePage = async (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    query.page = newPage
    await fetchVideos()
  }
}

// 点击tab滑动到对应分类, 并重新获取数据
const clickTab = () => {
  swipeRef.value.swipeTo(activeId.value)
  handleCategoryChange()
}

// 切换分类
const handleCategoryChange = async () => {
  query.page = 1
  if (activeId.value == 0) {
    await fetchBannerAds(1)
    query.sortBy = 'addTime'
    hottestVideos.value = await fetchVideos()
    query.sortBy = 'goodCounts'
    topRatedVideos.value = await fetchVideos()
    query.sortBy = 'clickCounts'
    latestVideos.value = await fetchVideos()
  } else {
    selectedCategory.value = ''
    query.categoryId = appStore.categorys[activeId.value - 1].cId
    await fetchBannerAds(2)
    await fetchVideos()
  }
}

const swipePage = throttle((index: number) => {
  activeId.value = index
  handleCategoryChange()
}, 200)

// 分类页切换排序
const changeSort = async (sortValue: 'addTime' | 'clickCounts' | 'goodCounts' | '') => {
  query.sortBy = sortValue
  query.page = 1
  await fetchVideos()
}

// 页码变化
const handlePageChange = async () => {
  if (query.page >= 1 && query.page <= totalPages.value) {
    await fetchVideos()
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
