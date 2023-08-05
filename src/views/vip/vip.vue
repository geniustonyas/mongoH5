<template>
  <div class="page">
    <CommonHeader :title="siteName + t('vipTitle')" />
    <main class="main" v-html="t('html.vipContent')" />
  </div>
</template>

<script setup name="Vip">
import CommonHeader from '@/components/layout/CommonHeader.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const siteName = import.meta.env.VITE_APP_SITE_NAME
</script>
