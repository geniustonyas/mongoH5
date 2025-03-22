<template>
  <div class="page">
    <header class="d-header u-header">
      <a style="display: none" class="a-qd"><img :src="getAssetsFile('icon/calendar.svg')" />未签到</a>
      <a @click="router.push({ name: 'account' })"><img :src="getAssetsFile('icon/setting.svg')" /></a>
    </header>
    <section class="h-p-b">
      <div class="h-a">
        <div class="a-a">
          <div class="a-l">
            <img v-if="userStore.userInfo.avatar" v-lazy-decrypt="userStore.userInfo.avatar" />
            <img v-else :src="getAssetsFile('u_video.png')" />
          </div>
          <div class="a-n" v-if="userStore.userInfo.phoneNumber">{{ userStore.userInfo.phoneNumber }}</div>
          <div class="a-n" v-else @click="userStore.showLoginDialog = true">登录 / 注册</div>
        </div>
        <div class="a-b">
          <div class="b-l">
            <h3>新用户专享</h3>
            <p>邀请好友，即享 <span>VIP</span> 畅想精彩内容</p>
          </div>
          <div class="b-r"><a @click="router.push({ name: 'share' })">立即邀请</a></div>
        </div>
      </div>
      <div class="h-b">
        <div class="hb-t">我的权益</div>
        <div class="hb-c" ref="scrollContainer">
          <span><b>999</b><small>长视频</small></span>
          <span><b>999</b><small>短视频</small></span>
          <span><b>999</b><small>短剧</small></span>
          <span><b>999</b><small>小说</small></span>
          <span><b>999</b><small>漫画</small></span>
          <span><b>999</b><small>帖子</small></span>
          <span><b>999</b><small>茶贴</small></span>
        </div>
        <div class="hb-b">
          <span ref="indicator" />
        </div>
      </div>
      <div class="h-c">
        <a @click="router.push({ name: 'message' })"><i class="mvfont mv-xiaoxi1" />我的消息</a>
        <a @click="router.push({ name: 'history' })"><i class="mvfont mv-zuji" />我的足迹</a>
        <a @click="router.push({ name: 'collect' })"><i class="mvfont mv-like_fill" />我的收藏</a>
        <a @click="router.push({ name: 'share' })"><i class="mvfont mv-zhuanfa" />分享好友</a>
      </div>
      <div class="ad-box" v-if="bannerAdvertisement && bannerAdvertisement.length > 0">
        <img
          @click="openAd(bannerAdvertisement[0].targetUrl, '会员中心横幅', 'click', bannerAdvertisement[0].id)"
          :key="bannerAdvertisement[0].id"
          v-lazy-decrypt="bannerAdvertisement[0].imgUrl"
          :alt="bannerAdvertisement[0].title"
        />
      </div>
      <div class="h-d">
        <ul class="au-rows">
          <li>
            <a @click="router.push({ name: 'buyRecord' })">
              <span><img :src="getAssetsFile('icon/member.svg')" />VIP购买记录</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'shareRecord' })">
              <span><img :src="getAssetsFile('icon/Share_Records.svg')" />分享记录</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'accountChange' })">
              <span><img :src="getAssetsFile('icon/Account_change_records.svg')" />账变记录</span><i class="mvfont mv-right3" />
            </a>
          </li>
        </ul>
        <ul class="au-rows">
          <li>
            <a @click="router.push({ name: 'myPost' })">
              <span><img :src="getAssetsFile('icon/Posts.svg')" />我的社区帖</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'myTeaPost' })">
              <span><img :src="getAssetsFile('icon/Tea_Post.svg')" />我的茶贴</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'unlockRecords' })">
              <span><img :src="getAssetsFile('icon/Unlock.svg')" />品茶解锁记录</span><i class="mvfont mv-right3" />
            </a>
          </li>
        </ul>
        <ul class="au-rows">
          <li>
            <a @click="router.push({ name: 'message', query: { tab: 'notice' } })">
              <span><img :src="getAssetsFile('icon/Announcement.svg')" />系统公告</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="openCustomerService">
              <span><img :src="getAssetsFile('icon/service.svg')" />联系客服</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="showSuggestionPopup = true">
              <span><img :src="getAssetsFile('icon/Opinion.svg')" />意见反馈</span><i class="mvfont mv-right3" />
            </a>
          </li>
        </ul>
        <ul v-if="userStore.userInfo.id" class="au-rows">
          <li>
            <a @click="userStore.clearLogin" class="logout">退出登录</a>
          </li>
        </ul>
      </div>
    </section>
    <Suggestion v-model:show-btn="showSuggestion" v-model:show-popup="showSuggestionPopup" />
    <Footer active-menu="home" />
    <NavBar active-menu="home" />
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStoreHook } from '@/store/user'
  import { useAppStoreHook } from '@/store/app'
  import { openAd, getAssetsFile } from '@/utils'

  import Suggestion from '@/components/Suggestion.vue'
  import Footer from '@/components/layout/Footer.vue'
  import NavBar from '@/components/layout/NavBar.vue'

  const showSuggestion = ref(false)
  const showSuggestionPopup = ref(false)
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

  // const openDownloadPage = () => {
  //   const ua = navigator.userAgent
  //   if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
  //     window.open(appStore.iosDownloadUrl, '_blank')
  //   } else {
  //     window.open(appStore.androidDownloadUrl, '_blank')
  //   }
  // }

  const openCustomerService = () => {
    const customerServiceLink = appStore.customer_service_link
    if (customerServiceLink) {
      window.open(customerServiceLink, '_blank')
    } else {
      console.warn('客服链接未设置')
    }
  }

  const scrollContainer = ref(null)
  const indicator = ref(null)

  onMounted(() => {
    const updateIndicator = () => {
      const scrollWidth = scrollContainer.value.scrollWidth
      const clientWidth = scrollContainer.value.clientWidth
      const scrollLeft = scrollContainer.value.scrollLeft
      const maxScrollLeft = scrollWidth - clientWidth
      const scrollRatio = scrollLeft / maxScrollLeft

      // 计算伪类的 left 值
      const indicatorWidth = 0.6 * indicator.value.offsetWidth
      const leftPosition = scrollRatio * (indicator.value.offsetWidth - indicatorWidth)
      indicator.value.style.setProperty('--indicator-left', `${leftPosition}px`)
    }

    scrollContainer.value.addEventListener('scroll', updateIndicator)
    updateIndicator() // 初始化位置
  })
</script>
