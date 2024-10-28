<template>
  <div class="page">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="router.back()"><i class="mvfont mv-left" /></a>
        <div id="video-player" />
      </div>
      <div class="md-b">
        <div class="b-a">
          <div class="a-a">{{ videoDetail ? videoDetail.title : '' }}</div>
          <div class="a-b">
            <span><i class="mvfont mv-time" />{{ videoDetail ? dayjs(videoDetail.addTime).format('YYYY-MM-DD') : '' }}</span>
            <span><i class="mvfont mv-kan" />{{ videoDetail ? videoDetail.viewCount : '' }}</span>
          </div>
          <div class="a-c">
            <template v-if="videoDetail && videoDetail.tags">
              <span v-for="(tag, index) in videoDetail.tags" :key="index">#{{ tag.title }}</span>
            </template>
          </div>
        </div>
        <div class="b-b">
          <span @click="handleLike(1)">
            <i :class="['mvfont', 'mv-zan', { active: videoDetail && videoDetail.like == 1 }]" />
            <b>{{ videoDetail ? videoDetail.likeCount : 0 }}</b>
          </span>
          <span @click="handleLike(2)">
            <i :class="['mvfont', 'mv-nzan', { active: videoDetail && videoDetail.like == 2 }]" />
            <b>{{ videoDetail ? videoDetail.hateCount : 0 }}</b>
          </span>
          <span @click="handleCollection">
            <i :class="['mvfont', 'mv-like', { active: videoDetail && videoDetail.collect }]" />
            <b>{{ videoDetail ? videoDetail.collectionCount : 0 }}</b>
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
          <VideoGridItem v-for="video in recommendedVideos" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
        </div>
      </nav>
    </section>
    <Popup v-model:show="showSharePopup" position="center" :safe-area-inset-top="true" :safe-area-inset-bottom="true" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>
    <main class="main" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import { getVideoDetailApi } from '@/api/video'
import { userLike, userCollection } from '@/api/user'
import type { Video, VideoDetailResponse } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import { getAssetsFile } from '@/utils'
import { useUserStore } from '@/store/user'
import Player from 'xgplayer'
import HlsJsPlugin from 'xgplayer-hls.js'
import dayjs from 'dayjs'
import VideoGridItem from '@/components/VideoGridItem.vue'
import 'xgplayer/dist/index.min.css'
import { showToast } from 'vant'
import { addPlayCountApi } from '@/api/video'
import { Popup } from 'vant'
import Clipboard from 'clipboard'

const route = useRoute()
const router = useRouter()
const userStore = useUserStore()
const videoDetail = ref<VideoDetailResponse | null>(null)
const recommendedVideos = ref<Video[]>([])

const player = ref<Player | null>(null)

const decrypt = new decryptionService()

const fetchVideoDetail = async () => {
  try {
    const id = Number(route.params.id)
    const {
      data: { data }
    } = await getVideoDetailApi(id)
    videoDetail.value = data
    recommendedVideos.value = data.licks.map((video) => ({
      ...video,
      poster: ''
    }))
    recommendedVideos.value.forEach(async (video) => {
      video.poster = await decrypt.fetchAndDecrypt(`${video.imgDomain}${video.imgUrl}`)
    })
  } catch (error) {
    console.error('获取视频详情失败:', error)
  }
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.id == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

const showSharePopup = ref(false)
const clipboard = ref<Clipboard | null>(null)
const handleShare = () => {
  if (clipboard.value) {
    clipboard.value.destroy()
  }
  clipboard.value = new Clipboard('.share-button', {
    text: () => window.location.href
  })

  clipboard.value?.on('success', () => {
    showSharePopup.value = true
    // 设置2秒后自动关闭弹窗
    setTimeout(() => {
      showSharePopup.value = false
    }, 2000)
    clipboard.value?.destroy()
  })

  clipboard.value?.on('error', () => {
    console.error('复制失败')
    clipboard.value?.destroy()
  })

  // 模拟点击事件以触发复制
  const button = document.createElement('button')
  button.className = 'share-button'
  document.body.appendChild(button)
  button.click()
  document.body.removeChild(button)
}

const handleLike = async (likeType: number) => {
  if (!checkLogin()) return

  try {
    const videoId = videoDetail.value?.id
    if (videoId) {
      let newLikeType = likeType
      if (videoDetail.value.like === likeType) {
        // 如果当前状态和点击的状态相同，则取消点赞/踩
        newLikeType = 0
      }

      await userLike({ VideoId: videoId, Like: newLikeType })

      // 更新本地状态
      if (newLikeType === 1) {
        videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) + (videoDetail.value.like === 1 ? -1 : 1)).toString()
        if (videoDetail.value.like === 2) videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) - 1).toString()
      } else if (newLikeType === 2) {
        videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) + (videoDetail.value.like === 2 ? -1 : 1)).toString()
      } else {
        if (videoDetail.value.like === 1) videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) - 1).toString()
        if (videoDetail.value.like === 2) videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) - 1).toString()
      }

      videoDetail.value.like = newLikeType
    }
  } catch (error) {
    console.error('操作失败:', error)
    showToast('操作失败')
  }
}

const handleCollection = async () => {
  if (!checkLogin()) return

  try {
    const videoId = videoDetail.value?.id
    if (videoId) {
      const isCollecting = !videoDetail.value.collect
      await userCollection({ VideoId: videoId, Collect: isCollecting })
      // 更新本地状态
      videoDetail.value.collect = isCollecting
      videoDetail.value.collectionCount = (Number(videoDetail.value.collectionCount) + (isCollecting ? 1 : -1)).toString()
    }
  } catch (error) {
    console.error('操作失败:', error)
    showToast('操作失败')
  }
}

const initializePlayer = (url: string) => {
  const playerConfig = {
    id: 'video-player',
    url: url,
    poster: videoDetail.value?.poster,
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

  if (player.value) {
    player.value.destroy()
    player.value = null
  }

  player.value = new Player(playerConfig)

  // 统计播放量
  const handleFirstPlay = async () => {
    await addPlayCountApi(videoDetail.value?.id)
    player.value?.off('play', handleFirstPlay)
  }
  // 监听第一次播放事件
  player.value.on('play', handleFirstPlay)
}

onMounted(async () => {
  await fetchVideoDetail()
  if (videoDetail.value && videoDetail.value.playDomain && videoDetail.value.playUrl) {
    initializePlayer(videoDetail.value.playDomain + videoDetail.value.playUrl)
    window.scrollTo(0, 0)
  } else {
    console.error('视频详情数据不完整')
  }
})

// 在离开路由前销毁播放器
onBeforeRouteLeave((to, from, next) => {
  if (player.value) {
    player.value.destroy()
    player.value = null
  }
  next()
})
</script>

<style scoped>
.active {
  color: #ff6b6b;
}
</style>
