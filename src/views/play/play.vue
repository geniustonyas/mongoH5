<template>
  <div class="page">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="$router.back()"><i class="mvfont mv-left" /></a>
        <div id="video-player" />
      </div>
      <div class="md-b">
        <div class="b-a">
          <div class="a-a">{{ videoDetail ? videoDetail.title : '' }}</div>
          <div class="a-b">
            <span><i class="mvfont mv-time" />{{ videoDetail ? videoDetail.addTime : '' }}</span>
            <span><i class="mvfont mv-kan" />{{ videoDetail ? videoDetail.clickCounts : '' }}</span>
          </div>
          <div class="a-c">
            <template v-if="videoDetail && videoDetail.tags">
              <span v-for="tag in videoDetail.tags" :key="tag">#{{ tag }}</span>
            </template>
          </div>
        </div>
        <div class="b-b">
          <span @click="handleLike">
            <i :class="['mvfont', 'mv-zan', { active: isLiked }]" /><b>{{ videoDetail ? videoDetail.goodCounts : 0 }}</b>
          </span>
          <span @click="handleDislike">
            <i :class="['mvfont', 'mv-nzan', { active: isDisliked }]" /><b>{{ videoDetail ? videoDetail.noGoodCounts : 0 }}</b>
          </span>
          <span @click="handleFavorite">
            <i :class="['mvfont', 'mv-like', { active: isFavorited }]" /><b>{{ videoDetail ? videoDetail.favoriteCounts : 0 }}</b>
          </span>
          <span><i @click="handleShare" class="mvfont mv-zhuanfa1" />分享</span>
        </div>
        <div class="ad-box"><img :src="getAssetsFile('cpt2.png')" /></div>
      </div>
      <nav class="mv-t-l">
        <div class="m-a">
          <div class="a-l"><i class="mvfont mv-xietiao" /><span>猜你喜欢</span></div>
        </div>
        <div class="m-b">
          <div v-for="video in recommendedVideos" :key="video.videoId" class="item" @click="$router.push({ name: 'play', params: { id: video.videoId } })">
            <div class="i-a" v-lazy:background-image="video.poster">
              <span v-if="video.resolution" class="a-a">{{ video.resolution }}</span>
              <span class="a-b">{{ video.playTime }}</span>
              <span class="a-c">{{ video.categoryName }}</span>
            </div>
            <div class="i-b">
              <b>{{ video.title }}</b>
              <p>
                <span><i class="mvfont mv-kan" />{{ video.clickCounts }}</span>
                <span><i class="mvfont mv-zan" />{{ video.goodCounts }}</span>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </section>
    <main class="main" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getVideoDetailApi, getVideoListApi, addRecordApi } from '@/api/video'
import type { Video, VideoQueryParams, addRecordData } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import { getAssetsFile } from '@/utils'
import { useUserStore } from '@/store/user'
import Player from 'xgplayer'
import HlsJsPlugin from 'xgplayer-hls.js' // 引入HLS插件
// import FlvJsPlugin from 'xgplayer-flv.js' // 引入FLV插件
import 'xgplayer/dist/index.min.css'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const videoDetail = ref<Video | null>(null)
const recommendedVideos = ref<Video[]>([])
const isLiked = ref(false)
const isDisliked = ref(false)
const isFavorited = ref(false)

const decrypt = new decryptionService()

const fetchVideoDetail = async () => {
  try {
    const id = Number(route.params.id)
    const response = await getVideoDetailApi(id)
    videoDetail.value = response.data as unknown as Video
    if (videoDetail.value && 'posterDomain' in response.data) {
      videoDetail.value.poster = await decrypt.fetchAndDecrypt(`${response.data.posterDomain}${videoDetail.value.poster}`)
    }
  } catch (error) {
    console.error('获取视频详情失败:', error)
  }
}

const fetchRecommendedVideos = async () => {
  try {
    const params: VideoQueryParams = {
      page: 1,
      pageSize: 10,
      sortBy: 'clickCounts'
    }
    const response = await getVideoListApi(params)
    if (response.data.data && Array.isArray(response.data.data)) {
      recommendedVideos.value = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
    }
  } catch (error) {
    console.error('获取推荐视频列表失败:', error)
  }
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.userName == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

const handleAction = async (type: number) => {
  if (!checkLogin() || !videoDetail.value) return

  const data: addRecordData = {
    videoId: videoDetail.value.videoId,
    type: type
  }
  try {
    const response = await addRecordApi(data)
    const isActive = response.data.isActive

    // 更新本地数据
    if (type == 2) {
      videoDetail.value.goodCounts += isActive ? 1 : -1
      isLiked.value = isActive
      if (isActive && isDisliked.value) {
        videoDetail.value.noGoodCounts--
        isDisliked.value = false
      }
    } else if (type == 5) {
      videoDetail.value.noGoodCounts += isActive ? 1 : -1
      isDisliked.value = isActive
      if (isActive && isLiked.value) {
        videoDetail.value.goodCounts--
        isLiked.value = false
      }
    } else if (type == 3) {
      videoDetail.value.favoriteCounts += isActive ? 1 : -1
      isFavorited.value = isActive
    }
  } catch (error) {
    console.error('操作失败:', error)
  }
}

const handleLike = () => handleAction(2)
const handleDislike = () => handleAction(5)
const handleFavorite = () => handleAction(3)
const handleShare = () => {
  if (checkLogin()) {
    router.push({ name: 'share' })
  }
}

onMounted(async () => {
  await fetchVideoDetail()
  await fetchRecommendedVideos()

  if (videoDetail.value && videoDetail.value.playDomain && videoDetail.value.playUrl) {
    const url = videoDetail.value.playDomain + videoDetail.value.playUrl

    let playerConfig = {
      id: 'video-player',
      url: url,
      poster: videoDetail.value.poster,
      autoplay: true,
      controls: true,
      fluid: true,
      playsinline: true,
      'x5-video-player-type': 'h5',
      'x5-video-player-fullscreen': true,
      'x5-video-orientation': 'portraint',
      plugins: [HlsJsPlugin],
      useHlsJs: true
    }

    // @ts-ignore
    const player = new Player(playerConfig)
    // 添加播放开始事件监听器
    player.on('play', async () => {
      if (checkLogin()) {
        const data: addRecordData = {
          videoId: videoDetail.value.videoId,
          type: 1 // 播放记录
        }
        try {
          await addRecordApi(data)
        } catch (error) {
          console.error('添加播放记录失败:', error)
        }
      }
    })
  } else {
    console.error('视频详情数据不完整')
    // 可以在这里添加一些错误处理逻辑，比如显示错误消息给用户
  }
})
</script>

<style scoped>
.active {
  color: #ff6b6b;
}
</style>
