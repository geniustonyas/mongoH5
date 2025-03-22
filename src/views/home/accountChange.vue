<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m"><span>账变记录</span></div>
      <div class="d-r" />
    </header>
    <section class="h-m-b">
      <div class="his-box">
        <ul>
          <li />
        </ul>
        <div class="nodata">
          <div class="d-i">
            <img :src="getAssetsFile('empty/bill.svg')" />
          </div>
          <div class="d-t">暂无账变记录</div>
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
