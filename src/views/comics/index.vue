<template>
  <HomeLayout>
    <div class="novel-list">
      <section class="au-main">
        <div v-if="loading" class="loading-container">
          <Loading v-show="loading" />
        </div>
        <div v-else-if="error" class="error-container">
          <van-empty image="error" :description="error" />
          <van-button size="small" @click="fetchBooksOfIndexPage">刷新</van-button>
        </div>
        <template v-else>
          <div class="sub-menu">
            <span
              v-for="(item, index) in commicCategories"
              :key="item.id"
              :class="{ active: activeSubMenu === index }"
              @click="() => handleSubMenuClick(index, item)"
            >
              {{ item.name }}
            </span>
          </div>
          <nav v-show="activePreMenu === 'Book'" class="i-m-b">
            <div class="b-row br-img">
              <a @click="router.push({ name: 'myCommicCollection' })">
                <span><img src="../../assets/imgs/novel/s_shoucang.svg" /></span>
                <small>我的收藏</small>
              </a>
              <a @click="router.push({ name: 'comicRank' })">
                <span><img src="../../assets/imgs/novel/s_paihang.svg" /></span>
                <small>排行榜</small>
              </a>
              <a @click="router.push({ name: 'comicCategory' })">
                <span><img src="../../assets/imgs/novel/s_fenlei.svg" /></span>
                <small>分类</small>
              </a>
              <a @click="router.push({ name: 'comicCategory', query: { sortType: 0 } })">
                <span><img src="../../assets/imgs/novel/s_lianzai.svg" /></span>
                <small>连载</small>
              </a>
              <a @click="router.push({ name: 'comicCategory', query: { sortType: 1 } })">
                <span><img src="../../assets/imgs/novel/s_wanjie.svg" /></span>
                <small>完结</small>
              </a>
            </div>
          </nav>
          <nav v-show="activePreMenu === 'Book'" class="mv-t-c">
            <div class="mc-a">
              <div class="a-l"><i class="mvfont mv-xietiao" /><span>大家都喜欢</span></div>
              <div class="a-r">
                <span v-if="recommendCommics.length" @click="handleRecommendMoreClick">
                  更多
                  <i class="mvfont mv-right" />
                </span>
              </div>
            </div>
            <div class="mc-b">
              <div class="n-l-b">
                <div v-if="!recommendCommics.length" class="empty-container">
                  <van-empty image="search" description="还没有作品噢" image-size="10rem" />
                </div>
                <ul v-else>
                  <li v-for="item in recommendCommics" :key="item.id" @click="handleBookClick(item)">
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
            </div>
          </nav>
          <nav v-show="activePreMenu === 'Book'" class="mv-t-c">
            <div class="mc-a">
              <div class="a-l"><i class="mvfont mv-xietiao" /><span>最新上架</span></div>
              <div class="a-r">
                <span @click="handleLatestMoreClick">更多<i class="mvfont mv-right" /></span>
              </div>
            </div>
            <div class="mc-b">
              <div class="n-l-b">
                <ul>
                  <li v-for="item in newCommics" :key="item.id" @click="handleBookClick(item)">
                    <div class="l-a">
                      <img :src="item.coverUrl" />
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
            </div>
          </nav>
          <div v-show="activePreMenu === 'AudioBook'" class="empty-container">
            <van-empty image="search" description="敬请期待噢" image-size="10rem" />
          </div>
          <RankingList
            v-show="activePreMenu === 'Book'"
            :hot-books="hotCommics"
            :serial-books="serialCommics"
            :end-books="endCommics"
            :new-hot-books="newHotCommics"
            :is-pc="appStore.isPc"
            @cleanup-urls="cleanupUrls"
          />
        </template>
      </section>
    </div>
  </HomeLayout>
</template>

