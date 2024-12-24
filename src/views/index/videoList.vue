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
                <img v-lazy-decrypt="video.imgUrl" />
                <span :class="'a-a _' + classifyResolution(video.resolution)">{{ classifyResolution(video.resolution) }}</span>
                <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                <span class="a-c">{{ video.subChannelName ? video.subChannelName : video.channelName }}</span>
              </div>
              <div class="l-b">
                <b>{{ video.title }}</b>
                <div class="b-a">
                  <div class="a-l">
                    <span><i class="mvfont mv-kan" />{{ video.viewCount }}</span>
                    <span><i class="mvfont mv-zan" />{{ video.likeCount }}</span>
                  </div>
                  <div class="a-r">
                    <span><i class="mvfont mv-riqi" />{{ fromNow(video.addTime) }}</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </List>
      </PullRefresh>
    </section>
    <NavBar active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { ref, onActivated, onDeactivated, watch, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { PullRefresh, List } from 'vant'
import { getVideoListApi } from '@/api/video'
import type { Video, VideoListRequest } from '@/types/video'
import { formatDuration, classifyResolution, fromNow } from '@/utils'
import NavBar from '@/components/layout/NavBar.vue'
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

let scrollPosition = 0
let shouldReloadData = true

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
