<template>
  <div class="page">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
        <video id="plyr-player" controls muted autoplay preload="auto" loop x5-video-player-fullscreen="true" x5-playsinline playsinline webkit-playsinline />
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
        <div class="m-b" v-if="recommendedVideos && recommendedVideos.length > 0" @click="handleVideoClick">
          <VideoGridItem v-for="video in recommendedVideos" :key="video.id" :video="video" />
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
import { ref, nextTick, onUnmounted } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { getVideoDetailApi, addPlayCountApi } from '@/api/video'
import { userLike, userCollection } from '@/api/user'
import type { Video, VideoDetailResponse } from '@/types/video'
import decryptionService from '@/utils/decryptionService'
import { getAssetsFile } from '@/utils'
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'
import dayjs from 'dayjs'
import VideoGridItem from '@/components/VideoGridItem.vue'
import { showToast } from 'vant'
import { Popup } from 'vant'
import Clipboard from 'clipboard'
import { throttle } from 'lodash-es'

const route = useRoute()
const userStore = useUserStore()
const appStore = useAppStore()
const videoDetail = ref<VideoDetailResponse | null>(null)
const recommendedVideos = ref<Video[]>([])
const initialLikeType = ref<number | string>()

const player = ref<any>(null)
const hls = ref<any>(null)
const controls = ref([
  'play', // 播放/暂停播放
  'play-large', // 中心的大播放按钮
  'rewind', // 按默认的10秒回退
  'fast-forward', // 按默认的10秒快进
  'progress', // 播放和缓冲的进度条和拖动条
  'current-time',
  'duration', // 媒体的总时长
  'mute', // 静音切换
  'volume', // 音量控制
  'captions', // 字幕切换
  'settings', // 设置菜单
  'pip', // 画中画（目前仅Safari支持）
  'airplay', // Airplay（目前仅Safari支持）
  // 'download', // 显示一个下载按钮，链接到当前源或您在选项中指定的自定义URL
  'fullscreen' // 全屏切换
])
const decrypt = new decryptionService()
const showSharePopup = ref(false)
const clipboard = ref<Clipboard | null>(null)

const clickCount = ref(0)
const maxClicks = 5
const disableTime = 10000
let isDisabled = ref(false)

const fetchVideoDetailThrottled = throttle(async (videoId: string) => {
  if (isDisabled.value) {
    showToast('请稍后再试')
    return
  }

  clickCount.value++
  console.log(clickCount.value)
  if (clickCount.value >= maxClicks) {
    showToast('请不要频繁操作')
    isDisabled.value = true
    setTimeout(() => {
      isDisabled.value = false
      clickCount.value = 0
    }, disableTime)
    return
  }

  await fetchVideoDetail(videoId)
  clickCount.value = 0
}, 1000)

const handleVideoClick = (event) => {
  if (isDisabled.value) {
    showToast('请稍后再试')
    return
  }

  const videoElement = event.target.closest('.video-grid-item')
  if (videoElement) {
    const videoId = videoElement.dataset.videoId
    fetchVideoDetailThrottled(videoId)
  }
}

const fetchVideoDetail = async (videoId: string) => {
  try {
    const id = Number(videoId)
    const {
      data: { data }
    } = await getVideoDetailApi(id)
    videoDetail.value = data
    initialLikeType.value = data.like
    recommendedVideos.value = data.licks.map((video) => ({
      ...video,
      poster: ''
    }))
    recommendedVideos.value.forEach(async (video) => {
      video.poster = await decrypt.fetchAndDecrypt(`${appStore.imageDomain}${video.imgUrl}`)
    })

    if (videoDetail.value?.playUrl) {
      const newUrl = appStore.playDomain + videoDetail.value?.playUrl
      nextTick(() => {
        initializePlayer(newUrl)
      })
    }
  } catch (error) {
    console.error('获取视频详情失败:', error)
  }
}

const initializePlayer = async (url: string) => {
  try {
    resetPlayer()
    const videoElement = document.getElementById('plyr-player') as HTMLVideoElement
    if (!videoElement) {
      console.error('Video element not found')
      return
    }
    player.value = new window.Plyr(videoElement, {
      clickToPlay: true,
      autoplay: true,
      controls: controls.value,
      settings: ['captions', 'quality', 'speed', 'loop'],
      fullscreen: { enabled: true, fallback: true, iosNative: true, container: null }
    })
    if (window.Hls.isSupported()) {
      hls.value = new window.Hls({
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        maxBufferSize: 60 * 1000 * 1000,
        maxBufferHole: 0.5,
        startFragPrefetch: true,
        debug: false
      })
      hls.value.loadSource(url)
      hls.value.attachMedia(videoElement)

      hls.value.on(window.Hls.Events.ERROR, (event, data) => {
        handleHlsError(data)
      })
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = url
    }

    videoElement.addEventListener('canplay', () => {
      player.value?.on('play', async () => {
        await addPlayCountApi(videoDetail.value?.id)
      })
    })
  } catch (error) {
    console.error('初始化播放器失败:', error)
  }
}

