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
          <span v-for="(item, index) in bookCategories" :key="item.id" :class="{ active: activeSubMenu === index }" @click="(index: number) => handleSubMenuClick(index, item)">
            {{ item.name }}
          </span>
        </div>
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
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n1.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>闪婚两年独守空房，提离婚他急疯了</b>
                    <p>完结</p>
                  </div>
                </li>
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n2.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>纠缠十年，我死后前夫才放手</b>
                    <p>完结</p>
                  </div>
                </li>
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n3.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>真千金归来，离爷又为小心肝去上香啦</b>
                    <p>完结</p>
                  </div>
                </li>
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n4.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>闪婚两年独守空房，提离婚他急疯了</b>
                    <p>完结</p>
                  </div>
                </li>
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n5.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>纠缠十年，我死后前夫才放手</b>
                    <p>完结</p>
                  </div>
                </li>
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n6.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>真千金归来，离爷又为小心肝去上香啦</b>
                    <p>完结</p>
                  </div>
                </li>
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n7.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>闪婚两年独守空房，提离婚他急疯了</b>
                    <p>完结</p>
                  </div>
                </li>
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n8.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>纠缠十年，我死后前夫才放手</b>
                    <p>完结</p>
                  </div>
                </li>
                <li onclick="javascript: location.href='audio_detail.html'">
                  <div class="l-a">
                    <img src="assets/imgs/novel/n9.jpg" />
                    <span class="a-a">都市</span>
                    <span class="a-b">100.17w阅读</span>
                  </div>
                  <div class="l-b">
                    <b>真千金归来，离爷又为小心肝去上香啦</b>
                    <p>连载<em>|</em>最新166章</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  </HomeLayout>
</template>

<script setup lang="ts">
import HomeLayout from '@/components/layout/HomeLayout.vue'
import { onMounted, reactive, ref } from 'vue'
import { BookStatus, NovelBookCategoriesRequest, NovelBookCategoryItem, NovelCategory, NovelListItem, NovelListRequest } from '@/types/novel'
import { getNovelCategory, getNovelList } from '@/api/novel'

const books = reactive<NovelListItem[]>([])
const bookCategories = reactive<NovelBookCategoryItem[]>([])
const activePreMenu = ref('Book')
const activeSubMenu = ref(0)
const loading = ref(false)

const fetchBookCategories = async () => {
  try {
    const params: NovelBookCategoriesRequest = {
      OType: NovelCategory.Book
    }
    const {
      data: { data }
    } = await getNovelCategory(params)
    bookCategories.push({ id: 0, name: '推荐' }, ...data)
  } catch (e) {
    console.log(e)
  }
}

const fetchBooks = async (params: NovelListRequest) => {
  try {
    loading.value = true
    const {
      data: { data }
    } = await getNovelList(params)
    if (data && Array.isArray(data.items)) {
      books.push(...data.items)
    }
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  if (activePreMenu.value === 'Book') {
    const param: NovelListRequest = {
      Type: NovelCategory.Book,
      BookStatus: BookStatus.All,
      IsRecommend: activeSubMenu.value === 0 ? 1 : 0,
      PageIndex: 1,
      PageSize: 10
    }
    await fetchBookCategories()
    await fetchBooks(param)
  }
})

const handlePreMenuClick = (name: string) => {
  activePreMenu.value = name
}

const handleSubMenuClick = async (index: number, item: NovelListItem) => {
  activeSubMenu.value = index
  const param: NovelListRequest = {
    Type: NovelCategory.Book,
    BookStatus: BookStatus.All,
    IsRecommend: index === 0 ? 1 : 0,
    CategoryId: item.id,
    PageIndex: 1,
    PageSize: 10
  }
  try {
    loading.value = true
    books.splice(0, books.length)
    await fetchBooks(param)
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped></style>
