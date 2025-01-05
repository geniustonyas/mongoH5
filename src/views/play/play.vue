<template>
  <div class="page">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
        <div class="video-container">
          <video id="plyr-player" muted autoplay preload="auto" :data-poster="poster" loop x5-video-player-fullscreen="true" x5-playsinline playsinline webkit-playsinline />
        </div>
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
        <div class="b-c">
          <i class="mvfont mv-guangbo" />
          <p>
            请牢记域名：<b>{{ appStore.spareData.OfficialDomain }}</b> <span class="copy" :data-clipboard-text="appStore.spareData.OfficialDomain"><i class="mvfont mv-fuzhi" /></span><br />
            发送邮件至：<b>{{ appStore.spareData.Email }}</b> <span class="copy" :data-clipboard-text="appStore.spareData.Email"><i class="mvfont mv-fuzhi" /></span> 可获得最新地址
          </p>
        </div>

        <IconAd class="mt-10" />
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
        <div class="ad-box">
          <img v-if="bannerAdvertisement.length > 0" @click="openAd(bannerAdvertisement[0].targetUrl, '播放页横幅', 'click', bannerAdvertisement[0].id)" :key="bannerAdvertisement[0].id" v-lazy-decrypt="bannerAdvertisement[0].imgUrl" :alt="bannerAdvertisement[0].title" />
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
    <Popup v-model:show="showSharePopup" position="center" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>
    <main class="main" />
    <NavBar active-menu="play" />
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick, onUnmounted, onMounted, computed } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import { getVideoDetailApi, addPlayCountApi, getVideoListApi } from '@/api/video'
import { userLike, userCollection } from '@/api/user'
import type { Video, VideoDetailResponse } from '@/types/video'
import { copy, openAd, insertAds } from '@/utils'
import { generateAuthUrl } from '@/utils/decryptionService'
import decryptionService from '@/utils/decryptionService'
import { useUserStore } from '@/store/user'
import { useAppStore } from '@/store/app'
import dayjs from 'dayjs'
import VideoGridItem from '@/components/VideoGridItem.vue'
import NavBar from '@/components/layout/NavBar.vue'
import IconAd from '@/components/Advertisement/IconAd.vue'
import { showToast } from 'vant'
import { Popup } from 'vant'
import Clipboard from 'clipboard'
import { throttle } from 'lodash-es'
// import { VastGenerator } from '@/utils/vastGenerator'

const route = useRoute()
const userStore = useUserStore()
const appStore = useAppStore()

const abortController = new AbortController()
const videoDetail = ref<VideoDetailResponse | null>(null)
const recommendedVideos = ref<Video[]>([])
const initialLikeType = ref<number | string>()
const routeLeaving = ref(false)

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
const poster = ref('')
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

// const playAdvertisement = computed(() => {
//   const tmp = appStore.getAdvertisementById(18).items
//   return tmp || []
// })

const videoListAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(28).items
  return tmp || []
})

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

  const videoListElement = event.target.closest('.video-grid-item')
  if (videoListElement) {
    const isAd = videoListElement.dataset.isAd
    const videoId = videoListElement.dataset.videoId
    if (isAd) {
      openAd(videoListElement.dataset.targetUrl, '播放页广告', 'click', videoListElement.dataset.title, 1, videoId)
    } else {
      fetchVideoDetailThrottled(videoId)
    }
  }
}

const fetchVideoDetail = async (videoId: string) => {
  try {
    const id = Number(videoId)
    const {
      data: { data }
    } = await getVideoDetailApi(id, { signal: abortController.signal })
    videoDetail.value = data
    initialLikeType.value = data.like
    if (data.imgUrl) {
      poster.value = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + data.imgUrl))
    }
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

    // 插入广告
    recommendedVideos.value = insertAds(filteredVideos, videoListAdvertisement.value, 5, 7, true)
  } catch (error) {
    console.error('获取猜你喜欢视频失败:', error)
  }
}

