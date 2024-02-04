<template>
  <div class="page">
    <CommonHeader :title="t('blog')" />
    <main class="main">
      <div class="blog-box">
        <div class="bb-title" @click="router.push({ name: 'blogDetails', params: { id: pinBlog.id } })">
          <div class="bt-l">
            <!-- <img :src="getAssetsFile('blog/banner_blog.webp')" /> -->
            <img v-lazy="`https://seabet.imgix.net/${pinBlog.coverImage}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
          </div>
          <div class="bt-r">
            <h2>{{ pinBlog.title }}</h2>
            <p>{{ pinBlog.intro }}</p>
          </div>
        </div>
        <div class="bb-menu">
          <ul>
            <li v-for="(item, index) of blogTypes" :key="index" @click="router.push({ name: 'blogList', query: { id: item.value } })">
              <div class="bm-bd">
                <div class="bb-l">
                  <img :src="getAssetsFile(item.img)" />
                </div>
                <div class="bb-m">{{ item.text }}</div>
                <div class="bb-r"><i class="iconfont icon-right" /></div>
              </div>
            </li>
          </ul>
        </div>
        <div class="bb-list">
          <ul>
            <li v-for="(item, index) of blogList" :key="index" @click="router.push({ name: 'blogDetails', params: { id: item.id } })">
              <div class="bl-bd">
                <img v-lazy="`https://seabet.imgix.net/${item.coverImage}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                <!-- <img :src="appStore.cdnurl + item.coverImage" /> -->
                <h2>{{ item.title }}</h2>
                <p>{{ item.intro }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div v-if="pageCount > 1 && blogQuery.PageIndex < pageCount" class="g-btn">
          <a :class="blogQuery.PageIndex >= pageCount ? 'btn btn-primary disabled' : 'btn btn-primary'" @click="loadMore()">{{ t('loadMore') }}</a>
        </div>
      </div>
      <IndexFooter :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    </main>
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import Sidebar from '@/components/layout/SideBar.vue'
import Footer from '@/components/layout/Footer.vue'

import { getExchangeRate } from '@/composables/getExchangeRate'
import { getBlogPinApi, getBlogListApi } from '@/api/blog/index'
import { getBlogItemResp } from '@/api/blog/types'
import { getAssetsFile } from '@/utils/index'
// import { useAppStore } from '@/store/modules/app'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// const appStore = useAppStore()
const router = useRouter()
const { t } = useI18n()

const blogTypes = [
  { value: 1, text: 'Crypto', img: 'blog/crypto.webp' },
  { value: 2, text: 'How to guides', img: 'blog/howtoguides.webp' },
  { value: 3, text: 'Seabet News', img: 'blog/seabetnews.webp' },
  { value: 4, text: 'Sports', img: 'blog/sports.webp' },
  { value: 5, text: 'Casino', img: 'blog/casino.webp' },
  { value: 6, text: 'Others', img: 'blog/others.webp' }
]

const blogQuery = reactive({
  BlogType: null,
  PageIndex: 1,
  PageSize: 3
})
let pageCount = ref(0)
const blogList = ref<getBlogItemResp[]>([])
const pinBlog = reactive({
  title: '',
  intro: 'string',
  id: 0,
  coverImage: '',
  blogType: 1,
  createTime: ''
})
const showLoadingMore = ref(false)

const getBlogPin = () => {
  getBlogPinApi()
    .then((resp) => {
      Object.assign(pinBlog, resp.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

const getBlogList = () => {
  getBlogListApi(blogQuery)
    .then((resp) => {
      blogList.value = blogList.value.concat(resp.data!.items)
      pageCount.value = parseInt(resp.data.pageCount)
      showLoadingMore.value = true
    })
    .catch((err) => {
      console.log(err)
    })
}

// 加载更多
const loadMore = () => {
  if (blogQuery.PageIndex <= pageCount.value) {
    blogQuery.PageIndex++
    getBlogList()
  } else {
    showToast(t('noMore'))
  }
}

getBlogPin()
getBlogList()
</script>