<script setup lang="ts">
  import HomeLayout from '@/components/layout/HomeLayout.vue'
  import { nextTick, onMounted, onUnmounted, reactive, ref } from 'vue'
  import { CommicBookCategoryItem, CommicIndexListItem, CommicStatus } from '@/types/commic'
  import { getCommicIndexList } from '@/api/commic'
  import { useAppStore } from '@/store/app'
  import decryptionService from '@/utils/decryptionService'
  import { formatCount, preloadImages } from '@/utils'
  import RankingList from './components/RankingList.vue'
  import { useRouter } from 'vue-router'
  import Loading from '@/components/layout/Loading.vue'
  import { useCommicCategoryStore } from '@/store/commicCategory'

  const appStore = useAppStore()
  const router = useRouter()
  const commicCategories = reactive<CommicBookCategoryItem[]>([])
  const activePreMenu = ref('Book')
  const activeSubMenu = ref(0)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const decrypt = new decryptionService()
  const hotCommics = reactive<CommicIndexListItem[]>([])
  const newCommics = reactive<CommicIndexListItem[]>([])
  const recommendCommics = reactive<CommicIndexListItem[]>([])
  const serialCommics = reactive<CommicIndexListItem[]>([])
  const endCommics = reactive<CommicIndexListItem[]>([])
  const newHotCommics = reactive<CommicIndexListItem[]>([])

  const createdUrls = ref<string[]>([])

  const commicCategoryStore = useCommicCategoryStore()

  async function decryptBookImage(book: CommicIndexListItem) {
    if (book.coverUrl === '') {
      book.coverUrl = '/src/assets/imgs/default2.gif'
      return book
    }

    try {
      const decryptedBlob = await decrypt.fetchAndDecrypt(appStore.cdnUrl + book.coverUrl)

      // 验证解密后的数据是否为有效的图片
      const isValidImage = await validateImage(decryptedBlob)
      if (!isValidImage) {
        console.warn('Invalid image data:', book.coverUrl)
        book.coverUrl = '/src/assets/imgs/default2.gif'
        return book
      }

      const objectUrl = URL.createObjectURL(decryptedBlob)
      createdUrls.value.push(objectUrl)
      book.coverUrl = objectUrl
      return book
    } catch (error) {
      console.error('Image decryption failed:', error)
      book.coverUrl = '/src/assets/imgs/default2.gif'
      return book
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

  async function decryptImage(
    hots: CommicIndexListItem[],
    news: CommicIndexListItem[],
    recommends: CommicIndexListItem[],
    serial: CommicIndexListItem[],
    ends: CommicIndexListItem[],
    newhots: CommicIndexListItem[]
  ) {
    // 先解密所有图片
    await Promise.all([
      ...hots.map(decryptBookImage),
      ...news.map(decryptBookImage),
      ...recommends.map(decryptBookImage),
      ...serial.map(decryptBookImage),
      ...ends.map(decryptBookImage),
      ...newhots.map(decryptBookImage)
    ])

    // 收集所有图片URL进行预加载
    const allImageUrls = [...hots, ...news, ...recommends, ...serial, ...ends, ...newhots]
      .map(book => book.coverUrl)
      .filter(url => url && !url.includes('default2.gif'))

    // 预加载图片
    try {
      await preloadImages(allImageUrls)
    } catch (error) {
      console.warn('Some images failed to preload:', error)
    }
  }

  const cleanupUrls = () => {
    createdUrls.value.forEach(url => {
      URL.revokeObjectURL(url)
    })
    createdUrls.value = []
  }

  onUnmounted(() => {
    cleanupUrls()
  })

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

  function formatBookStatus(
    hots: CommicIndexListItem[],
    news: CommicIndexListItem[],
    recommends: CommicIndexListItem[],
    serial: CommicIndexListItem[],
    ends: CommicIndexListItem[],
    newhots: CommicIndexListItem[]
  ) {
    const formatBooks = (commics: CommicIndexListItem[]) => {
      commics.forEach(item => {
        item.statusText = formatBookStatusText(item.status)
        const categoryName = commicCategoryStore.getCategoryNameById(item.categoryId.toString())
        item.categoryName = categoryName.toString()
      })
    }

    formatBooks(hots)
    formatBooks(news)
    formatBooks(recommends)
    formatBooks(serial)
    formatBooks(ends)
    formatBooks(newhots)
  }

  const fetchBooksOfIndexPage = async () => {
    try {
      loading.value = true
      error.value = null
      const {
        data: { data }
      } = await getCommicIndexList()
      if (data) {
        const { hots, news, recommends, serial, end, newhots, categories } = data
        commicCategories.push({ id: 0, name: '推荐' }, ...categories)
        formatBookStatus(hots, news, recommends, serial, end, newhots)
        await decryptImage(hots, news, recommends, serial, end, newhots)
        nextTick(() => {
          hotCommics.push(...hots)
          newCommics.push(...news)
          recommendCommics.push(...recommends)
          serialCommics.push(...serial)
          endCommics.push(...end)
          newHotCommics.push(...newhots)
        })
        if (data?.categories && data.categories.length > 0) {
          commicCategoryStore.setCategories(data.categories)
        }
      }
    } catch (error) {
      console.error('Failed to fetch books:', error)
      error.value = '获取数据失败，请稍后重试'
    } finally {
      loading.value = false
    }
  }

  onMounted(async () => {
    if (activePreMenu.value === 'Book') {
      await fetchBooksOfIndexPage()
    }
  })

  const handleBookClick = (item: CommicIndexListItem) => {
    router.push({ name: 'comicIntro', query: { nid: item.id, status: item.statusText } })
  }

  const handleSubMenuClick = async (index: number, item: CommicBookCategoryItem) => {
    activeSubMenu.value = index
    // 跳转到分类页面，传递分类ID
    router.push({
      name: 'comicCategory',
      query: {
        categoryId: item.id
      }
    })
  }

  const handleLatestMoreClick = () => {
    router.push({
      name: 'commicCategory',
      query: {
        sortType: 'CreateTime'
      }
    })
  }

  const handleRecommendMoreClick = () => {
    router.push({
      name: 'commicCategory',
      query: { sortType: 'FavoriteCount' }
    })
  }
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

  .loading-container span {
    color: #666;
    font-size: 14px;
  }
</style>
