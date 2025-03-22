<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m"><span>我的社区帖</span></div>
      <div class="d-r" />
    </header>
    <section class="h-m-b">
      <div class="his-box">
        <ul>
          <li />
        </ul>
        <div class="nodata">
          <img :src="getAssetsFile('empty/bbs.svg')" />
          <div class="d-t">暂无帖子</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { useAppStore } from '@/store/app'
  import { getAssetsFile } from '@/utils'

  const appStore = useAppStore()
</script>

<style scoped>
  .disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
