<template>
  <div>
    <!-- Your content -->
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

// line登录
const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const code = urlParams.get('code')
if (code && code.length > 0) {
  localStorage.setItem('lineCode', code)
  window.close()
}

// twitter登录
// https://www.seabet.io/index#/user/authCallback?id=1675035925510750209&username=haibo435014&displayName=%E6%B5%B7%E5%8D%9A
if (route.query.id && route.query.sign) {
  localStorage.setItem('twitterId', route.query.id as string)
  localStorage.setItem('twitterSign', route.query.sign as string)
  window.close()
}
</script>
