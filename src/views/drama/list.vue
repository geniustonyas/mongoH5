<template>
  <HomeLayout>
    <section class="vp-main">
      <div class="vpm-bd">
        <div class="player-list">
          <swiper
            :direction="'vertical'"
            :modules="modules"
            :virtual="{ slides: videos.length, enabled: true, addSlidesBefore: 5, addSlidesAfter: 5 } as undefined"
            :slides-per-view="1"
            :space-between="0"
            @slide-change="slideChange"
            style="width: 100%; height: 100%"
          >
            <swiper-slide v-for="(video, index) in videos" :key="video.id" :virtual-index="index">
              <div class="vm-b">
                <div class="v-a">
                  <video
                    v-if="!isLoading"
                    class="video-player"
                    :data-poster="videos[currentIndex].poster"
                    muted
                    preload="auto"
                    x5-video-player-fullscreen="true"
                    x5-playsinline
                    playsinline
                    webkit-playsinline
                    style="width: 100%; height: 100%"
                  />
                </div>
                <div class="v-b">
                  <a href="#"><img alt="" src="../../assets/imgs/logo-4.png" /></a>
                  <a @click.prevent="handleLike()">
                    <i :class="['mvfont', 'mv-xihuan', { active: videoDetail && videoDetail.likeCount == '1' }]" />
                    <b>{{ videoDetail ? videoDetail.likeCount : 0 }}</b>
                  </a>
                  <a @click.prevent="handleShowComment">
                    <i class="mvfont mv-pinglun3" />
                    <b>{{ videoDetail ? videoDetail.likeCount : 0 }}</b>
                  </a>
                  <a @click.prevent="toggleCollection">
                    <i class="mvfont mv-shoucang" />
                    <b>{{ videoDetail ? videoDetail.collectionCount : 0 }}</b>
                  </a>
                  <a @click="handleShare"><i class="mvfont mv-zhuanfa" /><b>分享</b></a>
                </div>
                <div class="v-d">
                  <div class="d-a">
                    <a href="#"><i class="mvfont mv-dianji" />点击查看更多短剧<i class="mvfont mv-right" /></a>
                  </div>
                  <div class="d-b">
                    <h3>{{ videoDetail?.title || '-' }}</h3>
                    <p>第{{ index + 1 }}集<small>|</small>雇人假结婚被抓包？不过女主是专业的，看合约夫妻如何反击！</p>
                  </div>
                  <div class="d-c" @click="showDramasPopup = true">
                    <div class="c-l"><img alt="" src="assets/imgs/logo-2.png" />短剧<b>●</b>三十天而已<span>更新至第3集</span></div>
                    <div class="c-r">
                      <i class="mvfont mv-right" />
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <Loading v-show="isLoading" />
    <Popup
      v-model:show="showDramasPopup"
      class="moreEpisodesPopup"
      position="bottom"
      round
      :close-on-click-overlay="true"
      :style="{ height: '60%' }"
    >
      <div class="moreEpisodes">
        <div class="m-a">
          <div class="ma-t">
            <div class="t-l"><img src="assets/imgs/logo-2.png" />短剧<b>●</b>三十天而已<span>更新至第3集</span></div>
          </div>
        </div>
        <div class="m-a" style="padding-top: 0">
          <div class="ma-b">
            <van-tabs v-model:active="activeEpisode" swipeable line-width="0" line-height="0">
              <van-tab title="选集">
                <div class="m-b m-b-tab">
                  <ul class="p-l-i">
                    <li>
                      <div class="l-l" style="background-image: url(src/assets/imgs/logo-4.png)" />
                      <div class="l-r">
                        <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                        <div class="r-b">
                          <span>02:46</span>
                          <span><i class="mvfont mv-bofang2" />48.1万</span>
                          <span><i class="mvfont mv-like" />2982</span>
                          <span><i class="mvfont mv-zan" />2982</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="l-l" style="background-image: url(src/assets/imgs/logo-4.png)" />
                      <div class="l-r">
                        <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                        <div class="r-b">
                          <span>02:46</span>
                          <span><i class="mvfont mv-bofang2" />48.1万</span>
                          <span><i class="mvfont mv-like" />2982</span>
                          <span><i class="mvfont mv-zan" />2982</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="l-l" style="background-image: url(src/assets/imgs/logo-4.png)" />
                      <div class="l-r">
                        <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                        <div class="r-b">
                          <span>02:46</span>
                          <span><i class="mvfont mv-bofang2" />48.1万</span>
                          <span><i class="mvfont mv-like" />2982</span>
                          <span><i class="mvfont mv-zan" />2982</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="l-l" style="background-image: url(src/assets/imgs/logo-4.png)" />
                      <div class="l-r">
                        <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                        <div class="r-b">
                          <span>02:46</span>
                          <span><i class="mvfont mv-bofang2" />48.1万</span>
                          <span><i class="mvfont mv-like" />2982</span>
                          <span><i class="mvfont mv-zan" />2982</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </van-tab>
              <van-tab title="热门短剧">
                <div class="m-b">
                  <ul class="p-l-i">
                    <li>
                      <div class="l-l" style="background-image: url(src/assets/imgs/logo-4.png)" />
                      <div class="l-r">
                        <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                        <div class="r-b">
                          <span>02:46</span>
                          <span><i class="mvfont mv-bofang2" />48.1万</span>
                          <span><i class="mvfont mv-like" />2982</span>
                          <span><i class="mvfont mv-zan" />2982</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </van-tab>
              <van-tab title="猜你喜欢">
                <div class="m-b">
                  <ul class="p-l-i">
                    <li>
                      <div class="l-l" style="background-image: url(src/assets/imgs/logo-4.png)" />
                      <div class="l-r">
                        <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                        <div class="r-b">
                          <span>02:46</span>
                          <span><i class="mvfont mv-bofang2" />48.1万</span>
                          <span><i class="mvfont mv-like" />2982</span>
                          <span><i class="mvfont mv-zan" />2982</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </div>
        <div class="m-c">
          <a><i class="mvfont mv-like" />收藏短剧</a>
          <a href="#"><i class="mvfont mv-home" />短剧首页</a>
        </div>
      </div>
    </Popup>
    <Popup v-model:show="showSharePopup" teleport="body" position="center" :overlay="false" round>
      <div class="share-popup">
        <p>分享链接已复制，赶快去分享给好友吧！</p>
      </div>
    </Popup>
  </HomeLayout>
