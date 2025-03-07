<template>
  <HomeLayout>
    <div class="novel-list">
      <section class="au-main">
        <div v-if="loading" class="loading-container">
          <Loading v-show="loading" />
        </div>
        <div v-else-if="error" class="error-container">
          <van-empty image="error" :description="error" />
          <van-button type="primary" @click="fetchBooksOfIndexPage">刷新</van-button>
        </div>
        <template v-else>
          <div class="pre-menu">
            <span :class="{ active: activePreMenu === 'Book' }" @click="handlePreMenuClick('Book')">
              <b>文字小说</b>
              <small>随时随地看</small>
            </span>
            <span :class="{ active: activePreMenu === 'AudioBook' }" @click="handlePreMenuClick('AudioBook')">
              <b>有声小说</b>
              <small>随时随地听</small>
            </span>
            <span :class="{ active: activePreMenu === 'App' }" @click="handlePreMenuClick('App')">
              <b>APP下载</b>
              <small>第一时间看更新</small>
            </span>
          </div>
          <div class="sub-menu">
            <span
              v-for="(item, index) in bookCategories"
              :key="item.id"
              :class="{ active: activeSubMenu === index }"
              @click="() => handleSubMenuClick(index, item)"
            >
              {{ item.name }}
            </span>
          </div>
          <nav class="i-m-b">
            <div class="b-row br-img">
              <a href="#">
                <span><img src="../../assets/imgs/novel/s_shoucang.svg" /></span>
                <small>我的收藏</small>
              </a>
              <a @click="router.push({ name: 'novelRank' })">
                <span><img src="../../assets/imgs/novel/s_paihang.svg" /></span>
                <small>排行榜</small>
              </a>
              <a @click="router.push({ name: 'novelCategory' })">
                <span><img src="../../assets/imgs/novel/s_fenlei.svg" /></span>
                <small>分类</small>
              </a>
              <a @click="router.push({ name: 'novelCategory', query: { sortType: 1 } })">
                <span><img src="../../assets/imgs/novel/s_lianzai.svg" /></span>
                <small>连载</small>
              </a>
              <a @click="router.push({ name: 'novelCategory', query: { sortType: 0 } })">
                <span><img src="../../assets/imgs/novel/s_wanjie.svg" /></span>
                <small>完结</small>
              </a>
            </div>
          </nav>
          <nav v-show="activePreMenu === 'Book'" class="mv-t-c">
            <div class="mc-a">
              <div class="a-l"><i class="mvfont mv-xietiao" /><span>大家都喜欢</span></div>
              <div class="a-r">
                <span v-if="recommendBooks.length" onclick="javascript: location.href=''">
                  更多
                  <i class="mvfont mv-right" />
                </span>
              </div>
            </div>
            <div class="mc-b">
              <div class="n-l-b">
                <div v-if="!recommendBooks.length" class="empty-container">
                  <van-empty image="search" description="还没有作品噢" image-size="10rem" />
                </div>
                <ul v-else>
                  <li v-for="item in recommendBooks" :key="item.id" @click="handleBookClick(item)">
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
                <span onclick="javascript: location.href=''">更多<i class="mvfont mv-right" /></span>
              </div>
            </div>
            <div class="mc-b">
              <div class="n-l-b">
                <ul>
                  <li v-for="item in newBooks" :key="item.id" @click="handleBookClick(item)">
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
          <RankingList
            v-show="activePreMenu === 'Book'"
            :hot-books="hotBooks"
            :serial-books="serialBooks"
            :end-books="endBooks"
            :new-hot-books="newHotBooks"
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
import { NovelBookCategoryItem, NovelIndexListItem, NovelStatus } from '@/types/novel'
import { getNovelIndexList } from '@/api/novel'
import { useAppStore } from '@/store/app'
import decryptionService from '@/utils/decryptionService'
import { formatCount } from '@/utils'
import RankingList from './components/RankingList.vue'
import { useRouter } from 'vue-router'
import Loading from '@/components/layout/Loading.vue'
import { useNovelCategoryStore } from '@/store/novelCategory'

const appStore = useAppStore()
const router = useRouter()
const bookCategories = reactive<NovelBookCategoryItem[]>([])
const activePreMenu = ref('Book')
const activeSubMenu = ref(0)
const loading = ref(false)
const error = ref<string | null>(null)
const decrypt = new decryptionService()
const hotBooks = reactive<NovelIndexListItem[]>([])
const newBooks = reactive<NovelIndexListItem[]>([])
const recommendBooks = reactive<NovelIndexListItem[]>([])
const serialBooks = reactive<NovelIndexListItem[]>([])
const endBooks = reactive<NovelIndexListItem[]>([])
const newHotBooks = reactive<NovelIndexListItem[]>([])

const createdUrls: string[] = []

const novelCategoryStore = useNovelCategoryStore()

async function decryptBookImage(book: NovelIndexListItem) {
  if (book.coverUrl === '') {
    book.coverUrl = '/src/assets/imgs/default2.gif'
  } else {
    const url = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + book.coverUrl))
    createdUrls.push(url)
    book.coverUrl = url
  }
}

async function decryptImage(
  hots: NovelIndexListItem[],
  news: NovelIndexListItem[],
  recommends: NovelIndexListItem[],
  serial: NovelIndexListItem[],
  ends: NovelIndexListItem[],
  newhots: NovelIndexListItem[]
) {
  await Promise.all([
    ...hots.map(decryptBookImage),
    ...news.map(decryptBookImage),
    ...recommends.map(decryptBookImage),
    ...serial.map(decryptBookImage),
    ...ends.map(decryptBookImage),
    ...newhots.map(decryptBookImage)
  ])
}

function cleanupUrls() {
  createdUrls.forEach((url) => {
    URL.revokeObjectURL(url)
  })
  createdUrls.length = 0
}

onUnmounted(() => {
  cleanupUrls()
})

function formatBookStatusText(status: NovelStatus): string {
  switch (status) {
    case NovelStatus.Serial:
      return '连载中'
    case NovelStatus.Finished:
      return '完结'
    default:
      return ''
  }
}

function formatBookStatus(
  hots: NovelIndexListItem[],
  news: NovelIndexListItem[],
  recommends: NovelIndexListItem[],
  serial: NovelIndexListItem[],
  ends: NovelIndexListItem[],
  newhots: NovelIndexListItem[]
) {
  const formatBooks = (books: NovelIndexListItem[]) => {
    books.forEach((item) => {
      item.statusText = formatBookStatusText(item.status)
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
    } = await getNovelIndexList()
    if (data) {
      const { hots, news, recommends, serial, end, newhots, categories } = data
      bookCategories.push({ id: 0, name: '推荐' }, ...categories)
      formatBookStatus(hots, news, recommends, serial, end, newhots)
      await decryptImage(hots, news, recommends, serial, end, newhots)
      nextTick(() => {
        hotBooks.push(...hots)
        newBooks.push(...news)
        recommendBooks.push(...recommends)
        serialBooks.push(...serial)
        endBooks.push(...end)
        newHotBooks.push(...newhots)
      })
      if (data?.categories && data.categories.length > 0) {
        novelCategoryStore.setCategories(data.categories)
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

const handleBookClick = (item: NovelIndexListItem) => {
  router.push({ name: 'novelIntro', query: { nid: item.id, status: item.statusText } })
}

const handlePreMenuClick = (name: string) => {
  activePreMenu.value = name
}

const handleSubMenuClick = async (index: number, item: NovelBookCategoryItem) => {
  activeSubMenu.value = index
  try {
    // todo：点击分类跳转所有书籍列表
    console.log(item.id, index)
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
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
