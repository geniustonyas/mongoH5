<template>
  <HomeLayout>
    <div class="short-List">
      <section class="au-main">
        <div class="pre-menu">
          <span :class="{ active: activePreMenu === 0 }" @click="handlePreMenuClick(0)">
            <b>成人抖音</b>
            <small>成人小视频</small>
          </span>
          <span :class="{ active: activePreMenu === 1 }" @click="handlePreMenuClick(1)">
            <b>海外吃瓜</b>
            <small>网罗全球热点</small>
          </span>
          <span :class="{ active: activePreMenu === 2 }" @click="handlePreMenuClick(2)">
            <b>暗网资讯</b>
            <small>看资讯，打开新世界</small>
          </span>
        </div>
        <div class="sub-menu">
          <span :class="{ active: activeSubMenu === 0 }" @click="handleSubMenuClick(0)">热门</span>
          <span :class="{ active: activeSubMenu === 1 }" @click="handleSubMenuClick(1)">推荐</span>
          <span :class="{ active: activeSubMenu === 2 }" @click="handleSubMenuClick(2)">最新</span>
          <span :class="{ active: activeSubMenu === 3 }" @click="handleSubMenuClick(3)">周热</span>
          <span :class="{ active: activeSubMenu === 4 }" @click="handleSubMenuClick(4)">热搜</span>
          <span :class="{ active: activeSubMenu === 5 }" @click="handleSubMenuClick(5)">点赞</span>
          <span :class="{ active: activeSubMenu === 6 }" @click="handleSubMenuClick(6)">收藏</span>
          <span :class="{ active: activeSubMenu === 7 }" @click="handleSubMenuClick(7)">随机</span>
        </div>
        <section class="h-l-b">
          <PullRefresh v-model="refreshing" @refresh="handleRefresh">
            <List v-model:loading="loading" :offset="20" :finished="finished" :immediate-check="false"
                  v-model:error="error" @load="handleLoadVideoWithAd">
              <div class="video-list-box">
                <template v-for="(vd, index) in videos" :key="`${vd.imgUrl}${index}`">
                  <div v-if="!vd.isAd" class="video-list">
                    <div class="l-a">
                      <img :src="vd.poster" :alt="vd.title" />
                      <span class="a-b" v-if="vd.duration != '0'">{{ formatDuration(parseInt(vd.duration)) }}</span>
                    </div>
                    <div class="l-b">
                      <b>{{ vd.title }}</b>
                      <div class="b-a">
                        <div class="a-l">
                          <span>{{ formatNumber(vd.viewCount) }}</span>
                        </div>
                        <div class="a-r">
                          <i class="mvfont mv-xihuan0" />
                          <span>{{ formatNumber(vd.likeCount) }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div v-else @click="openAd(vd.targetUrl, '短视频列表广告', 'click', vd.id)" class="video-list">
                    <div class="l-a">
                      <img :src="vd.poster" :alt="vd.title" />
                    </div>
                    <div class="l-b">
                      <b>{{ vd.title }}</b>
                      <div class="b-a" />
                    </div>
                  </div>
                </template>
              </div>
            </List>
          </PullRefresh>
        </section>
      </section>
    </div>
  </HomeLayout>
</template>

<script setup lang="ts">
import HomeLayout from '@/components/layout/HomeLayout.vue'
import { List, PullRefresh } from 'vant'
import { formatDuration, formatNumber, insertAdsForShortList, openAd } from '@/utils'
import { nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { VideoWithAd } from '@/types/global'
import { useAppStore } from '@/store/app'
import type { VideoListRequest } from '@/types/video'
import { getVideoListApi } from '@/api/video'
import decryptionService from '@/utils/decryptionService'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

let masonryInstance: Masonry | null = null

const decrypt = new decryptionService()
const loading = ref(false)
const refreshing = ref(false)
const finished = ref(false)
const error = ref(false)
const activePreMenu = ref(0)
const activeSubMenu = ref(0)
const appStore = useAppStore()
const videos = reactive<VideoWithAd[]>([])
const totalPages = ref(0)
const initPageNo = ref(
  Math.floor(
    Math.random() *
    (appStore.shortVideoRandomMax - appStore.shortVideoRandomMin + 1)) +
  appStore.shortVideoRandomMin
)

watch(() => refreshing.value, () => {
  if (refreshing.value) {
    reloadVideos()
  }
})

const shortlistAdvertisement = () => {
  const tmp = appStore.getAdvertisementById(29).items
  return tmp || []
}

const fetchVideos = async (isRefresh: boolean) => {
  if (finished.value) return
  const params: VideoListRequest = {
    PageIndex: initPageNo.value,
    PageSize: 10,
    VideoType: 1,
    SortType: 1
  }
  const adsList = shortlistAdvertisement()
  let dataWithAds: VideoWithAd[] = []
  const { data: { data } } = await getVideoListApi(params)

  if (data && Array.isArray(data.items)) {
    totalPages.value = parseInt(data.pageCount)
    if (isRefresh && (totalPages.value < initPageNo.value)) {
      while (totalPages.value < initPageNo.value) {
        initPageNo.value = Math.floor(
          Math.random() * (appStore.shortVideoRandomMax - appStore.shortVideoRandomMin + 1)
        ) + appStore.shortVideoRandomMin
      }
      await fetchVideos(false)
      return
    }

    if (adsList && Array.isArray(adsList) && adsList.length > 0) {
      dataWithAds = insertAdsForShortList(data.items, adsList, 5, 7, false)
    } else {
      dataWithAds = data.items.map((item) => ({ ...item, isAd: false })) as VideoWithAd[]
    }

    // 必须先等待解密图片存入poster中
    for (const video of dataWithAds) {
      video.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + video.imgUrl))
    }
    const startIndex = videos.length
    if (isRefresh) {
      videos.splice(0, videos.length, ...dataWithAds)
    } else {
      videos.splice(startIndex, dataWithAds.length, ...dataWithAds)
    }
    finished.value = data.items.length < params.PageSize
    loading.value = false
  }
}

