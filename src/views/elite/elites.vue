<template>
  <div class="page video-page">
    <header class="m-header h-video">
      <div class="h-m">
        <a @click="router.push({ name: 'elites' })" class="active">{{ douyin }}</a>
        <a @click="router.push({ name: 'disclose' })">吃瓜</a>
        <a @click="showToast('建设中...')">短剧</a>
        <!-- <a @click="router.push({ name: 'shortPlay' })">短剧</a> -->
      </div>
      <div class="h-r">
        <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
      </div>
    </header>

    <section class="vp-main">
      <div class="vpm-bd">
        <div class="vm-h">
          <div class="h-m">
            <a @click="router.push({ name: 'elites' })" class="active">{{ douyin }}</a>
            <a @click="router.push({ name: 'disclose' })">吃瓜</a>
            <a @click="showToast('建设中...')">短剧</a>
            <!-- <a @click="router.push({ name: 'shortPlay' })">短剧</a> -->
          </div>
          <div class="h-r">
            <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" />
          </div>
        </div>
        <div class="vm-a" />
        <div class="vm-b">
          <swiper :direction="'vertical'" :modules="modules" :virtual="{ slides: videos.length, enabled: true, addSlidesBefore: 5, addSlidesAfter: 5 } as undefined" :slides-per-view="1" :space-between="0" @slide-change="slideChange" style="width: 100%; height: 100%">
            <swiper-slide v-for="(video, index) in videos" :key="video.id" :virtual-index="index">
              <div class="v-a">
                <video :id="'video-player-' + index" class="video-player" :data-poster="video.poster" muted preload="auto" loop x5-video-player-fullscreen="true" x5-playsinline playsinline webkit-playsinline style="width: 100%; height: 100%" />
              </div>
              <div class="v-b">
                <a @click="handleLike()">
                  <i :class="['mvfont', 'mv-xihuan', { active: videoDetail && videoDetail.like == 1 }]" />
                  <b>{{ videoDetail ? videoDetail.likeCount : 0 }}</b>
                </a>
                <!-- <a @click="handleCollection()">
                  <i :class="['mvfont', 'mv-shoucang', { active: videoDetail && videoDetail.collect }]" />
                  <b>{{ videoDetail ? videoDetail.collectionCount : 0 }}</b>
                </a> -->
                <a @click="handleShare"><i class="mvfont mv-zhuanfa" /><b>分享</b></a>
                <a class="btn-mute" @click="toggleMute">
                  <i :class="['mvfont', mutePlay ? 'mv-jingyin' : 'mv-shengyin0']" />
                  <span>取消静音</span>
                </a>
              </div>
              <div class="v-c">
                <!-- <div class="c-g">
                  <img :src="getAssetsFile('logo-2.png')" />芒果TV官方
                  <span>{{ appStore.spareData.OfficialDomain }}</span>
                </div> -->
                <h3>
                  @芒果TV官方-
                  <span>{{ appStore.spareData.OfficialDomain }}</span>
                </h3>
                <p>
                  <b>{{ video.title }}</b>
                  <template v-if="videoDetail && videoDetail.tags">
                    <span v-for="tag in videoDetail.tags" :key="tag.id">#{{ tag.title }}</span>
                  </template>
                </p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <Popup v-model:show="showSharePopup" teleport="body" position="center" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>
    <Footer active-menu="elites" footer-class="footer f-footer" />
    <Loading v-show="isLoading" />
    <NavBar active-menu="elites" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { getVideoListApi, getVideoDetailApi, addPlayCountApi } from '@/api/video'
// import { userCollection } from '@/api/user'
import decryptionService from '@/utils/decryptionService'
import { userLike } from '@/api/user'
import type { Video, VideoDetailResponse } from '@/types/video'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { generateAuthUrl } from '@/utils/decryptionService'
import { douyin } from '@/utils/cryptedData'
import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import Loading from '@/components/layout/Loading.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Virtual } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/virtual'

