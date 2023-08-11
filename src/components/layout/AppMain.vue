<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="getTransition(route.meta.transition)">
      <component :is="Component" :key="route.path" />
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
