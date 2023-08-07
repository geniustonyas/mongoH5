<template>
  <nav class="m-logo">
    <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.svg')" /></a>
  </nav>
  <!-- 游戏切换 -->
  <nav class="m-menu">
    <a :class="{ active: props.tab == 'sports' }" @click="router.push({ name: 'sports' })"> <img :src="getAssetsFile('svg/sports.svg')" />{{ t('sports') }}</a>
    <a :class="{ active: props.tab == 'casino' }" @click="router.push({ name: 'casino' })"> <img :src="getAssetsFile('svg/livecasino.svg')" />{{ t('liveCasino') }}</a>
    <a :class="{ active: props.tab == 'slots' }" @click="router.push({ name: 'slots' })"> <img :src="getAssetsFile('svg/slots.svg')" />{{ t('slots') }} </a>
  </nav>
</template>
<script setup lang="ts">
import { getAssetsFile } from '@/utils'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const props = defineProps({
  tab: { type: String, default: '' }
})
</script>