const updateMasonry = async () => {
  await nextTick()
  const elem = document.querySelector('.video-list-box')
  if (!elem) return

  // 等待图片加载完成
  imagesLoaded(elem, () => {
    if (!masonryInstance) {
      masonryInstance = new Masonry(elem, {
        itemSelector: '.video-list',
        columnWidth: '.video-list',
        percentPosition: true,
        gutter: 4
      })
    } else {
      masonryInstance.reloadItems()
      masonryInstance.layout()
    }
  })
}

const reloadVideos = async () => {
  videos.splice(0, videos.length)
  try {
    refreshing.value = true
    loading.value = true
    await fetchVideos(true)
    await updateMasonry()
  } catch (e) {
    console.error('获取视频列表失败:', e)
    error.value = true
  } finally {
    refreshing.value = false
    loading.value = false
  }
}

onMounted(async () => {
  try {
    loading.value = true
    await fetchVideos(true)
    await updateMasonry()
    loading.value = false
  } catch (e) {
    console.error('获取视频列表失败:', e)
    error.value = true
    loading.value = false
  } finally {
    refreshing.value = false
    loading.value = false
  }
})

onBeforeUnmount(() => {
  if (masonryInstance) {
    masonryInstance.destroy()
    masonryInstance = null
  }
})

const handleRefresh = () => {
  refreshing.value = true
  finished.value = false
}

const handleLoadVideoWithAd = async () => {
  try {
    loading.value = true
    initPageNo.value++
    await fetchVideos(false)
    await updateMasonry()
  } catch (error) {
    console.error('Load more failed:', error)
  } finally {
    loading.value = false
  }
}

const handlePreMenuClick = (index: number) => {
  activePreMenu.value = index
}

const handleSubMenuClick = (index: number) => {
  activeSubMenu.value = index
}
</script>

<style scoped>
.short-List .au-main .h-l-b {
  height: calc(100vh - 4.8rem - 4.8rem - 4.8rem + env(safe-area-inset-bottom));
  overflow: auto;
}
</style>
