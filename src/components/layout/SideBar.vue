<template>
  <aside class="sidebar-menu">
    <!-- header开始 -->
    <IndexHeader />

    <!-- 主体 -->
    <section class="sm-main">
      <!-- logo跳转首页 -->
      <nav class="m-logo">
        <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.svg')" /></a>
      </nav>
      <!-- 首页tab切换 -->
      <nav class="m-menu">
        <a @click="routeToGame('original', null)"> <img :src="getAssetsFile('svg/originals.svg')" />{{ t('seabetGame') }} </a>
        <a @click="routeToGame('sports', null)"> <img :src="getAssetsFile('svg/sports.svg')" />{{ t('sports') }} </a>
        <a @click="routeToGame('slots', null)"> <img :src="getAssetsFile('svg/lobby.svg')" />{{ t('casino') }} </a>
      </nav>
      <!-- 游戏菜单列表 -->
      <nav class="sm-menulist">
        <div v-if="userStore.userInfo.id" class="menu-item fav">
          <ul>
            <li>
              <a @click="routeToGame('favorites', null)">
                <span><i class="iconfont icon-shoucang" />{{ t('favariateGame') }}</span>
                <!--<label>{{ userStore.favoritesCount }}</label>-->
              </a>
            </li>
            <li>
              <a @click="routeToGame('recently', null)">
                <span><i class="iconfont icon-zuijin" />{{ t('recentlyGame') }}</span>
                <!--<label>{{ userStore.recentlyPlayCount }}</label>-->
              </a>
            </li>
          </ul>
        </div>

        <!-- 原创 -->
        <div :class="collapseOriginals ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseOriginals = !collapseOriginals">
            <span>{{ t('seabetGame') }}</span>
            <i class="iconfont icon-down" />
          </h2>
          <Vue3SlideUpDown v-model="collapseOriginals">
            <ul>
              <!-- <li @click="startGame(item.id, GameType.Sports)"> -->
              <li>
                <a @click="routeToGame('original', { providerId: '19' })"><img v-lazy="getAssetsFile('svg/spribe.svg')" />{{ t('provider.spribe') }}</a>
              </li>
              <li>
                <a @click="routeToGame('original', { providerId: '18' })"><img v-lazy="getAssetsFile('svg/jili.svg')" />{{ t('provider.jili') }}</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>

        <!-- 体育 -->
        <div :class="collapseSport ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSport = !collapseSport">
            <span>{{ t('sports') }}</span>
            <i class="iconfont icon-down" />
          </h2>
          <Vue3SlideUpDown v-model="collapseSport">
            <ul>
              <li v-for="(item, index) of sportProviderList" :key="index" @click="startGame(item.id, GameType.Sports)">
                <a><img v-lazy="item.img" />{{ item.name }}</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>

        <!-- 真人 -->
        <div :class="collapseLiveCashno ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseLiveCashno = !collapseLiveCashno">
            <span>{{ t('liveCasino') }}</span>
            <i class="iconfont icon-down" />
          </h2>
          <Vue3SlideUpDown v-model="collapseLiveCashno">
            <ul>
              <li v-for="(item, index) of casinoProviderList" :key="index" @click="routeToGame(item.tab, { providerId: item.id })">
                <a><img v-lazy="item.img" />{{ item.name }}</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>

        <!-- 电子 -->
        <div :class="collapseSlots ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSlots = !collapseSlots">
            <span>{{ t('slots') }}</span>
            <i class="iconfont icon-down" />
          </h2>
          <Vue3SlideUpDown v-model="collapseSlots">
            <ul>
              <template v-for="(item, index) of slotsProviderList" :key="index">
                <li v-if="item.id != '19'" @click="routeToGame(item.tab, { providerId: item.id })">
                  <a><img v-lazy="item.img" />{{ item.name }}</a>
                </li>
              </template>
            </ul>
          </Vue3SlideUpDown>
        </div>
        <!-- 俱乐部 -->
        <div class="menu-item show">
          <ul>
            <li>
              <a @click="router.push({ name: 'clubHouse' })"><img :src="getAssetsFile('svg/ClubHouse.svg')" />{{ t('club') }}</a>
            </li>
            <li class="collect-box" v-if="userStore.userInfo.id" @click="router.push({ name: 'clubHouse' })">
              <div class="cb-grade">
                <p><img :src="getAssetsFile(`grade/${userStore.userInfo.vipCode}.png`)" />{{ t('homePage.nextReward') }}</p>
                <div class="schedule-bar">
                  <div class="sb-line" :style="{ width: userStore.userInfo.subCode == '10706' ? '100%' : rewardProgressWidth + '%' }" />
                </div>
                <span>
                  <b>{{ userStore.userInfo.totalBetAmount }}</b
                  ><em>|</em>{{ userStore.userInfo.subCode == '10706' ? 80000000 : parseInt(userStore.userInfo.nextVipRequiredTotalBetAmount) }}
                </span>
                <em class="em-bg" :style="{ backgroundImage: 'url(' + getAssetsFile(`grade/${userStore.userInfo.vipCode}.png`) + ')' }" />
              </div>
            </li>
            <li>
              <a @click="router.push({ name: 'newVip' })"><img :src="getAssetsFile('svg/VIP.svg')" />{{ t('vipClub') }}</a>
            </li>
          </ul>
        </div>
        <!-- 下载 -->
        <div class="menu-item">
          <ul>
            <li>
              <a @click="router.push({ name: 'download' })" class="download">
                <img :src="getAssetsFile('svg/App.svg')" />
                <div class="down-app-box">
                  <span>{{ t('downloadApp') }}</span>
                  <small>{{ t('androidApple') }}</small>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <!-- 在线客服 -->
        <div class="menu-item">
          <ul>
            <li>
              <a href="https://t.me/+TPO92WpfohFlNzA1" target="_blank"><img :src="getAssetsFile('svg/telegram-left.svg')" /> Telegram </a>
            </li>
            <li>
              <a @click="liveChatCall('maximize')"><i class="iconfont icon-xiaoxi" />{{ t('liveSupport') }}</a>
            </li>
            <li>
              <a @click="routeToGame('promo', null)"><i class="iconfont icon-rewards" />{{ t('promotions') }}</a>
            </li>
            <li>
              <a @click="router.push({ name: 'affiliate' })"><i class="iconfont icon-hezuo" />{{ t('affiliate') }}</a>
            </li>
            <li>
              <a :href="appStore.subscribeUrl" target="_blank"><i class="iconfont icon-email" />{{ t('subscribeEmail') }}</a>
            </li>
          </ul>
        </div>
      </nav>

      <nav class="m-rate">
        <div class="form-control m-lang" @click.prevent="showLanguage()">
          <span>{{ languages.find((item) => item.value == locale)?.text }}</span>
          <i class="iconfont icon-right" />
        </div>
      </nav>

      <!-- 汇率 -->
      <nav class="m-rate">
        1
        <b>{{ props.currencyCode }}</b>
        = {{ props.exchangeRate }}
        <b>USDT</b>
      </nav>
    </section>
    <Language ref="langDom" />
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import IndexHeader from '@/components/layout/IndexHeader.vue'
import Language from '@/components/Language.vue'

