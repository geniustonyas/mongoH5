<template>
  <div :class="showVideo ? 'page video-page' : 'page'">
    <div v-show="!showVideo" class="short-List">
      <header class="m-header">
        <div class="h-l" />
        <div class="h-m">
          <a @click="router.push({ name: 'shortList' })" class="active">{{ douyin }}</a>
          <a @click="showToast('建设中...')">短剧</a>
        </div>
        <div class="h-r">
          <!-- <i @click="router.push({ name: 'search' })" class="mvfont mv-search1" /> -->
        </div>
      </header>
      <section class="h-l-b padding1">
        <PullRefresh v-model="refreshing" @refresh="fresh">
          <List v-model:loading="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" @load="loadData">
            <div class="video-list-box" ref="videoListBox">
              <template v-for="(vd, index) in videoList" :key="index">
                <div v-if="!vd.isAd" @click="viewVideo(vd, $event)" class="video-list">
                  <div class="l-a">
                    <Loading v-show="showVideoLoading == vd.id" :width="40" :height="40" />
                    <img :src="vd.poster" :alt="vd.title" />
                    <span class="a-b" v-if="vd.duration != '0'">{{ formatDuration(parseInt(vd.duration)) }}</span>
                  </div>
                  <div class="l-b">
                    <b>{{ vd.title }}</b>
                    <div class="b-a">
                      <span><i class="mvfont mv-kan" />{{ formatNumber(vd.viewCount) }}</span>
                      <span><i class="mvfont mv-zan" />{{ formatNumber(vd.likeCount) }}</span>
                    </div>
                  </div>
                </div>
                <div v-else @click="openAd(vd.targetUrl, '短视频列表广告', 'click', vd.id)" class="video-list">
                  <div class="l-a">
                    <img :src="vd.poster" :alt="vd.title" />
                  </div>
                  <div class="l-b">
                    <b>{{ vd.title }}</b>
                    <div class="b-a" />
                  </div>
                </div>
              </template>
            </div>
          </List>
        </PullRefresh>
      </section>
      <Footer active-menu="shortList" footer-class="footer" />
    </div>
    <transition name="video-fade" @after-leave="handleAfterLeave">
      <div v-show="showVideo" class="short-video" :style="videoStyle">
        <header class="m-header h-video">
          <div class="h-l s-v">
            <a @click="closeVideo"><i class="mvfont mv-left" /><span>返回</span></a>
          </div>
          <div class="h-m" />
          <div class="h-r" />
        </header>
        <section class="vp-main">
          <div class="vpm-bd">
            <!-- <div class="vm-h" />
            <div class="vm-a" /> -->
            <div class="vm-b">
              <swiper :direction="'vertical'" :modules="modules" :virtual="{ slides: videoList.length, enabled: true, addSlidesBefore: 5, addSlidesAfter: 5 } as undefined" :slides-per-view="1" :space-between="0" @slide-change="slideChange" style="width: 100%; height: 100%">
                <template v-if="videos.length > 0">
                  <swiper-slide v-for="(video, index) in videos" :key="video.id" :virtual-index="index">
                    <div class="v-a">
                      <video :id="'video-player-' + index" class="video-player cover-fit" :data-poster="video.poster" muted preload="auto" loop x5-video-player-fullscreen="true" x5-playsinline playsinline webkit-playsinline style="width: 100%; height: 100%" />
                    </div>
                    <div class="v-b">
                      <a @click="handleLike()">
                        <i :class="['mvfont', 'mv-xihuan', { active: videoDetail && videoDetail.like == 1 }]" />
                        <b>{{ videoDetail ? videoDetail.likeCount : 0 }}</b>
                      </a>
                      <a @click="handleShare"><i class="mvfont mv-zhuanfa" /><b>分享</b></a>
                      <a class="btn-mute" @click="toggleMute">
                        <i :class="['mvfont', mutePlay ? 'mv-jingyin' : 'mv-shengyin0']" />
                        <span>取消静音</span>
                      </a>
                    </div>
                    <div class="v-c">
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
                </template>
              </swiper>
            </div>
          </div>
        </section>
        <Popup v-model:show="showSharePopup" teleport="body" position="center" :overlay="false" round>
          <div class="share-popup">
            <p>分享链接已复制，赶快去分享给好友吧！</p>
          </div>
        </Popup>
      </div>
    </transition>
    <NavBar active-menu="shortList" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, nextTick } from 'vue'
