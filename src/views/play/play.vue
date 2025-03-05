<template>
  <div class="page">
    <section class="m-d-b">
      <div class="md-a">
        <a class="a-r" @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
        <div class="video-container">
          <video id="plyr-player" preload="auto" :data-poster="poster" x5-video-player-fullscreen="true" x5-playsinline playsinline webkit-playsinline />
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

        <div v-if="!isIOS" class="b-d">
          <p>特别提醒：因地域及用户网络差异，会导致个别用户播放失败，推荐使用“芒果浏览器”。该浏览器自带VPN，无屏蔽无限制，全球加速，极速翻墙，同时内置多个海外X站供家人们挑选！</p>
          <a :href="mangoAdvertisement[0].targetUrl" target="_blank"><i class="mvfont mv-xiazai1" />立即下载</a>
        </div>

        <IconAd class="mt-10" />
        <div class="b-a">
          <div class="a-a">{{ videoDetail ? videoDetail.title : '' }}</div>
          <div class="a-b">
            <span><i class="mvfont mv-time" />{{ videoDetail ? dayjs(videoDetail.addTime).format('YYYY-MM-DD') : '' }}</span>
            <span><i class="mvfont mv-kan" />{{ formatNumber(videoDetail ? videoDetail.viewCount : 0) }}</span>
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
            <b>{{ formatNumber(videoDetail ? videoDetail.likeCount : 0) }}</b>
          </span>
          <span @click="handleLike(2)">
            <i :class="['mvfont', 'mv-nzan', { active: videoDetail && videoDetail.like == 2 }]" />
            <b>{{ formatNumber(videoDetail ? videoDetail.hateCount : 0) }}</b>
          </span>
          <span @click="handleCollection">
            <i :class="['mvfont', 'mv-like', { active: videoDetail && videoDetail.collect }]" />
            <b>{{ formatNumber(videoDetail ? videoDetail.collectionCount : 0) }}</b>
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
          <VideoGridItem v-for="video in recommendedVideos" :key="videoAd.isAd ? videoAd.id : video.id + 'vd'" :video="video" />
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
import { copy, openAd, insertAds, formatNumber, getRandomAd } from '@/utils'
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
// import { throttle } from 'lodash-es'

// import { VastGenerator } from '@/utils/vastGenerator'

const route = useRoute()
const userStore = useUserStore()
const appStore = useAppStore()

const abortController = new AbortController()
const videoDetail = ref<VideoDetailResponse | null>(null)
const recommendedVideos = ref<Video[]>([])
const initialLikeType = ref<number | string>()
const routeLeaving = ref(false)

const adImgElement = ref(null)
const adCounter = ref(null)
const adCountDownElement = ref(null)
const player = ref<any>(null)
const hls = ref<any>(null)
const isPlayingAd = ref(false)
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

// const clickCount = ref(0)
// const maxClicks = 5
// const disableTime = 10000
// let isDisabled = ref(false)

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

const isIOS = /iPad|iPhone|iPod|IOS|Ios/.test(navigator.userAgent)
// 芒果浏览器
const mangoAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(33).items
  return tmp || []
})

// const playAdvertisement = computed(() => {
//   const tmp = appStore.getAdvertisementById(18).items
//   return tmp || []
// })

const beforePlayVideoAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(5).items
  return tmp || []
})
const videoAd = ref(null)

const videoListAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(28).items
  return tmp || []
})

