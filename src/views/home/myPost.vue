<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">账变记录</div>
    </header>
    <section class="h-m-b">
      <div class="his-box">
        <ul>
          <li />
        </ul>
        <div class="nodata">
          <div class="d-i" />
          <div class="d-t">暂无记录</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
</script>

<style scoped>
.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
