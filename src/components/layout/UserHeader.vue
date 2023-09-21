<template>
  <header class="header">
    <nav class="head-menu-lmr">
      <div class="hml-l" @click="routeTo">
        <i class="iconfont icon-return" />
      </div>
      <div class="hml-m">
        <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.svg')" /></a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { getAssetsFile } from '@/utils'
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  routeName: { type: String, default: '' }
})

const routeTo = () => {
  if (props.routeName != '') {
    router.push({ name: props.routeName })
  } else {
    router.back()
  }
}
</script>
