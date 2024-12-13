<template>
  <router-view v-slot="{ Component, route }">
    <span>sdfsdf</span>
    <transition :name="getTransition(route.meta.transition)">
      <keep-alive :include="['videoList']">
        <component :is="Component" :key="route.path" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script setup lang="ts">
const getTransition = (transition: unknown): string | undefined => {
  if (typeof transition === 'string') {
    return transition
  }
  return undefined
}
</script>

<style>
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
