<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route.meta.transition)">
      <keep-alive :include="['casino', 'slots', 'index', 'search', 'promoList', 'promo', 'finance']">
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
