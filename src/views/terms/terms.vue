<template>
  <div class="page">
    <CommonHeader :title="siteName + ' ' + t(`html.${type}Title`)" />
    <main class="main term-box" v-html="t(`html.${type}Content`)" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const siteName = import.meta.env.VITE_APP_SITE_NAME
const route = useRoute()

const type = route.params.type ? route.params.type : 'rules'
</script>
