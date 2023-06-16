<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <!-- <transition :name="(route.meta.transition as string)"> -->
      <component :is="Component" :key="route.path" />
      <!-- </transition> -->
    </router-view>
    <Overlay class-name="loading" style="background-color: transparent" :show="appStore.loading" :z-index="9999">
      <Loading />
    </Overlay>
  </div>
</template>

<script setup lang="ts">
import { Overlay, Loading } from 'vant'
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
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
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 400ms;
  position: fixed;
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
