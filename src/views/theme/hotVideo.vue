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
            <ul v-if="videos.length > 0" class="video-list-box">
              <li v-for="video in videos" :key="video.id" @click="router.push({ name: 'play', params: { id: video.id } })" class="video-list">
                <div class="l-a">
                  <img v-lazy="{ src: video.poster, loading: getAssetsFile('default2.gif') }" />
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { PullRefresh, List } from 'vant'
import dayjs from 'dayjs'
import { getVideoListApi, getVideoRankApi } from '@/api/video'
import type { Video, VideoListRequest } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import Header from '@/views/theme/themeHeader.vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'
import { getAssetsFile } from '@/utils/'
import { formatDuration } from '@/utils'

const router = useRouter()
const appStore = useAppStore()

const decrypt = new decryptionService()

const videos = ref<Video[]>([])
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

const fetchVideos = async (rank: string, isRefresh = false) => {
  if (isRefresh) {
    pageIndex.value = 1
    finished.value = false
  }
  if (finished.value) return

  try {
    listLoading.value = true
    const pageSize = rank === 'total' ? 30 : 10 // 根据榜单类型设置每页数量
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
      const newVideos = await Promise.all(
        data.items.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
        }))
      )
      if (isRefresh) {
        videos.value = newVideos
      } else {
        videos.value = [...videos.value, ...newVideos]
      }
      if (newVideos.length < pageSize) {
        finished.value = true
      }
    } else {
      if (isRefresh) {
        videos.value = []
      }
      finished.value = true
    }
  } catch (error) {
    console.error(`获取视频列表失败 (${rank}):`, error)
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

const changeRank = (rank: string) => {
  activeRank.value = rank
  fetchVideos(rank, true)
}

const loadData = () => {
  pageIndex.value += 1
  fetchVideos(activeRank.value)
}

const fresh = () => {
  fetchVideos(activeRank.value, true)
}

onMounted(() => {
  fetchVideos('total')
})
</script>
