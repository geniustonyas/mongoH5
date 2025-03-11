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
        <div v-for="chapter in displayChapters" :key="chapter.id" class="chapter-item" @click="handleChapterClick(chapter)">
          <div class="chapter-image">
            <img src="/src/assets/imgs/default2.gif" :alt="chapter.title" />
          </div>
          <div class="chapter-title">{{ chapter.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { CommicBookInfo, CommicChapter } from '@/types/commic'
  import { updateCommicReadProgress } from '@/api/commic'
  import { Toast } from 'vant'

  const router = useRouter()
  const route = useRoute()

  const bookInfo = ref<CommicBookInfo | null>(null)
  const chapters = ref<CommicChapter[]>([])
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
  const handleChapterClick = async (chapter: CommicChapter) => {
    try {
      // 更新阅读进度
      await updateCommicReadProgress(bookInfo.value?.id as string, chapter.id)

      // 生成唯一的key并存储章节列表
      const chaptersKey = `chapters_${bookInfo.value?.id}_${Date.now()}`
      localStorage.setItem(chaptersKey, JSON.stringify(chapters.value))

      // 跳转到阅读页面
      router.push({
        name: 'comicRead',
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
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    cursor: pointer;
    padding: 1rem 1.5rem;
    align-items: center;
  }

  .chapter-image {
    width: 10rem;
    border-radius: 8px;
  }

  .chapter-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .chapter-title {
    font-size: 14px;
    color: var(--color-white);
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .chapter-item:active {
    opacity: 0.8;
  }
</style>
