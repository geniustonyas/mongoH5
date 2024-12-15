<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route.meta.transition)">
      <keep-alive :include="['index', 'bbs', 'videoList']">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
  <Login />
  <Suggestion />
</template>

<script setup lang="ts">
import Login from '@/components/Login.vue'
import Suggestion from '@/components/Suggestion.vue'
import { useAppStore } from '@/store/app'
const appStore = useAppStore()
const getTransition = (transition: unknown): string | undefined => {
  if (typeof transition === 'string') {
    return transition
  }
  return undefined
}
window.addEventListener('touchmove', () => {
  appStore.isUserBackNavigation = true
  setTimeout(() => {
    appStore.isUserBackNavigation = false
  }, 400)
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
  transition: transform 400ms ease-in-out;
  height: 100%;
  width: 100%;
  top: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
  /* display: none; */
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
