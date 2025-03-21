<template>
  <div class="drama-list page">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <span>短剧</span>
      </div>
      <div class="d-r">
        <i class="mvfont mv-search1" />
      </div>
    </header>
    <div class="au-main drama-main">
      <div class="tabs-container">
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-r">
              <span
                v-for="category in dramaCategories"
                :key="category.id"
                :class="{ active: category.active }"
                @click="handleCategoryClick(category.id)"
              >
                {{ category.title }}
              </span>
            </div>
          </div>
        </div>
        <div class="au-tab-group">
          <div class="g-item">
            <div class="i-r">
              <span
                v-for="genderOption in genderOptions"
                :key="genderOption.id"
                :class="{ active: genderOption.active }"
                @click="handleGenderOptionClick(genderOption.id)"
              >
                {{ genderOption.name }}
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
      </div>

      <!-- 短剧列表 -->
      <div class="drama-list">
        <div v-if="loading">
          <Loading />
        </div>
        <div v-else-if="error" class="error-container">
          <van-empty image="error" :description="error" />
        </div>
        <template v-else>
          <div v-if="!dramas.length" class="empty-container">
            <van-empty description="暂无短剧可供观看" />
          </div>
          <div v-else class="n-l-b">
            <ul>
              <li v-for="item in dramas" :key="item.id" @click="handleDramaClick(item)">
                <div class="l-a">
                  <img :src="item.imgUrl" :alt="item.title" />
                  <span class="a-a">{{ item.channelName }}</span>
                  <span class="a-b">{{ formatCount(item.viewCount) }}&nbsp;播放</span>
                </div>
                <div class="l-b">
                  <b>{{ item.title }}</b>
                  <p>{{ item.channelName }} | {{ item.collectionCount }}集</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- 加载更多状态 -->
          <div class="load-more" v-if="dramas.length">
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
  import { formatCount } from '@/utils'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import { TabOption } from '@/types/commic'
  import { getDramaList } from '@/api/drama'
  import { useDramaCategoryStore } from '@/store/dramaCategory'
  import { DramaCategoryItem, DramaChannelType, DramaGenderType, DramaItem, DramaListRequestParams, DramaSortType } from '@/types/drama'

  const router = useRouter()
  const route = useRoute()
  const dramaCategoryStore = useDramaCategoryStore()
  const appStore = useAppStore()

  const loading = ref(false)
  const error = ref<string | null>(null)
  const currentPage = ref(1)
  const hasMoreData = ref(true)
  const isLoadingMore = ref(false)
  const dramas = ref<DramaItem[]>([])
  const decrypt = new decryptionService()
  const createdUrls = ref<string[]>([])

  // 分类选项
  const dramaCategories = reactive<DramaCategoryItem[]>([])

  // Initialize categories with active state
  const initialCategories = [
    { id: 0, title: '全部', active: true },
    ...dramaCategoryStore.categories.map(cat => ({ ...cat, active: false }))
  ]
  dramaCategories.push(...initialCategories)

  const sortOptions = reactive<TabOption[]>([
    { id: 0, name: '全部', active: true },
    { id: 1, name: '最新', active: false },
    { id: 2, name: '最热', active: false },
    { id: 3, name: '好评', active: false },
    { id: 4, name: '收藏', active: false }
  ])

  const genderOptions = reactive<TabOption[]>([
    { id: 0, name: '全部', active: true },
    { id: 1, name: '男频', active: false },
    { id: 2, name: '女频道', active: false }
  ])

  // 根据路由参数初始化状态选项
  const initializeFromRoute = () => {
    // 处理sortType参数
    const sortTypeParam = route.query.sortType as string
    if (sortTypeParam !== undefined) {
      sortOptions.forEach(option => {
        option.active = option.value === sortTypeParam
      })
    }

    // 处理分类ID参数
    const categoryId = route.query.categoryId
    if (categoryId !== undefined) {
      dramaCategories.forEach(category => {
        category.active = category.id === categoryId
      })
    }

    // 处理排序类型参数
    const genderType = route.query.genderType
    if (genderType !== undefined) {
      const genderId = Number(genderType)
      genderOptions.forEach(option => {
        option.active = option.value === genderId
      })
    }
  }

  // 获取当前激活的选项ID
  const getActiveId = (list: TabOption[] | DramaCategoryItem[]) => {
    const activeItem = list.find(item => item.active)
    return activeItem ? activeItem.id : 0
  }

  // 处理图片解密
  async function decryptDramaImage(drama: DramaItem) {
    if (drama.imgUrl === '') {
      drama.imgUrl = '/src/assets/imgs/default2.gif'
      return drama
    }

    try {
      const decryptedBlob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + drama.imgUrl)

      // 验证解密后的数据是否为有效的图片
      const isValidImage = await validateImage(decryptedBlob)
      if (!isValidImage) {
        console.warn('Invalid image data:', drama.imgUrl)
        drama.imgUrl = '/src/assets/imgs/default2.gif'
        return drama
      }

      const objectUrl = URL.createObjectURL(decryptedBlob)
      createdUrls.value.push(objectUrl)
      drama.imgUrl = objectUrl
      return drama
    } catch (error) {
      console.error('Image decryption failed:', error)
      drama.imgUrl = '/src/assets/imgs/default2.gif'
      return drama
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

  const fetchRankList = async (isLoadMore = false) => {
    try {
      if (isLoadMore) {
        isLoadingMore.value = true
      } else {
        loading.value = true
        currentPage.value = 1
        dramas.value = []
        cleanupUrls()
      }
      error.value = null

      const params = {
        ChannelId: getActiveId(dramaCategories),
        SortType: getActiveId(sortOptions),
        GenderChannelType: getActiveId(genderOptions)
      }

      // 构建基础请求参数
      const requestParams: DramaListRequestParams = {
        PageIndex: currentPage.value,
        PageSize: 12
      }

      // 设置默认参数
      requestParams.SortType = params.SortType as number

      // 当性别不是全部时才添加性别参数
      if (params.GenderChannelType !== DramaGenderType.All) {
        requestParams.GenderChannelType = params.GenderChannelType as number
      }

      // 当分类不是全部时才添加分类参数
      if (params.ChannelId !== DramaChannelType.All) {
        requestParams.ChannelId = params.ChannelId as number
      }

      // 当排序类型不是全部时才添加排序参数
      if (params.SortType !== DramaSortType.All) {
        switch (params.SortType) {
          case DramaSortType.New:
            requestParams.SortType = 1
            break
          case DramaSortType.Hot:
            requestParams.SortType = 2
            break
          case DramaSortType.Like:
            requestParams.SortType = 3
            break
          case DramaSortType.Collect:
            requestParams.SortType = 4
            break
        }
      }

      const {
        data: { data }
      } = await getDramaList(requestParams)

      if (data) {
        // 更新分页状态
        hasMoreData.value = currentPage.value < data.pageCount

        // 处理图片解密
        const processedDramas = await Promise.all(data.items.map(decryptDramaImage))

        // 处理漫画分类
        processedDramas.forEach(item => {
          const categoryName = dramaCategoryStore.getCategoryNameById(item.channelId.toString())
          item.channelName = categoryName.toString()
        })

        // 追加或替换数据
        if (isLoadMore) {
          dramas.value.push(...processedDramas)
        } else {
          dramas.value = processedDramas
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
    dramaCategories.forEach(category => {
      category.active = category.id === categoryId
    })

    // 重置排序选项到默认状态
    sortOptions.forEach(option => {
      option.active = option.id === 0
    })

    // 重置小说状态选项到默认状态
    genderOptions.forEach(option => {
      option.active = option.id === 0
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

  const handleGenderOptionClick = (genderId: string | number) => {
    genderOptions.forEach(option => {
      option.active = option.id === genderId
    })
    // 使用节流后的函数获取数据
    throttledFetchRankList()
  }

  // 处理剧集点击
  const handleDramaClick = (item: DramaItem) => {
    router.push({
      name: 'shortDramaPlayer',
      query: { dramaId: item.id, episodeId: item.first.id }
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

<style lang="less" scoped>
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

  .drama-main {
    padding: 5rem 0;
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

  .d-header .d-r i {
    font-size: 2.4rem;
  }

  .tabs-container {
    position: sticky;
    top: 4.8rem;
    background: black;
    z-index: 100;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }

  .d-header .d-m span {
    font-size: 1.8rem;
  }

  .au-tab-group {
    padding: 0.5rem 1rem;
  }

  .au-tab-group + .au-tab-group {
    margin-top: 1px;
  }

  .au-tab-group .g-item .i-r {
    padding-left: 0;
  }

  .au-tab-group .g-item .i-r span {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--color-white);
    padding: 0.5rem 1rem;
    text-align: center;
    border-radius: 0.4rem;
    -webkit-border-radius: 0.4rem;
    -moz-border-radius: 0.4rem;
    white-space: nowrap;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.3rem;

    &.active {
      background-color: rgba(var(--color-primary-rgba), 0.15);
      color: var(--color-primary);
      font-weight: 600;
    }
  }
</style>
