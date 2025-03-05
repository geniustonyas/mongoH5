<template>
  <section class="novel-main nmh-fixed">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m" />
      <div class="d-r">
        <i class="mvfont mv-fenxiang" />
      </div>
    </header>
    <div v-if="loading" class="loading-container">
      <Loading />
    </div>
    <div v-else-if="error" class="error-container">
      <van-empty image="error" :description="error" />
      <van-button type="primary" @click="fetchBookDetails">重试</van-button>
    </div>
    <template v-else>
      <!-- 书籍详情内容 -->
    </template>
  </section>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getNovelDetail } from '@/api/novel'
import Loading from '@/components/layout/Loading.vue'
import { NovelBookInfo, NovelChapter } from '@/types/novel'

const router = useRouter()
const route = useRoute()

const loading = ref(false)
const error = ref<string | null>(null)
const chapters = ref<NovelChapter[]>([])
const bookInfo = ref<NovelBookInfo | null>(null)
const lastReadChapterId = ref<string>('0')
const pagination = ref({
  pageIndex: '1',
  pageSize: '10',
  pageCount: '1',
  recordCount: '1'
})

const fetchBookDetails = async () => {
  const nid = route.query.nid
  if (!nid) {
    error.value = '无效的书籍ID'
    return
  }

  try {
    loading.value = true
    error.value = null
    const {
      data: { data }
    } = await getNovelDetail(nid as string)

    if (!data) {
      error.value = '获取书籍详情失败'
      return
    }

    // 更新响应式数据
    chapters.value = data.items
    bookInfo.value = data.newVideos.book
    lastReadChapterId.value = data.newVideos.chapterId
    pagination.value = {
      pageIndex: data.pageIndex,
      pageSize: data.pageSize,
      pageCount: data.pageCount,
      recordCount: data.recordCount
    }
  } catch (err) {
    console.error('Failed to fetch book details:', err)
    error.value = '获取数据失败，请稍后重试'
  } finally {
    loading.value = false
  }
}

onMounted(fetchBookDetails)
</script>

<style scoped>
.loading-container,
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 16px;
}
</style>
