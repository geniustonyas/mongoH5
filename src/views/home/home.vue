<template>
  <div class="page">
    <header class="d-header u-header">
      <a style="display: none" class="a-qd"><img src="assets/imgs/icon/calendar.svg" />未签到</a>
      <a @click="router.push({ name: 'account' })"><img src="assets/imgs/icon/setting.svg" /></a>
    </header>
    <section class="h-p-b">
      <div class="h-a">
        <div class="a-a">
          <div class="a-l"><img src="assets/imgs/u_video.png" /></div>
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
        <div class="hb-c">
          <span><b>999</b><small>长视频</small></span>
          <span><b>999</b><small>短视频</small></span>
          <span><b>999</b><small>短剧</small></span>
          <span><b>999</b><small>小说</small></span>
          <span><b>999</b><small>漫画</small></span>
          <span><b>999</b><small>帖子</small></span>
          <span><b>999</b><small>茶贴</small></span>
        </div>
        <div class="hb-b"><span /></div>
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
            <a @click="openDownloadPage">
              <span><img src="assets/imgs/icon/member.svg" />VIP购买记录</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'shareRecord' })">
              <span><img src="assets/imgs/icon/Share_Records.svg" />分享记录</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'accountChange' })">
              <span><img src="assets/imgs/icon/Account_change_records.svg" />账变记录</span><i class="mvfont mv-right3" />
            </a>
          </li>
        </ul>
        <ul class="au-rows">
          <li>
            <a @click="router.push({ name: 'posts' })">
              <span><img src="assets/imgs/icon/Posts.svg" />我的社区帖</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'teaPosts' })">
              <span><img src="assets/imgs/icon/Tea_Post.svg" />我的茶贴</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'unlockRecords' })">
              <span><img src="assets/imgs/icon/Unlock.svg" />品茶解锁记录</span><i class="mvfont mv-right3" />
            </a>
          </li>
        </ul>
        <ul class="au-rows">
          <li>
            <a @click="router.push({ name: 'announcement' })">
              <span><img src="assets/imgs/icon/Announcement.svg" />系统公告</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="openCustomerService">
              <span><img src="assets/imgs/icon/service.svg" />联系客服</span><i class="mvfont mv-right3" />
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'feedback' })">
              <span><img src="assets/imgs/icon/Opinion.svg" />意见反馈</span><i class="mvfont mv-right3" />
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
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useUserStoreHook } from '@/store/user'
  import { useAppStoreHook } from '@/store/app'
  import { openAd } from '@/utils'

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
