<template>
  <aside class="sidebar-menu">
    <!-- header开始 -->
    <header class="header">
      <nav class="head-menu">
        <!-- 侧边栏开关 -->
        <div class="hm-l">
          <a @click="appStore.showSideBar = !appStore.showSideBar" class="icon-btn navbar-left">
            <i class="iconfont icon-close" />
          </a>
        </div>
        <div class="hm-m" />
        <!-- 用户名 Or 登录注册 -->
        <div class="hm-r">
          <a v-if="userStore.userInfo.id">{{ userStore.userInfo.userName }}</a>
          <template v-else>
            <a class="btn" @click="router.push({ name: 'reg' })">{{ t('reg') }}</a>
            <a class="btn btn-primary" @click="router.push({ name: 'login' })">{{ t('login') }}</a>
          </template>
        </div>
      </nav>
    </header>

    <!-- 主体 -->
    <section class="sm-main">
      <!-- logo跳转首页 -->
      <nav class="m-logo">
        <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.svg')" /></a>
      </nav>
      <!-- 首页tab切换 -->
      <nav class="m-menu">
        <a @click="changeTab('sports')"> <img :src="getAssetsFile('svg/sports.svg')" />{{ t('sports') }} </a>
        <a @click="changeTab('livecasino')"> <img :src="getAssetsFile('svg/livecasino.svg')" />{{ t('liveCasino') }}</a>
        <a @click="changeTab('slots')"> <img :src="getAssetsFile('svg/slots.svg')" />{{ t('slots') }} </a>
      </nav>
      <!-- 游戏菜单列表 -->
      <nav class="sm-menulist">
        <!-- 体育 -->
        <div :class="collapseSport ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSport = !collapseSport">{{ t('sports') }}<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseSport">
            <ul>
              <li v-for="(item, index) of sportProviderList" :key="index" @click="startGame(item)">
                <a><img v-lazy="item.img" />{{ item.name }}</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>

        <!-- 真人 -->
        <div :class="collapseLiveCashno ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseLiveCashno = !collapseLiveCashno">{{ t('liveCasino') }}<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseLiveCashno">
            <ul>
              <li v-for="(item, index) of casinoProviderList" :key="index" @click="selGameProvider(item)">
                <a><img v-lazy="item.img" />{{ item.name }}</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>

        <!-- 电子 -->
        <div :class="collapseSlots ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSlots = !collapseSlots">Slots<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseSlots">
            <ul>
              <li v-for="(item, index) of slotsProviderList" :key="index" @click="selGameProvider(item)">
                <a><img v-lazy="item.img" />{{ item.name }}</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>

        <!-- 俱乐部 -->
        <div class="menu-item show">
          <ul>
            <li>
              <a @click="router.push({ name: 'clubHouse' })"><img :src="getAssetsFile('svg/ClubHouse.svg')" />{{ t('club') }}</a>
            </li>
            <li>
              <a @click="router.push({ name: 'terms', params: { type: 'vip' } })"><img :src="getAssetsFile('svg/VIP.svg')" />{{ t('vipClub') }}</a>
            </li>
          </ul>
        </div>
        <!-- 下载 -->
        <div class="menu-item show">
          <ul>
            <li>
              <a @click="showToast('即将开放...')">
                <img :src="getAssetsFile('svg/App.svg')" />
                {{ t('downloadApp') }}
                <small>{{ t('androidApple') }}</small>
              </a>
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
        = {{ moneyFormat(props.cxchangeRate) }}
        <b>USDT</b>
      </nav>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

// 引用方法
import { languages } from '@/i18n/index'
import { getAssetsFile, moneyFormat } from '@/utils'
import { PlatForm } from '@/utils/constant'
import { providerList, providerListItemTypes } from '@/utils/gameProviders'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { getGameUrlApi } from '@/api/game/index'
//第三方插件
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { showConfirmDialog, showToast } from 'vant'

const props = defineProps({
  currencyCode: { type: String, required: true, default: '' },
  cxchangeRate: { type: String, required: true, default: '' }
})
const emit = defineEmits(['toggleTab', 'selGameProvider', 'showLanguage'])

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
const { t, locale } = useI18n()

// 侧边框游戏提供商列表
const sportProviderList = ref<providerListItemTypes[]>([])
const casinoProviderList = ref<providerListItemTypes[]>([])
const slotsProviderList = ref<providerListItemTypes[]>([])
// 过滤游戏提供商列表
sportProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'sports')
casinoProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'casino')
slotsProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'slots')

// 侧边框游戏菜单展开折叠
let collapseSport = ref(true)
let collapseLiveCashno = ref(true)
let collapseSlots = ref(true)

// 切换首页游戏tab
const changeTab = (tab: string) => {
  emit('toggleTab', tab)
  appStore.showSideBar = !appStore.showSideBar
}

// 选择游戏提供商
const selGameProvider = (item: providerListItemTypes) => {
  emit('toggleTab', item.tab)
  emit('selGameProvider', item.id)
  appStore.showSideBar = !appStore.showSideBar
}

// 启动游戏列表
const startGame = (item: providerListItemTypes) => {
  if (!userStore.userInfo.id) {
    showConfirmDialog({
      title: t('tips.noLogin'),
      message: t('tips.goLogin')
    })
      .then(() => {
        router.push({ name: 'login' })
      })
      .catch(() => {
        return false
      })
  } else {
    getGameUrlApi({ id: item.id, platform: PlatForm.H5 })
      .then((resp) => {
        window.location.href = resp.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const showLanguage = () => {
  emit('showLanguage')
}
</script>
