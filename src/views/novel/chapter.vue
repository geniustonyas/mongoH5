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
      <div class="content-wrapper" ref="contentRef">
        <pre>{{ formattedContent }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getNovelChapterDetail, updateNovelReadCount } from '@/api/novel'
import Loading from '@/components/layout/Loading.vue'
import { NovelCategory } from '@/types/novel'

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
const fontSize = ref(16)
const lineHeight = ref(2)

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

const initPage = async () => {
  try {
    loading.value = true
    error.value = null

    const nid = route.query.nid as string
    const chapterId = route.query.chapterId as string

    // 更新阅读量，重试机制
    await updateReadCountWithRetry(nid)

    // 获取章节内容
    const response = await getNovelChapterDetail(nid, chapterId)
    const { data } = response.data

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
// 处理滚动事件
const handleScroll = (event: Event) => {
  const target = event.target as HTMLElement
  // 当滚动位置为0（顶部）时，移除nmh-fixed样式
  isHeaderFixed.value = target.scrollTop > 0
}

// 更新样式`
const updateStyles = () => {
  const contentWrapper = document.querySelector('.content-wrapper') as HTMLElement
  if (contentWrapper) {
    contentWrapper.style.fontSize = `${fontSize.value}px`
    contentWrapper.style.lineHeight = `${lineHeight.value}`
  }
}

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
}

.chapter-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  height: calc(100vh - 5rem);
  padding-top: 5rem;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-size: v-bind('fontSize + "px"');
  line-height: v-bind('lineHeight');
  transition: font-size 0.2s ease, line-height 0.2s ease;

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: 'Noto Serif SC', serif;
    color: #333;
    text-align: justify;
    margin: 0;
    padding: 0;

    p {
      margin: 0 0 var(--paragraph-spacing, 1.5em) 0;
    }
  }
}

/* 夜间模式 */
@media (prefers-color-scheme: dark) {
  .content-wrapper {
    background-color: #1e1e1e;

    pre {
      color: #e0e0e0;
    }
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .content-wrapper {
    padding: 1rem;
  }
}

.loading-container,
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 16px;
}

.settings-panel {
  padding: 20px;

  .setting-item {
    margin-bottom: 30px;

    .label {
      font-size: 14px;
      color: #666;
      margin-bottom: 10px;
    }
  }
}
</style>
