<template>
  <div class="page">
    <header class="h-header">
      <div class="d-r">
        <a><i class="mvfont mv-kefu1" @click="openCustomerService" /></a>
        <a><i class="mvfont mv-setting" /></a>
      </div>
    </header>
    <section class="h-p-b">
      <div class="h-a">
        <div class="a-a">
          <div class="a-l">
            <img :src="getAssetsFile('u_video.png')" />
          </div>
          <div class="a-n">
            <span v-if="userStore.userInfo.phoneNumber != ''">
              {{ userStore.userInfo.phoneNumber }}
            </span>
            <span v-else @click="userStore.showLoginDialog = true">登录 / 注册</span>
          </div>
        </div>
        <div class="a-b">
          <div class="b-l">
            <h3>新用户专项特惠</h3>
            <p>全球高清独家资源，免广告，专属线路</p>
          </div>
          <div class="b-r">
            <a>开通VIP</a>
          </div>
        </div>
        <div class="a-c">
          <a @click="router.push({ name: 'message' })"><i class="mvfont mv-tixing1-full" />我的消息</a>
          <a @click="router.push({ name: 'history' })"><i class="mvfont mv-zuji" />我的足迹</a>
          <a @click="router.push({ name: 'collect' })"><i class="mvfont mv-like_fill" />我的收藏</a>
          <a @click="router.push({ name: 'share' })"><i class="mvfont mv-fenxiang2" />分享好友</a>
        </div>
      </div>
      <div class="h-b">
        <ul class="au-rows">
          <li>
            <a @click="openDownloadPage">
              <span> <i class="mvfont mv-appxiazai" />APP下载 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'spare' })">
              <span> <i class="mvfont mv-fxlj" />永久地址 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'message' })">
              <span> <i class="mvfont mv-labax" />系统公告 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'record' })">
              <span> <i class="mvfont mv-zzjl" />购买记录 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'shareRecord' })">
              <span> <i class="mvfont mv-bets" />分享记录 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
        </ul>
      </div>
    </section>
    <Footer active-menu="home" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Footer from '@/components/layout/Footer.vue'
import { getAssetsFile } from '@/utils'
import { useUserStoreHook } from '@/store/user'
import { useAppStoreHook } from '@/store/app'

const userStore = useUserStoreHook()
const appStore = useAppStoreHook()
const router = useRouter()

const openDownloadPage = () => {
  const baseUrl = window.location.origin + import.meta.env.BASE_URL
  window.open(baseUrl + 'appdownload/index.html', '_blank')
}

const openCustomerService = () => {
  const customerServiceLink = appStore.customer_service_link
  if (customerServiceLink) {
    window.open(customerServiceLink, '_blank')
  } else {
    console.warn('客服链接未设置')
  }
}
</script>
