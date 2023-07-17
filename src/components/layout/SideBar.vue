<template>
  <aside class="sidebar-menu">
    <header class="header">
      <nav class="head-menu">
        <div class="hm-l">
          <a @click="appStore.showSideBar = !appStore.showSideBar" class="icon-btn navbar-left">
            <i class="iconfont icon-close" />
          </a>
        </div>
        <div class="hm-m" />
        <div class="hm-r">
          <a class="btn" @click="router.push({ name: 'reg' })">{{ t('reg') }}</a>
          <a class="btn btn-primary" @click="router.push({ name: 'login' })">{{ t('login') }}</a>
        </div>
      </nav>
    </header>
    <section class="sm-main">
      <nav class="m-logo">
        <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.svg')" /></a>
      </nav>
      <nav class="m-menu">
        <a> <img :src="getAssetsFile('svg/sports.svg')" />{{ t('sports') }} </a>
        <a> <img :src="getAssetsFile('svg/livecasino.svg')" />{{ t('liveCasino') }}</a>
        <a> <img :src="getAssetsFile('svg/slots.svg')" />{{ t('slots') }} </a>
      </nav>
      <nav class="sm-menulist">
        <div :class="collapseSport ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSport = !collapseSport">{{ t('sports') }}<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseSport">
            <ul>
              <li>
                <a><img :src="getAssetsFile('svg/SabaSports.svg')" />{{ t('sbSport') }}</a>
              </li>
              <li>
                <a><img :src="getAssetsFile('svg/FBSports.svg')" />{{ t('fbSport') }}</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>
        <div :class="collapseLiveCashno ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseLiveCashno = !collapseLiveCashno">{{ t('liveCasino') }}<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseLiveCashno">
            <ul>
              <li>
                <a><img :src="getAssetsFile('svg/Evolution.svg')" />Evolution</a>
              </li>
              <li>
                <a><img :src="getAssetsFile('svg/BombayLive.svg')" />Bombay Live</a>
              </li>
              <li>
                <a><img :src="getAssetsFile('svg/Ezugi.svg')" />Ezugi</a>
              </li>
              <li>
                <a><img :src="getAssetsFile('svg/AsiaGaming.svg')" />Asia Gaming</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>
        <div :class="collapseSlots ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSlots = !collapseSlots">Slots<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseSlots">
            <ul>
              <li>
                <a><img :src="getAssetsFile('svg/PragmaticPlay.svg')" />Pragmatic Pay</a>
              </li>
              <li>
                <a><img :src="getAssetsFile('svg/Playingo.svg')" />Play'n Go</a>
              </li>
              <li>
                <a><img :src="getAssetsFile('svg/NetEnt.svg')" />NetEnt</a>
              </li>
              <li>
                <a><img :src="getAssetsFile('svg/PlayTech.svg')" />PlayTech</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>
        <div class="menu-item show">
          <ul>
            <li>
              <a><img :src="getAssetsFile('svg/ClubHouse.svg')" />{{ t('club') }}</a>
            </li>
            <li>
              <a><img :src="getAssetsFile('svg/VIP.svg')" />VIP Clubhouse</a>
            </li>
          </ul>
        </div>
        <div class="menu-item show">
          <ul>
            <li>
              <a>
                <img :src="getAssetsFile('svg/App.svg')" />
                {{ t('downloadApp') }}
                <small>{{ t('androidApple') }}</small>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="m-rate">
        <select v-model="locale" class="form-control" @change="selLang(locale)">
          <option value="zh">中文</option>
          <option value="en">English</option>
        </select>
      </nav>
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
import { selLang } from '@/i18n/index'
import { getAssetsFile, moneyFormat } from '@/utils'
import { useAppStore } from '@/store/modules/app'
//第三方插件
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

const props = defineProps({
  currencyCode: { type: String, required: true, default: '' },
  cxchangeRate: { type: String, required: true, default: '' }
})

const appStore = useAppStore()
const router = useRouter()
const { t, locale } = useI18n()
// 侧边框内容展开折叠
let collapseSport = ref(true)
let collapseLiveCashno = ref(true)
let collapseSlots = ref(true)
</script>
