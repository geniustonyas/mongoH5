<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route.meta.transition)">
      <keep-alive :include="[]">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
  <!-- <Overlay class-name="loading" style="background-color: transparent" :show="appStore.loading" :z-index="9999">
    <Loading />
  </Overlay> -->
  <Login />
</template>

<script setup lang="ts">
// import { Overlay } from 'vant'
// import { useAppStore } from '@/store/app'
import Login from '@/components/Login.vue'
// const appStore = useAppStore()

const getTransition = (transition: unknown): string | undefined => {
  if (typeof transition === 'string') {
    return transition
  }
  return undefined
}
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
/* 
.van-lazy-image {
  &.van-lazy-image-loading,
  &.van-lazy-image-error {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
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
} */
</style>