</template>

<script setup lang="ts">
  import HomeLayout from '@/components/layout/HomeLayout.vue'
  import { nextTick, onMounted, onUnmounted, ref } from 'vue'
  import decryptionService, { generateAuthUrl } from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import Loading from '@/components/layout/Loading.vue'
  import { Popup } from 'vant'
  import { getDramaDetail, getDramaList } from '@/api/drama'
  import { DramaDetailResponse, DramaItemVM } from '@/types/drama'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Virtual } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/virtual'

  const modules = [Virtual]
  const videos = ref<DramaItemVM[]>([])
  const videoDetail = ref<DramaDetailResponse | null>(null)
  const decrypt = new decryptionService()
  const appStore = useAppStore()
  const isLoading = ref(true)
  const showSharePopup = ref(false)
  const showDramasPopup = ref(false)
  const activeEpisode = ref('episodeListTab')
  const currentIndex = ref(0)
  const currentEpisodeIndex = ref(0) // 当前剧集的第几集索引

  // 创建视频预加载管理器
  const VideoPreloadManager = {
    preloadQueue: new Map<string, { hls?: any; player: any }>(),
    currentVideo: new Map<string, { hls?: any; player: any }>(),
    maxPreloadCount: 2,

    async preloadVideo(video: DramaItemVM) {
      if (this.preloadQueue.size >= this.maxPreloadCount) {
        const [firstKey] = this.preloadQueue.keys()
        this.destroyVideo(firstKey)
      }

      const videoElement = document.createElement('video')
      videoElement.style.display = 'none'
      videoElement.muted = true
      document.body.appendChild(videoElement)

      const url = generateAuthUrl(appStore.playDomain, video.first.playUrl)
      if (window.Hls.isSupported()) {
        try {
          const preloadPlayer = createPlayer(videoElement)
          const preloadHls = createHlsInstance(url, videoElement)
          this.preloadQueue.set(video.first.id, { hls: preloadHls, player: preloadPlayer })
        } catch (error) {
          console.error('预加载视频失败:', error)
        }
      }
    },

    destroyVideo(videoId: string) {
      const video = this.preloadQueue.get(videoId)
      if (video) {
        video.player.destroy()
        video.hls.destroy()
        this.preloadQueue.delete(videoId)
      }
    },

    getPreloadedVideo(videoId: string) {
      return this.preloadQueue.get(videoId)
    },

    setCurrentVideo(videoId: string, video: { hls?: any; player: any }) {
      // 清理之前的当前视频
      this.clearCurrentVideo()
      this.currentVideo.set(videoId, video)
    },

    clearCurrentVideo() {
      this.currentVideo.forEach(({ hls, player }) => {
        if (player) {
          player.pause()
          player.destroy()
        }
        if (hls) {
          hls.stopLoad()
          hls.detachMedia()
          hls.destroy()
        }
      })
      this.currentVideo.clear()
    },

    clear() {
      this.preloadQueue.forEach((video, id) => this.destroyVideo(id))
      this.preloadQueue.clear()
      this.clearCurrentVideo()
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
        break
    }
  }

  const fetchDramaList = async () => {
    try {
      const {
        data: { data }
      } = await getDramaList({
        PageIndex: 1,
        PageSize: 5,
        ChannelId: '',
        GenderChannelType: ''
      })
      if (data && data.items) {
        for (const video of data.items) {
          video.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + video.imgUrl))
          videos.value.push(video)
        }
      }
    } catch (error) {
      console.error('获取剧集列表失败:', error)
    }
  }

  const fetchDramaDetail = async (videoId: number) => {
    try {
      const {
        data: { data }
      } = await getDramaDetail({ Id: videoId })
      videoDetail.value = data
    } catch (error) {
      console.error('获取视频详情失败:', error)
    }
  }

  // 创建播放器配置
  const createPlayerConfig = () => ({
    clickToPlay: true,
    autoplay: false,
    muted: true,
    autopause: true,
    hideControls: true,
    controls: ['progress']
  })

  // 创建HLS配置
  const createHlsConfig = () => ({
    maxBufferLength: 15,
    maxMaxBufferLength: 30,
    maxBufferSize: 30 * 1000 * 1000,
    maxBufferHole: 0.2,
    startFragPrefetch: true,
    liveSyncDuration: 3,
    liveMaxLatencyDuration: 5
  })

  // 检查视频宽高比并设置样式
  const checkVideoAspectRatio = (videoElement: HTMLVideoElement) => {
    const videoWidth = videoElement.videoWidth
    const videoHeight = videoElement.videoHeight
    const videoRatio = videoHeight / videoWidth
    if (videoRatio > 1.5) {
      videoElement.classList.add('cover-fit')
    }
  }

  // 设置播放器事件监听
  const setupPlayerEvents = (player: any, video: DramaItemVM) => {
    // 点击事件
    player.on('click', event => {
      if (player.touch && event.target.className == 'plyr__poster') {
        player.togglePlay()
      }
    })

    // 播放结束事件
    player.on('ended', () => {
      handleVideoEnd(video)
    })

    // 可以播放时的事件
    player.on('canplay', () => {
      const videoPlayerEle = player.elements.container
      if (videoPlayerEle) {
        checkVideoAspectRatio(videoPlayerEle)
      }
    })
  }

  // 创建并初始化播放器
  const createPlayer = (videoElement: HTMLVideoElement) => {
    const player = new window.Plyr(videoElement, createPlayerConfig())
    player.muted = true
    return player
  }

  // 创建并初始化HLS实例
  const createHlsInstance = (url: string, videoElement: HTMLVideoElement) => {
    const hlsInstance = new window.Hls(createHlsConfig())
    hlsInstance.loadSource(url)
    hlsInstance.attachMedia(videoElement)
    return hlsInstance
  }

  // 加载新剧集（slider切换时调用）
  const loadVideo = async (video: DramaItemVM, autoPlay = false) => {
    // 重置当前集数索引
    currentEpisodeIndex.value = 0

    const videoPlayerEle = document.querySelector('.video-player') as HTMLVideoElement
    if (!videoPlayerEle) return

    // 检查是否有预加载的视频
    const preloadedVideo = VideoPreloadManager.getPreloadedVideo(video.first.id)
    if (preloadedVideo) {
      const { hls, player } = preloadedVideo
      VideoPreloadManager.preloadQueue.delete(video.first.id)

      // 将预加载的视频附加到播放器元素
      if (hls) {
        hls.detachMedia()
        hls.attachMedia(videoPlayerEle)
      }
      player.elements.container = videoPlayerEle

      setupPlayerEvents(player, video)

      if (autoPlay) {
        player.play()
      }

      // 添加到预加载管理器的当前播放队列
      VideoPreloadManager.setCurrentVideo(video.first.id, { hls, player })
    } else {
      // 没有预加载，正常加载第一集
      await loadEpisode(video, 0)
    }
  }

  // 加载指定集数的视频
  const loadEpisode = async (video: DramaItemVM, episodeIndex = 0) => {
    const videoPlayerEle = document.querySelector('.video-player') as HTMLVideoElement
    if (!videoPlayerEle) return

    // 清理当前播放的资源
    VideoPreloadManager.clearCurrentVideo()

    // 重置视频元素
    videoPlayerEle.removeAttribute('src')
    videoPlayerEle.load()

    // 获取要播放的视频URL
    let playUrl = ''
    if (episodeIndex === 0) {
      playUrl = video.first.playUrl
    } else if (videoDetail.value?.items && videoDetail.value.items[episodeIndex - 1]) {
      playUrl = videoDetail.value.items[episodeIndex - 1].playUrl
    } else {
      console.error('找不到对应集数的视频')
      return
    }

    const url = generateAuthUrl(appStore.playDomain, playUrl)
    const videoId = episodeIndex === 0 ? video.first.id : videoDetail.value!.items[episodeIndex - 1].id

    if (window.Hls.isSupported()) {
      try {
        const player = createPlayer(videoPlayerEle)
        const hlsInstance = createHlsInstance(url, videoPlayerEle)

        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, () => {
          setupPlayerEvents(player, video)
          player.play().catch(error => {
            console.error('播放失败:', error)
          })
        })

        hlsInstance.on(window.Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            handleHlsError(data, hlsInstance)
          }
        })

        // 添加到预加载管理器的当前播放队列
        VideoPreloadManager.setCurrentVideo(videoId, { hls: hlsInstance, player })
      } catch (error) {
        console.error('初始化hls失败: ', error)
      }
    } else if (videoPlayerEle.canPlayType('application/vnd.apple.mpegurl')) {
      videoPlayerEle.src = url
      const player = createPlayer(videoPlayerEle)
      setupPlayerEvents(player, video)
      player.play().catch(error => {
        console.error('播放失败:', error)
      })

      // 添加到预加载管理器的当前播放队列
      VideoPreloadManager.setCurrentVideo(videoId, { player })
    } else {
      console.error('HLS not supported and cannot play type')
    }
  }

  const handleVideoEnd = async (video: DramaItemVM) => {
    // 检查是否有下一集
    if (videoDetail.value?.items && currentEpisodeIndex.value < videoDetail.value.items.length) {
      currentEpisodeIndex.value++
      await loadEpisode(video, currentEpisodeIndex.value)
    } else {
      // 如果是最后一集，检查是否有下一个视频
      if (currentIndex.value < videos.value.length - 1) {
        // 重置当前集数索引，准备播放下一个视频的第一集
        currentEpisodeIndex.value = 0
        // 触发滑动到下一个视频
        const swiperInstance = document.querySelector('.swiper')?.swiper
        if (swiperInstance) {
          swiperInstance.slideNext()
        }
      }
    }
  }

  const slideChange = async (swiper: any) => {
    currentIndex.value = swiper.activeIndex
    const currentVideo = videos.value[currentIndex.value]

    // 获得当前剧集的详情
    await fetchDramaDetail(parseInt(currentVideo.id))

    // 播放当前视频
    await loadVideo(currentVideo, true)

    // 预加载后面的视频
    const nextVideos = videos.value.slice(currentIndex.value + 1, currentIndex.value + 3)
    for (const video of nextVideos) {
      await VideoPreloadManager.preloadVideo(video)
    }
  }

  const updatePreloadStrategy = () => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection.effectiveType === '4g') {
        VideoPreloadManager.maxPreloadCount = 2
      } else {
        VideoPreloadManager.maxPreloadCount = 1
      }
    }
  }

  onMounted(async () => {
    try {
      await fetchDramaList()
      await fetchDramaDetail(parseInt(videos.value[0].id))
      isLoading.value = false

      if (videos.value.length > 0) {
        await nextTick()

        // 加载并播放第一个视频
        await loadVideo(videos.value[0], true)

        // 预加载后面两个视频
        const nextVideos = videos.value.slice(1, 3)
        for (const video of nextVideos) {
          await VideoPreloadManager.preloadVideo(video)
        }
      }

      updatePreloadStrategy()
      if ('connection' in navigator) {
        ;(navigator as any).connection.addEventListener('change', updatePreloadStrategy)
      }
    } catch (e) {
      console.error(e)
    } finally {
      isLoading.value = false
    }
  })

  onUnmounted(() => {
    VideoPreloadManager.clear()
    if ('connection' in navigator) {
      ;(navigator as any).connection.removeEventListener('change', updatePreloadStrategy)
    }
  })

  const handleLike = () => {}

  const handleShare = () => {}

  const handleShowComment = () => {}

  const toggleCollection = () => {}
