<template>
  <div class="page video-page">
    <header class="m-header h-video">
      <div class="h-m">
        <a @click="router.push({ name: 'shortVideo' })" class="active">抖阴</a>
        <a @click="router.push({ name: 'shortPlay' })">短剧</a>
      </div>
      <div class="h-r">
        <i class="mvfont mv-search1" />
      </div>
    </header>

    <section class="vp-main">
      <div class="vm-a" />
      <div class="vm-b">
        <div class="v-a">
          <video id="myVideo" muted="true" autoplay="true" preload="auto" loop="true" x5-video-player-fullscreen="true" x5-playsinline="true" playsinline="true" webkit-playsinline="true">
            <source src="https://cdn.xfree.com/xfree-prod/d/a/a/daadc758-02f0-4731-93fb-9cd87dcf5655/converted.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="v-b">
          <a><img src="assets/imgs/logo-1.png" /><!--<small>免</small>--></a>
          <a><i class="mvfont mv-xihuan" /><b>999</b></a>
          <a><i class="mvfont mv-shoucang" /><b>53</b></a>
          <a><i class="mvfont mv-zhuanfa" /><b>分享</b></a>
        </div>
        <div class="v-c">
          <div class="c-g"><img src="assets/imgs/logo-2.png" />芒果TV<span>永久域名：mg91.tv</span></div>
          <h3>@芒果TV</h3>
          <p>
            <b>随时随地看视频，这个就是视频的标题，先占个位置</b>
            <span>#国产</span><span>#高清</span><span>#老师</span>
          </p>
        </div>
      </div>
    </section>
    <footer class="footer f-footer">
      <div class="p-foot">
        <router-link to="/index"> <i class="mvfont mv-shouye" />首页 </router-link>
        <router-link to="/theme/bbs"> <i class="mvfont mv-shequ" />社区 </router-link>
        <router-link to="/shortVideo" class="active"> <i class="mvfont mv-dsp" />短视频 </router-link>
        <router-link to="/game"> <i class="mvfont mv-game" />游戏 </router-link>
        <router-link to="/home"> <i class="mvfont mv-home0" />我的 </router-link>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router'

const router = useRouter()
const appStore = useAppStore()
</script>
