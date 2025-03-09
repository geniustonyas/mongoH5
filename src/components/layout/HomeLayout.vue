<template>
  <div :class="['page', { 'video-page': appStore.homeActiveMenu === HOME_ACTIVE_MENU.shortVideo || appStore.homeActiveMenu === HOME_ACTIVE_MENU.shortDrama }]">
    <header :class="['d-header', { 'h-video': appStore.homeActiveMenu === HOME_ACTIVE_MENU.shortVideo || appStore.homeActiveMenu === HOME_ACTIVE_MENU.shortDrama }]">
      <div class="d-l" @click="router.push({ name: 'collect' })">
        <i class="mvfont mv-shoucangjia"></i>
      </div>
      <div class="d-m">
        <a :class="{ active: appStore.homeActiveMenu === HOME_ACTIVE_MENU.discover }"
           @click="appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.discover); router.push({ name: 'shortList' })">发现</a>
        <a :class="{ active: appStore.homeActiveMenu === HOME_ACTIVE_MENU.shortVideo }"
           @click="appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.shortVideo); router.push({ name: 'elites' })">抖阴</a>
        <a :class="{ active: appStore.homeActiveMenu === HOME_ACTIVE_MENU.pictures }"
           @click="appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.pictures); router.push({ name: 'disclose' })">美图</a>
        <a :class="{ active: appStore.homeActiveMenu === HOME_ACTIVE_MENU.shortDrama }"
           @click="appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.shortDrama); router.push({ name: 'shortDrama' })">短剧</a>
        <a :class="{ active: appStore.homeActiveMenu === HOME_ACTIVE_MENU.novel }"
           @click="appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.novel); router.push({ name: 'novel' })">小说</a>
        <a :class="{ active: appStore.homeActiveMenu === HOME_ACTIVE_MENU.commic }"
           @click="appStore.setHomeActiveMenu(HOME_ACTIVE_MENU.comics); router.push({ name: 'commic' })">漫画</a>
      </div>
      <div class="d-r" @click="router.push({ name: 'search' })">
        <i class="mvfont mv-search1"></i>
      </div>
    </header>
    <slot></slot>
    <Footer active-menu="elites" footer-class="footer" />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/layout/Footer.vue'
import { useRouter } from 'vue-router'
import { HOME_ACTIVE_MENU } from '@/utils/constant'
import { useAppStoreHook } from '@/store/app'

const router = useRouter()
const appStore = useAppStoreHook()
</script>

<style scoped></style>
