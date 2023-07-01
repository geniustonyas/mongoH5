<template>
  <div class="page">
    <CommonHeader :show-back="false" title="Search" />
    <main class="main" />
    <Footer />
  </div>
</template>

<script setup name="PromoPromo">
import CommonHeader from '@/components/layout/CommonHeader.vue'
import Footer from '@/components/layout/Footer.vue'

import { getAssetsFile } from '@/utils'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