import { Popup, showToast } from 'vant'
import Clipboard from 'clipboard'

const router = useRouter()
const appStore = useAppStore()
const userStore = useUserStore()
const modules = [Virtual]
const decrypt = new decryptionService()

const videos = ref<Video[]>([])
const videoDetail = ref<VideoDetailResponse | null>(null)
const players = ref<Map<number, any>>(new Map())
const hlsInstances = ref<Map<number, any>>(new Map())
const currentVideoIndex = ref(0)
const initPageIndex = computed(() => Math.floor(Math.random() * (appStore.shortVideoRandomMax - appStore.shortVideoRandomMin + 1)) + appStore.shortVideoRandomMin)
const pageIndex = ref(initPageIndex.value)
const showSharePopup = ref(false)
const clipboard = ref<Clipboard | null>(null)
const isLoading = ref(true)
const mutePlay = ref(true)

const fetchVideos = async () => {
  try {
    const {
      data: { data }
    } = await getVideoListApi({
      PageIndex: pageIndex.value,
      PageSize: 5,
      VideoType: 1,
      SortType: 1
    })
    if (data && data.items) {
      for (const video of data.items) {
        video.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + video.imgUrl))
        videos.value.push(video)
      }
      console.log(videos.value)
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
  }
}

const fetchVideoDetail = async (videoId: number) => {
  try {
    const {
      data: { data }
    } = await getVideoDetailApi(videoId)
    videoDetail.value = data
  } catch (error) {
    console.error('获取视频详情失败:', error)
  }
}

const initializePlayer = async (index: number) => {
  await nextTick() // 确保 DOM 已更新
  const video = videos.value[index]
  if (!video) return
  const videoElement = document.getElementById('video-player-' + index) as HTMLVideoElement
  if (!videoElement) {
    console.error(`Video element with id 'video-player-${index}' not found`)
    return
  }
  if (players.value.has(index)) {
    players.value.get(index).destroy()
    players.value.delete(index)
  }
  if (hlsInstances.value.has(index)) {
    hlsInstances.value.get(index).stopLoad()
    hlsInstances.value.get(index).destroy()
    hlsInstances.value.delete(index)
  }

  const url = generateAuthUrl(appStore.playDomain, video.playUrl)
  if (window.Hls.isSupported()) {
    try {
      const player = new window.Plyr(videoElement, {
        clickToPlay: true,
        autoplay: false,
        muted: true,
        autopause: true,
        hideControls: true,
        controls: ['progress']
      })
      // 播放器初始化后总是把禁音给取消了, 这里重新设置
      player.muted = mutePlay.value
      const hls = new window.Hls({
        maxBufferLength: 15,
        maxMaxBufferLength: 30,
        maxBufferSize: 30 * 1000 * 1000,
        maxBufferHole: 0.2,
        startFragPrefetch: true
      })
      // hls.config.xhrSetup = (xhr) => {
      //   const tsUrlWithAuth = generateAuthUrl(appStore.playDomain, video.playUrl)
      //   xhr.open('GET', tsUrlWithAuth, true)
      // }
      hlsInstances.value.set(index, hls)
      hls.loadSource(url)
      hls.attachMedia(videoElement)

      // 点击屏幕播放暂停
      hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
        player.on('click', (event) => {
          if (player.touch && event.target.className == 'plyr__poster') {
            player.togglePlay()
          }
        })

        // 播放一次添加播放量
        player.once('play', async () => {
          await addPlayCountApi(videoDetail.value?.id)
        })

        // 如果不是当前视频，则暂停
        player.on('play', () => {
          isLoading.value = false
        })
      })

      // hls错误处理
      hls.on(window.Hls.Events.ERROR, (event, data) => {
        if (data.fatal) {
          handleHlsError(data, hls)
        }
      })

      // 可以播放时，获取视频宽高，判断是否需要添加cover-fit
      player.on('canplay', () => {
        const videoWidth = videoElement.videoWidth
        const videoHeight = videoElement.videoHeight
        const videoRatio = videoHeight / videoWidth
        if (videoRatio > 1.5) {
          videoElement.classList.add('cover-fit')
        }
        if (currentVideoIndex.value == index) {
          isLoading.value = false
        }
      })
      players.value.set(index, player)
    } catch (error) {
      console.error('初始化hls失败: ' + index, error)
    }
  } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
    videoElement.src = url
    const player = new window.Plyr(videoElement, {
      clickToPlay: true,
      autoplay: false,
      muted: true,
      autopause: true,
      hideControls: true,
      controls: ['progress']
    })
    player.muted = mutePlay.value
    player.on('canplay', () => {
      const videoWidth = videoElement.videoWidth
      const videoHeight = videoElement.videoHeight
      const videoRatio = videoHeight / videoWidth
      if (videoRatio > 1.5) {
        videoElement.classList.add('cover-fit')
      }
      if (currentVideoIndex.value == index) {
        isLoading.value = false
      }
    })
    players.value.set(index, player)
  } else {
    console.error('HLS not supported and cannot play type')
  }
}

