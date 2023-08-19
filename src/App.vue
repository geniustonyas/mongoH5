<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition as string">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
    <Overlay class-name="loading" style="background-color: transparent" :show="appStore.loading" :z-index="9999">
      <Loading />
    </Overlay>
  </div>
</template>

<script setup lang="ts">
import { Overlay, Loading } from 'vant'
import { useAppStore } from '@/store/modules/app'
import { useI18n } from 'vue-i18n'
const appStore = useAppStore()

const { t } = useI18n()

document.title = t('siteTitle')
</script>

<style>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  will-change: transform;
  transition: transform 400ms;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}

.slide-right-enter-from,
.slide-left-leave-to {
  transform: translateX(100%);
}

.slide-right-leave-to,
.slide-left-enter-from {
  transform: translateX(-100%);
}
</style>
