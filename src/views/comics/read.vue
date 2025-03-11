<template>
  <div
    class="novel-chapter page"
    :class="{ 'nmh-fixed': isHeaderFixed, 'theme-black': backgroundColor === 'black', 'theme-sepia': backgroundColor === 'sepia' }"
  >
    <header class="d-header" v-show="showControls">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
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
    <div v-else class="chapter-content" @scroll="handleScroll" ref="contentRef">
      <div class="content-wrapper novel-read">
        <!-- 主阅读区域 -->
        <div class="reader-content" @click="toggleControls" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
          <Swiper
            :direction="'vertical'"
            :slides-per-view="1"
            :space-between="12"
            :mousewheel="true"
            @swiper="onSwiperInit"
            @slideChange="onSlideChange"
          >
            <SwiperSlide v-for="(image, index) in chapterContent" :key="index">
              <div class="image-wrapper" :class="readingMode">
                <img :data-src="image" :alt="`第${index + 1}页`" @load="handleImageLoad" :style="imageStyle" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="chapter-navigation" v-show="showControls">
          <div class="nav-left">
            <template v-if="isFirstChapter || isSingleChapter">
              <span class="nav-text">已是第一章</span>
              <span class="nav-btn" @click="handleBackToBook">返回书目</span>
            </template>
            <span v-else class="nav-btn" @click="handlePrevChapter">上一章</span>
          </div>

          <div class="nav-right">
            <template v-if="isLastChapter && !isSingleChapter">
              <span class="nav-text">已是最后一章</span>
              <span class="nav-btn" @click="handleBackToBook">返回书目</span>
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
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, onBeforeUnmount, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { getCommicChapterDetail, updateCommicReadCount, updateCommicReadProgress } from '@/api/commic'
  import Loading from '@/components/layout/Loading.vue'
  import { useThrottleFn } from '@vueuse/core'
  import { CommicCategory } from '@/types/commic'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import { Popup as VanPopup, RadioGroup as VanRadioGroup, Radio as VanRadio } from 'vant'

  const router = useRouter()
  const route = useRoute()
  const loading = ref(false)
  const isHeaderFixed = ref(true)
  const error = ref<string | null>(null)
  const chapterTitle = ref('')
  const chapterContent = ref<string[]>([])
  const retryCount = ref(0)
  const maxRetries = 3
  const contentRef = ref<HTMLElement | null>(null)
  const readingMode = ref('fit-width')
  const backgroundColor = ref('white')
  const showControls = ref(false)
  const showSettings = ref(false)
  const fontSize = ref(18)
  const lineHeight = ref(2.6)
  const decrypt = new decryptionService()
  const appStore = useAppStore()
  const swiperInstance = ref<any>(null)

  const currentChapterId = ref(route.query.chapterId || '0')
  const chaptersKey = ref(route.query.chaptersKey as string)

  const currentPage = ref(1)
  const totalPages = ref(0)
  const imageStyle = computed(() => {
    return {
      maxWidth: readingMode.value === 'fit-width' ? '100%' : 'none',
      maxHeight: readingMode.value === 'fit-height' ? '100%' : 'none'
    }
  })

  const onSwiperInit = (swiper: any) => {
    swiperInstance.value = swiper
  }

  // 控制显示/隐藏工具栏
  const toggleControls = () => {
    showControls.value = !showControls.value
    if (showControls.value) {
      // 3秒后自动隐藏
      setTimeout(() => {
        showControls.value = false
      }, 3000)
    }
  }

  // 图片预加载
  const preloadImages = async (images: string[]) => {
    const promises = images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = src
      })
    })
    await Promise.all(promises)
  }

  // 图片懒加载
  const setupLazyLoading = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const dataSrc = img.getAttribute('data-src')
          if (dataSrc) {
            img.src = dataSrc
            img.removeAttribute('data-src')
            observer.unobserve(img)
          }
        }
      })
    })

    return observer
  }

  // 手势控制
  const setupGestures = () => {
    let startX = 0
    let startY = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const deltaX = e.changedTouches[0].clientX - startX
      const deltaY = e.changedTouches[0].clientY - startY

      // 水平滑动切换章节
      if (Math.abs(deltaX) > 100 && Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          handlePrevChapter()
        } else {
          handleNextChapter()
        }
      }
    }

    return { handleTouchStart, handleTouchEnd }
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

  async function decryptImage(image: string) {
    let imageUrl = ''
    if (image === '') {
      imageUrl = '/src/assets/imgs/default2.gif'
    } else {
      const url = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + imageUrl))
      // 检查解密后的URL是否包含本地开发地址
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        imageUrl = '/src/assets/imgs/default2.gif'
        URL.revokeObjectURL(url)
      } else {
        imageUrl = url
      }
    }
    return imageUrl
  }

  // 在初始化时获取章节列表
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
      // 对图片进行解密
      const decryptedImages = await Promise.all(
        comicImages.map(async (image: string) => {
          const decryptedImage = await decryptImage(image)
          return decryptedImage
        })
      )
      chapterContent.value = decryptedImages
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

  let lastScrollTop = 0
  const handleScroll = useThrottleFn((event: Event) => {
    const target = event.target as HTMLElement
    const currentScrollTop = target.scrollTop

    // 向下滚动超过50px时隐藏header，向上滚动时显示
    if (currentScrollTop > lastScrollTop && currentScrollTop > 50) {
      isHeaderFixed.value = false
    } else if (currentScrollTop < lastScrollTop) {
      isHeaderFixed.value = true
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop
  }, 100)

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
    if (chaptersKey.value) {
      localStorage.removeItem(chaptersKey.value)
    }
  })

  // 处理图片加载
  const handleImageLoad = (event: Event) => {
    const img = event.target as HTMLImageElement
    if (img.dataset.src) {
      img.src = img.dataset.src
    }
  }

  // 处理滑动切换
  const onSlideChange = () => {
    if (swiperInstance.value) {
      currentPage.value = swiperInstance.value.activeIndex + 1
      // 自动隐藏控制栏
      showControls.value = false
    }
  }

  // 设置手势控制
  const { handleTouchStart, handleTouchEnd } = setupGestures()

  // 在初始化时设置总页数
  watch(chapterContent, newContent => {
    totalPages.value = newContent.length
  })

  onMounted(() => {
    initPage()

    // 设置图片懒加载
    const lazyLoadObserver = setupLazyLoading()
    const images = document.querySelectorAll('.image-wrapper img')
    images.forEach(img => lazyLoadObserver.observe(img))

    // 清理函数
    onBeforeUnmount(() => {
      lazyLoadObserver.disconnect()
    })
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
    height: calc(100vh - 5rem);
    margin-top: var(--header-height, 5rem);
    scroll-padding-top: var(--header-height, 5rem);
    -webkit-overflow-scrolling: touch;
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
    border-bottom: 1px solid #333;
  }

  .chapter-navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: #1a1a1a;

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
    touch-action: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .image-wrapper img {
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .image-wrapper img[src] {
    opacity: 1;
  }

  :deep(.swiper-slide) {
    transition: transform 0.3s ease;
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
</style>
