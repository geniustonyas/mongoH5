<template>
  <HomeLayout>
    <section class="vp-main">
      <div class="vm-b">
        <div class="v-a">
          <video
            v-if="!isLoading"
            class="video-player"
            :data-poster="videos[INDEX].poster"
            muted
            preload="auto"
            loop
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
            <i :class="['mvfont', 'mv-xihuan', { active: videoDetail && videoDetail.like == 1 }]" />
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
            <a href="brilliant.html"><i class="mvfont mv-dianji" />点击查看更多短剧<i class="mvfont mv-right" /></a>
          </div>
          <div class="d-b">
            <h3>{{ videoDetail?.title || '-' }}</h3>
            <p>第2集<small>|</small>雇人假结婚被抓包？不过女主是专业的，看合约夫妻如何反击！</p>
          </div>
          <div class="d-c" @click="showDramasPopup = true">
            <div class="c-l"><img alt="" src="assets/imgs/logo-2.png" />短剧<b>●</b>三十天而已<span>更新至第3集</span></div>
            <div class="c-r">
              <i class="mvfont mv-right" />
            </div>
          </div>
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
import type { Video, VideoDetailResponse } from '@/types/video'
import { getVideoDetailApi, getVideoListApi } from '@/api/video'
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import decryptionService, { generateAuthUrl } from '@/utils/decryptionService'
import { useAppStore } from '@/store/app'
import Loading from '@/components/layout/Loading.vue'
import { Popup } from 'vant'

// 目前没有剧集接口, 用短视频模拟, 取第一个视频作为展示.
const INDEX = 0
const videos = ref<Video[]>([])
const videoDetail = ref<VideoDetailResponse | null>(null)
const decrypt = new decryptionService()
const appStore = useAppStore()
const players = ref<Map<number, any>>(new Map())
const hlsInstances = ref<Map<number, any>>(new Map())
const isLoading = ref(true)
const showSharePopup = ref(false)
const showDramasPopup = ref(false)
const activeEpisode = ref('episodeListTab')

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

const fetchVideos = async () => {
  try {
    const {
      data: { data }
    } = await getVideoListApi({
      PageIndex: 1,
      PageSize: 5,
      VideoType: 1,
      SortType: 1
    })
    if (data && data.items) {
      for (const video of data.items) {
        video.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + video.imgUrl))
        videos.value.push(video)
      }
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

const prepareVideo = async (video: Video) => {
  let hlsInstance = null
  const videoPlayerEle = document.querySelector('.video-player') as HTMLVideoElement
  if (videoPlayerEle) {
    const url = generateAuthUrl(appStore.playDomain, video.playUrl)
    if (window.Hls.isSupported()) {
      try {
        const player = new window.Plyr(videoPlayerEle, {
          clickToPlay: true,
          autoplay: false,
          muted: true,
          autopause: true,
          hideControls: true,
          controls: ['progress']
        })
        // 播放器初始化后总是把禁音给取消了, 这里重新设置
        player.muted = true
        hlsInstance = new window.Hls({
          maxBufferLength: 15,
          maxMaxBufferLength: 30,
          maxBufferSize: 30 * 1000 * 1000,
          maxBufferHole: 0.2,
          startFragPrefetch: true,
          liveSyncDuration: 3,
          liveMaxLatencyDuration: 5
        })
        hlsInstance.loadSource(url)
        hlsInstance.attachMedia(videoPlayerEle)
        hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, () => {
          player.on('click', (event) => {
            if (player.touch && event.target.className == 'plyr__poster') {
              player.togglePlay()
            }
          })
        })
        hlsInstance.on(window.Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            handleHlsError(data, hlsInstance)
          }
        })
        hlsInstances.value.set(INDEX, hlsInstance)
        // 可以播放时，获取视频宽高，判断是否需要添加cover-fit
        player.on('canplay', () => {
          const videoWidth = videoPlayerEle.videoWidth
          const videoHeight = videoPlayerEle.videoHeight
          const videoRatio = videoHeight / videoWidth
          if (videoRatio > 1.5) {
            videoPlayerEle.classList.add('cover-fit')
          }
        })
        players.value.set(INDEX, player)
      } catch (error) {
        console.error('初始化hls失败: ', error)
      }
    } else if (videoPlayerEle.canPlayType('application/vnd.apple.mpegurl')) {
      videoPlayerEle.src = url
      const player = new window.Plyr(videoPlayerEle, {
        clickToPlay: true,
        autoplay: false,
        muted: true,
        autopause: true,
        hideControls: true,
        controls: ['progress']
      })
      // 播放器初始化后总是把禁音给取消了, 这里重新设置
      player.muted = true
      player.on('canplay', () => {
        const videoWidth = videoPlayerEle.videoWidth
        const videoHeight = videoPlayerEle.videoHeight
        const videoRatio = videoHeight / videoWidth
        if (videoRatio > 1.5) {
          videoPlayerEle.classList.add('cover-fit')
        }
      })
    } else {
      console.error('HLS not supported and cannot play type')
    }
  }
}

const playVideo = () => {
  const player = players.value.get(INDEX)
  if (player) {
    player.play()
  }
}

onMounted(async () => {
  try {
    await fetchVideos()
    await fetchVideoDetail(parseInt(videos.value[0].id))
    isLoading.value = false
    if (videos.value.length > 0) {
      await nextTick()
      const video = videos.value[INDEX]
      await prepareVideo(video)
      playVideo()
    }
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
})

onUnmounted(() => {
  players.value.forEach((player) => {
    player.destroy()
  })
  hlsInstances.value.forEach((hls) => {
    hls.destroy()
  })
  players.value.clear()
  hlsInstances.value.clear()
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
