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
    // instance.hls?.stopLoad()
  } catch (error) {
    console.error('暂停视频失败:', error)
  }
}

// 播放视频
export function playVideo(videoId: string) {
  const instance = currentVideoInstances.get(videoId)
  const videoElement = instance.player.media as HTMLVideoElement

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

// 加载下一集
export function loadNextEpisode(url: string, dramaId: string) {
  const videoPlayerEle = document.querySelector(`#video-player-${dramaId}`) as HTMLVideoElement
  const instance = getVideoInstance(dramaId)
  if (!videoPlayerEle) return

  if (instance) {
    // 暂停当前播放并清理资源
    if (instance.player) {
      instance.player.pause()

      // 如果使用 HLS
      if (instance.hls) {
        instance.hls.stopLoad()
        instance.hls.detachMedia()
        instance.hls.destroy()
      }

      // 加载新的视频源
      if (window.Hls.isSupported()) {
        try {
          // 创建新的 HLS 实例
          const hlsInstance = createHlsInstance(url, videoPlayerEle)

          // 设置 HLS 事件
          setupHlsEvents(hlsInstance, instance.player, true)

          // 更新实例存储
          setVideoInstance(dramaId, { hls: hlsInstance, player: instance.player })
        } catch (error) {
          console.error('加载下一集失败:', error)
        }
      } else if (videoPlayerEle.canPlayType('application/vnd.apple.mpegurl')) {
        // 直接设置新的播放源
        videoPlayerEle.src = url
        instance.player.once('canplay', () => {
          playVideo(dramaId)
        })
      }
    }
  } else {
    // 如果没有现有实例，直接加载新视频
    loadEpisodeOfDrama(url, dramaId, true)
  }
}

// 加载指定集数的视频
export async function loadEpisodeOfDrama(url: string, dramaId: string, autoPlay = false) {
  const videoPlayerEle = document.querySelector(`#video-player-${dramaId}`) as HTMLVideoElement

  // 确保video元素已经被渲染
  if (!videoPlayerEle) return

  if (window.Hls.isSupported()) {
    try {
      // 创建新实例
      const player = createPlayer(videoPlayerEle)
      const hlsInstance = createHlsInstance(url, videoPlayerEle)

      setupPlayerEvents(player)
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
    setupPlayerEvents(player)

    if (autoPlay) {
      playVideo(dramaId)
    }

    // 保存实例
    setVideoInstance(dramaId, { player })
  } else {
    console.error('HLS not supported and cannot play type')
  }
}
