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
          <a class="btn" @click="router.push({ name: 'reg' })">Register</a>
          <a class="btn btn-primary" @click="router.push({ name: 'login' })">Sign In</a>
        </div>
      </nav>
    </header>
    <section class="sm-main">
      <nav class="m-logo">
        <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.png')" /></a>
      </nav>
      <nav class="m-menu">
        <a> <img :src="getAssetsFile('svg/sports.svg')" />Sports </a>
        <a> <img :src="getAssetsFile('svg/livecasino.svg')" />Live Casino </a>
        <a> <img :src="getAssetsFile('svg/slots.svg')" />Slots </a>
      </nav>
      <nav class="sm-menulist">
        <div :class="collapseSport ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseSport = !collapseSport">Sports<i class="iconfont icon-down" /></h2>
          <Vue3SlideUpDown v-model="collapseSport">
            <ul>
              <li>
                <a><img :src="getAssetsFile('svg/SabaSports.svg')" />Saba Sports</a>
              </li>
              <li>
                <a><img :src="getAssetsFile('svg/FBSports.svg')" />FB Sports</a>
              </li>
            </ul>
          </Vue3SlideUpDown>
        </div>
        <div :class="collapseLiveCashno ? 'menu-item show' : 'menu-item'">
          <h2 @click="collapseLiveCashno = !collapseLiveCashno">Live Casino<i class="iconfont icon-down" /></h2>
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
              <a><img :src="getAssetsFile('svg/ClubHouse.svg')" />Club House</a>
            </li>
            <li>
              <a><img :src="getAssetsFile('svg/VIP.svg')" />VIP Clubhouse</a>
            </li>
          </ul>
        </div>
        <div class="menu-item show">
          <ul>
            <li>
              <a><img :src="getAssetsFile('svg/App.svg')" />Download the App<small>For IOS and Android</small></a>
            </li>
          </ul>
        </div>
      </nav>
      <nav class="m-rate">English</nav>
      <nav class="m-rate">1<b>BTC</b>=25,006,02<b>EUR</b></nav>
    </section>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// 引用方法
import { getAssetsFile } from '@/utils'
import { useAppStore } from '@/store/modules/app'
//第三方插件
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
const appStore = useAppStore()
const router = useRouter()
// 侧边框内容展开折叠
let collapseSport = ref(true)
let collapseLiveCashno = ref(true)
let collapseSlots = ref(true)
</script>
