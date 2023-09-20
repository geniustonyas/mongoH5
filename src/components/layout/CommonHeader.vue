<template>
  <header class="header">
    <div class="head-menu-lmr">
      <div v-show="props.showBack" class="hml-l" @click="routeBack">
        <i class="iconfont icon-return" />
      </div>
      <div class="hml-m">{{ props.title }}</div>
      <slot />
    </div>
  </header>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  showBack: { type: Boolean, default: true },
  title: { type: String, default: '' },
  routeName: { type: String, default: '' }
})

const routeBack = () => {
  if (props.routeName != '') {
    router.push({ name: props.routeName })
  } else {
    router.back()
  }
}
</script>
