<template>
  <div class="page">
    <CommonHeader :show-back="false" :title="t('promotions')" />
    <main class="main">
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
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Footer from '@/components/layout/Footer.vue'

import { getPromoApi } from '@/api/promo/index'
import { getPromoRespItem } from '@/api/promo/types'
import { useAppStore } from '@/store/modules/app'

import { useI18n } from 'vue-i18n'

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
