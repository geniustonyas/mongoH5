<template>
  <div class="page">
    <!-- <Header /> -->
    <section class="h-l-b short-list">
      <!-- <div class="lb-b">
        <span v-for="item in rankOptions" :key="item.value" :class="{ active: activeRank == item.value }" @click="changeRank(item.value)">{{ item.label }}</span>
      </div> -->
      <div>
        <PullRefresh v-model="refreshing" @refresh="fresh">
          <List v-model:loading="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" @load="loadData">
            <ul v-if="videos.length > 0" class="video-list-box">
              <li v-for="video in videos" :key="video.id" @click="router.push({ name: 'play', params: { id: video.id } })" class="video-list">
                <div class="l-a">
                  <img v-lazy-decrypt="video.imgUrl" />
                  <span :class="'a-a _' + classifyResolution(video.resolution)">{{ classifyResolution(video.resolution) }}</span>
                  <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                  <span class="a-c">{{ video.channelName }}</span>
                </div>
                <div class="l-b">
                  <b>{{ video.title }}</b>
                  <div class="b-a">
                    <div class="a-l">
                      <span><i class="mvfont mv-kan" />{{ getIncrementalNumberWithOffset(video.viewCount, 'v', video.id, 'view') }}</span>
                      <span><i class="mvfont mv-zan" />{{ getIncrementalNumberWithOffset(video.likeCount, 'v', video.id, 'like') }}</span>
                    </div>
                    <div class="a-r">
                      <span><i class="mvfont mv-riqi" />{{ dayjs(video.addTime).format('YYYY-MM-DD') }}</span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </List>
        </PullRefresh>
      </div>
    </section>
    <Footer active-menu="shortList" footer-class="footer" />
    <NavBar active-menu="shortList" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { PullRefresh, List } from 'vant'
import dayjs from 'dayjs'
import { getVideoListApi } from '@/api/video'
import type { Video, VideoListRequest } from '@/types/video'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import { useRouter } from 'vue-router'
import { formatDuration, getIncrementalNumberWithOffset, classifyResolution } from '@/utils'
import { useAppStore } from '@/store/app'

const router = useRouter()
const appStore = useAppStore()

const videos = ref<Video[]>([])
const initPageIndex = computed(() => Math.floor(Math.random() * (appStore.shortVideoListRandomMax - appStore.shortVideoListRandomMin + 1)) + appStore.shortVideoListRandomMin)
const pageIndex = ref(initPageIndex.value)
let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)

const fetchVideos = async (isRefresh = false) => {
  if (isRefresh) {
    videos.value = []
    pageIndex.value = initPageIndex.value
    finished.value = false
  }
  if (finished.value) return

  try {
    listLoading.value = true
    const params: VideoListRequest = {
      PageIndex: pageIndex.value,
      PageSize: 10,
      VideoType: 1,
      SortType: 1
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
      finished.value = data.items.length < params.PageSize
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
    error.value = true
  } finally {
    refreshing.value = false
    listLoading.value = false
  }
}

const loadData = () => {
  console.log('loadData')
  pageIndex.value += 1
  fetchVideos()
}

const fresh = () => {
  refreshing.value = true
  fetchVideos(true)
}

onMounted(() => {
  fetchVideos()
})
</script>
