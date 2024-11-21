<template>
  <footer :class="footerClass">
    <div class="p-foot">
      <router-link to="/index" :class="{ active: activeMenu == 'index' }"> <i class="mvfont mv-shouye" />首页 </router-link>
      <router-link to="/bbs" :class="{ active: activeMenu == 'bbs' }"> <i class="mvfont mv-shequ" />社区 </router-link>
      <router-link to="/shortVideo" :class="{ active: activeMenu == 'shortVideo' }"> <i class="mvfont mv-dsp" />短视频 </router-link>
      <router-link to="/game" :class="{ active: activeMenu == 'game' }"> <i class="mvfont mv-game" />游戏 </router-link>
      <router-link to="/home" :class="{ active: activeMenu == 'home' }"> <i class="mvfont mv-home0" />我的 </router-link>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface FooterProps {
  activeMenu: string
  footerClass?: string
}

withDefaults(defineProps<FooterProps>(), {
  footerClass: 'footer'
})
</script>
