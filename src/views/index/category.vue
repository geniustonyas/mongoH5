<template>
  <div class="page">
    <Header :active-id="route.params.id as string" />
    <main class="main">
      <div class="mv-swiper">
        <swiper :modules="modules" :slides-per-view="2" :centered-slides="true" :loop="true" :autoplay="{ delay: 2500, disableOnInteraction: false } as any" :space-between="10">
          <swiper-slide v-for="ad in bannerAds" :key="ad.adId">
            <a :href="ad.url" :target="ad.target === 1 ? '_blank' : '_self'">
              <img :src="appStore.systemSettings.customer_cdn_link + ad.thumbnail" :alt="ad.titles" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <section class="m-l-b">
        <nav class="b-a">
          <span v-for="category in categories" :key="category.cId" :class="{ active: selectedCategory === category.cId }" @click="selectCategory(category.cId)">
            {{ category.categoryName }}
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
              <a @click="changePage(currentPage - 1)" :class="{ disabled: currentPage === 1 }">上一页</a>
            </div>
            <div class="pb-x">
              <input v-model="currentPage" @change="fetchVideos" type="number" min="1" :max="totalPages" />
              <span>/ {{ totalPages }}</span>
            </div>
            <div class="pb-x">
              <a @click="changePage(currentPage + 1)" :class="{ disabled: currentPage === totalPages }">下一页</a>
            </div>
          </div>
        </nav>
      </section>
    </main>
    <Footer active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
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

const categories = computed(() => {
  const categoryId = route.params.id as string
  const parentCategory = appStore.categorys.find((cat) => cat.cId === categoryId)

  if (parentCategory && parentCategory.children) {
    return [{ cId: categoryId, categoryName: '全部' }, ...parentCategory.children]
  } else {
    // 如果没有找到对应的父分类或没有子分类，则返回空数组
    return []
  }
})

const fetchBannerAds = async () => {
  try {
    const response = await getAdListApi(2)
    bannerAds.value = response.data || []
  } catch (error) {
    console.error('获取banner广告失败:', error)
  }
}

const fetchVideos = async () => {
  try {
    const params: VideoQueryParams = {
      page: currentPage.value,
      pageSize: pageSize.value,
      sortBy: currentSort.value,
      categoryId: selectedCategory.value === route.params.id ? undefined : parseInt(selectedCategory.value, 10)
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
  fetchVideos()
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

watch([selectedCategory, currentSort], () => {
  currentPage.value = 1
  fetchVideos()
})

onMounted(async () => {
  const categoryId = route.params.id as string
  selectedCategory.value = categoryId
  await fetchBannerAds()
  await fetchVideos()
})
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
