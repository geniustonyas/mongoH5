<template>
  <div class="page">
    <CommonHeader :title="t('promotions')" />
    <main class="main">
      <nav class="m-categorys">
        <a :class="{ active: promoQuery.Categorys == '' }" @click="selPromoType('')">{{ t('all') }}</a>
        <a :class="{ active: promoQuery.Categorys == '1' }" @click="selPromoType('1')"><img :src="getAssetsFile('svg/originals.svg')" />{{ t('seabetGame') }}</a>
        <a :class="{ active: promoQuery.Categorys == '2' }" @click="selPromoType('2')"><img :src="getAssetsFile('svg/sports.svg')" />{{ t('sports') }}</a>
        <a :class="{ active: promoQuery.Categorys == '3' }" @click="selPromoType('3')"><img :src="getAssetsFile('svg/lobby.svg')" />{{ t('casino') }}</a>
      </nav>
      <div class="promo-box">
        <ul v-if="promoList.length > 0" class="pb-list" v-lazy-container="{ selector: 'img', error: getAssetsFile('seabet1.png'), loading: getAssetsFile('seabet1.png') }">
          <li v-for="(item, index) of promoList" :key="index">
            <a @click="router.push({ name: 'promoDetails', params: { id: item.id } })">
              <img :data-src="appStore.cdnurl + item.image" />
              <h3>{{ item.title }}</h3>
              <p>{{ item.intro }}</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
        </ul>
        <div v-if="showExpiredPromoList" class="overPromo">{{ t('expiredPromo') }}</div>
        <ul
          v-if="expiredPromoList.length > 0 && showExpiredPromoList"
          class="pb-list"
          v-lazy-container="{ selector: 'img', error: getAssetsFile('seabet1.png'), loading: getAssetsFile('seabet1.png') }"
        >
          <li v-for="(item, index) of expiredPromoList" :key="index" class="expire" @click.stop="router.push({ name: 'promoDetails', params: { id: item.id } })">
            <a>
              <img :data-src="appStore.cdnurl + item.image" />
              <h3>{{ item.title }}</h3>
              <p>{{ item.intro }}</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
        </ul>
        <div v-if="promoList.length > 0 && !showExpiredPromoList" class="pb-more">
          <a class="btn btn-primary" @click="getExpiredPromoList">{{ t('showExpiredPromo') }}</a>
        </div>
      </div>
    </main>
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
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

const promoQuery = reactive({
  Categorys: ''
})

const getPromoList = () => {
  getPromoApi(promoQuery)
    .then((res) => {
      promoList.value = res.data
    })
    .catch((err) => {
      console.log(err)
    })
}

const getExpiredPromoList = () => {
  getExpiredPromoApi(promoQuery)
    .then((res) => {
      expiredPromoList.value = res.data
      showExpiredPromoList.value = true
    })
    .catch((err) => {
      console.log(err)
    })
}

const selPromoType = (types: string) => {
  promoQuery.Categorys = types
  getPromoList()
}

getPromoList()
</script>
