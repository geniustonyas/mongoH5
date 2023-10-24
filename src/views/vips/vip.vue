<template>
  <div class="page">
    <CommonHeader :title="siteName + ' ' + t(`html.vipTitle`)" />
    <main class="main term-box vip-clu-box" v-html="t(`html.vipContent`)" />
  </div>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/layout/CommonHeader.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const siteName = import.meta.env.VITE_APP_SITE_NAME
</script>