import { PullRefresh, List, showToast, Popup } from 'vant'
import { getVideoListApi, getVideoDetailApi, addPlayCountApi } from '@/api/video'
// import { userCollection } from '@/api/user'
import { userLike } from '@/api/user'
import type { Video, VideoListRequest, VideoDetailResponse } from '@/types/video'
import type { DataWithAd } from '@/types/global.d'
import decryptionService from '@/utils/decryptionService'

import NavBar from '@/components/layout/NavBar.vue'
import Footer from '@/components/layout/Footer.vue'
import Loading from '@/components/layout/Loading.vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'
import { formatDuration, insertAds, openAd, formatNumber } from '@/utils'
import { generateAuthUrl } from '@/utils/decryptionService'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Virtual } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/virtual'
import Clipboard from 'clipboard'
import Masonry from 'masonry-layout'
import imagesLoaded from 'imagesloaded'

// 获取社区帖子广告
const shortlistAdvertisement = computed(() => {
  const tmp = appStore.getAdvertisementById(29).items
  return tmp || []
})

let msnry = null
const decrypt = new decryptionService()
const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
const modules = [Virtual]
const showVideo = ref(false)
const showVideoLoading = ref('')
import { douyin } from '@/utils/cryptedData'

// 列表变量
const videoList = ref<DataWithAd<Video>[]>([])
const initVidelListPageIndex = computed(() => Math.floor(Math.random() * (appStore.shortVideoListRandomMax - appStore.shortVideoListRandomMin + 1)) + appStore.shortVideoListRandomMin)
const videoListPageIndex = ref(initVidelListPageIndex.value)
let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)

// 短视屏变量
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
const clickPosition = ref({ x: 0, y: 0, width: 0, height: 0 })
const isMasonryUpdating = ref(false)

const fetchVideoList = async (isRefresh = false) => {
  if (isRefresh) {
    videoList.value = []
    videoListPageIndex.value = initVidelListPageIndex.value
    finished.value = false
  }
  if (finished.value) return

  try {
    listLoading.value = true
    const params: VideoListRequest = {
      PageIndex: videoListPageIndex.value,
      PageSize: 10,
      VideoType: 1,
      SortType: 1
    }

    const {
      data: { data }
    } = await getVideoListApi(params)

    if (data && Array.isArray(data.items)) {
      data.items = insertAds(data.items, shortlistAdvertisement.value, 5, 7, false)
      // 必须先等待 解密图片存入poster中
      for (const video of data.items) {
        video.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + video.imgUrl))
      }

      const startIndex = videoList.value.length
      if (isRefresh) {
        videoList.value = data.items
      } else {
        videoList.value = videoList.value.concat(data.items)
      }
      finished.value = data.items.length < params.PageSize

      await nextTick()
      const elem = document.querySelector('.video-list-box')
      if (elem) {
        imagesLoaded(elem, () => {
          if (!msnry) {
            msnry = new Masonry(elem, {
              itemSelector: '.video-list',
              columnWidth: '.video-list',
              percentPosition: true,
              gutter: 4
            })
          }
          const newElements = document.querySelectorAll(`.video-list-box .video-list:nth-child(n+${startIndex + 1})`)
          if (startIndex == 0) {
            msnry.reloadItems()
          } else {
            msnry.appended(newElements)
          }
          setTimeout(() => {
            msnry.layout()
          }, 300)
        })
      }
    }
  } catch (error) {
    console.error('获取视频列表失败:', error)
    error.value = true
  } finally {
    refreshing.value = false
    listLoading.value = false
  }
}

const loadData = () => {
  if (isMasonryUpdating.value) {
    return
  }
  isMasonryUpdating.value = true
  videoListPageIndex.value += 1
  fetchVideoList().finally(() => {
    isMasonryUpdating.value = false
  })
}

