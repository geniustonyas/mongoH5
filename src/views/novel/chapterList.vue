<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>{{ bookInfo?.title || '章节列表' }}</span>
      </div>
      <div class="d-r dr-txt" @click="toggleSort">
        <div style="display: flex; align-items: center; gap: 0.5rem">
          <span>排序</span>
          <van-icon v-if="isReverse" name="arrow-up" />
          <van-icon v-else name="arrow-down" />
        </div>
      </div>
    </header>

    <div class="au-main">
      <div class="novel-chapter">
        <a v-for="chapter in displayChapters" :key="chapter.id" class="chapter-item" @click.prevent="handleChapterClick(chapter)">
          <div class="chapter-title">{{ chapter.title }}</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { NovelBookInfo, NovelChapter } from '@/types/novel'
  import { updateNovelReadProgress } from '@/api/novel'
  import { Toast } from 'vant'

  const router = useRouter()
  const route = useRoute()

  const bookInfo = ref<NovelBookInfo | null>(null)
  const chapters = ref<NovelChapter[]>([])
  const isReverse = ref(true) // 默认倒序

  // 根据排序方式计算显示的章节列表
  const displayChapters = computed(() => {
    return isReverse.value ? [...chapters.value].reverse() : [...chapters.value]
  })

  // 切换排序方式
  const toggleSort = () => {
    isReverse.value = !isReverse.value
  }

  // 处理章节点击
  const handleChapterClick = async (chapter: NovelChapter) => {
    try {
      // 更新阅读进度
      await updateNovelReadProgress(bookInfo.value?.id as string, chapter.id)

      // 生成唯一的key并存储章节列表
      const chaptersKey = `chapters_${bookInfo.value?.id}_${Date.now()}`
      localStorage.setItem(chaptersKey, JSON.stringify(chapters.value))

      // 跳转到阅读页面
      router.push({
        name: 'novelRead',
        query: {
          nid: bookInfo.value?.id,
          chapterId: chapter.id,
          chaptersKey
        }
      })
    } catch (err) {
      console.error('更新阅读进度失败:', err)
      Toast.fail('更新阅读进度失败')
    }
  }

  onMounted(() => {
    const { chaptersKey, bookInfoKey } = route.query
    if (typeof chaptersKey === 'string' && typeof bookInfoKey === 'string') {
      // 从 localStorage 获取数据
      const chaptersData = localStorage.getItem(chaptersKey)
      const bookInfoData = localStorage.getItem(bookInfoKey)

      if (chaptersData && bookInfoData) {
        chapters.value = JSON.parse(chaptersData)
        bookInfo.value = JSON.parse(bookInfoData)
      } else {
        Toast.fail('获取章节数据失败')
        router.go(-1)
      }
    } else {
      Toast.fail('参数错误')
      router.go(-1)
    }
  })
</script>

<style scoped>
  .chapter-item {
    cursor: pointer;
  }

  .chapter-item:active {
    opacity: 0.8;
  }
</style>
