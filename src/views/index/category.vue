<template>
  <div class="page">
    <Header :active-id="route.params.id as string" />
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
            <div v-for="video in videos" :key="video.videoId" class="item" @click="router.push({ name: 'play', params: { id: video.videoId } })">
              <div class="i-a" v-lazy:background-image="video.poster">
                <span class="a-b">{{ video.playTime }}</span>
                <span class="a-c">{{ video.categoryName }}</span>
              </div>
              <div class="i-b">
                <b>{{ video.title }}</b>
                <p>
                  <span><i class="mvfont mv-kan" />{{ video.clickCounts }}</span>
                  <span><i class="mvfont mv-zan" />{{ video.goodCounts }}</span>
                </p>
              </div>
            </div>
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
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import { useAppStoreHook } from '@/store/app'
import { getAdListApi } from '@/api/app'
import { getVideoListApi } from '@/api/video'
import decryptionService from '@/utils/decryptionService'
import type { VideoQueryParams, Video } from '@/types/video'

import Footer from '@/components/layout/Footer.vue'
import Header from '@/views/index/indexHeader.vue'

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
const pageSize = ref(30)

const modules = [Autoplay]

const sortOptions = [
  { label: '按最新', value: 'addTime' as const },
  { label: '按最热', value: 'clickCounts' as const },
  { label: '按好评', value: 'goodCounts' as const }
]

const categories = ref<({ cId: string; categoryName: string } | { cId: string; children: { cId: string; categoryName: string }[] })[]>([])

const fetchBannerAds = async () => {
  try {
    const response = await getAdListApi(2)
    bannerAds.value = response.data || []
  } catch (error) {
    console.error('获取banner广告失败:', error)
  }
}

const fetchVideos = async (categoryId?: string) => {
  try {
    const params: VideoQueryParams = {
      page: currentPage.value,
      pageSize: pageSize.value,
      sortBy: currentSort.value,
      categoryId: categoryId ? parseInt(categoryId, 10) : parseInt(route.params.id as string, 10)
    }
    const response = await getVideoListApi(params)

    if (response.data && Array.isArray(response.data.data)) {
      videos.value = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
      currentPage.value = response.data.data.currentPage
      totalPages.value = response.data.data.totalPages
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
  }
}

const selectCategory = (categoryId: string) => {
  selectedCategory.value = categoryId
  currentPage.value = 1 // 重置页码
  fetchVideos(categoryId)
}

const changeSort = (sortValue: 'addTime' | 'clickCounts' | 'goodCounts') => {
  currentSort.value = sortValue
  fetchVideos()
}

const changePage = (newPage: number) => {
  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage
    fetchVideos()
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

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      selectedCategory.value = newId as string
      currentPage.value = 1 // 重置页码
      updateCategories(newId as string)
      fetchVideos(newId as string)
    }
  },
  { immediate: true }
)

onMounted(async () => {
  await fetchBannerAds()
})

const handlePageChange = () => {
  fetchVideos()
}
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
