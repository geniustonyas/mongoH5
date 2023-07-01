<template>
  <header class="header">
    <nav class="head-menu-lf">
      <span @click="router.back()"><i class="iconfont icon-return" /></span>
      <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.svg')" /></a>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { getAssetsFile } from '@/utils'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