const handleHlsError = (data, hls) => {
  switch (data.type) {
    case window.Hls.ErrorTypes.NETWORK_ERROR:
      console.error('HLS network error:', data)
      hls.startLoad()
      break
    case window.Hls.ErrorTypes.MEDIA_ERROR:
      console.error('HLS media error:', data)
      hls.recoverMediaError()
      break
    case window.Hls.ErrorTypes.OTHER_ERROR:
      console.error('HLS other error:', data)
      break
    default:
      console.error('HLS unrecoverable error:', data)
      // showToast('播放失败')
      // hls.destroy()
      // hls.stopLoad()
      // hlsInstances.value.delete(index)
      break
  }
}

const slideChange = async (swiper) => {
  try {
    const previousIndex = currentVideoIndex.value
    currentVideoIndex.value = swiper.activeIndex
    console.log('上一个: ' + previousIndex, '当前: ' + currentVideoIndex.value)

    if (previousIndex === currentVideoIndex.value) return

    // 播放当前视频
    await playCurrentVideo()

    // 停止并重置上一个视频
    await stopAndResetVideo(previousIndex)
    // 预加载下一个视频
    const isSlidingDown = currentVideoIndex.value > previousIndex
    const nextVideoIndex = isSlidingDown ? currentVideoIndex.value + 1 : currentVideoIndex.value - 1
    if (nextVideoIndex >= 0 && nextVideoIndex < videos.value.length) {
      await initializePlayer(nextVideoIndex)
    }
    // 销毁上上一个视频
    const destroyIndex = isSlidingDown ? currentVideoIndex.value - 2 : currentVideoIndex.value + 2
    if (destroyIndex >= 0 && players.value.has(destroyIndex)) {
      await destroyVideo(destroyIndex)
      console.log('上上一个视频销毁完成', destroyIndex)
    }

    // 获取视频详情
    const currentVideo = videos.value[currentVideoIndex.value]
    if (currentVideo) {
      await fetchVideoDetail(parseInt(currentVideo.id))
    }

    if (videos.value.length - currentVideoIndex.value < 3) {
      pageIndex.value++
      await fetchVideos()
    }
  } catch (error) {
    console.error('滑动失败:', error)
  }
}

const stopAndResetVideo = (index) => {
  const player = players.value.get(index)
  if (hlsInstances.value.has(index)) {
    console.log('stopload: ' + index)
    hlsInstances.value.get(index).stopLoad()
  }
  if (player) {
    try {
      console.log('stop: ' + index)
      if (currentVideoIndex.value != index) {
        player.stop()
        console.log('播放器已停���: ' + index)
      }
    } catch (error) {
      console.error('停止播放失败:', error)
    }
  }
}

