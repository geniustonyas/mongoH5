<template>
  <div class="novel-chapter page" :class="{ 'nmh-fixed': isHeaderFixed }">
    <header class="d-header" v-show="showControls">
      <div class="d-l">
        <a @click="router.push({ name: 'comicIntro', query: { nid: route.query.nid, status: route.query.status } })">
          <i class="mvfont mv-left" />
        </a>
      </div>
      <div class="d-m">
        <span>{{ chapterTitle }}</span>
      </div>
      <div class="d-r" @click="showSettings = true">
        <i class="mvfont mv-setting" />
      </div>
    </header>

    <div v-if="loading" class="loading-container">
      <Loading />
    </div>
    <div v-else-if="error" class="error-container">
      <van-empty image="error" :description="error" />
      <van-button type="primary" @click="initPage">重试</van-button>
    </div>
    <div v-else class="chapter-content" ref="contentRef" @click="toggleControls">
      <div class="content-wrapper novel-read">
        <!-- 主阅读区域 -->
        <div class="reader-content" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
          <div
            v-for="(image, index) in chapterContent"
            :key="index"
            class="image-wrapper"
            :class="[readingMode, { loading: imageLoadingStates[index] }]"
          >
            <img
              :src="image"
              :alt="`第${index + 1}页`"
              @load="() => handleImageLoad(index)"
              @error="() => handleImageError(index)"
              :style="imageStyle"
            />
            <div v-if="imageLoadingStates[index]" class="loading-overlay">
              <Loading />
            </div>
          </div>
        </div>
        <div class="chapter-navigation" v-show="showControls">
          <div class="nav-left">
            <template v-if="isFirstChapter || isSingleChapter">
              <span class="nav-text">已是第一章</span>
              <span class="nav-btn" @click="handleBackToBook">返回书目</span>
              <span class="nav-btn" @click="showChaptersList = true">目录</span>
            </template>
            <span v-else class="nav-btn" @click="handlePrevChapter">上一章</span>
          </div>

          <div class="nav-right">
            <template v-if="isLastChapter && !isSingleChapter">
              <span class="nav-text">已是最后一章</span>
              <span class="nav-btn" @click="handleBackToBook">返回书目</span>
              <span class="nav-btn" @click="showChaptersList = true">目录</span>
            </template>
            <span v-else-if="!isSingleChapter" class="nav-btn" @click="handleNextChapter">下一章</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 设置面板 -->
    <van-popup v-model:show="showSettings" position="bottom" round class="settings-popup">
      <div class="settings-content">
        <div class="setting-item">
          <span>阅读模式</span>
          <van-radio-group v-model="readingMode" direction="horizontal">
            <van-radio name="fit-width">适应宽度</van-radio>
            <van-radio name="fit-height">适应高度</van-radio>
            <van-radio name="original">原图</van-radio>
          </van-radio-group>
        </div>
        <div class="setting-item">
          <span>背景颜色</span>
          <van-radio-group v-model="backgroundColor" direction="horizontal">
            <van-radio name="white">白色</van-radio>
            <van-radio name="black">黑色</van-radio>
            <van-radio name="sepia">护眼</van-radio>
          </van-radio-group>
        </div>
      </div>
    </van-popup>

    <!-- 目录面板 -->
    <van-popup v-model:show="showChaptersList" position="bottom" round class="chapters-popup">
      <div class="popup-header">
        <div class="popup-title">目录</div>
        <div class="popup-close" @click="showChaptersList = false">
          <div class="popup-sort" @click.stop="handleSortChapters">
            <van-icon v-if="isReverse" name="arrow-up" color="#f96518" />
            <van-icon v-else name="arrow-down" color="#f96518" />
            <span v-if="isReverse">倒序</span>
            <span v-if="!isReverse">正序</span>
          </div>
          <van-icon name="cross" />
        </div>
      </div>
      <div class="chapters-list">
        <div
          v-for="chapter in displayChapters"
          :key="chapter.id"
          class="chapter-item"
          :class="{ active: chapter.id === currentChapterId }"
          @click="handleChapterSelect(chapter)"
        >
          <div class="chapter-image">
            <img src="/src/assets/imgs/default2.gif" :alt="chapter.title" />
          </div>
          <div class="chapter-title">{{ chapter.title }}</div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, onBeforeUnmount, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { getCommicChapterDetail, updateCommicReadCount, updateCommicReadProgress } from '@/api/commic'
  import Loading from '@/components/layout/Loading.vue'
  // import { useThrottleFn } from '@vueuse/core'
  import { CommicCategory } from '@/types/commic'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import { Popup as VanPopup, Icon as VanIcon } from 'vant'
  import { preloadImages } from '@/utils'

  const router = useRouter()
  const route = useRoute()
  const loading = ref(false)
  const isHeaderFixed = ref(false) // 修改为默认隐藏
  const error = ref<string | null>(null)
  const chapterTitle = ref('')
  const chapterContent = ref<string[]>([])
  const retryCount = ref(0)
  const maxRetries = 3
  const contentRef = ref<HTMLElement | null>(null)
  const readingMode = ref('fit-width')
  const backgroundColor = ref('white')
  const showControls = ref(false) // 修改为默认隐藏
  const showSettings = ref(false)
  const showChaptersList = ref(false) // 添加目录显示状态
  const isReverse = ref(true) // 默认倒序
  const fontSize = ref(18)
  const lineHeight = ref(2.6)
  const decrypt = new decryptionService()
  const appStore = useAppStore()

  const currentChapterId = ref(route.query.chapterId || '0')
  const chaptersKey = ref(route.query.chaptersKey as string)

  const totalPages = ref(0)
  const imageStyle = computed(() => {
    return {
      maxWidth: readingMode.value === 'fit-width' ? '100%' : 'none',
      maxHeight: readingMode.value === 'fit-height' ? '100%' : 'none'
    }
  })

  // 控制显示/隐藏工具栏
  const toggleControls = () => {
    showControls.value = !showControls.value
    isHeaderFixed.value = !isHeaderFixed.value
  }

  // 使用一个对象来跟踪每张图片的加载状态
  const imageLoadingStates = ref<Record<number, boolean>>({})

  // 初始化每张图片的加载状态为true（加载中）
  const initImageLoadingStates = (length: number) => {
    const states: Record<number, boolean> = {}
    for (let i = 0; i < length; i++) {
      states[i] = true
    }
    imageLoadingStates.value = states
  }

  // 处理图片加载完成
  const handleImageLoad = (index: number) => {
    imageLoadingStates.value[index] = false
    console.log(`Image ${index} loaded successfully`)
  }

  // 处理图片加载错误
  const handleImageError = (index: number) => {
    imageLoadingStates.value[index] = false
    console.error(`Image ${index} failed to load`)
    // 可以在这里设置一个默认图片
    if (chapterContent.value && chapterContent.value[index]) {
      chapterContent.value[index] = '/src/assets/imgs/default2.gif'
    }
  }

  // 获取章节列表
  const chapters = ref<{ id: string; title: string }[]>([])

  // 从localStorage加载章节列表
  const loadChapters = () => {
    if (!chaptersKey.value) return false

    const chaptersData = localStorage.getItem(chaptersKey.value)
    if (!chaptersData) return false

    try {
      chapters.value = JSON.parse(chaptersData)
      return true
    } catch (err) {
      console.error('Failed to parse chapters data:', err)
      return false
    }
  }

  // 计算属性
  const firstChapterId = computed(() => chapters.value[0]?.id || '0')
  const lastChapterId = computed(() => chapters.value[chapters.value.length - 1]?.id || '0')
  const totalChapters = computed(() => chapters.value.length)

  // 计算是否是第一章或最后一章
  const isFirstChapter = computed(() => currentChapterId.value === firstChapterId.value)
  const isLastChapter = computed(() => currentChapterId.value === lastChapterId.value)
  const isSingleChapter = computed(() => totalChapters.value === 1)

  // 在initPage中初始化图片加载状态
  const initPage = async () => {
    try {
      loading.value = true
      error.value = null
      retryCount.value = 0

      const nid = route.query.nid as string
      const chapterId = route.query.chapterId as string

      if (!nid || !chapterId) {
        error.value = '无效的阅读参数'
        return
      }

      // 先尝试加载章节列表
      const hasChapters = loadChapters()
      if (!hasChapters) {
        error.value = '获取章节列表失败'
        return
      }

      // 获取章节内容
      const chapterResponse = await getCommicChapterDetail(nid, chapterId)
      await updateReadCountWithRetry(nid)

      const { data } = chapterResponse.data
      if (!data) {
        throw new Error('章节内容为空')
      }

      chapterTitle.value = data.title
      // 漫画图片列表
      const comicImages = data.contents.split(',')

      // 初始化图片加载状态
      initImageLoadingStates(comicImages.length)

      // 对图片进行解密
      const decryptedImages = await Promise.all(
        comicImages.map(async (image: string) => {
          const decryptedImage = await decryptImage(image)
          return decryptedImage
        })
      )

      // 更新章节内容
      chapterContent.value = decryptedImages
      console.log('Chapter content loaded:', decryptedImages.length, 'images')

      // 预加载前3张图片
      const initialImages = decryptedImages.slice(0, 3).filter(url => url && !url.includes('default2.gif'))

      if (initialImages.length > 0) {
        try {
          await preloadImages(initialImages)
          console.log('Preloaded initial images')
        } catch (error) {
          console.warn('Failed to preload initial images:', error)
        }
      }

      // 开始预加载下一章
      preloadNextChapter()
    } catch (err) {
      error.value = '获取章节内容失败'
      console.error('获取章节内容失败:', err)
    } finally {
      loading.value = false
    }
  }

  const updateReadCountWithRetry = async (nid: string) => {
    while (retryCount.value < maxRetries) {
      try {
        await updateCommicReadCount(CommicCategory.Book, nid)
        return
      } catch (err) {
        retryCount.value++
        if (retryCount.value >= maxRetries) {
          throw err
        }
        await new Promise(resolve => setTimeout(resolve, 1000 * retryCount.value))
      }
    }
  }

  // let lastScrollTop = 0
  // const handleScroll = useThrottleFn((event: Event) => {
  //   const target = event.target as HTMLElement
  //   const currentScrollTop = target.scrollTop

  //   // 向下滚动超过50px时隐藏header，向上滚动时显示
  //   if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
  //     isHeaderFixed.value = false
  //   } else if (currentScrollTop < lastScrollTop) {
  //     isHeaderFixed.value = true
  //   }

  //   lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
  // }, 100)

  // 处理上一章
  const handlePrevChapter = () => {
    if (!isFirstChapter.value) {
      const currentIndex = chapters.value.findIndex(chapter => chapter.id === currentChapterId.value.toString())
      if (currentIndex > 0) {
        const prevChapter = chapters.value[currentIndex - 1]
        router.push({
          query: {
            ...route.query,
            chapterId: prevChapter.id
          }
        })
      }
    }
  }

  // 处理下一章
  const handleNextChapter = () => {
    if (!isLastChapter.value) {
      const currentIndex = chapters.value.findIndex(chapter => chapter.id === currentChapterId.value.toString())
      if (currentIndex < chapters.value.length - 1) {
        const nextChapter = chapters.value[currentIndex + 1]
        router.push({
          query: {
            ...route.query,
            chapterId: nextChapter.id
          }
        })
      }
    }
  }

  // 返回书目
  const handleBackToBook = async () => {
    try {
      // 更新阅读进度
      await updateCommicReadProgress(route.query.nid as string, currentChapterId.value.toString())
    } catch (err) {
      console.error('更新阅读进度失败:', err)
    }

    router.push({
      name: 'novelIntro',
      query: {
        nid: route.query.nid
      }
    })
  }

  // 在组件卸载时清理localStorage
  onBeforeUnmount(() => {
    // 清理章节列表
    if (chaptersKey.value) {
      localStorage.removeItem(chaptersKey.value)
    }

    // 清理所有创建的图片 URL
    chapterContent.value.forEach(url => {
      if (url && !url.includes('default2.gif')) {
        URL.revokeObjectURL(url)
      }
    })
  })

  // 修改手势控制函数
  const setupGestures = () => {
    let startX = 0
    let startY = 0
    let startTime = 0
    // 用于追踪滑动方向和距离
    let lastY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
      lastY = startY
      startTime = Date.now()
    }

    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY
      const deltaY = currentY - lastY

      // 确定滑动方向
      if (Math.abs(deltaY) > 10) {
        lastY = currentY
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const endTime = Date.now()
      const deltaTime = endTime - startTime
      const deltaX = e.changedTouches[0].clientX - startX
      const deltaY = e.changedTouches[0].clientY - startY

      // 如果垂直滑动距离大于水平滑动距离，则视为滚动
      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        return
      }

      // 判断是否是轻触（快速点击）
      if (deltaTime < 300 && Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10) {
        return
      }

      // 显著的水平滑动才触发章节切换
      // if (Math.abs(deltaX) > 100) {
      //   if (deltaX > 0) {
      //     handlePrevChapter()
      //   } else {
      //     handleNextChapter()
      //   }
      // }
    }

    return { handleTouchStart, handleTouchMove, handleTouchEnd }
  }

  // 设置手势控制，添加 handleTouchMove
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = setupGestures()

  // 在初始化时设置总页数
  watch(chapterContent, newContent => {
    totalPages.value = newContent.length
  })

  // 添加路由参数监听
  watch(
    () => route.query.chapterId,
    newChapterId => {
      if (newChapterId) {
        currentChapterId.value = newChapterId as string
        initPage()
      }
    }
  )

  onMounted(() => {
    initPage()
  })

  // 重新添加缺失的decryptImage函数
  async function decryptImage(image: string) {
    let imageUrl = ''
    if (image === '') {
      imageUrl = '/src/assets/imgs/default2.gif'
    } else {
      try {
        const decryptedBlob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + image)

        // 验证解密后的数据是否为有效的图片
        const isValidImage = await validateImage(decryptedBlob)
        if (!isValidImage) {
          console.warn('Invalid image data:', image)
          return '/src/assets/imgs/default2.gif'
        }

        imageUrl = URL.createObjectURL(decryptedBlob)
      } catch (error) {
        console.error('Image decryption failed:', error)
        imageUrl = '/src/assets/imgs/default2.gif'
      }
    }
    return imageUrl
  }

  // 验证图片数据是否有效
  function validateImage(blob: Blob): Promise<boolean> {
    return new Promise(resolve => {
      // 如果blob大小为0或不是图片类型，直接返回false
      if (blob.size === 0 || !blob.type.startsWith('image/')) {
        resolve(false)
        return
      }

      const img = new Image()
      const url = URL.createObjectURL(blob)

      img.onload = () => {
        URL.revokeObjectURL(url)
        // 验证图片尺寸是否合理（例如：至少1x1像素）
        resolve(img.width > 0 && img.height > 0)
      }

      img.onerror = () => {
        URL.revokeObjectURL(url)
        resolve(false)
      }

      img.src = url
    })
  }

  // 预加载下一章节的图片
  async function preloadNextChapter() {
    if (!currentChapterId.value || isLastChapter.value) return

    const currentIndex = chapters.value.findIndex(chapter => chapter.id === currentChapterId.value.toString())
    if (currentIndex < chapters.value.length - 1) {
      const nextChapter = chapters.value[currentIndex + 1]
      try {
        const response = await getCommicChapterDetail(route.query.nid as string, nextChapter.id)
        const { data } = response.data
        if (data?.contents) {
          const nextImages = data.contents.split(',')
          // 解密并预加载前3张图片
          const decryptedImages = await Promise.all(
            nextImages.slice(0, 3).map(async (image: string) => {
              if (!image) return ''
              const decryptedImage = await decryptImage(image)
              return decryptedImage
            })
          )

          const validImages = decryptedImages.filter(url => url && !url.includes('default2.gif'))
          if (validImages.length > 0) {
            preloadImages(validImages).catch(error => {
              console.warn('Failed to preload next chapter images:', error)
            })
          }
        }
      } catch (error) {
        console.warn('Failed to fetch next chapter for preloading:', error)
      }
    }
  }

  // 处理章节选择
  const handleChapterSelect = (chapter: { id: string; title: string }) => {
    showChaptersList.value = false
    router.push({
      query: {
        ...route.query,
        chapterId: chapter.id
      }
    })
  }

  // 处理章节排序
  const handleSortChapters = () => {
    isReverse.value = !isReverse.value
  }

  // 计算显示的章节列表
  const displayChapters = computed(() => {
    // 根据排序状态返回正确顺序的章节列表
    const sortedChapters = isReverse.value ? [...chapters.value].reverse() : [...chapters.value]

    return sortedChapters.map(chapter => ({
      ...chapter,
      active: chapter.id === currentChapterId.value
    }))
  })
