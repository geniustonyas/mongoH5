<template>
  <div class="page">
    <CommonHeader :show-back="false" :title="t('support')" />
    <main v-if="appStore.chat != null" class="main">
      <iframe :src="appStore.chat" style="border: none; width: 100%; height: calc(100vh - 96px)" />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/layout/CommonHeader.vue'
import Footer from '@/components/layout/Footer.vue'

import { useAppStore } from '@/store/modules/app'
import { useI18n } from 'vue-i18n'

const appStore = useAppStore()
const { t } = useI18n()
</script>
