<template>
  <div class="loading-container">
    <svg :width="width" :height="height" viewBox="0 0 32 50">
      <polygon class="triangle" fill="none" stroke="#fff" stroke-width="1" points="16,1 32,32 1,32" />
      <text class="loading" x="2" y="45" fill="#fff">MG51.TV</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: Number,
    default: 80
  },
  height: {
    type: Number,
    default: 80
  }
})
</script>