const handleVideoClick = async (event) => {
  const videoListElement = event.target.closest('.video-grid-item')
  if (videoListElement) {
    const isAd = videoListElement.dataset.isAd
    const videoId = videoListElement.dataset.videoId
    if (isAd) {
      openAd(videoListElement.dataset.targetUrl, '播放页广告', 'click', videoListElement.dataset.title, 1, videoId)
    } else {
      await getVideoAd()
      await fetchVideoDetail(videoId)
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
      nextTick(async () => {
        await initializePlayer(appStore.playDomain, videoDetail.value?.playUrl)
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
    console.log(recommendedVideos.value)
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

    // 播放前广告为gif图片
    if (videoAd.value) {
      isPlayingAd.value = true
    }
    const url = generateAuthUrl(domain, uri)
    // 使用 Plyr 初始化播放器并配置广告
    if (routeLeaving.value) {
      return
    }

    player.value = new window.Plyr(videoElement, {
      autoplay: !isPlayingAd.value,
      controls: controls.value,
      settings: ['captions', 'quality', 'speed'],
      fullscreen: {
        enabled: true,
        iosNative: true
      }
    })

    if (routeLeaving.value) {
      resetPlayer()
      return
    }
    let tmpHls = null
    if (window.Hls.isSupported()) {
      tmpHls = new window.Hls({
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

    player.value.poster = poster.value

    player.value.on('ready', () => {
      const wrapper = document.querySelector('.plyr__video-wrapper')
      if (wrapper) {
        // 创建广告图片元素
        adImgElement.value = document.createElement('img')
        adImgElement.value.src = videoAd.value.imgUrl
        adImgElement.value.classList.add('video-ad')
        wrapper.appendChild(adImgElement.value)
        // 为广告图片添加点击事件，打开新窗口
        adImgElement.value.onclick = () => {
          if (videoAd.value && videoAd.value.targetUrl) {
            window.open(videoAd.value.targetUrl, '_blank')
          }
        }
        // 创建倒计时元素
        adCountDownElement.value = document.createElement('div')
        adCountDownElement.value.className = 'countdown'
        wrapper.appendChild(adCountDownElement.value)

        let countdown = videoAd.value.iosDownLoadUrl || 10
        const skipThreshold = countdown - parseInt(appStore.skipAdTime)

        const updateCountdownDisplay = () => {
          if (appStore.prePlayAdTime === '1' && countdown <= skipThreshold) {
            adCountDownElement.value.innerHTML = `点击关闭 ${countdown}`
            adCountDownElement.value.onclick = () => {
              playMainVideo()
            }
          } else {
            adCountDownElement.value.innerHTML = `广告剩余时间 ${countdown}`
            adCountDownElement.value.onclick = null
          }
        }

        updateCountdownDisplay()

        // 开始倒计时
        adCounter.value = setInterval(() => {
          countdown--
          updateCountdownDisplay()

          // 倒计时结束，播放正式视频
          if (countdown < 0) {
            clearInterval(adCounter.value)
            wrapper.removeChild(adImgElement.value)
            wrapper.removeChild(adCountDownElement.value)
            playMainVideo()
          }
        }, 1000)
      }
    })

    const playMainVideo = () => {
      isPlayingAd.value = false
      // 移除广告和倒计时
      if (adCounter.value) {
        clearInterval(adCounter.value)
      }
      if (adImgElement.value) {
        adImgElement.value.remove()
      }
      if (adCountDownElement.value) {
        adCountDownElement.value.remove()
      }
      // 开始播放视频
      player.value.play()
    }

    player.value.on('playing', () => {
      // 添加新的div元素
      const wrapper = document.querySelector('.plyr__video-wrapper')
      if (wrapper) {
        const newDiv = document.createElement('div')
        newDiv.className = 'video-domain'
        newDiv.style.position = 'absolute'
        if (videoDetail.value?.hwm == '1') {
          newDiv.style.bottom = '1rem'
        } else {
          newDiv.style.top = '1rem'
        }
        newDiv.innerHTML = `<div class="watermark-container">
                              <b>${appStore.spareData.OfficialDomain}</b>
                              <span>☝永久域名☝</span>
                            </div>`
        wrapper.appendChild(newDiv)
      }
    })

    player.value?.once('play', async () => {
      await addPlayCountApi(videoDetail.value?.id)
    })

    // 添加一个变量来跟踪是否是第一次点击
    let isFirstClick = true

    player.value.on('click', (event) => {
      if (player.value.touch && event.target.className == 'plyr__poster') {
        if (isFirstClick) {
          // 第一次点击只显示控制条
          player.value.toggleControls(true)
          isFirstClick = false
          // 设置定时器，在一段时间后重置状态
          setTimeout(() => {
            isFirstClick = true
          }, 3000) // 3秒后重置
        } else {
          // 非第一次点击，切换播放状态
          if (player.value.playing) {
            player.value.pause()
          } else {
            player.value.play()
          }
        }
      }
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

    // 监听键盘事件以禁用快进快退
    document.addEventListener('keydown', (event) => {
      if (isPlayingAd.value) {
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
          event.preventDefault()
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
        videoElement.style.height = appStore.isPc ? 'auto' : '24rem'
      }
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
  if (player.value && !isPlayingAd.value) {
    console.log(123123)
    const currentTime = player.value.currentTime
    player.value.currentTime = Math.max(currentTime - time, 0)
  }
}

const forward = (time: number) => {
  if (player.value && !isPlayingAd.value) {
    const currentTime = player.value.currentTime
    player.value.currentTime = Math.min(currentTime + time, player.value.duration)
  }
}

const resetPlayer = () => {
  if (adCounter.value) {
    clearInterval(adCounter.value)
  }
  // 使用 getElementsByClassName 获取并移除元素
  const elements = document.getElementsByClassName('countdown')
  if (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]) // 移除第一个匹配的元素
    adCountDownElement.value = null // 清空引用
  }
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

// 获取视频广告
const getVideoAd = async () => {
  const selectedAd = getRandomAd(beforePlayVideoAdvertisement.value)
  if (selectedAd && selectedAd.imgUrl) {
    const decryptedImage = await decrypt.fetchAndDecrypt(appStore.cdnUrl + selectedAd.imgUrl)
    selectedAd.imgUrl = URL.createObjectURL(decryptedImage)
  }
  videoAd.value = selectedAd
}

;(async () => {
  await getVideoAd()
  await fetchVideoDetail(route.params.id as string)
})()

onMounted(async () => {
  if (appStore.advertisement.length == 0) {
    appStore.fetAdvertisement()
  }
  // 页面离开停止播放，回来后继续播放
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      player.value?.pause()
    } else {
      player.value?.play()
    }
  })

  // 显示广告时暂停视频
  // if (showAdPopup.value) {
  //   player.value?.pause()
  // }
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
  localStorage.removeItem('plyr')
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

.plyr__controls {
  visibility: hidden;
}
</style>
