<template>
  <div class="page my-home">
    <header class="h-header">
      <div class="d-r">
        <a><i class="mvfont mv-kefu1" @click="openCustomerService" /></a>
        <!-- <a><i class="mvfont mv-setting" /></a> -->
      </div>
    </header>
    <section class="h-p-b">
      <div class="h-a">
        <div class="a-a">
          <div class="a-l">
            <img :src="getAssetsFile('logo-4.png')" />
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
            <!-- <a>开通VIP</a> -->
          </div>
        </div>
        <div class="a-c">
          <a @click="router.push({ name: 'message' })"><i class="mvfont mv-tixing1-full" />我的消息</a>
          <a @click="router.push({ name: 'history' })"><i class="mvfont mv-zuji" />我的足迹</a>
          <a @click="router.push({ name: 'collect' })"><i class="mvfont mv-like_fill" />我的收藏</a>
          <a @click="router.push({ name: 'share' })"><i class="mvfont mv-fenxiang2" />分享好友</a>
        </div>
      </div>

      <div v-if="bannerAdvertisement && bannerAdvertisement.length > 0" class="ad-box">
        <img
          @click="openAd(bannerAdvertisement[0].targetUrl, '会员中心横幅', 'click', bannerAdvertisement[0].id)"
          :key="bannerAdvertisement[0].id"
          v-lazy-decrypt="bannerAdvertisement[0].imgUrl"
          :alt="bannerAdvertisement[0].title"
        />
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
            <a @click="router.push({ name: 'buyRecord' })">
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
    <NavBar active-menu="home" />
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import Footer from '@/components/layout/Footer.vue'
  import NavBar from '@/components/layout/NavBar.vue'
  import { getAssetsFile, openAd } from '@/utils'
  import { useUserStoreHook } from '@/store/user'
  import { useAppStoreHook } from '@/store/app'
  // import { showToast } from 'vant'

  const userStore = useUserStoreHook()
  const appStore = useAppStoreHook()
  const router = useRouter()

  const bannerAdvertisement = computed(() => {
    const tmp = appStore.getAdvertisementById(14).items
    return tmp || []
  })

  // 立即执行
  ;(async () => {
    if (appStore.advertisement.length == 0) {
      await appStore.fetAdvertisement()
    }
  })()

  const openDownloadPage = () => {
    const ua = navigator.userAgent
    if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
      window.open(appStore.iosDownloadUrl, '_blank')
    } else {
      window.open(appStore.androidDownloadUrl, '_blank')
    }
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

<style lang="less" scoped>
  .my-home {
    .h-header {
      text-align: right;
      height: 5rem;
      line-height: 5rem;
      padding: 0 1rem;
      top: 0;
      background-color: var(--color-main-bg);
      height: calc(5rem + constant(safe-area-inset-top));
      height: calc(5rem + env(safe-area-inset-top));
      padding-top: calc(constant(safe-area-inset-top) - 1rem);
      padding-top: calc(env(safe-area-inset-top) - 1rem);
      padding-bottom: constant(safe-area-inset-top);
      padding-bottom: env(safe-area-inset-top);
      a {
        display: inline-block;
        height: 5rem;
        line-height: 5rem;
        padding: 0 1rem;
        cursor: pointer;
        i {
          font-size: 2.6rem;
          vertical-align: middle;
        }
      }
    }
  }
</style>
