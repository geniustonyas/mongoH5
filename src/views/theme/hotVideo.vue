<template>
  <div class="page">
    <Header />
    <section class="h-l-b">
      <div class="lb-b">
        <span :class="{ active: activeRank == 'total' }" @click="changeRank('total')">总榜单</span>
        <span :class="{ active: activeRank == 'month' }" @click="changeRank('month')">月榜单</span>
        <span :class="{ active: activeRank == 'week' }" @click="changeRank('week')">周榜单</span>
        <span :class="{ active: activeRank == 'day' }" @click="changeRank('day')">日榜单</span>
      </div>
      <ul>
        <li v-for="video in videos" :key="video.id" @click="router.push({ name: 'play', params: { id: video.id } })">
          <div class="l-a">
            <img :src="video.poster" />
            <span v-if="video.clarity != '0'" class="a-a">{{ appStore.clarity[parseInt(video.clarity)] }}</span>
            <span class="a-b" v-if="video.duration != '0'">{{ video.duration }}</span>
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
    </section>
    <Footer active-menu="theme" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { getVideoListApi } from '@/api/video'
import type { Video, VideoListRequest } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import Footer from '@/components/layout/Footer.vue'
import Header from '@/views/theme/themeHeader.vue'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/app'

const router = useRouter()
const appStore = useAppStore()

const decrypt = new decryptionService()

const videos = ref<Video[]>([])
const activeRank = ref('total')

const getDateRange = (rank: string) => {
  const now = dayjs()
  let beginTime: dayjs.Dayjs
  let endTime = now

  switch (rank) {
    case 'month':
      beginTime = now.subtract(1, 'month').startOf('month')
      endTime = now.endOf('month')
      break
    case 'week':
      beginTime = now.startOf('week')
      endTime = now.endOf('week')
      break
    case 'day':
      beginTime = now.subtract(3, 'day').startOf('day')
      break
    default: // total
      beginTime = dayjs('2000-01-01') // 设置一个较早的日期作为总榜单的开始日期
  }

  return {
    beginTime: beginTime.format('YYYY-MM-DD HH:mm:ss'),
    endTime: endTime.format('YYYY-MM-DD HH:mm:ss')
  }
}

const fetchVideos = async (rank: string) => {
  try {
    // const { beginTime, endTime } = getDateRange(rank)
    const params: VideoListRequest = {
      PageIndex: 1,
      PageSize: 30,
      SortType: 'clickCounts',
      // beginTime,
      // endTime
    }
    const response = await getVideoListApi(params)

    if (response.data.data && Array.isArray(response.data.data)) {
      videos.value = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
    } else {
      videos.value = []
    }
  } catch (error) {
    console.error(`获取视频列表失败 (${rank}):`, error)
    videos.value = []
  }
}

const changeRank = (rank: string) => {
  activeRank.value = rank
  fetchVideos(rank)
}

onMounted(() => {
  fetchVideos('total')
})
</script>
