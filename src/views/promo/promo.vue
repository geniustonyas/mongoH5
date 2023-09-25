<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <CommonHeader :title="t('promotions')" />
    <main class="main">
      <!-- <nav class="m-logo">
        <a @click="router.push({ name: 'index' })"><img :src="getAssetsFile('logo.svg')" /></a>
      </nav> -->
      <div class="promo-box">
        <ul v-if="promoList.length > 0" class="pb-list">
          <li v-for="(item, index) of promoList" :key="index">
            <a @click="router.push({ name: 'promoDetails', params: { id: item.id } })">
              <img v-lazy="appStore.cdnurl + item.image" />
              <h3>{{ item.title }}</h3>
              <p>{{ item.intro }}</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
        </ul>
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
import { getAssetsFile } from '@/utils'
import { getPromoApi } from '@/api/promo/index'
import { getPromoRespItem } from '@/api/promo/types'
import { useAppStore } from '@/store/modules/app'

import { useI18n } from 'vue-i18n'

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()

const appStore = useAppStore()
const router = useRouter()
const { t } = useI18n()

const promoList = ref<getPromoRespItem[]>([])
const nodata = ref(false)

const getPromoList = () => {
  getPromoApi()
    .then((res) => {
      promoList.value = res.data
      nodata.value = res.data.length == 0
    })
    .catch((err) => {
      console.log(err)
    })
}

getPromoList()
</script>
