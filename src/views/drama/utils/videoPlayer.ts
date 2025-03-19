// 创建播放器配置
function createPlayerConfig() {
  return {
    clickToPlay: true,
    autoplay: false,
    muted: true,
    autopause: true,
    hideControls: true,
    controls: ['progress']
  }
}

// 创建HLS配置
function createHlsConfig() {
  return {
    maxBufferLength: 15,
    maxMaxBufferLength: 30,
    maxBufferSize: 30 * 1000 * 1000,
    maxBufferHole: 0.2,
    startFragPrefetch: true,
    liveSyncDuration: 3,
    liveMaxLatencyDuration: 5
  }
}

// 检查视频宽高比并设置样式
export function checkVideoAspectRatio(videoElement: HTMLVideoElement) {
  const videoWidth = videoElement.videoWidth
  const videoHeight = videoElement.videoHeight
  const videoRatio = videoHeight / videoWidth
  if (videoRatio > 1.5) {
    videoElement.classList.add('cover-fit')
  }
}

export function removePlayerEndedEvent(player: any) {
  player.off('ended')
}

export function addPlayerEndedEvent(player: any, fn: (player: any) => void) {
  player.on('ended', () => {
    fn?.apply(null, [player])
  })
}

// 设置播放器事件监听
export function setupPlayerEvents(player: any) {
  // 点击事件
  player.on('click', (event: MouseEvent) => {
    if (player.touch && event.target instanceof Element && event.target.className === 'plyr__poster') {
      player.togglePlay()
    }
  })

  // 可以播放时的事件
  player.on('canplay', () => {
    const videoPlayerEle = player.elements.container
    if (videoPlayerEle) {
      checkVideoAspectRatio(videoPlayerEle)
    }
  })
}

// 设置HLS事件监听
export function setupHlsEvents(hls: any, player: any, autoPlay = false) {
  hls.on(window.Hls.Events.MANIFEST_PARSED, () => {
    if (autoPlay) {
      player.play().catch(error => {
        console.error('播放失败:', error)
      })
    }
  })

  hls.on(window.Hls.Events.ERROR, (event, data) => {
    if (data.fatal) {
      handleHlsError(data, hls)
    }
  })
}

// 创建并初始化播放器
export function createPlayer(videoElement: HTMLVideoElement) {
  const player = new window.Plyr(videoElement, createPlayerConfig())
  player.muted = true
  return player
}

// 创建并初始化HLS实例
export function createHlsInstance(url: string, videoElement: HTMLVideoElement) {
  const hlsInstance = new window.Hls(createHlsConfig())
  hlsInstance.loadSource(url)
  hlsInstance.attachMedia(videoElement)
  return hlsInstance
}

// 处理HLS错误
export function handleHlsError(data: any, hls: any) {
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

// 清理播放器
export async function removeVideoPlayer(videoElement: HTMLVideoElement, player: any, hlsInstance: any) {
  videoElement.remove()
  player.currentTime = 0
  await player.stop()
  await player.destroy()
  hlsInstance.stopLoad()
  hlsInstance.destroy()
}
