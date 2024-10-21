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
        <Tabs v-model:active="activeId" @click-tab="handleCategoryChange" class="vant-tabs">
          <Tab title="首页" name="0" />
          <Tab v-for="category in categoryTop" :key="category.cId" :title="category.categoryName" :name="category.cId" />
        </Tabs>
        <div class="search-icon">
          <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
        </div>
      </div>
    </header>
    <main class="main">
      <div class="mv-swiper">
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
          <span v-for="category in categories" :key="category.cId" :class="{ active: selectedCategory == category.cId }" @click="selectCategory(category.cId)">
            {{ 'categoryName' in category ? category.categoryName : '全部' }}
          </span>
        </nav>
        <nav class="b-b">
          <span v-for="sort in sortOptions" :key="sort.value" :class="{ active: currentSort == sort.value }" @click="changeSort(sort.value)">
            {{ sort.label }}
          </span>
        </nav>
        <nav class="mv-t-l">
          <div class="m-b">
            <VideoGridItem v-for="video in videos" :key="video.videoId" :video="video" @click="router.push({ name: 'play', params: { id: video.videoId } })" />
          </div>
          <div class="au-pagination-box" v-if="totalPages > 1">
            <div class="pb-x">
              <a @click="changePage(currentPage - 1)" :class="{ disabled: currentPage == 1 }">上一页</a>
            </div>
            <div class="pb-x">
              <input v-model="currentPage" @change="handlePageChange" type="number" min="1" :max="totalPages" />
              <span>/ {{ totalPages }}</span>
            </div>
            <div class="pb-x">
              <a @click="changePage(currentPage + 1)" :class="{ disabled: currentPage == totalPages }">下一页</a>
            </div>
          </div>
        </nav>
      </section>
    </main>
    <Footer active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { useAppStoreHook } from '@/store/app'
import { getAdListApi } from '@/api/app'
import { getVideoListApi } from '@/api/video'
import decryptionService from '@/utils/decryptionService'
import type { VideoQueryParams, Video } from '@/types/video'
import { getAssetsFile } from '@/utils'
import { Swipe, SwipeItem } from 'vant'
import { Tabs, Tab } from 'vant'

import Footer from '@/components/layout/Footer.vue'
import VideoGridItem from '@/components/VideoGridItem.vue'

import 'swiper/css'

const route = useRoute()
const router = useRouter()
const appStore = useAppStoreHook()
const decrypt = new decryptionService()

const bannerAds = ref([])
const videos = ref<Video[]>([])
const selectedCategory = ref('')
const currentSort = ref<'addTime' | 'clickCounts' | 'goodCounts'>('addTime')
const currentPage = ref(1)
const totalPages = ref(1)
const pageSize = ref(20)

const activeId = ref<string | number>((route.params.id as any) || 0) // 确保类型为 string 或 number

const modules = [Autoplay]

const sortOptions = [
  { label: '按最新', value: 'addTime' as const },
  { label: '按最热', value: 'clickCounts' as const },
  { label: '按好评', value: 'goodCounts' as const }
]

// 获取一级分类
const categoryTop = computed(() => {
  return appStore.categorys.filter((category) => !category.pId)
})

// 获取二级分类
const categories = ref<({ cId: string; categoryName: string } | { cId: string; children: { cId: string; categoryName: string }[] })[]>([])

// 获取banner广告
const fetchBannerAds = async () => {
  try {
    const response = await getAdListApi(2)
    bannerAds.value = response.data || []
  } catch (error) {
    console.error('获取banner广告失败:', error)
  }
}

// 获取视频列表
const fetchVideos = async (categoryId?: string) => {
  try {
    const params: VideoQueryParams = {
      page: currentPage.value,
      pageSize: pageSize.value,
      sortBy: currentSort.value,
      categoryId: categoryId ? parseInt(categoryId, 10) : undefined
    }
    const response = await getVideoListApi(params)

    if (response.data && Array.isArray(response.data.data)) {
      videos.value = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
      currentPage.value = (response.data as any).page || 1
      totalPages.value = (response.data as any).totalPages || 10
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
  }
}

// 选择二级分类
const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId
  currentPage.value = 1 // 重置页码
  fetchVideos(categoryId)
}

// 选择排序
const changeSort = (sortValue: 'addTime' | 'clickCounts' | 'goodCounts') => {
  currentSort.value = sortValue
  fetchVideos(selectedCategory.value)
}

// 选择页码
const changePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage
    fetchVideos(selectedCategory.value)
  }
}

const updateCategories = (categoryId: string) => {
  const parentCategory = appStore.categorys.find((cat) => cat.cId == categoryId)
  if (parentCategory && parentCategory.children) {
    categories.value = [{ cId: categoryId, categoryName: '全部' }, ...parentCategory.children]
  } else {
    categories.value = []
  }
}

const handleCategoryChange = ({ name }) => {
  if (name == '0') {
    router.push({ name: 'index' })
  }
  // activeId.value = name
  selectedCategory.value = ''
  currentPage.value = 1 // 重置页码
  updateCategories(name)
  fetchVideos(name)
}

onMounted(async () => {
  await fetchBannerAds()
  if (route.params.id) {
    nextTick(() => {
      activeId.value = parseInt(route.params.id as any)
      handleCategoryChange({ name: activeId.value })
    })
  }
})

const handlePageChange = () => {
  fetchVideos(selectedCategory.value)
}

// function handleScroll() {
//   const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//   const header = document.querySelector('.header')!
//   const hmB = document.querySelector('.search-icon') as HTMLElement

//   if (scrollTop > 100) {
//     hmB.style.display = 'block'
//     header.classList.add('fixed')
//   } else {
//     hmB.style.display = 'none'
//     header.classList.remove('fixed')
//   }
// }
// // 使用 passive 选项来提高滚动性能
// window.addEventListener('scroll', handleScroll, { passive: true })
</script>

<style scoped>
.mv-swiper {
  max-height: 18rem;
}
.swiper {
  height: 100%;
}
.swiper-slide {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.swiper-slide img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
}
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