const playCurrentVideo = async () => {
  isLoading.value = true
  const currentPlayer = players.value.get(currentVideoIndex.value)
  if (!currentPlayer) {
    console.log('播放器不存在，初始化: ' + currentVideoIndex.value)
    await initializePlayer(currentVideoIndex.value)
    return
  }

  const videoElement = currentPlayer.media
  if (!videoElement) {
    console.error('Video element is null')
    return
  }

  const playVideo = async () => {
    console.log('playVideo 方法被调用')
    try {
      console.log('播放器 ' + currentVideoIndex.value + ' 存在，播放')
      await currentPlayer.play()
    } catch (error) {
      if (error.name == 'NotAllowedError') {
        showToast('点击屏幕继续播放')
      }
    } finally {
      isLoading.value = false
    }
  }

  if (videoElement.readyState >= 2) {
    console.log('视频成功播放')
    await playVideo()
  } else {
    console.log('播放器: ' + currentVideoIndex.value + ' 视频未准备好')
    videoElement.addEventListener(
      'canplay',
      async function onCanPlay() {
        await playVideo()
        videoElement.removeEventListener('canplay', onCanPlay)
      },
      { once: true }
    )
  }
}

const destroyVideo = async (index) => {
  const playerToDestroy = players.value.get(index)
  await playerToDestroy.stop()
  await playerToDestroy.destroy()
  playerToDestroy.currentTime = 0
  if (hlsInstances.value.has(index)) {
    hlsInstances.value.get(index).stopLoad()
    hlsInstances.value.get(index).destroy()
    hlsInstances.value.delete(index)
  }
  players.value.delete(index)
}

const checkLogin = (): boolean => {
  if (userStore.userInfo.id == '') {
    userStore.showLoginDialog = true
    return false
  }
  return true
}

const handleLike = async () => {
  if (!checkLogin()) return

  try {
    const videoId = videoDetail.value?.id
    const newLikeStatus = videoDetail.value?.like == 1 ? 0 : 1

    await userLike({ VideoId: videoId, Like: newLikeStatus })

    videoDetail.value.like = newLikeStatus
    videoDetail.value.likeCount = (Number(videoDetail.value.likeCount) + (newLikeStatus ? 1 : -1)).toString()
  } catch (error) {
    console.error('操作失败:', error)
  }
}

// const handleCollection = async () => {
//   if (!checkLogin()) return

//   try {
//     const videoId = videoDetail.value?.id
//     const newCollectStatus = !videoDetail.value?.collect

//     await userCollection({ VideoId: videoId, Collect: newCollectStatus })

//     videoDetail.value.collect = newCollectStatus
//     videoDetail.value.collectionCount = (Number(videoDetail.value.collectionCount) + (newCollectStatus ? 1 : -1)).toString()
//   } catch (error) {
//     console.error('操作失败:', error)
//   }
// }

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

const toggleMute = () => {
  mutePlay.value = !mutePlay.value
  players.value.forEach((player) => {
    player.muted = mutePlay.value
  })
}

onMounted(async () => {
  await fetchVideos()
  if (videos.value.length > 0) {
    await fetchVideoDetail(parseInt(videos.value[0].id))
    await initializePlayer(0)
    // isAutoPlay.value = false
    await initializePlayer(1)

    const firstPlayer = players.value.get(0)
    console.log(firstPlayer)
    if (firstPlayer) {
      console.log('播放第一个视频')
      firstPlayer.play()
    }
  }

  // 给body加上 noscrolling class (先移除在添加)
  // document.body.classList.remove('noscrolling')
  // document.body.classList.add('noscrolling')
})

onBeforeRouteLeave(() => {
  players.value.forEach((player) => {
    player.destroy()
  })
  hlsInstances.value.forEach((hls) => {
    hls.stopLoad()
    hls.destroy()
  })
  players.value.clear()
  hlsInstances.value.clear()
  localStorage.removeItem('plyr')

  // document.body.classList.remove('noscrolling')
  // setTimeout(() => {
  //   document.body.classList.remove('noscrolling')
  // }, 200)
})
</script>

<style scoped>
.active {
  color: #ff6b6b;
}
</style>