const fresh = () => {
  refreshing.value = true
  fetchVideoList(true)
}

const viewVideo = async (video: Video, event: MouseEvent) => {
  videos.value = []
  showVideoLoading.value = video.id
  const imgElement = (event.currentTarget as HTMLElement).querySelector('img')
  if (imgElement) {
    const rect = imgElement.getBoundingClientRect()
    clickPosition.value = { x: rect.left, y: rect.top, width: rect.width, height: rect.height }
  }

  video.poster = imgElement.src
  videos.value.push(video)

  await fetchVideoDetail(parseInt(video.id))
  await initializePlayer(0)
  pageIndex.value = Math.floor(Math.random() * (appStore.shortVideoRandomMax - appStore.shortVideoRandomMin + 1)) + appStore.shortVideoRandomMin
  await fetchVideos()
  await initializePlayer(1)
  const firstPlayer = players.value.get(0)
  if (firstPlayer) {
    firstPlayer.play()
  }
  showVideo.value = true
  showVideoLoading.value = ''
}

const closeVideo = async () => {
  showVideo.value = false
  showVideoLoading.value = ''
}

const handleAfterLeave = async () => {
  // 先停止当前播放
  const currentPlayer = players.value.get(currentVideoIndex.value)
  if (currentPlayer) {
    currentPlayer.stop()
  }
  videos.value = []
  videoDetail.value = null
  currentVideoIndex.value = 0
  isLoading.value = false
  mutePlay.value = true
  clickPosition.value = { x: 0, y: 0, width: 0, height: 0 }
  await destroyAllVideos()
}

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
      data.items.forEach(async (video) => {
        video.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + video.imgUrl))
      })
      videos.value.push(...data.items)
      console.log('获取视频列表成功', videos.value)
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
        startFragPrefetch: true,
        liveSyncDuration: 3,
        liveMaxLatencyDuration: 5
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
        if (videoRatio <= 1.5) {
          videoElement.classList.remove('cover-fit')
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
    // 播放器初始化后总是把禁音给取消了, 这里重新设置
    player.muted = mutePlay.value
    player.on('canplay', () => {
      const videoWidth = videoElement.videoWidth
      const videoHeight = videoElement.videoHeight
      const videoRatio = videoHeight / videoWidth
      if (videoRatio <= 1.5) {
        videoElement.classList.remove('cover-fit')
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
    hlsInstances.value.get(index).stopLoad()
  }
  if (player) {
    try {
      if (currentVideoIndex.value != index) {
        player.stop()
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
    await initializePlayer(currentVideoIndex.value)
    return
  }

  const videoElement = currentPlayer.media
  if (!videoElement) {
    console.error('Video element is null')
    return
  }

  const playVideo = async () => {
    try {
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
    await playVideo()
  } else {
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

onMounted(() => {
  fetchVideoList()
})

const destroyAllVideos = async () => {
  await nextTick()
  players.value.forEach((player) => {
    player.destroy()
  })
  hlsInstances.value.forEach((hls) => {
    hls.stopLoad()
    hls.destroy()
  })
  players.value.clear()
  hlsInstances.value.clear()
}

onBeforeRouteLeave(() => {
  closeVideo()
  handleAfterLeave()
})

const videoStyle = computed(() => ({
  '--click-x': `${clickPosition.value.x}px`,
  '--click-y': `${clickPosition.value.y}px`,
  '--click-width': `${clickPosition.value.width}px`,
  '--click-height': `${clickPosition.value.height}px`
}))
</script>

<style scoped>
.video-fade-enter-active,
.video-fade-leave-active {
  transition: transform 0.3s ease; /* 定义过渡的持续时间和速度曲线 */
}

.video-fade-enter-from,
.video-fade-leave-to {
  transform-origin: var(--click-x) var(--click-y);
  transform: scale(calc(var(--click-width) / 100vw)); /* 从图片位置放大到全屏 */
}

.video-fade-enter-to,
.video-fade-leave-from {
  transform: scale(1); /* 定义动画的结束和起始状态 */
}

/* .short-video {
  width: 100%;
  height: 100vh;
  background-color: black;
} */
</style>