const initializePlayer = async (domain: string, uri: string) => {
  try {
    if (routeLeaving.value) {
      return
    }
    resetPlayer()
    const videoElement = document.getElementById('plyr-player') as HTMLVideoElement
    if (!videoElement) {
      console.error('Video element not found')
      return
    }
    const url = generateAuthUrl(domain, uri)

    // 生成 VAST XML 并创建 Blob URL
    // let vastUrl = ''
    // if (playAdvertisement.value.length > 0) {
    //   const ad = playAdvertisement.value[0]
    //   const decryptedImageUrl = await decrypt.fetchAndDecrypt(appStore.cdnUrl + ad.imgUrl)
    //   const vastXml = VastGenerator.getInstance().generateVastXml({
    //     id: ad.id,
    //     title: ad.title,
    //     skipOffset: 5,
    //     clickThrough: ad.targetUrl,
    //     mediaFiles: [],
    //     nonLinearAds: [
    //       {
    //         url: URL.createObjectURL(decryptedImageUrl),
    //         width: 300,
    //         height: 250,
    //         clickThrough: ad.targetUrl
    //       }
    //     ],
    //     trackingEvents: []
    //   })

    //   const vastBlob = new Blob([vastXml], { type: 'application/xml' })
    //   vastUrl = URL.createObjectURL(vastBlob)
    //   // vastUrl = 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dskippablelinear&correlator='
    // }

    // 使用 Plyr 初始化播放器并配置广告
    if (routeLeaving.value) {
      return
    }
    player.value = new window.Plyr(videoElement, {
      autoplay: true,
      controls: controls.value,
      settings: ['captions', 'quality', 'speed', 'loop'],
      fullscreen: {
        enabled: true,
        iosNative: true
      }
      // ads: {
      //   enabled: true,
      //   tagUrl: vastUrl // 使用生成的 VAST URL
      // }
    })

    player.value.on('ready', () => {
      player.value.play().catch((error) => {
        console.error('自动播放失败:', error)
      })
    })
    if (routeLeaving.value) {
      resetPlayer()
      return
    }

    if (window.Hls.isSupported()) {
      // 这里声明了 tmphls 的原因是因为直接使用vue的代理 hls.value时 视频会无法播放
      const tmpHls = new window.Hls({
        maxBufferLength: 30,
        maxMaxBufferLength: 60,
        maxBufferSize: 60 * 1000 * 1000,
        maxBufferHole: 0.5,
        debug: false
      })
      // tmpHls.config.xhrSetup = (xhr) => {
      //   const tsUrlWithAuth = generateAuthUrl(domain, uri)
      //   xhr.open('GET', tsUrlWithAuth, true)
      // }
      tmpHls.loadSource(url)
      tmpHls.attachMedia(videoElement)

      tmpHls.on(window.Hls.Events.ERROR, (event, data) => {
        handleHlsError(data)
      })
      hls.value = tmpHls
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

    player.value.on('adsready', () => {
      console.log('广告已准备好')
    })

    player.value.on('adplaying', () => {
      console.log('广告正在播放')
    })

    player.value.on('adended', () => {
      console.log('广告播放结束')
    })

    window.scrollTo(0, 0)
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
    hls.value.destroy()
    hls.value = null
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

// const closeAdPopup = () => {
//   showAdPopup.value = false
//   player.value?.play() // 关闭广告后继续播放视频
// }

;(async () => {
  await fetchVideoDetail(route.params.id as string)
})()

onMounted(() => {
  // window.scrollTo(0, 0)

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
  copy('.copy')
})

onUnmounted(() => {
  routeLeaving.value = true
  if (poster.value && poster.value.startsWith('blob:')) {
    URL.revokeObjectURL(poster.value)
  }
  abortController.abort()
  setTimeout(() => {
    resetPlayer()
  }, 300)
})

onBeforeRouteLeave((to, from, next) => {
  routeLeaving.value = true
  abortController.abort()
  setTimeout(() => {
    resetPlayer()
  }, 300)
  next()
})
</script>

<style scoped>
.active {
  color: #ff6b6b;
}
</style>
