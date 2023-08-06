<template>
  <div>
    <!-- Your content -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

if (route.query.code && route.query.code.length > 0) {
  window.opener.postMessage(
    {
      name: 'code',
      lineCode: route.query.code
    },
    window.location.origin
  )
}
</script>