</script>

<style scoped>
  .vp-main .vm-b {
    height: calc(100vh - 4.8rem + env(safe-area-inset-bottom));
  }

  .moreEpisodes {
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(100% - 4.8rem + env(safe-area-inset-bottom));
    background-color: var(--color-black);
  }

  .moreEpisodes .m-a {
    display: flex;
    flex-flow: column nowrap;
    padding: 1rem 1rem 0 1rem;
  }

  .moreEpisodes .m-a .ma-t {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .moreEpisodes .m-a .ma-t .t-l {
    color: var(--color-white);
    font-size: 1.3rem;
    font-weight: 500;
    font-family: PingFang SC, DFPKingGothicGB-Medium, Lato, Tahoma, Microsoft Yahei, sans-serif;
  }

  .moreEpisodes .m-a .ma-t .t-r {
    position: absolute;
    right: -0.5rem;
    top: -0.5rem;
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    cursor: pointer;
  }

  .moreEpisodes .m-a .ma-t .t-l img {
    height: 1.3rem;
    margin-right: 0.3rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.1rem;
  }

  .moreEpisodes .m-a .ma-t .t-l b {
    font-size: 0.4rem;
    vertical-align: middle;
    display: inline-block;
    padding: 0 0.3rem;
  }

  .moreEpisodes .m-a .ma-t .t-l span {
    display: inline-block;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    padding: 0.1rem 0.4rem;
    font-size: 1rem;
    margin-left: 0.5rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.1rem;
  }

  .moreEpisodes .m-c {
    position: absolute;
    bottom: 0;
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
  }

  .moreEpisodes .m-c a {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--color-white);
    height: 3.6rem;
    line-height: 3.6rem;
    border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    font-size: 1.3rem;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }

  .moreEpisodes .m-c a i {
    margin-right: 0.3rem;
    vertical-align: middle;
    position: relative;
    bottom: 0.2rem;
  }

  .moreEpisodes .m-a .m-b.m-b-tab {
    height: calc(50vh - 9rem);
    overflow: auto;
  }