</script>

<style scoped lang="less">
  .novel-chapter {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    color: #e0e0e0;
  }

  .chapter-content {
    flex: 1;
    overflow-y: auto;
    padding: 1rem;
    padding-top: 0;
    height: 100vh;
    transition: height 0.3s ease, margin-top 0.3s ease;
    -webkit-overflow-scrolling: touch;
  }

  .nmh-fixed .chapter-content {
    height: calc(100vh - var(--header-height, 5rem));
    margin-top: var(--header-height, 5rem);
  }

  .content-wrapper {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
    background-color: #1a1a1a;
    font-size: v-bind('fontSize + "px"');
    line-height: v-bind('lineHeight');
    transition: font-size 0.2s ease, line-height 0.2s ease;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: PingFang SC, DFPKingGothicGB-Medium, Lato, Tahoma, Microsoft Yahei, sans-serif;
      color: #e0e0e0;
      text-align: justify;
      text-justify: inter-ideograph;
      hanging-punctuation: first;
      margin: 0;
      padding: 0;

      p {
        margin: 0 0 var(--paragraph-spacing, 1.5em) 0;
      }
    }
  }

  .d-header {
    background-color: #1a1a1a;
    color: #e0e0e0;
    transition: transform 0.3s ease;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    transform: translateY(0);
  }

  .novel-chapter:not(.nmh-fixed) .d-header {
    transform: translateY(-100%);
  }

  .chapter-navigation {
    position: fixed;
    bottom: 0;
    width: 90%;
    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1a1a1a;
    z-index: 999;

    .nav-left,
    .nav-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .nav-text {
      color: #999;
      font-size: 14px;
    }

    .nav-btn {
      color: #e0e0e0;
      font-size: 1.2rem;
      padding: 0 0.6rem;
      border-radius: 4px;
      background: #333;
      cursor: pointer;

      &:hover {
        background: #444;
      }
    }
  }

  .settings-popup {
    padding: 20px;
  }

  .settings-content {
    padding: 16px;
  }

  .setting-item {
    margin-bottom: 16px;
  }

  .setting-item span {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #666;
  }

  :deep(.van-radio-group) {
    display: flex;
    gap: 16px;
  }

  :deep(.van-radio) {
    margin-right: 0;
  }

  .reader-content {
    // 修改touch-action属性，允许滚动
    touch-action: pan-y;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .image-wrapper {
    position: relative;
    margin-bottom: 16px; // 添加间距，提高可读性

    &.loading {
      min-height: 200px;
    }

    &.fit-width img {
      width: 100%;
      height: auto;
      display: block;
    }

    &.fit-height img {
      height: 100vh;
      width: auto;
      max-width: 100%;
      margin: 0 auto;
      display: block;
    }

    &.original img {
      max-width: 100%;
      height: auto;
      margin: 0 auto;
      display: block;
    }

    img {
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    img[src] {
      opacity: 1;
    }

    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  .nav-btn:active {
    opacity: 0.7;
  }

  .loading-container,
  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    gap: 4rem;
    background-color: #1a1a1a;
    color: #e0e0e0;
  }

  .chapters-popup {
    padding: 20px;
    background-color: #1a1a1a;
  }

  .popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

  .popup-title {
    width: 100%;
    font-size: 18px;
    text-align: center;
    font-weight: bold;
  }

  .popup-close {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
  }

  .popup-sort {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    width: 5rem;
    span {
      font-size: 1.2rem;
    }
  }

  .chapters-list {
    max-height: 60vh;
    overflow-y: auto;
  }

  .chapter-item {
    display: flex;
    align-items: center;
    padding: 0.8rem;
    cursor: pointer;

    &.active {
      background: rgba(0, 0, 0, 0.7);
      border-radius: 1rem;
    }

    &.active .chapter-title {
      color: #f96518;
      font-weight: 600;
    }
  }

  .chapter-image {
    width: 15rem;
    height: 10rem;
    margin-right: 12px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 4px;
    }
  }

  .chapter-title {
    font-size: 16px;
    color: #e0e0e0;
  }
</style>
