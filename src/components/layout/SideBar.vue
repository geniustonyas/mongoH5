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
        <a @click="routeToGame('sports', null)"> <img :src="getAssetsFile('svg/sports.svg')" />{{ t('sports') }} </a>
        <a @click="routeToGame('casino', null)"> <img :src="getAssetsFile('svg/livecasino.svg')" />{{ t('liveCasino') }}</a>
        <a @click="routeToGame('slots', null)"> <img :src="getAssetsFile('svg/slots.svg')" />{{ t('slots') }} </a>
      </nav>
      <!-- 游戏菜单列表 -->
      <nav class="sm-menulist">
        <!-- 体育 -->
        <div :class="collapseSport ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSport = !collapseSport">{{ t('sports') }}<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseSport">
            <ul>
              <li v-for="(item, index) of sportProviderList" :key="index" @click="startGame(item.id)">
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
              <li v-for="(item, index) of casinoProviderList" :key="index" @click="routeToGame(item.tab, { providerId: item.id })">
                <a><img v-lazy="item.img" />{{ item.name }}</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>

        <!-- 电子 -->
        <div :class="collapseSlots ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSlots = !collapseSlots">{{ t('slots') }}<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseSlots">
            <ul>
              <li v-for="(item, index) of slotsProviderList" :key="index" @click="routeToGame(item.tab, { providerId: item.id })">
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
              <a @click="showToast('即将开放...')" class="download">
                <img :src="getAssetsFile('svg/App.svg')" />
                <div>
                  <span>{{ t('downloadApp') }}</span>
                  <small>{{ t('androidApple') }}</small>
                </div>
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
        = {{ moneyFormat(props.exchangeRate) }}
        <b>USDT</b>
      </nav>
    </section>
    <Language ref="langDom" />
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import IndexHeader from '@/components/layout/IndexHeader.vue'
import Language from '@/components/Language.vue'

// 引用方法
import { languages } from '@/i18n/index'
import { getAssetsFile, moneyFormat } from '@/utils'
import { providerList, providerListItemTypes } from '@/utils/gameProviders'
import { useAppStore } from '@/store/modules/app'
import { startGame } from '@/composables/startGame'

//第三方插件
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { showToast } from 'vant'

const appStore = useAppStore()
const router = useRouter()
const { t, locale } = useI18n()

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
sportProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'sports')
casinoProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'casino')
slotsProviderList.value = providerList.filter((item: providerListItemTypes) => item.type === 'slots')

// 侧边框游戏菜单展开折叠
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
</script>
