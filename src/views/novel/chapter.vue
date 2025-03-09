<template>
  <div class="novel-chapter page" :class="{ 'nmh-fixed': isHeaderFixed }">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>{{ chapterTitle }}</span>
      </div>
      <div class="d-r" @click="showSettings = true">
        <i class="mvfont mv-font" />
      </div>
    </header>

    <!-- 设置弹出层 -->
    <van-popup v-model:show="showSettings" position="bottom" round :style="{ height: '40%' }">
      <div class="settings-panel">
        <div class="setting-item">
          <div class="label">字体大小：{{ fontSize }}px</div>
          <van-slider v-model="fontSize" :min="12" :max="24" :step="1" bar-height="4px" active-color="#1989fa" />
        </div>

        <div class="setting-item">
          <div class="label">行高：{{ lineHeight.toFixed(1) }}</div>
          <van-slider v-model="lineHeight" :min="1.2" :max="2.0" :step="0.1" bar-height="4px" active-color="#1989fa" />
        </div>
      </div>
    </van-popup>

    <div v-if="loading" class="loading-container">
      <Loading />
    </div>
    <div v-else-if="error" class="error-container">
      <van-empty image="error" :description="error" />
      <van-button type="primary" @click="initPage">重试</van-button>
    </div>
    <div v-else class="chapter-content" @scroll="handleScroll">
      <div class="content-wrapper novel-read" ref="contentRef">
        <pre class="nr-contnt">{{ formattedContent }}</pre>
        <div class="chapter-navigation">
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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch, onBeforeUnmount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getNovelChapterDetail, updateNovelReadCount, updateNovelReadProgress } from '@/api/novel'
import Loading from '@/components/layout/Loading.vue'
import { NovelCategory } from '@/types/novel'
import { useThrottleFn } from '@vueuse/core'

const router = useRouter()
const route = useRoute()
const loading = ref(false)
const isHeaderFixed = ref(true)
const error = ref<string | null>(null)
const chapterTitle = ref('')
const chapterContent = ref('')
const retryCount = ref(0)
const maxRetries = 3
const contentRef = ref<HTMLElement | null>(null)
const showSettings = ref(false)
const fontSize = ref(18)
const lineHeight = ref(2.6)

const currentChapterId = ref(route.query.chapterId || '0')
const chaptersKey = ref(route.query.chaptersKey as string)

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

// 格式化内容
const formattedContent = computed(() => {
  if (!chapterContent.value) return ''

  // 处理换行和段落
  return chapterContent.value
    .replace(/\r\n/g, '\n') // 统一换行符
    .replace(/\n{3,}/g, '\n\n') // 多个空行合并为两个
    .replace(/\n\n/g, '\n \n') // 添加段落间距
})

// 监听字体和行高变化
watch([fontSize, lineHeight], () => {
  updateStyles()
})

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
    const chapterResponse = await getNovelChapterDetail(nid, chapterId)
    await updateReadCountWithRetry(nid)

    const { data } = chapterResponse.data
    if (!data) {
      throw new Error('章节内容为空')
    }

    chapterTitle.value = data.title
    chapterContent.value = data.contents
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
      await updateNovelReadCount(NovelCategory.Book, nid)
      return
    } catch (err) {
      retryCount.value++
      if (retryCount.value >= maxRetries) {
        throw err
      }
      await new Promise((resolve) => setTimeout(resolve, 1000 * retryCount.value))
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

// 更新样式`
const updateStyles = () => {
  const contentWrapper = document.querySelector('.content-wrapper') as HTMLElement
  if (contentWrapper) {
    contentWrapper.style.setProperty('--font-size', `${fontSize.value}px`)
    contentWrapper.style.setProperty('--line-height', `${lineHeight.value}`)
  }
}

// 处理上一章
const handlePrevChapter = () => {
  if (!isFirstChapter.value) {
    const currentIndex = chapters.value.findIndex((chapter) => chapter.id === currentChapterId.value.toString())
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
    const currentIndex = chapters.value.findIndex((chapter) => chapter.id === currentChapterId.value.toString())
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
    await updateNovelReadProgress(route.query.nid as string, currentChapterId.value.toString())
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

onMounted(() => {
  initPage()
  updateStyles()
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

.settings-panel {
  padding: 20px;
  background-color: #1a1a1a;
  color: #e0e0e0;

  .setting-item {
    margin-bottom: 30px;

    .label {
      font-size: 14px;
      color: #999;
      margin-bottom: 10px;
    }
  }
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
