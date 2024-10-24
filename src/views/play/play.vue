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
            <i :class="['mvfont', 'mv-nzan', { active: isDisliked }]" /><b>{{ 0 }}</b>
          </span>
          <span>
            <i :class="['mvfont', 'mv-like', { active: isFavorited }]" /><b>{{ 0 }}</b>
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
import { useRoute, useRouter } from 'vue-router'
import { getVideoDetailApi } from '@/api/video'
import type { Video, VideoDetailResponse } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import { getAssetsFile } from '@/utils'
import { useUserStore } from '@/store/user'
import Hls from 'hls.js'
import VideoGridItem from '@/components/VideoGridItem.vue'
import { useAppStore } from '@/store/app'
import md5 from 'crypto-js/md5'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const appStore = useAppStore()
const videoDetail = ref<VideoDetailResponse | null>(null)
const recommendedVideos = ref<Video[]>([])
const isLiked = ref(false)
const isDisliked = ref(false)
const isFavorited = ref(false)

const decrypt = new decryptionService()

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
    // if (videoDetail.value && 'imgDomain' in data) {
    //   videoDetail.value.poster = await decrypt.fetchAndDecrypt(`${data.imgDomain}${videoDetail.value.imgUrl}`)
    // }
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

// const handleAction = async (type: number) => {
//   if (!checkLogin() || !videoDetail.value) return

//   const data: addRecordData = {
//     videoId: videoDetail.value.videoId,
//     type: type
//   }
//   try {
//     const response = await addRecordApi(data)
//     const isActive = response.data.isActive

//     // 更新本地数据
//     if (type == 2) {
//       videoDetail.value.goodCounts += isActive ? 1 : -1
//       isLiked.value = isActive
//       if (isActive && isDisliked.value) {
//         videoDetail.value.noGoodCounts--
//         isDisliked.value = false
//       }
//     } else if (type == 5) {
//       videoDetail.value.noGoodCounts += isActive ? 1 : -1
//       isDisliked.value = isActive
//       if (isActive && isLiked.value) {
//         videoDetail.value.goodCounts--
//         isLiked.value = false
//       }
//     } else if (type == 3) {
//       videoDetail.value.favoriteCounts += isActive ? 1 : -1
//       isFavorited.value = isActive
//     }
//   } catch (error) {
//     console.error('操作失败:', error)
//   }
// }

// const handleLike = () => handleAction(2)
// const handleDislike = () => handleAction(5)
// const handleFavorite = () => handleAction(3)
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

onMounted(async () => {
  await fetchVideoDetail()
  if (videoDetail.value && videoDetail.value.playDomain && videoDetail.value.playUrl) {
    // const domain = videoDetail.value.playDomain
    const uri = videoDetail.value.playUrl

    const domain = 'https://mogo2.ewcdn.com'
    // const uri = '/mogo/pp01/20241018/a03f772271ac8b41ed2fc0ac261ad083/19201080/index.m3u8'
    const key = 'p81F7ObiYxqSiJ5tnY1Evl'
    const urls = domain + uri

    const video = document.getElementById('video-player') as HTMLVideoElement

    if (Hls.isSupported()) {
      const hls = new Hls()

      hls.config.xhrSetup = (xhr, url) => {
        // 使用硬编码的域名和路径
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
  } else {
    console.error('视频详情数据不完整')
  }
})
</script>

<style scoped>
.active {
  color: #ff6b6b;
}
</style>
