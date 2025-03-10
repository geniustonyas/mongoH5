<template>
  <div class="novel-rank page">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>所有漫画</span>
      </div>
      <div class="d-r" />
    </header>
    <div class="au-main novel-main">
      <div class="tabs-container">
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-r">
              <span
                v-for="category in commicCategories"
                :key="category.id"
                :class="{ active: category.active }"
                @click="handleCategoryClick(category.id)"
              >
                {{ category.name }}
              </span>
            </div>
          </div>
        </div>
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-r">
              <span
                v-for="sortOption in sortOptions"
                :key="sortOption.id"
                :class="{ active: sortOption.active }"
                @click="handleSortOptionClick(sortOption.id)"
              >
                {{ sortOption.name }}
              </span>
            </div>
          </div>
        </div>
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-r">
              <span
                v-for="statusOption in statusOptions"
                :key="statusOption.id"
                :class="{ active: statusOption.active }"
                @click="handleStatusOptionClick(statusOption.id)"
              >
                {{ statusOption.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- 书籍列表 -->
      <div class="book-list">
        <div v-if="loading">
          <Loading />
        </div>
        <div v-else-if="error" class="error-container">
          <van-empty image="error" :description="error" />
        </div>
        <template v-else>
          <div v-if="!commics.length" class="empty-container">
            <van-empty description="暂无相关书籍" />
          </div>
          <div v-else class="n-l-b">
            <ul>
              <li v-for="item in commics" :key="item.id" @click="handleBookClick(item)">
                <div class="l-a">
                  <img :src="item.coverUrl" :alt="item.title" />
                  <span class="a-a">{{ item.categoryName }}</span>
                  <span class="a-b">{{ formatCount(item.readCount) }}&nbsp;阅读</span>
                </div>
                <div class="l-b">
                  <b>{{ item.title }}</b>
                  <p>{{ item.statusText }}</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- 加载更多状态 -->
          <div class="load-more" v-if="commics.length">
            <template v-if="isLoadingMore">
              <Loading size="24" />
              <span>加载中...</span>
            </template>
            <span v-else-if="!hasMoreData" class="no-more">没有更多了</span>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { reactive, ref, onMounted, onUnmounted } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useThrottleFn } from '@vueuse/core'
  import Loading from '@/components/layout/Loading.vue'
  import { useCommicCategoryStore } from '@/store/commicCategory'
  import { CommicStatus, CategoryWithActive } from '@/types/commic'
  import { formatCount } from '@/utils'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import { DEFAULT_RECOMMEND_PARAMS, CommicBookInfo, CommicRecommendParams, TabOption } from '@/types/commic'
  import { getRecommendCommicList } from '@/api/commic'

  const router = useRouter()
  const route = useRoute()
  const commicCategoryStore = useCommicCategoryStore()
  const appStore = useAppStore()

  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const hasMoreData = ref(true)
  const isLoadingMore = ref(false)
  const commics = ref<CommicBookInfo[]>([])
  const decrypt = new decryptionService()
  const createdUrls = ref<string[]>([])

  // 分类选项
  const commicCategories = reactive<CategoryWithActive[]>([])

  // Initialize categories with active state
  const initialCategories = [
    { id: -1, name: '全部', active: true },
    ...commicCategoryStore.categories.map(cat => ({ ...cat, active: false }))
  ]
  commicCategories.push(...initialCategories)

  const sortOptions = reactive<TabOption[]>([
    { id: -1, name: '全部', active: true },
    { id: 'CreateTime', name: '上架时间', active: false },
    { id: 'ReadingCount', name: '最多阅读', active: false },
    { id: 'FavoriteCount', name: '最多收藏', active: false }
  ])

  const statusOptions = reactive<TabOption[]>([
    { id: -1, name: '全部', active: true },
    { id: 0, name: '完结', active: false },
    { id: 1, name: '连载', active: false }
  ])

  // 根据路由参数初始化状态选项
  const initializeFromRoute = () => {
    // 处理sortType参数
    const sortTypeParam = route.query.sortType as string
    if (sortTypeParam !== undefined) {
      sortOptions.forEach(option => {
        option.active = option.id === sortTypeParam
      })
    }

    // 处理分类ID参数
    const categoryId = route.query.categoryId
    if (categoryId !== undefined) {
      commicCategories.forEach(category => {
        category.active = category.id === categoryId
      })
    }

    // 处理排序类型参数
    const sortType = route.query.sortType
    if (sortType !== undefined) {
      const statusId = Number(sortType)
      statusOptions.forEach(option => {
        option.active = option.id === statusId
      })
    }
  }

  // 获取当前激活的选项ID
  const getActiveId = (list: TabOption[] | CategoryWithActive[]) => {
    const activeItem = list.find(item => item.active)
    return activeItem ? activeItem.id : -1
  }

  // 处理图片解密
  async function decryptBookImage(book: CommicBookInfo) {
    if (book.coverUrl === '') {
      book.coverUrl = '/src/assets/imgs/default2.gif'
    } else {
      const url = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + book.coverUrl))
      // 检查解密后的URL是否包含本地开发地址
      if (url.includes('localhost') || url.includes('127.0.0.1')) {
        book.coverUrl = '/src/assets/imgs/default2.gif'
        URL.revokeObjectURL(url)
      } else {
        createdUrls.value.push(url)
        book.coverUrl = url
      }
    }
    return book
  }

  // 清理已创建的URL
  const cleanupUrls = () => {
    createdUrls.value.forEach(url => {
      URL.revokeObjectURL(url)
    })
    createdUrls.value = []
  }

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

  const fetchRankList = async (isLoadMore = false) => {
    try {
      if (isLoadMore) {
        isLoadingMore.value = true
      } else {
        loading.value = true
        currentPage.value = 1
        commics.value = []
        cleanupUrls()
      }
      error.value = null

      const params = {
        categoryId: getActiveId(commicCategories),
        sortType: getActiveId(sortOptions),
        status: getActiveId(statusOptions)
      }

      // 构建基础请求参数
      const requestParams: CommicRecommendParams = {
        ...DEFAULT_RECOMMEND_PARAMS,
        PageIndex: currentPage.value,
        PageSize: 10
      }

      // 只有当分类不是全部时才添加分类参数
      if (params.categoryId !== -1) {
        requestParams.CategoryId = params.categoryId as number
      }

      // 设置状态变量, '全部'默认设置为-1
      if (params.status !== -1) {
        requestParams.BookStatus = params.status as number
      } else {
        requestParams.BookStatus = CommicStatus.All
      }

      // 只有当排序类型不是全部时才添加排序参数
      if (params.sortType !== -1 && typeof params.sortType === 'string') {
        switch (params.sortType) {
          case 'CreateTime':
            requestParams.CreateTime = 1
            break
          case 'ReadingCount':
            requestParams.ReadingCount = 1
            break
          case 'FavoriteCount':
            requestParams.FavoriteCount = 1
            break
        }
      }

      const {
        data: { data }
      } = await getRecommendCommicList(requestParams)

      if (data) {
        // 更新分页状态
        hasMoreData.value = currentPage.value < parseInt(data.pageCount)

        // 处理图片解密
        const processedCommics = await Promise.all(data.items.map(decryptBookImage))

        // 处理漫画分类
        processedCommics.forEach(item => {
          const categoryName = commicCategoryStore.getCategoryNameById(item.categoryId.toString())
          item.categoryName = categoryName.toString()
        })

        // 处理漫画状态
        processedCommics.forEach(item => {
          item.statusText = formatBookStatusText(item.status)
        })

        // 追加或替换数据
        if (isLoadMore) {
          commics.value.push(...processedCommics)
        } else {
          commics.value = processedCommics
        }
      }
    } catch (err) {
      error.value = '获取数据失败'
      console.error(err)
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
      await fetchRankList(true)
    }
  }

  // 使用节流包装的获取数据函数
  const throttledFetchRankList = useThrottleFn(fetchRankList, 300)

  const handleCategoryClick = (categoryId: string | number) => {
    // 更新分类选中状态
    commicCategories.forEach(category => {
      category.active = category.id === categoryId
    })

    // 重置排序选项到默认状态
    sortOptions.forEach(option => {
      option.active = option.id === -1
    })

    // 重置小说状态选项到默认状态
    statusOptions.forEach(option => {
      option.active = option.id === -1
    })

    // 使用节流后的函数获取数据
    throttledFetchRankList()
  }

  const handleSortOptionClick = (sortId: string | number) => {
    sortOptions.forEach(option => {
      option.active = option.id === sortId
    })
    // 使用节流后的函数获取数据
    throttledFetchRankList()
  }

  const handleStatusOptionClick = (statusId: string | number) => {
    statusOptions.forEach(option => {
      option.active = option.id === statusId
    })
    // 使用节流后的函数获取数据
    throttledFetchRankList()
  }

  // 处理书籍点击
  const handleBookClick = (item: CommicBookInfo) => {
    router.push({
      name: 'comicIntro',
      query: { nid: item.id, status: item.statusText }
    })
  }

  // 监听滚动事件
  onMounted(() => {
    initializeFromRoute()
    // 初始加载不需要节流
    fetchRankList()
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    cleanupUrls()
  })
</script>

<style scoped>
  .loading-container,
  .error-container,
  .empty-container {
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

  .n-l-b ul {
    padding-top: 0;
  }

  .tabs-container {
    position: sticky;
    top: 4.8rem;
    background: black;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .au-tab-group + .au-tab-group {
    margin-top: 1px;
  }
</style>
