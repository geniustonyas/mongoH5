<template>
  <div>
    <section class="novel-main" :class="{ 'nmh-fixed': isHeaderFixed }">
      <header class="d-header">
        <div class="d-l">
          <a @click="router.push({ name: 'novel' })"><i class="mvfont mv-left" /></a>
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
        <div class="novel-introduction">
          <div class="ni-a">
            <div class="a-a">
              <div class="aa-l">
                <img :src="bookInfo?.coverUrl || '-'" style="min-width: 110px; min-height: 147px" />
              </div>
              <div class="aa-r" ref="aaRightRef">
                <div class="r-a">
                  {{ bookInfo?.title || '-' }}
                </div>
                <div class="r-b">
                  {{ categoryName }}<em>|</em>{{ bookInfo?.statusText || '未知' }}<em> |</em
                  >{{ chapters.length > 0 ? `最新${chapters.length}章` : '暂无' }}
                </div>
                <div class="r-c">
                  <span>
                    阅读：<b>{{ formatCount(bookInfo?.readCount) }}</b>
                  </span>
                  <span>
                    收藏：<b>{{ formatCount(bookInfo?.favoriteCount) }}</b>
                  </span>
                </div>
                <div class="r-d">
                  更新时间：<span>{{ formatDate(bookInfo?.updateAt) }}</span>
                </div>
              </div>
            </div>
            <div class="a-b" :class="{ els3: !isExpanded }">
              <div ref="descriptionRef" class="ab-a">{{ bookInfo?.description || '-' }}</div>
              <div class="ab-b" @click="toggleExpand">
                <i v-if="hasOverflow" class="mvfont" :class="isExpanded ? 'mv-up' : 'mv-right1'" />
              </div>
            </div>
            <div class="a-c" :style="{ backgroundImage: `url(${bookInfo?.coverUrl})` }" />
          </div>
          <nav class="mv-t-c">
            <div class="mc-a">
              <div class="a-l"><i class="mvfont mv-xietiao" /><span>目录</span></div>
              <div class="a-r">
                <span>共{{ chapters.length }}章<i class="mvfont mv-right" /></span>
              </div>
            </div>
            <div class="mc-b">
              <div class="ni-b">
                <dl>
                  <dt>最新章节</dt>
                  <dd v-for="chapter in chapters" :key="chapter.id" @click="handleChapterClick(chapter)">{{ chapter.title }}</dd>
                </dl>
                <p v-if="chapters.length > 3" @click="handleViewAllChapters">查看全部章节</p>
              </div>
            </div>
          </nav>
          <nav class="mv-t-c">
            <div class="mc-a">
              <div class="a-l" ref="recommendTitleRef"><i class="mvfont mv-xietiao" /><span>为您推荐</span></div>
              <div class="a-r">
                <span>更多<i class="mvfont mv-right" /></span>
              </div>
            </div>
            <div class="mc-b">
              <div class="n-l-b">
                <div v-if="recommendLoading" class="loading-container">
                  <Loading />
                </div>
                <div v-else-if="recommendError" class="error-container">
                  <van-empty image="error" :description="recommendError" />
                  <van-button color="#333333" size="small" plain @click="fetchRecommendBooks">重试</van-button>
                </div>
                <div v-else-if="!recommendBooks.length" class="empty-container">
                  <van-empty image="search" description="还没有作品噢" image-size="10rem" />
                </div>
                <template v-else>
                  <ul>
                    <li v-for="item in recommendBooks" :key="item.id" @click="handleBookClick(item)">
                      <div class="l-a">
                        <img :src="item.coverUrl" :alt="item.title" />
                        <span class="a-a">{{ item?.categoryName }}</span>
                        <span class="a-b">{{ formatCount(item.readCount) }}&nbsp;阅读</span>
                      </div>
                      <div class="l-b">
                        <b>{{ item.title }}</b>
                        <p>{{ item.statusText }}</p>
                      </div>
                    </li>
                  </ul>
                  <!-- 底部加载状态 -->
                  <div class="load-more" v-if="recommendBooks.length">
                    <template v-if="isLoadingMore">
                      <Loading size="24" />
                      <span>加载中...</span>
                    </template>
                    <span v-else-if="!hasMoreData" class="no-more">没有更多了</span>
                  </div>
                </template>
              </div>
            </div>
          </nav>
        </div>
        <footer class="footer">
          <div class="p-btns">
            <span @click="handleAddToCollection" :class="{ loading: isCollecting }">
              <template v-if="isCollecting">
                <div class="loading-dots"><i /><i /><i /></div>
              </template>
              <template v-else>
                <i class="mvfont mv-shoucang" :class="{ active: isCollected }" />
              </template>
              {{ isCollecting ? '' : isCollected ? '已收藏' : '加入收藏' }}
            </span>
            <span @click="handleReadStart">开始阅读</span>
          </div>
        </footer>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  import { ref, onMounted, computed, nextTick, watch, onBeforeUnmount } from 'vue'
  import { addNovelToCollection, getNovelDetail, getRecommendNovelList, updateNovelReadProgress } from '@/api/novel'
  import Loading from '@/components/layout/Loading.vue'
  import { AddNovelCollectionRequest, DEFAULT_RECOMMEND_PARAMS, NovelBookInfo, NovelChapter, NovelStatus } from '@/types/novel'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import { formatCount } from '@/utils/index'
  import { useNovelCategoryStore } from '@/store/novelCategory'
  import { Toast } from 'vant'

  const router = useRouter()
  const route = useRoute()

  const appStore = useAppStore()
  const novelCategoryStore = useNovelCategoryStore()
  const loading = ref(false)
  const error = ref<string | null>(null)
  const recommendLoading = ref(false)
  const recommendError = ref<string | null>(null)
  const isLoadingMore = ref(false)
  const hasMoreData = ref(true)
  const currentPage = ref(1)
  const chapters = ref<NovelChapter[]>([])
  const bookInfo = ref<NovelBookInfo | null>(null)
  const recommendBooks = ref<NovelBookInfo[]>([])
  const lastReadChapterId = ref<string>('0')
  const decrypt = new decryptionService()
  const createdUrls = ref<string[]>([])
  const pagination = ref({
    pageIndex: '1',
    pageSize: '10',
    pageCount: '1',
    recordCount: '1'
  })

  const isExpanded = ref(false)
  const hasOverflow = ref(false)
  const descriptionRef = ref<HTMLElement | null>(null)
  const recommendTitleRef = ref<HTMLElement | null>(null)
  const aaRightRef = ref<HTMLElement | null>(null)
  const isHeaderFixed = ref(true)
  let observer: IntersectionObserver | null = null

  const LINE_HEIGHT = 20 // 行高
  const MAX_LINES = 3 // 最大行数
  const isWebkitLineClampSupported = ref(true)

  const isCollecting = ref(false)
  const isCollected = ref(false)

  // 获取分类名称
  const categoryName = computed(() => {
    if (!bookInfo.value || !bookInfo.value.categoryId) return '未知分类'
    const categoryId = parseInt(bookInfo.value.categoryId)
    if (isNaN(categoryId)) return '未知分类'
    return novelCategoryStore.getCategoryNameById(categoryId.toString())
  })

  // 格式化日期
  const formatDate = (dateStr: string | undefined) => {
    if (!dateStr) return '-'
    // 可以根据需要进一步格式化日期
    return dateStr
  }

  async function decryptBookImage(book: NovelBookInfo) {
    if (book.coverUrl === '') {
      book.coverUrl = '/src/assets/imgs/default2.gif'
      return
    }

    try {
      const decryptedBlob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + book.coverUrl)

      // 验证解密后的数据是否为有效的图片
      const isValidImage = await validateImage(decryptedBlob)
      if (!isValidImage) {
        console.warn('Invalid image data:', book.coverUrl)
        book.coverUrl = '/src/assets/imgs/default2.gif'
        return
      }

      const objectUrl = URL.createObjectURL(decryptedBlob)
      createdUrls.value.push(objectUrl)
      book.coverUrl = objectUrl
    } catch (error) {
      console.error('Image decryption failed:', error)
      book.coverUrl = '/src/assets/imgs/default2.gif'
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

  const cleanupUrls = () => {
    createdUrls.value.forEach(url => {
      URL.revokeObjectURL(url)
    })
    createdUrls.value = []
  }

  const fetchBookDetails = async () => {
    const nid = route.query.nid
    const status = route.query.status
    if (!nid) {
      error.value = '无效的书籍ID'
      return
    }

    try {
      loading.value = true
      error.value = null
      cleanupUrls()
      const {
        data: { data }
      } = await getNovelDetail(nid as string)

      if (!data) {
        error.value = '获取书籍详情失败'
        return
      }
      // 解密图片
      await decryptBookImage(data.newVideos.book)
      // 赋值给响应式变量
      chapters.value = data.items
      bookInfo.value = data.newVideos.book
      bookInfo.value.statusText = status as string
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

  // 格式化书籍状态文本
  const formatBookStatusText = (status: number): string => {
    switch (status) {
      case NovelStatus.Serial:
        return '连载中'
      case NovelStatus.Finished:
        return '完结'
      default:
        return '未知'
    }
  }

  const fetchRecommendBooks = async (isLoadMore = false) => {
    try {
      if (isLoadMore) {
        isLoadingMore.value = true
      } else {
        recommendLoading.value = true
        currentPage.value = 1
        cleanupUrls()
      }
      recommendError.value = null

      const {
        data: { data }
      } = await getRecommendNovelList({
        ...DEFAULT_RECOMMEND_PARAMS,
        CategoryId: parseInt(bookInfo.value?.categoryId, 10),
        PageIndex: currentPage.value
      })

      if (!data) {
        recommendError.value = '获取推荐书籍失败'
        return
      }

      // 处理每本书的图片解密和状态映射
      for (const book of data.items) {
        await decryptBookImage(book)
        book.statusText = formatBookStatusText(book.status)
      }

      // 更新分页信息
      hasMoreData.value = currentPage.value < parseInt(data.pageCount)

      // 追加或替换数据
      if (isLoadMore) {
        recommendBooks.value.push(...data.items)
      } else {
        recommendBooks.value = data.items
      }
    } catch (e) {
      console.error('Failed to fetch recommend books:', e)
      recommendError.value = '获取推荐书籍失败'
    } finally {
      recommendLoading.value = false
      isLoadingMore.value = false
    }
  }

  // 检查浏览器是否支持 -webkit-line-clamp
  const checkWebkitLineClampSupport = () => {
    const element = document.createElement('div')
    isWebkitLineClampSupported.value =
      'webkitLineClamp' in element.style || 'lineClamp' in element.style || '-webkit-line-clamp' in element.style
  }

  // 检查文本是否溢出
  const checkOverflow = async () => {
    if (!descriptionRef.value) return
    await nextTick()
    const element = descriptionRef.value

    if (isWebkitLineClampSupported.value) {
      hasOverflow.value = element.scrollHeight > element.clientHeight
    } else {
      // 降级方案：通过计算行数来判断是否溢出
      const maxHeight = LINE_HEIGHT * MAX_LINES
      hasOverflow.value = element.scrollHeight > maxHeight
    }
  }

  // 监听窗口大小变化
  const handleResize = () => {
    checkOverflow()
  }

  // 切换展开/收起状态
  const toggleExpand = () => {
    isExpanded.value = !isExpanded.value
  }

  // 监听描述文本变化
  watch(
    () => bookInfo.value?.description,
    async () => {
      await checkOverflow()
    }
  )

  const setupIntersectionObserver = () => {
    if (!recommendTitleRef.value) return

    observer = new IntersectionObserver(
      async entries => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          await fetchRecommendBooks()
          // 取消观察，确保只触发一次
          observer?.disconnect()
        }
      },
      {
        threshold: 0.1 // 当10%的元素可见时触发
      }
    )

    observer.observe(recommendTitleRef.value)
  }

  // 监听滚动加载更多
  const handleScroll = async () => {
    if (isLoadingMore.value || !hasMoreData.value) return

    const recommendSection = recommendTitleRef.value?.closest('nav')
    if (!recommendSection) return

    const rect = recommendSection.getBoundingClientRect()
    const isBottom = rect.bottom <= window.innerHeight + 100 // 提前100px触发加载

    if (isBottom) {
      currentPage.value++
      await fetchRecommendBooks(true)
    }
  }

  // 监听路由参数变化
  watch(
    () => route.query.nid,
    async (newNid, oldNid) => {
      if (newNid && newNid !== oldNid) {
        // 重置页面状态
        recommendBooks.value = []
        currentPage.value = 1
        hasMoreData.value = true
        // 重新获取数据
        await fetchBookDetails()
        // 重新设置推荐区域的观察者
        setupIntersectionObserver()
        // 滚动到页面顶部
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  )

  const handleBookClick = (item: NovelBookInfo) => {
    const query = { nid: item.id, status: item.statusText }
    if (route.query.nid === item.id) {
      // 如果是同一本书，直接重新获取数据
      fetchBookDetails()
    } else {
      // 不同的书，进行路由跳转
      router.push({ name: 'novelIntro', query })
    }
  }

  // 添加处理查看全部章节的方法
  const handleViewAllChapters = () => {
    // 生成唯一的key并存储章节列表
    const chaptersKey = `book_chapters_${bookInfo.value?.id}_${Date.now()}`
    localStorage.setItem(chaptersKey, JSON.stringify(chapters.value))
    // 存储书籍信息
    const bookInfoKey = `bookInfo_${bookInfo.value?.id}_${Date.now()}`
    localStorage.setItem(bookInfoKey, JSON.stringify(bookInfo.value))

    router.push({
      name: 'bookChapters',
      query: {
        nid: bookInfo.value?.id,
        chaptersKey,
        bookInfoKey
      }
    })
  }

  // 监听滚动
  const handleHeaderScroll = () => {
    if (!aaRightRef.value) return

    const rect = aaRightRef.value.getBoundingClientRect()
    isHeaderFixed.value = rect.top > 0
  }

  const handleReadStart = () => {
    const chapter = chapters.value[lastReadChapterId.value]
    if (!chapter) {
      Toast.fail('抱歉，暂无章节可供阅读')
      return
    }

    // 生成唯一的key并存储章节列表
    const chaptersKey = `chapters_${bookInfo.value?.id}_${Date.now()}`
    localStorage.setItem(chaptersKey, JSON.stringify(chapters.value))

    router.push({
      name: 'novelRead',
      query: {
        nid: bookInfo.value?.id,
        chapterId: chapter?.id,
        chaptersKey
      }
    })
  }

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

  const handleAddToCollection = async () => {
    if (isCollecting.value) return

    try {
      isCollecting.value = true
      const params: AddNovelCollectionRequest = {
        id: bookInfo.value?.id as string,
        type: 0
      }
      const { data } = await addNovelToCollection(params)
      if (data.code === '200') {
        isCollected.value = true
        Toast.success('收藏成功')
      } else {
        Toast.fail(data.message || '收藏失败')
      }
    } catch (error) {
      Toast.fail('收藏失败')
    } finally {
      isCollecting.value = false
    }
  }

  onMounted(async () => {
    checkWebkitLineClampSupport()
    await fetchBookDetails()
    await checkOverflow()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleHeaderScroll)
    setupIntersectionObserver()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('scroll', handleHeaderScroll)
    observer?.disconnect()
    cleanupUrls()
  })
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

  .a-b {
    position: relative;
    margin-top: 10px;
  }

  .ab-a {
    line-height: 24px; /* 固定行高 */
    transition: all 0.3s ease;
    position: relative;
  }

  /* Webkit 支持的样式 */
  @supports (-webkit-line-clamp: 3) {
    .els3 .ab-a {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }

  /* Webkit 不支持时的降级样式 */
  @supports not (-webkit-line-clamp: 3) {
    .els3 .ab-a {
      max-height: 72px; /* 24px * 3行 */
      overflow: hidden;
      position: relative;
    }

    .els3 .ab-a::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 24px; /* 一行的高度 */
      background: linear-gradient(to bottom, transparent, white);
      pointer-events: none;
    }
  }

  .ab-b {
    position: absolute;
    right: 0;
    bottom: 0;
    padding-left: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }

  /* 根据是否支持 -webkit-line-clamp 调整展开按钮的背景 */
  @supports (-webkit-line-clamp: 3) {
    .ab-b {
      background: linear-gradient(to right, transparent, white);
    }
  }

  @supports not (-webkit-line-clamp: 3) {
    .ab-b {
      background: white;
    }
  }

  .ab-b i {
    font-size: 16px;
    color: #666;
  }

  .ab-b:hover i {
    color: #333;
  }

  /* 展开状态下的样式 */
  .a-b:not(.els3) .ab-a {
    max-height: none;
  }

  .a-b:not(.els3) .ab-a::after {
    display: none;
  }

  .load-more {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    color: #666;
    font-size: 14px;
    gap: 8px;
  }

  .no-more {
    color: #999;
    font-size: 14px;
    text-align: center;
    padding: 16px;
  }

  .p-btns {
    span {
      position: relative;
      transition: opacity 0.3s;

      &.loading {
        opacity: 0.7;
        pointer-events: none;
      }

      .loading-dots {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        margin-right: 4px;

        i {
          width: 4px;
          height: 4px;
          background-color: currentColor;
          border-radius: 50%;
          display: inline-block;
          animation: dot-flashing 1s infinite linear alternate;

          &:nth-child(2) {
            animation-delay: 0.2s;
          }
          &:nth-child(3) {
            animation-delay: 0.4s;
          }
        }
      }

      .mvfont.active {
        color: var(--color-primary, #2196f3);
        bottom: 0;
      }
    }
  }

  @keyframes dot-flashing {
    0% {
      opacity: 0.2;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
