import { DramaDetailResponse, DramaItemVM } from '@/types/drama'
import { generateAuthUrl } from '@/utils/decryptionService'
import { useAppStore } from '@/store/app'
import { createPlayer, createHlsInstance, setupPlayerEvents, setupHlsEvents } from './videoPlayer'
import { getDramaDetail } from '@/api/drama'

const appStore = useAppStore()

// 存储当前播放实例的 Map
const currentVideoInstances = new Map<string, { player: any; hls?: any }>()

// 获取当前的剧集详情
export const fetchDramaDetail = async (dramaId: number) => {
  try {
    const {
      data: { data }
    } = await getDramaDetail({ Id: dramaId })
    return data
  } catch (error) {
    console.error('获取剧集详情失败:', error)
  }
}

// 暂停视频
export function pauseVideo(videoId: string) {
  const instance = currentVideoInstances.get(videoId)
  if (!instance) return
  try {
    instance.player?.pause()
    instance.hls?.stopLoad()
  } catch (error) {
    console.error('暂停视频失败:', error)
  }
}

// 播放视频
export function playVideo(videoId: string) {
  const instance = currentVideoInstances.get(videoId)
  const videoElement = instance.player.media as HTMLVideoElement

  console.log('-------->开始播放，剧集编号:', videoId)

  if (videoElement.readyState >= 2) {
    try {
      instance.player?.play()
    } catch (error) {
      console.error('播放视频失败:', error)
    }
  } else {
    videoElement.addEventListener(
      'canplay',
      async function onCanPlay() {
        try {
          instance.player?.play()
        } catch (error) {
          console.error('播放视频失败:', error)
        }
        videoElement.removeEventListener('canplay', onCanPlay)
      },
      { once: true }
    )
  }
}

// 清理视频播放实例
export function cleanupVideoInstance(videoId: string) {
  const instance = currentVideoInstances.get(videoId)
  if (!instance) return

  const { player, hls } = instance

  // 清理 Plyr 实例
  if (player) {
    player.pause()
    player.destroy()
  }

  // 清理 HLS 实例
  if (hls) {
    hls.stopLoad()
    hls.detachMedia()
    hls.destroy()
  }

  // 从管理器中移除
  currentVideoInstances.delete(videoId)
}

// 清理所有视频实例
export function cleanupAllVideoInstances() {
  const videoIds = Array.from(currentVideoInstances.keys())
  videoIds.forEach(videoId => {
    cleanupVideoInstance(videoId)
  })
}

// 保存当前播放实例
export function setVideoInstance(videoId: string, instance: { player: any; hls?: any }) {
  currentVideoInstances.set(videoId, instance)
}

// 获取当前播放实例
export function getVideoInstance(videoId: string) {
  return currentVideoInstances.get(videoId)
}

// 获得当前要播放的HTMLVideoElement元素
export function getCurrentPlayElement(videoDetail: DramaDetailResponse | DramaItemVM) {
  return document.querySelector(`#video-player-${videoDetail?.id}`) as HTMLVideoElement
}

// 获取要播放的视频URL
export function getRealVideoUrl(episodeIndex: string, dramaDetail: DramaDetailResponse) {
  let playUrl = ''
  if (episodeIndex === '0') {
    playUrl = dramaDetail?.first.playUrl
  } else if (dramaDetail?.items && dramaDetail.items.find(item => item.id === episodeIndex)) {
    playUrl = dramaDetail.items.find(item => item.id === episodeIndex)?.playUrl
  } else {
    console.error('找不到对应集数的视频')
    return
  }

  return generateAuthUrl(appStore.playDomain, playUrl)
}

// 加载指定集数的视频
// fn 是视频结束后的回调函数
export async function loadEpisodeOfDrama(url: string, dramaId: string, autoPlay = false, fn?: (player: any) => void) {
  const videoPlayerEle = document.querySelector(`#video-player-${dramaId}`) as HTMLVideoElement

  // 确保video元素已经被渲染
  if (!videoPlayerEle) return

  if (window.Hls.isSupported()) {
    try {
      // 创建新实例
      const player = createPlayer(videoPlayerEle)
      const hlsInstance = createHlsInstance(url, videoPlayerEle)

      setupPlayerEvents(player, fn)
      setupHlsEvents(hlsInstance, player, autoPlay)

      // 保存实例
      setVideoInstance(dramaId, { hls: hlsInstance, player })
    } catch (error) {
      cleanupVideoInstance(dramaId)
      console.error('初始化hls失败: ', error)
    }
  } else if (videoPlayerEle.canPlayType('application/vnd.apple.mpegurl')) {
    const player = createPlayer(videoPlayerEle)

    videoPlayerEle.src = url
    setupPlayerEvents(player, fn)

    if (autoPlay) {
      playVideo(dramaId)
    }

    // 保存实例
    setVideoInstance(dramaId, { player })
  } else {
    console.error('HLS not supported and cannot play type')
  }
}

// // 处理视频结束
// export async function handleVideoEnd(
//   currentEpisodeIndex: Ref<number>,
//   currentIndex: Ref<number>,
//   videoDetail: Ref<DramaDetailResponse | null>,
//   videos: Ref<DramaItemVM[]>
// ) {
//   // 检查是否有下一集
//   if (videoDetail.value?.items && currentEpisodeIndex.value < videoDetail.value.items.length) {
//     currentEpisodeIndex.value++
//     await loadEpisode(currentEpisodeIndex.value, videoDetail, handleVideoEnd)
//   } else {
//     // 如果是最后一集，检查是否有下一个视频
//     if (currentIndex.value < videos.value.length - 1) {
//       // 重置当前集数索引，准备播放下一个视频的第一集
//       currentEpisodeIndex.value = 0
//       // 触发滑动到下一个视频
//       const swiperElement = document.querySelector('.swiper')
//       if (swiperElement && 'swiper' in swiperElement) {
//         const swiperInstance = (swiperElement as any).swiper
//         swiperInstance.slideNext()
//       }
//     }
//   }
// }