// 引用方法
import { languages } from '@/i18n/index'
import { getAssetsFile } from '@/utils'
import { providerListData, providerListItemTypes } from '@/utils/config'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { startGame, liveChatCall } from '@/composables/startGame'
//第三方插件
import BigNumber from 'bignumber.js'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
// import { showToast } from 'vant'
import { GameType } from '@/utils/constant'

const userStore = useUserStore()
const appStore = useAppStore()
const router = useRouter()
const { t, locale } = useI18n()
const providerList = providerListData()

const props = defineProps({
  currencyCode: { type: String, required: true, default: '' },
  exchangeRate: { type: String, required: true, default: '' }
})

// 语言选择组件dom
let langDom = ref()

// 侧边框游戏提供商列表
const sportProviderList = ref<providerListItemTypes[]>([])
const casinoProviderList = ref<providerListItemTypes[]>([])
const slotsProviderList = ref<providerListItemTypes[]>([])
// 过滤游戏提供商列表
sportProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'sports' && item.show)
casinoProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'casino' && item.show)
slotsProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'slots' && item.show)

// 侧边框游戏菜单展开折叠
let collapseOriginals = ref(true)
let collapseSport = ref(true)
let collapseLiveCashno = ref(true)
let collapseSlots = ref(true)

// 跳转到游戏
const routeToGame = (routeName: string, query: any) => {
  router.push({ name: routeName, query: query })
  appStore.showSideBar = !appStore.showSideBar
}

// 显示语言选择框
const showLanguage = () => {
  if (langDom.value) {
    langDom.value.showLangPick = true
  }
}

// 下一奖励进度
const rewardProgressWidth = computed(() => {
  let width = '0'
  if (userStore.userInfo.nextVipRequiredTotalBetAmount != '' && userStore.userInfo.totalBetAmount != '') {
    width = new BigNumber(userStore.userInfo.totalBetAmount).dividedBy(parseInt(userStore.userInfo.nextVipRequiredTotalBetAmount)).multipliedBy(100).toFixed(2)
  }
  return width
})
</script>
