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
      <PullRefresh v-model="refreshing" @refresh="refreshList">
        <List v-model:loading="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" @load="loadData">
          <ul v-if="videos.length > 0" class="col-one">
            <li v-for="video in videos" :key="video.id" @click="router.push({ name: 'play', params: { id: video.id } })">
              <div class="l-a">
                <img v-lazy="{ src: video.poster }" />
                <span v-if="video.clarity != '0'" class="a-a">{{ appStore.clarity[parseInt(video.clarity)] }}</span>
                <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                <span class="a-c">{{ video.channelName }}</span>
              </div>
              <div class="l-b">
                <b>{{ video.title }}</b>
                <div class="b-a">
                  <div class="a-l">
                    <span><i class="mvfont mv-kan" />{{ video.viewCount }}</span>
                    <span><i class="mvfont mv-zan" />{{ video.likeCount }}</span>
                  </div>
                  <div class="a-r">
                    <span><i class="mvfont mv-riqi" />{{ formatDate(video.addTime) }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </List>
      </PullRefresh>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PullRefresh, List } from 'vant'
import dayjs from 'dayjs'
import { getVideoListApi } from '@/api/video'
import type { Video, VideoListRequest } from '@/types/video'
import { formatDuration } from '@/utils'
import decryptionService from '@/utils/decryptionService'
import { useAppStoreHook } from '@/store/app'

const appStore = useAppStoreHook()
const decrypt = new decryptionService()
const route = useRoute()
const router = useRouter()

const videos = ref<Video[]>([])
const activeTab = ref(0)
const tabs = ref([
  { label: '最新', value: 1 },
  { label: '最热', value: 2 },
  { label: '好评', value: 3 },
  { label: '收藏', value: 4 }
])

let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)

let pageIndex = ref(1) // 当前页码

const fetchVideos = async (sortType: number, isRefresh = false) => {
  if (isRefresh) {
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

    const response = await getVideoListApi(params)
    const {
      data: { data }
    } = response

    if (data && Array.isArray(data.items)) {
      const newVideos = await Promise.all(
        data.items.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${appStore.imageDomain}${video.imgUrl}`)
        }))
      )
      if (isRefresh) {
        videos.value = newVideos
      } else {
        videos.value = [...videos.value, ...newVideos]
      }
      if (newVideos.length < 10) {
        finished.value = true
      }
    } else {
      if (isRefresh) {
        videos.value = []
      }
      finished.value = true
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
    if (isRefresh) {
      videos.value = []
    }
    finished.value = true
  } finally {
    listLoading.value = false
    if (isRefresh) {
      refreshing.value = false
    }
  }
}

const changeTab = (tabValue: number) => {
  window.scrollTo(0, 0)
  activeTab.value = tabValue
  fetchVideos(tabValue, true)
}

const loadData = () => {
  pageIndex.value += 1
  fetchVideos(activeTab.value)
}

const refreshList = () => {
  fetchVideos(activeTab.value, true)
}

const formatDate = (date: string) => {
  return dayjs(date).format('YYYY-MM-DD')
}

onMounted(() => {
  const initialTab = parseInt(route.params.id as string, 10) || 0
  activeTab.value = initialTab
  fetchVideos(initialTab)
})

watch(
  () => route.params.id,
  (newId) => {
    const newTab = parseInt(newId as string, 10) || 0
    changeTab(newTab)
  }
)
</script>
