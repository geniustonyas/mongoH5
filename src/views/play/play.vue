<template>
  <div class="page">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="$router.back()"><i class="mvfont mv-left" /></a>
        <video id="video-player" controls />
      </div>
      <div class="md-b">
        <div class="b-a">
          <div class="a-a">{{ videoDetail ? videoDetail.title : '' }}</div>
          <div class="a-b">
            <span><i class="mvfont mv-time" />{{ videoDetail ? videoDetail.addTime : '' }}</span>
            <span><i class="mvfont mv-kan" />{{ videoDetail ? videoDetail.viewCount : '' }}</span>
          </div>
          <div class="a-c">
            <template v-if="videoDetail && videoDetail.tags">
              <span v-for="(tag, index) in videoDetail.tags" :key="index">#{{ tag.title }}</span>
            </template>
          </div>
        </div>
        <div class="b-b">
          <span>
            <i :class="['mvfont', 'mv-zan', { active: isLiked }]" /><b>{{ videoDetail ? videoDetail.likeCount : 0 }}</b>
          </span>
          <span>
            <i :class="['mvfont', 'mv-nzan', { active: isDisliked }]" /><b>{{ videoDetail ? videoDetail.hateCount : 0 }}</b>
          </span>
          <span>
            <i :class="['mvfont', 'mv-like', { active: isFavorited }]" /><b>{{ videoDetail ? videoDetail.collectionCount : 0 }}</b>
          </span>
          <span><i @click="handleShare" class="mvfont mv-zhuanfa1" />分享</span>
        </div>
        <div class="ad-box"><img :src="getAssetsFile('cpt2.png')" /></div>
      </div>
      <nav class="mv-t-l">
        <div class="m-a">
          <div class="a-l"><i class="mvfont mv-xietiao" /><span>猜你喜欢</span></div>
        </div>
        <div class="m-b" v-if="recommendedVideos && recommendedVideos.length > 0">
          <VideoGridItem v-for="video in recommendedVideos" :key="video.id" :video="video" @click="$router.push({ name: 'play', params: { id: video.id } })" />
        </div>
      </nav>
    </section>
    <main class="main" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { getVideoDetailApi } from '@/api/video'
import type { Video, VideoDetailResponse } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import { getAssetsFile } from '@/utils'
import { useUserStore } from '@/store/user'
import Hls from 'hls.js'
import VideoGridItem from '@/components/VideoGridItem.vue'
import md5 from 'crypto-js/md5'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const videoDetail = ref<VideoDetailResponse | null>(null)
const recommendedVideos = ref<Video[]>([])
const isLiked = ref(false)
const isDisliked = ref(false)
const isFavorited = ref(false)

const decrypt = new decryptionService()
let hls: Hls | null = null

const fetchVideoDetail = async () => {
  try {
    const id = Number(route.params.id)
    const {
      data: { data }
    } = await getVideoDetailApi(id)
    videoDetail.value = data
    recommendedVideos.value = await Promise.all(
      data.licks.map(async (video) => ({
        ...video,
        poster: await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
      }))
    )
  } catch (error) {
    console.error('获取视频详情失败:', error)
  }
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.phone == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

const handleShare = () => {
  if (checkLogin()) {
    router.push({ name: 'share' })
  }
}

const generateAuthUrl = (domain: string, uri: string, key: string): string => {
  const timestamp = Math.floor(Date.now() / 1000).toString()
  const temp = `${key}${uri}${timestamp}`
  const sign = md5(temp).toString().toLowerCase()
  return `${domain}${uri}?sign=${sign}&t=${timestamp}`
}

const initializePlayer = (domain: string, uri: string, key: string) => {
  const urls = domain + uri
  const video = document.getElementById('video-player') as HTMLVideoElement

  // 销毁现有的 Hls 实例
  if (hls) {
    hls.destroy()
    hls = null
  }

  if (Hls.isSupported()) {
    hls = new Hls()

    hls.config.xhrSetup = (xhr, url) => {
      const path = new URL(url).pathname
      const tsUrlWithAuth = generateAuthUrl(domain, path, key)
      xhr.open('GET', tsUrlWithAuth, true)
    }

    hls.loadSource(urls)
    hls.attachMedia(video)

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play()
    })
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = urls
    video.addEventListener('loadedmetadata', () => {
      video.play()
    })
  }
}

onMounted(async () => {
  await fetchVideoDetail()
  if (videoDetail.value && videoDetail.value.playDomain && videoDetail.value.playUrl) {
    const uri = videoDetail.value.playUrl
    const domain = 'https://mogo2.ewcdn.com'
    const key = 'p81F7ObiYxqSiJ5tnY1Evl'
    initializePlayer(domain, uri, key)
  } else {
    console.error('视频详情数据不完整')
  }
})

// 在离开路由前销毁播放器
onBeforeRouteLeave((to, from, next) => {
  if (hls) {
    hls.destroy()
    hls = null
  }
  next()
})
</script>

<style scoped>
.active {
  color: #ff6b6b;
}
</style>
