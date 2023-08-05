<template>
  <div class="page">
    <CommonHeader :title="t('promoDetail')" />
    <main class="main">
      <div class="promo-box">
        <div v-if="promo.content != ''" class="pb-detail">
          <img v-lazy="appStore.cdnurl + promo.image" />
          <h2 class="pd-title">{{ promo.title }}</h2>
          <h3 class="pd-intro">{{ promo.intro }}</h3>
          <div class="pd-conts" v-html="promo.content" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { getPromoDetailsApi } from '@/api/promo/index'
import { useAppStore } from '@/store/modules/app'

import { useI18n } from 'vue-i18n'
import { reactive } from 'vue'

const route = useRoute()
const appStore = useAppStore()
const { t } = useI18n()

// 详情返回数据
const promo = reactive({
  image: '',
  title: '',
  content: '',
  intro: ''
})

// 获取详情
const getPromoDetails = () => {
  getPromoDetailsApi({ Id: route.params.id as string })
    .then((res) => {
      Object.assign(promo, res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

if (route.params.id) {
  getPromoDetails()
}
</script>
