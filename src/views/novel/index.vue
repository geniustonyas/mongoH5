<template>
  <HomeLayout>
    <div class="novel-list">
      <section class="au-main">
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
          <span v-for="(item, index) in bookCategories" :key="item.id" :class="{ active: activeSubMenu === index }" @click="() => handleSubMenuClick(index, item)">
            {{ item.name }}
          </span>
        </div>
        <nav class="i-m-b">
          <div class="b-row br-img">
            <a href="#">
              <span><img src="../../assets/imgs/novel/s_shoucang.svg" /></span>
              <small>我的收藏</small>
            </a>
            <a href="#">
              <span><img src="../../assets/imgs/novel/s_paihang.svg" /></span>
              <small>排行榜</small>
            </a>
            <a href="#">
              <span><img src="../../assets/imgs/novel/s_fenlei.svg" /></span>
              <small>分类</small>
            </a>
            <a>
              <span><img src="../../assets/imgs/novel/s_lianzai.svg" /></span>
              <small>连载</small>
            </a>
            <a>
              <span><img src="../../assets/imgs/novel/s_wanjie.svg" /></span>
              <small>完结</small>
            </a>
          </div>
        </nav>
        <nav v-if="activePreMenu === 'Book'" class="mv-t-c">
          <div class="mc-a">
            <div class="a-l"><i class="mvfont mv-xietiao" /><span>大家都喜欢</span></div>
            <div class="a-r">
              <span onclick="javascript: location.href=''">更多<i class="mvfont mv-right" /></span>
            </div>
          </div>
          <div class="mc-b">
            <div class="n-l-b">
              <ul>
                <li v-for="item in hotBooks" :key="item.id">
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
        <nav v-if="activePreMenu === 'Book'" class="mv-t-c">
          <div class="mc-a">
            <div class="a-l"><i class="mvfont mv-xietiao" /><span>最新上架</span></div>
            <div class="a-r">
              <span onclick="javascript: location.href=''">更多<i class="mvfont mv-right" /></span>
            </div>
          </div>
          <div class="mc-b">
            <div class="n-l-b">
              <ul>
                <li v-for="item in newBooks" :key="item.id">
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
        <nav v-if="activePreMenu === 'Book'" class="mv-t-c">
          <div class="mc-a">
            <div class="a-l"><i class="mvfont mv-xietiao" /><span>排行榜</span></div>
            <div class="a-r">
              <span>完整榜单<i class="mvfont mv-right" /></span>
            </div>
          </div>
          <div class="mc-b">
            <div class="b-tabs">
              <span class="active">畅销榜</span>
              <span class="">连载榜</span>
              <span class="">完结榜</span>
              <span>新书榜</span>
            </div>
          </div>
        </nav>
      </section>
    </div>
  </HomeLayout>
</template>

<script setup lang="ts">
import HomeLayout from '@/components/layout/HomeLayout.vue'
import { nextTick, onMounted, reactive, ref } from 'vue'
import { NovelBookCategoryItem, NovelIndexListItem, NovelStatus } from '@/types/novel'
import { getNovelIndexList } from '@/api/novel'
import { useAppStore } from '@/store/app'
import decryptionService from '@/utils/decryptionService'
import { formatCount } from '@/utils'
import { Swiper } from "swiper/swiper-vue";

const appStore = useAppStore()
const bookCategories = reactive<NovelBookCategoryItem[]>([])
const activePreMenu = ref('Book')
const activeSubMenu = ref(0)
const loading = ref(false)
const decrypt = new decryptionService()
const hotBooks = reactive<NovelIndexListItem[]>([])
const newBooks = reactive<NovelIndexListItem[]>([])

async function decryptImage(hots: NovelIndexListItem[], news: NovelIndexListItem[]) {
  for (const hotBook of hots) {
    if (hotBook.coverUrl === '') {
      hotBook.coverUrl = '/src/assets/imgs/default2.gif'
    } else {
      hotBook.coverUrl = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + hotBook.coverUrl))
    }
  }
  for (const newBook of news) {
    if (newBook.coverUrl === '') {
      newBook.coverUrl = '/src/assets/imgs/default2.gif'
    } else {
      newBook.coverUrl = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + newBook.coverUrl))
    }
  }
}

function formatBookStatus(hots: NovelIndexListItem[], news: NovelIndexListItem[]) {
  hots.forEach((item) => {
    switch (item.status) {
      case NovelStatus.Serial:
        item.statusText = '连载中'
        break
      case NovelStatus.Finished:
        item.statusText = '完结'
        break
    }
  })
  news.forEach((item) => {
    switch (item.status) {
      case NovelStatus.Serial:
        item.statusText = '连载中'
        break
      case NovelStatus.Finished:
        item.statusText = '完结'
        break
    }
  })
}

const fetchBooksOfIndexPage = async () => {
  try {
    loading.value = true
    const {
      data: { data }
    } = await getNovelIndexList()
    if (data) {
      const { hots, news, categories } = data
      bookCategories.push({ id: 0, name: '推荐' }, ...categories)
      formatBookStatus(hots, news)
      await decryptImage(hots, news)
      nextTick(() => {
        hotBooks.push(...hots)
        newBooks.push(...news)
      })
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  if (activePreMenu.value === 'Book') {
    await fetchBooksOfIndexPage()
  }
})

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

<style scoped></style>
