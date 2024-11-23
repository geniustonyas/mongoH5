<template>
  <div class="page">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
        <video id="plyr-player" controls muted autoplay preload="auto" loop x5-video-player-fullscreen="true" x5-playsinline playsinline webkit-playsinline />
        <div class="a-f">
          <div class="item">
            <span v-for="(option, index) in rewindOptions" :key="'rewind-' + index" @click="rewind(option.time)"> <i class="mvfont mv-left" />{{ option.label }} </span>
          </div>
          <div class="item">
            <span v-for="(option, index) in forwardOptions" :key="'forward-' + index" @click="forward(option.time)">{{ option.label }}<i class="mvfont mv-right" /></span>
          </div>
        </div>
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
            <b>{{ videoDetail ? getIncrementalNumberWithOffset(videoDetail.likeCount, 'v', videoDetail.id, 'like') : 0 }}</b>
          </span>
          <span @click="handleLike(2)">
            <i :class="['mvfont', 'mv-nzan', { active: videoDetail && videoDetail.like == 2 }]" />
            <b>{{ videoDetail ? videoDetail.hateCount : 0 }}</b>
          </span>
          <span @click="handleCollection">
            <i :class="['mvfont', 'mv-like', { active: videoDetail && videoDetail.collect }]" />
            <b>{{ videoDetail ? getIncrementalNumberWithOffset(videoDetail.collectionCount, 'v', videoDetail.id, 'collect') : 0 }}</b>
          </span>
          <span><i @click="handleShare" class="mvfont mv-zhuanfa1" />分享</span>
        </div>
        <div class="ad-box">
          <img v-if="bannerAdvertisement.length > 0" @click="handleBannerAdvertisementClick" :key="bannerAdvertisement[0].id" v-lazy-decrypt="bannerAdvertisement[0].imgUrl" :alt="bannerAdvertisement[0].title" />
        </div>
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
    <Popup v-if="ad" v-model:show="showAdPopup" position="center" :close-on-click-overlay="false">
      <a v-if="ad.targetUrl" target="_blank" :href="ad.targetUrl">
        <img v-lazy-decrypt="ad.imgUrl" style="width: 80%; height: auto; display: block; margin: 0 auto" />
      </a>
      <Icon name="close" size="30" @click="closeAdPopup" style="display: block; text-align: center; margin: 20px auto" />
    </Popup>
    <main class="main" />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onUnmounted, onMounted, computed } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { getVideoDetailApi, addPlayCountApi, getVideoListApi } from '@/api/video'
import { userLike, userCollection } from '@/api/user'
import type { Video, VideoDetailResponse } from '@/types/video'
import { getIncrementalNumberWithOffset } from '@/utils'
// import decryptionService, { generateAuthUrl } from '@/utils/decryptionService'
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'
import dayjs from 'dayjs'
import VideoGridItem from '@/components/VideoGridItem.vue'
import { showToast } from 'vant'
import { Popup, Icon } from 'vant'
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
// const decrypt = new decryptionService()
const showSharePopup = ref(false)
const clipboard = ref<Clipboard | null>(null)

const clickCount = ref(0)
const maxClicks = 5
const disableTime = 10000
let isDisabled = ref(false)

const rewindOptions = [
  { time: 600, label: '10m' }, // 10分钟
  { time: 60, label: '1m' }, // 1分钟
  { time: 15, label: '15s' } // 15秒
]

const forwardOptions = [
  { time: 15, label: '15s' }, // 15秒
  { time: 60, label: '1m' }, // 1分钟
  { time: 600, label: '10m' } // 10分钟
]

const bannerAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(4).items
  return tmp || []
})

const handleBannerAdvertisementClick = () => {
  if (bannerAdvertisement.value.length > 0) {
    window.open(bannerAdvertisement.value[0].targetUrl, '_blank')
  }
}

const fetchVideoDetailThrottled = throttle(async (videoId: string) => {
  if (isDisabled.value) {
    showToast('请稍后再试')
    return
  }

  clickCount.value++
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

    // 获取猜你喜欢的视频列表
    await fetchRecommendedVideos(data.channelId, data.id)

    if (videoDetail.value?.playUrl) {
      nextTick(() => {
        initializePlayer(appStore.playDomain, videoDetail.value?.playUrl)
      })
    }
  } catch (error) {
    console.error('获取视频详情失败:', error)
  }
}

