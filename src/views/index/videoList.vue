<template>
  <div class="page">
    <header class="m-header">
      <div class="h-l" @click="router.push({ name: 'index' })"><i class="mvfont mv-left" /></div>
      <div class="h-m">
        <a v-for="tab in tabs" :key="tab.value" :class="{ active: activeTab === tab.value }" @click="changeTab(tab.value)">{{ tab.label }}</a>
      </div>
      <div class="h-r" @click="router.push({ name: 'search' })"><i class="mvfont mv-search1" /></div>
    </header>
    <section class="h-l-b">
      <PullRefresh v-model="refreshing" @refresh="refreshList" :success-text="$t('common.refreshSuccess')">
        <List v-model:loading="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" @load="loadData">
          <ul v-if="videos.length > 0" class="col-one">
            <template v-for="(video, index) in videos" :key="index">
              <li @click="clickVideo(video)">
                <div class="l-a">
                  <img v-lazy-decrypt="video.imgUrl" />
                  <template v-if="!video.isAd">
                    <span :class="'a-a _' + classifyResolution(video.resolution)">{{ classifyResolution(video.resolution) }}</span>
                    <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                    <span class="a-c">{{ video.subChannelName ? video.subChannelName : video.channelName }}</span>
                  </template>
                </div>
                <div class="l-b">
                  <b>{{ video.title }}</b>
                  <div class="b-a">
                    <template v-if="!video.isAd">
                      <div class="a-l">
                        <span><i class="mvfont mv-kan" />{{ formatNumber(video.viewCount) }}</span>
                        <span><i class="mvfont mv-zan" />{{ formatNumber(video.likeCount) }}</span>
                      </div>
                      <div class="a-r">
                        <span><i class="mvfont mv-riqi" />{{ fromNow(video.addTime) }}</span>
                      </div>
                    </template>
                    <template v-else>
                      <div class="a-l" />
                      <div class="a-r">
                        <span><i class="mvfont mv-riqi" />{{ $t('common.ad') }}</span>
                      </div>
                    </template>
                  </div>
                </div>
              </li>
            </template>
          </ul>
        </List>
      </PullRefresh>
    </section>
    <NavBar active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, onActivated, onDeactivated, watch, nextTick, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PullRefresh, List } from 'vant'
import { getVideoListApi } from '@/api/video'
import { useAppStore } from '@/store/app'
import type { Video, VideoListRequest } from '@/types/video'
import type { DataWithAd } from '@/types/global.d'
import { formatDuration, classifyResolution, fromNow, openAd, insertAds, formatNumber } from '@/utils'
import NavBar from '@/components/layout/NavBar.vue'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const { t } = useI18n()

const videos = ref<DataWithAd<Video>[]>([])
const activeTab = ref(0)
const tabs = ref([
  { label: t('videoList.sort.latest'), value: 1 },
  { label: t('videoList.sort.hot'), value: 2 },
  { label: t('videoList.sort.good'), value: 3 },
  { label: t('videoList.sort.collect'), value: 4 }
])

let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)

let pageIndex = ref(1) // 当前页码

let scrollPosition = 0
let shouldReloadData = true

const videoListAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(28).items
  return tmp || []
})

const clickVideo = (video: DataWithAd<Video>) => {
  if (video.isAd) {
    openAd(video.targetUrl, '视频列表广告', 'click', video.title, 1, video.id)
  } else {
    router.push({ name: 'play', params: { id: video.id } })
  }
}

const fetchVideos = async (sortType: number, isRefresh = false) => {
  if (isRefresh) {
    videos.value = []
    pageIndex.value = 1
    finished.value = false
  }
  if (finished.value) return

  try {
    listLoading.value = true
    const params: VideoListRequest = {
      PageIndex: pageIndex.value,
      PageSize: 10,
      SortType: sortType
    }

    const {
      data: { data }
    } = await getVideoListApi(params)

    if (data && Array.isArray(data.items)) {
      data.items = insertAds(data.items, videoListAdvertisement.value, 5, 7, false)

      if (isRefresh) {
        videos.value = data.items
      } else {
        videos.value = videos.value.concat(data.items)
      }
      if (data.items.length < params.PageSize) {
        finished.value = true
      }
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
  } finally {
    listLoading.value = false
    refreshing.value = false
  }
}

const changeTab = (tabValue: number) => {
  window.scrollTo(0, 0)
  activeTab.value = tabValue
  videos.value = []
  fetchVideos(tabValue, true)
}

const loadData = () => {
  pageIndex.value += 1
  fetchVideos(activeTab.value)
}

const refreshList = () => {
  fetchVideos(activeTab.value, true)
}

onActivated(() => {
  if (shouldReloadData) {
    const initialTab = parseInt(route.params.id as string, 10) || 0
    activeTab.value = initialTab
    fetchVideos(activeTab.value, true)
    window.scrollTo(0, 0)
  } else {
    nextTick(() => {
      setTimeout(() => {
        document.documentElement.scrollTop = scrollPosition
        document.body.scrollTop = scrollPosition
      }, 100)
    })
  }
  shouldReloadData = true
})

onDeactivated(() => {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
})

watch(
  () => route.name,
  (newRouteName, oldRouteName) => {
    if (oldRouteName == 'play' && newRouteName == 'videoList') {
      console.log('set shouldReloadData to false')
      shouldReloadData = false
    }
  }
)

// watch(
//   () => route.params.id,
//   (newId) => {
//     console.log(newId)
//     const newTab = parseInt(newId as string, 10) || 0
//     changeTab(newTab)
//   }
// )
</script>
