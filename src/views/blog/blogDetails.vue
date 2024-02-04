<template>
  <div class="page">
    <CommonHeader />
    <main class="main">
      <div class="blog-box">
        <div class="bb-details">
          <div class="bd-title">{{ blogDetails.title }}</div>
          <div class="bd-date">
            <div class="d-l">Seabet - {{ blogDetails.createTime }}</div>
            <div class="d-r">
              <a @click="share('facebook')">
                <i class="iconfont icon-facebook" />
              </a>
              <a @click="share('twitter')">
                <i class="iconfont icon-twitter" />
              </a>
            </div>
          </div>
          <div class="bd-photo">
            <img v-lazy="`https://seabet.imgix.net/${blogDetails.coverImage}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
          </div>
          <div class="bd-cont" v-html="blogDetails.content" />
        </div>
        <div class="bd-hot">
          <div class="bh-title">热门其他文章</div>
          <div class="bb-list">
            <ul>
              <li v-for="(item, index) of hotBlogs" :key="index" @click="router.push({ name: 'blogDetails', params: { id: item.id } })">
                <div class="bl-bd">
                  <img v-lazy="`https://seabet.imgix.net/${item.coverImage}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                  <!-- <img :src="appStore.cdnurl + item.coverImage" /> -->
                  <h2>{{ item.title }}</h2>
                  <p>{{ item.intro }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <IndexFooter :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    </main>
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import Sidebar from '@/components/layout/SideBar.vue'
import Footer from '@/components/layout/Footer.vue'

import { getExchangeRate } from '@/composables/getExchangeRate'
import { getBlogDetailsApi } from '@/api/blog/index'
import { getBlogItemResp } from '@/api/blog/types'
// import { useAppStore } from '@/store/modules/app'

// import { getAssetsFile } from '@/utils/index'
// import { useI18n } from 'vue-i18n'

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

// const appStore = useAppStore()
const router = useRouter()
const route = useRoute()
// const { t } = useI18n()

const blogDetails = reactive({
  title: '',
  intro: '',
  content: '',
  id: 0,
  coverImage: '',
  blogType: 0,
  createTime: ''
})
const hotBlogs = ref<getBlogItemResp[]>([])

// 获取博客详情
const getBlogDetails = (id: any) => {
  getBlogDetailsApi({ Id: id })
    .then((resp) => {
      Object.assign(blogDetails, resp.data)
      hotBlogs.value = resp.data.hotBlogs
    })
    .catch((err) => {
      console.log(err)
    })
}

// 分享到facebook twitter
const share = (platForm: string, title = blogDetails.title) => {
  const shareUrl = window.location.href
  let openUrl = ''
  if (platForm == 'facebook') {
    openUrl = 'http://www.facebook.com/sharer.php?u=' + encodeURIComponent('https://www.baidu.com')
  }
  if (platForm == 'twitter') {
    openUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(shareUrl) + '&text=' + encodeURIComponent(title)
  }
  window.open(openUrl, '_blank', 'toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350')
}

// 观察query参数中的box， 判断是否打开对应窗口
watch(
  () => route.params.id,
  (val) => {
    if (val) {
      getBlogDetails(val)
    }
  },
  { immediate: true }
)
</script>
