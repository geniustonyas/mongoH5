<template>
  <div class="page">
    <CommonHeader title="博客首页" />
    <main class="main">
      <div class="blog-box">
        <a @click="router.push({ name: 'blog' })">博客首页</a>
        <a @click="router.push({ name: 'blogList' })">博客列表</a>
        <a @click="router.push({ name: 'blogDetails' })">博客详情</a>
      </div>
    </main>
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Sidebar from '@/components/layout/SideBar.vue'
import Footer from '@/components/layout/Footer.vue'

import { getExchangeRate } from '@/composables/getExchangeRate'
import { getPromoApi, getExpiredPromoApi } from '@/api/promo/index'
import { getPromoRespItem } from '@/api/promo/types'
import { useAppStore } from '@/store/modules/app'

import { getAssetsFile } from '@/utils/index'
import { useI18n } from 'vue-i18n'

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

const appStore = useAppStore()
const router = useRouter()
const { t } = useI18n()

const promoList = ref<getPromoRespItem[]>([])
const expiredPromoList = ref<getPromoRespItem[]>([])
const showExpiredPromoList = ref(false)

const getPromoList = () => {
  getPromoApi()
    .then((res) => {
      promoList.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

const getExpiredPromoList = () => {
  getExpiredPromoApi()
    .then((res) => {
      expiredPromoList.value = res.data
      showExpiredPromoList.value = true
    })
    .catch((err) => {
      console.log(err)
    })
}

getPromoList()
</script>