const handleHlsError = (data) => {
  if (data.fatal) {
    switch (data.type) {
      case window.Hls.ErrorTypes.NETWORK_ERROR:
        console.error('HLS network error:', data)
        // 尝试重新加载资源
        if (data.details === 'manifestLoadError') {
          showToast('加载视频失败,请检查网络连接或稍后重试。')
        }
        break
      case window.Hls.ErrorTypes.MEDIA_ERROR:
        console.error('HLS media error:', data)
        // 尝试恢复媒体错误
        hls.value.recoverMediaError()
        break
      case window.Hls.ErrorTypes.OTHER_ERROR:
        console.error('HLS other error:', data)
        break
      default:
        console.error('HLS unrecoverable error:', data)
        hls.value.destroy()
        showToast('视频播放遇到问题，请稍后重试。')
        break
    }
  } else {
    // 非致命错误的处理
    console.warn('HLS non-fatal error:', data)
  }
}

const resetPlayer = () => {
  if (player.value) {
    player.value.stop()
    player.value.destroy()
    player.value = null
  }
  if (hls.value) {
    hls.value.stopLoad()
    // hls.value.destroy()
    // hls.value = null
  }
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.id == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

const handleShare = () => {
  if (clipboard.value) {
    clipboard.value.destroy()
  }
  clipboard.value = new Clipboard('.share-button', {
    text: () => window.location.href
  })

  clipboard.value?.on('success', () => {
    showSharePopup.value = true
    setTimeout(() => {
      showSharePopup.value = false
    }, 2000)
    clipboard.value?.destroy()
  })

  clipboard.value?.on('error', () => {
    console.error('复制失败')
    clipboard.value?.destroy()
  })

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
      const currentLikeType = videoDetail.value.like
      let newLikeType = likeType

      if (currentLikeType == likeType) {
        // 如果当前状态和点击的状态相同，则取消点赞/踩
        newLikeType = 0
      }

      await userLike({ VideoId: videoId, Like: newLikeType })

      updateLikeStatus(Number(currentLikeType), Number(newLikeType))
      videoDetail.value.like = newLikeType
    }
  } catch (error) {
    console.error('操作失败:', error)
    showToast('操作失败')
  }
}

const updateLikeStatus = (currentLikeType: number, newLikeType: number) => {
  if (newLikeType == 1) {
    if (currentLikeType == 0) {
      videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) + 1).toString()
    } else if (currentLikeType == 2) {
      videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) - 1).toString()
      videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) + 1).toString()
    }
  } else if (newLikeType == 2) {
    if (currentLikeType == 0) {
      videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) + 1).toString()
    } else if (currentLikeType == 1) {
      videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) - 1).toString()
      videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) + 1).toString()
    }
  } else {
    if (currentLikeType == 1) {
      videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) - 1).toString()
    } else if (currentLikeType == 2) {
      videoDetail.value.hateCount = (Number(videoDetail.value.hateCount) - 1).toString()
    }
  }
}

const handleCollection = async () => {
  if (!checkLogin()) return

  try {
    const videoId = videoDetail.value?.id
    if (videoId) {
      const isCollecting = !videoDetail.value.collect
      await userCollection({ VideoId: videoId, Collect: isCollecting })
      videoDetail.value.collect = isCollecting
      videoDetail.value.collectionCount = (Number(videoDetail.value.collectionCount) + (isCollecting ? 1 : -1)).toString()
    }
  } catch (error) {
    console.error('操作失败:', error)
    showToast('操作失败')
  }
}

;(async () => {
  await fetchVideoDetail(route.params.id as string)
})()

// onMounted(async () => {
//   await fetchVideoDetail(route.params.id as string)
// })

onUnmounted(() => {
  resetPlayer()
})

onBeforeRouteLeave((to, from, next) => {
  resetPlayer()
  next()
})
</script>

<style scoped>
.active {
  color: #ff6b6b;
}
.m-d-b .md-a video {
  height: 24rem;
}
</style>
