<template>
  <div class="loading-container">
    <svg width="80" height="80" viewBox="0 0 40 60">
      <polygon class="triangle" fill="none" stroke="#fff" stroke-width="1" points="16,1 32,32 1,32" />
      <text class="loading" x="0" y="45" fill="#fff">MG51.TV</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
// 这里不需要额外的脚本
</script>

<style scoped>
.loading-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none; /* 确保不影响用户操作 */
  z-index: 99;
}
</style>
