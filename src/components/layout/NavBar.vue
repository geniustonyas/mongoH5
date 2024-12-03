<template>
  <nav class="navbar">
    <div class="nb-bd">
      <div class="bd-a">
        <div class="nb-a">
          <img @click="router.push({ name: 'index' })" :src="getAssetsFile('logo.png')" />
        </div>
        <div class="nb-b">
          <div class="row">
            <router-link to="/index" :class="{ active: activeMenu == 'index' }"><i class="mvfont mv-shouye" /><span>首页</span></router-link>
            <router-link to="/elites" :class="{ active: activeMenu == 'elites' }"><i class="mvfont mv-jingxuan" /><span>精选</span></router-link>
            <router-link to="/shortVideo" :class="{ active: activeMenu == 'shortVideo' }"><i class="mvfont mv-dsp" /><span>短视频</span></router-link>
            <router-link to="/bbs" :class="{ active: activeMenu == 'bbs' }"><i class="mvfont mv-shequ" /><span>社区</span></router-link>
            <router-link to="/home" :class="{ active: activeMenu == 'home' }"><i class="mvfont mv-home0" /><span>我的</span></router-link>
          </div>
          <div class="row">
            <i class="mvfont mv-zhutirebangbeifen" />
          </div>
          <div class="row">
            <router-link :to="{ name: 'theme' }"><i class="mvfont mv-tag" /><span>主题</span></router-link>
            <router-link :to="{ name: 'hotVideo' }"><i class="mvfont mv-hot" /><span>热门</span></router-link>
            <router-link :to="{ name: 'actor' }"><i class="mvfont mv-cvFilter" /><span>女优</span></router-link>
          </div>
        </div>
      </div>
      <div class="bd-b">
        <div class="row">
          <a>
            永久域名:<b>{{ appStore.spareData.OfficialDomain }}</b>
          </a>
          <a @click="downloadApp(false)"><i class="mvfont mv-android" />Android版下载</a>
          <a @click="downloadApp(true)"><i class="mvfont mv-ios" />IOS苹果版下载</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { getAssetsFile } from '@/utils'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const router = useRouter()

interface NavBarProps {
  activeMenu: string
  footerClass?: string
}

defineProps<NavBarProps>()

const downloadApp = (isIos: boolean) => {
  if (isIos) {
    window.open(appStore.iosDownloadUrl, '_blank')
  } else {
    window.open(appStore.androidDownloadUrl, '_blank')
  }
}
</script>
