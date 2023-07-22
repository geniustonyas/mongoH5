<template>
  <div class="page">
    <CommonHeader :title="t('vipTitle')" />
    <main class="main" v-html="t('html.vipContent')" />
  </div>
</template>

<script setup name="Vip">
import CommonHeader from '@/components/layout/CommonHeader.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>
