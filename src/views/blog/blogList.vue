<template>
  <div class="page">
    <CommonHeader />
    <main class="main">
      <div class="blog-box">
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
import { useRoute, useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import Sidebar from '@/components/layout/SideBar.vue'
import Footer from '@/components/layout/Footer.vue'

import { getExchangeRate } from '@/composables/getExchangeRate'
import { getBlogListApi } from '@/api/blog/index'
import { getBlogItemResp } from '@/api/blog/types'
// import { useAppStore } from '@/store/modules/app'

// import { getAssetsFile } from '@/utils/index'
import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// const appStore = useAppStore()
const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const blogQuery = reactive({
  BlogType: 1,
  PageIndex: 1,
  PageSize: 3
})
let pageCount = ref(0)
const blogList = ref<getBlogItemResp[]>([])
const showLoadingMore = ref(false)

//@ts-ignore
blogQuery.BlogType = route.query.id
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

getBlogList()
</script>
