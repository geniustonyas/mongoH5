<template>
  <footer class="footer">
    <div class="p-foot">
      <router-link to="/index" :class="{ active: activeMenu == 'index' }"> <i class="mvfont mv-shouye" />首页 </router-link>
      <router-link to="/theme/theme" :class="{ active: activeMenu == 'theme' }"> <i class="mvfont mv-tag" />主题 </router-link>
      <router-link to="/shortVideo" :class="{ active: activeMenu == 'shortVideo' }"> <i class="mvfont mv-dsp" />短视频 </router-link>
      <router-link to="/game" :class="{ active: activeMenu == 'game' }"> <i class="mvfont mv-game" />游戏 </router-link>
      <router-link to="/home" :class="{ active: activeMenu == 'home' }"> <i class="mvfont mv-home0" />我的 </router-link>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface FooterProps {
  activeMenu: string
}

const props = defineProps<FooterProps>()
</script>
