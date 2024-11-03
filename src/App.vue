<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route.meta.transition)">
      <keep-alive :include="['index']">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
  <Login />
  <DownloadPop />
</template>

<script setup lang="ts">
import Login from '@/components/Login.vue'
import DownloadPop from '@/components/DownloadPop.vue'
import { useAppStoreHook } from '@/store/app'

const appStore = useAppStoreHook()
const getTransition = (transition: unknown): string | undefined => {
  if (typeof transition === 'string') {
    return transition
  }
  return undefined
}

window.addEventListener('popstate', () => {
  appStore.isUserBackNavigation = true
})
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