const fetchRecommendedVideos = async (channelId: string, currentVideoId: string) => {
  try {
    const {
      data: { data }
    } = await getVideoListApi({
      ChannelId: channelId,
      SortType: 2,
      PageIndex: 1,
      PageSize: 11
    })
    // 过滤掉当前视频ID
    const filteredVideos = data.items.filter((video) => video.id !== currentVideoId)

    // 如果没有当前视频ID，则删除最后一个
    if (filteredVideos.length == data.items.length) {
      filteredVideos.pop()
    }
    recommendedVideos.value = filteredVideos
  } catch (error) {
    console.error('获取猜你喜欢视频失败:', error)
  }
}

const initializePlayer = async (domain: string, uri: string) => {
  try {
    resetPlayer()
    const videoElement = document.getElementById('plyr-player') as HTMLVideoElement
    if (!videoElement) {
      console.error('Video element not found')
      return
    }
    const url = domain + uri
    // const url = 'https://video.rf028.com/MGTV/20241122/XH/test003/index.m3u8'
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
        debug: false
      })
      // hls.value.config.xhrSetup = (xhr) => {
      //   const tsUrlWithAuth = generateAuthUrl(domain, uri)
      //   xhr.open('GET', tsUrlWithAuth, true)
      // }
      hls.value.loadSource(url)
      hls.value.attachMedia(videoElement)

      hls.value.on(window.Hls.Events.ERROR, (event, data) => {
        handleHlsError(data)
      })
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      videoElement.src = url
    }

    player.value.on('click', (event) => {
      if (player.value.touch && event.target.className == 'plyr__poster') {
        if (player.value.playing) {
          player.value.pause()
        } else {
          player.value.play()
        }
      }
    })

    player.value.on('enterfullscreen', () => {
      const videoElement = document.getElementById('plyr-player')
      if (videoElement) {
        videoElement.style.width = '100%'
        videoElement.style.height = '100%'
      }
    })

    player.value.on('exitfullscreen', () => {
      const videoElement = document.getElementById('plyr-player')
      if (videoElement) {
        videoElement.style.width = ''
        videoElement.style.height = '24rem'
      }
    })

    player.value?.once('play', async () => {
      await addPlayCountApi(videoDetail.value?.id)
    })

    player.value.on('ready', () => {
      if (ad.value) showAdPopup.value = true // 视频准备好时显示广告
    })

    player.value.on('play', (event) => {
      event.stopPropagation()
      showAdPopup.value = false // 播放时隐藏广告
    })

    player.value.on('pause', (event) => {
      event.stopPropagation()
      if (ad.value) showAdPopup.value = true // 暂停时显示广告
    })

    player.value.on('waiting', () => {
      if (ad.value) showAdPopup.value = true // 加载中时显示广告
    })

    player.value.on('playing', () => {
      showAdPopup.value = false // 播放时隐藏广告
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

const rewind = (time: number) => {
  if (player.value) {
    const currentTime = player.value.currentTime
    player.value.currentTime = Math.max(currentTime - time, 0)
  }
}

const forward = (time: number) => {
  if (player.value) {
    const currentTime = player.value.currentTime
    player.value.currentTime = Math.min(currentTime + time, player.value.duration)
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
      const newCollectionCount = Number(videoDetail.value.collectionCount) + (isCollecting ? 1 : -1)
      videoDetail.value.collectionCount = Math.max(newCollectionCount, 0).toString()
    }
  } catch (error) {
    console.error('操作失败:', error)
    showToast('操作失败')
  }
}

const showAdPopup = ref(false) // 控制广告弹窗的显示
const ad = ref(null) // 初始化广告为 null

const closeAdPopup = () => {
  showAdPopup.value = false
  player.value?.play() // 关闭广告后播放视频
}

;(async () => {
  await fetchVideoDetail(route.params.id as string)
})()

onMounted(() => {
  window.scrollTo(0, 0)

  // 页面离开停止播放，回来后继续播放
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      player.value?.pause()
    } else {
      player.value?.play()
    }
  })

  // 显示广告时暂停视频
  if (showAdPopup.value) {
    player.value?.pause()
  }

  if (appStore.advertisement.length == 0) {
    appStore.fetAdvertisement()
  }
})

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
