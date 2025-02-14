<template>
  <div class="page">
    <Header />
    <section class="h-l-b">
      <div class="lb-b">
        <span v-for="item in rankOptions" :key="item.value" :class="{ active: activeRank == item.value }" @click="changeRank(item.value)">{{ item.label }}</span>
      </div>
      <div>
        <PullRefresh v-model="refreshing" @refresh="fresh">
          <List v-model:loading="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" @load="loadData">
            <div v-if="videos.length > 0" class="video-list-box">
              <div v-for="video in videos" :key="video.id" @click="clickVideo(video)" class="video-list">
                <div class="l-a">
                  <img :src="video.poster" :alt="video.poster" />
                  <template v-if="!video.isAd">
                    <span :class="'a-a _' + classifyResolution(video.resolution)">{{ classifyResolution(video.resolution) }}</span>
                    <span class="a-b" v-if="video.duration != '0'">{{ formatDuration(parseInt(video.duration)) }}</span>
                    <span class="a-c">{{ video.subChannelName ? video.subChannelName : video.channelName }}</span>
                  </template>
                </div>
                <div class="l-b">
                  <b>{{ video.title }}</b>
                  <div v-if="!video.isAd" class="b-a">
                    <div class="a-l">
                      <span><i class="mvfont mv-kan" />{{ formatNumber(video.viewCount) }}</span>
                      <span><i class="mvfont mv-zan" />{{ formatNumber(video.likeCount) }}</span>
                    </div>
                    <div class="a-r">
                      <span><i class="mvfont mv-riqi" />{{ dayjs(video.addTime).format('YYYY-MM-DD') }}</span>
                    </div>
                  </div>
                  <div v-else class="b-a">
                    <div class="a-l" />
                    <div class="a-r">
                      <span>广告</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </List>
        </PullRefresh>
        <BackTop />
      </div>
    </section>
    <NavBar active-menu="theme" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, computed, onUnmounted } from 'vue'
import { PullRefresh, List, BackTop } from 'vant'
import { getVideoListApi, getVideoRankApi } from '@/api/video'
import type { Video, VideoListRequest } from '@/types/video'
import type { DataWithAd } from '@/types/global.d'
import { formatDuration, classifyResolution, insertAds, openAd, formatNumber } from '@/utils'
import Header from '@/views/theme/themeHeader.vue'
import NavBar from '@/components/layout/NavBar.vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import decryptionService from '@/utils/decryptionService'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'
import dayjs from 'dayjs'

let msnry = null
const router = useRouter()
const decrypt = new decryptionService()
const appStore = useAppStore()

const videos = ref<DataWithAd<Video>[]>([])
const activeRank = ref('total')
const rankOptions = ref([
  { label: '总榜单', value: 'total' },
  { label: '月榜单', value: '0' },
  { label: '周榜单', value: '1' },
  { label: '日榜单', value: '2' }
])

let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)

let pageIndex = ref(1) // 当前页码

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

const fetchVideos = async (rank: string, isRefresh = false) => {
  if (isRefresh) {
    videos.value = []
    pageIndex.value = 1
    finished.value = false
  }
  if (finished.value) return

  try {
    listLoading.value = true
    const pageSize = rank === 'total' ? 15 : 10 // 根据榜单类型设置每页数量
    const params: VideoListRequest = {
      PageIndex: pageIndex.value,
      PageSize: pageSize,
      SortType: 2
    }

    let response
    if (rank === 'total') {
      response = await getVideoListApi(params)
    } else {
      response = await getVideoRankApi({ ...params, RankType: rank })
    }

    const {
      data: { data }
    } = response

    if (data && Array.isArray(data.items)) {
      // 插入广告
      data.items = insertAds(data.items, videoListAdvertisement.value, 5, 7, false)

      // 先等待全部解密图片存入poster
      await Promise.all(
        data.items.map(async (video) => {
          const blob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + video.imgUrl)
          video.poster = URL.createObjectURL(blob)
        })
      )

      const startIndex = videos.value.length
      if (isRefresh) {
        videos.value = data.items
      } else {
        videos.value = videos.value.concat(data.items)
      }

      await nextTick()
      const elem = document.querySelector('.video-list-box')
      if (elem) {
        imagesLoaded(elem, () => {
          if (!msnry) {
            msnry = new Masonry(elem, {
              itemSelector: '.video-list',
              columnWidth: '.video-list',
              percentPosition: true,
              gutter: 4
            })
          }
          const newElements = document.querySelectorAll(`.video-list-box .video-list:nth-child(n+${startIndex + 1})`)
          if (startIndex == 0) {
            msnry.reloadItems()
          } else {
            msnry.appended(newElements)
          }
          setTimeout(() => {
            msnry.layout()
          }, 300)
        })
      }

      finished.value = data.items.length < pageSize
    } else {
      if (isRefresh) {
        videos.value = []
      }
    }
  } catch (error) {
    console.error(`获取视频列表失败 (${rank}):`, error)
  } finally {
    refreshing.value = false
    listLoading.value = false
  }
}

const changeRank = (rank: string) => {
  activeRank.value = rank
  videos.value = []
  // 清理 Masonry 实例
  if (msnry) {
    msnry.destroy()
    msnry = null
  }
  fetchVideos(rank, true)
}

const loadData = () => {
  pageIndex.value += 1
  fetchVideos(activeRank.value)
}

const fresh = () => {
  refreshing.value = true
  fetchVideos(activeRank.value, true)
}

onMounted(() => {
  fetchVideos('total')
})

onUnmounted(() => {
  // 清理 Masonry 实例
  if (msnry) {
    msnry.destroy()
    msnry = null
  }
})
</script>
