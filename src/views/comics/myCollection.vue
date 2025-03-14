<template>
  <div class="page my-collection">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>我的收藏</span>
      </div>
      <div class="d-r" />
    </header>
    <section class="au-main">
      <!-- 书籍列表 -->
      <div class="book-list">
        <div v-if="loading">
          <Loading />
        </div>
        <div v-else-if="error" class="error-container">
          <van-empty image="error" :description="error" />
        </div>
        <div v-else-if="!books.length">
          <van-empty description="您还没有收藏漫画噢" />
        </div>
        <template v-else>
          <div v-if="!books.length" class="empty-container">
            <van-empty description="暂无相关漫画" />
          </div>
          <div v-else class="n-l-b">
            <ul>
              <li v-for="item in books" :key="item.id" @click="handleBookClick(item)">
                <div class="l-a">
                  <img :src="item.coverurl" :alt="item.title" />
                  <span class="a-a">{{ item.categoryName }}</span>
                  <span class="a-b">{{ formatCount(item.readCount) }}&nbsp;阅读</span>
                </div>
                <div class="l-b">
                  <b>{{ item.title }}</b>
                  <p>{{ formatBookStatusText(item.status) }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- 加载更多状态 -->
          <div class="load-more" v-if="books.length">
            <template v-if="isLoadingMore">
              <Loading size="24" />
              <span>加载中...</span>
            </template>
            <span v-else-if="!hasMoreData" class="no-more">没有更多了</span>
          </div>
        </template>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, reactive, ref } from 'vue'
  import { formatCount } from '@/utils'
  import { CategoryWithActive, CommicBookInfo, CommicStatus } from '@/types/commic'
  import { useRouter } from 'vue-router'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import { useCommicCategoryStore } from '@/store/commicCategory'

  import { getCommicCollectionList } from '@/api/commic'

  // 分类选项
  const bookCategories = reactive<CategoryWithActive[]>([])
  const novelCategoryStore = useCommicCategoryStore()
  const router = useRouter()
  const error = ref<string | null>(null)
  const books = ref<CommicBookInfo[]>([])
  const currentPage = ref(1)
  const loading = ref(false)
  const hasMoreData = ref(true)
  const isLoadingMore = ref(false)
  const createdUrls = ref<string[]>([])
  const decrypt = new decryptionService()
  const appStore = useAppStore()

  // Initialize categories with active state
  const initialCategories = [
    { id: -1, name: '全部', active: true },
    ...novelCategoryStore.categories.map(cat => ({ ...cat, active: false }))
  ]
  bookCategories.push(...initialCategories)

  function formatBookStatusText(status: CommicStatus): string {
    switch (status) {
      case CommicStatus.Serial:
        return '连载中'
      case CommicStatus.Finished:
        return '完结'
      default:
        return ''
    }
  }

  async function decryptBookImage(book: CommicBookInfo) {
    if (book.coverurl === '') {
      book.coverurl = '/src/assets/imgs/default2.gif'
      return
    }

    try {
      const decryptedBlob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + book.coverurl)

      // 验证解密后的数据是否为有效的图片
      const isValidImage = await validateImage(decryptedBlob)
      if (!isValidImage) {
        console.warn('Invalid image data:', book.coverurl)
        book.coverurl = '/src/assets/imgs/default2.gif'
        return
      }

      const objectUrl = URL.createObjectURL(decryptedBlob)
      createdUrls.value.push(objectUrl)
      book.coverurl = objectUrl
    } catch (error) {
      console.error('Image decryption failed:', error)
      book.coverurl = '/src/assets/imgs/default2.gif'
    }
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

  // 清理已创建的URL
  const cleanupUrls = () => {
    createdUrls.value.forEach(url => {
      URL.revokeObjectURL(url)
    })
    createdUrls.value = []
  }

  const fetchCollectionList = async (isLoadMore = false) => {
    try {
      if (isLoadMore) {
        isLoadingMore.value = true
      } else {
        loading.value = true
        currentPage.value = 1
        books.value = []
        cleanupUrls()
      }
      error.value = null

      const params = {
        pageIndex: currentPage.value,
        pageSize: 10
      }

      const {
        data: { data }
      } = await getCommicCollectionList(params)

      if (data) {
        // 更新分页状态
        hasMoreData.value = currentPage.value < parseInt(data.pageCount as string)

        // 处理图片解密
        for (const book of data.items) {
          await decryptBookImage(book)
        }

        // 追加或替换数据
        if (isLoadMore) {
          books.value.push(...data.items)
        } else {
          books.value = data.items
        }
      }
    } catch (err) {
      console.error('获取收藏列表失败:', err)
      error.value = '获取收藏列表失败'
    } finally {
      loading.value = false
      isLoadingMore.value = false
    }
  }

  // 处理滚动加载
  const handleScroll = async () => {
    if (isLoadingMore.value || !hasMoreData.value) return

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const clientHeight = document.documentElement.clientHeight
    const scrollHeight = document.documentElement.scrollHeight
    const threshold = 100 // 提前100px触发加载

    if (scrollHeight - scrollTop - clientHeight <= threshold) {
      currentPage.value++
      await fetchCollectionList(true)
    }
  }

  // 处理书籍点击
  const handleBookClick = (item: CommicBookInfo) => {
    router.push({
      name: 'novelIntro',
      query: { nid: item.id, status: item.statusText }
    })
  }

  // 监听滚动事件
  onMounted(() => {
    fetchCollectionList()
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    cleanupUrls()
  })
</script>

<style scoped>
  .page {
    min-height: 100vh;
    background-color: var(--color-background);
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    gap: 16px;
  }

  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: var(--color-text-light);
    font-size: 14px;
    gap: 8px;
  }

  .no-more {
    color: var(--color-text-lighter);
    font-size: 14px;
    text-align: center;
    padding: 16px;
  }
</style>