</style>
<!-- 覆盖van-tab的样式 -->
<style lang="css">
  .moreEpisodes .van-tabs--line .van-tabs__wrap {
    height: 3.6rem;
    padding-bottom: 3.8rem;
    border-bottom: 0.1rem solid rgba(255, 255, 255, 0.1);
  }

  .moreEpisodes .van-tabs__nav {
    background-color: var(--color-black);
    padding-left: 0.5rem;
  }

  .moreEpisodes .van-tab {
    position: relative;
    font-size: 1.2rem;
    text-align: center;
    color: var(--color-light);
    display: inline-block;
    height: 3.6rem;
    line-height: 3.6rem;
    cursor: pointer;
    flex: 0 0 7.5rem;
  }

  .moreEpisodes .van-tab:first-child {
    flex: 0 0 3.5rem;
    margin-right: 0.8rem;
  }

  .moreEpisodes .van-tab--active:before {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 2.4rem;
    background: url('../../assets/imgs/by.svg') no-repeat center;
    background-size: cover;
    display: inline-block;
    width: 2.4rem;
    height: 2.4rem;
  }

  .moreEpisodes .van-tab:first-child.van-tab--active:before {
    left: 0.6rem;
  }

  .moreEpisodes .van-tab--active .van-tab__text {
    color: var(--color-white);
    font-weight: 500;
  }

  .moreEpisodesPopup.van-popup {
    background-color: var(--color-black);
  }
</style>
