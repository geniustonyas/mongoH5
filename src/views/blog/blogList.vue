<template>
  <div class="page">
    <CommonHeader />
    <main class="main">
      <div class="blog-box">
        <div class="bb-list">
          <ul>
            <li @click="router.push({ name: 'blogDetails', params: { id: 1 } })">
              <div class="bl-bd">
                <img :src="getAssetsFile('blog/banner_blog.webp')" />
                <h2>Sergio Aguero: 2024 Predictions</h2>
                <p>It’s a new year but the football action hasn’t slowed down, so we caught up with Stake’s Global Ambassador Sergio Agüero to break down all the hot topics!</p>
              </div>
            </li>
            <li @click="router.push({ name: 'blogDetails', params: { id: 1 } })">
              <div class="bl-bd">
                <img :src="getAssetsFile('blog/banner_blog.webp')" />
                <h2>New Games on Stake: January 19th 2024 Casino Releases & Sports Promos</h2>
                <p>
                  2024 is officially here! To kick off the new year, we've got a fresh line up of hot new casino games, amazing betting bonuses, exciting giveaways, and the latest sports betting
                  markets for you to enjoy. Check them out!
                </p>
              </div>
            </li>
            <li @click="router.push({ name: 'blogDetails', params: { id: 1 } })">
              <div class="bl-bd">
                <img :src="getAssetsFile('blog/banner_blog.webp')" />
                <h2>Sergio Aguero: 2024 Predictions</h2>
                <p>It’s a new year but the football action hasn’t slowed down, so we caught up with Stake’s Global Ambassador Sergio Agüero to break down all the hot topics!</p>
              </div>
            </li>
            <li @click="router.push({ name: 'blogDetails', params: { id: 1 } })">
              <div class="bl-bd">
                <img :src="getAssetsFile('blog/banner_blog.webp')" />
                <h2>New Games on Stake: January 19th 2024 Casino Releases & Sports Promos</h2>
                <p>
                  2024 is officially here! To kick off the new year, we've got a fresh line up of hot new casino games, amazing betting bonuses, exciting giveaways, and the latest sports betting
                  markets for you to enjoy. Check them out!
                </p>
              </div>
            </li>
            <li @click="router.push({ name: 'blogDetails', params: { id: 1 } })">
              <div class="bl-bd">
                <img :src="getAssetsFile('blog/banner_blog.webp')" />
                <h2>Sergio Aguero: 2024 Predictions</h2>
                <p>It’s a new year but the football action hasn’t slowed down, so we caught up with Stake’s Global Ambassador Sergio Agüero to break down all the hot topics!</p>
              </div>
            </li>
            <li @click="router.push({ name: 'blogDetails', params: { id: 1 } })">
              <div class="bl-bd">
                <img :src="getAssetsFile('blog/banner_blog.webp')" />
                <h2>New Games on Stake: January 19th 2024 Casino Releases & Sports Promos</h2>
                <p>
                  2024 is officially here! To kick off the new year, we've got a fresh line up of hot new casino games, amazing betting bonuses, exciting giveaways, and the latest sports betting
                  markets for you to enjoy. Check them out!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <IndexFooter :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    </main>
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  import CommonHeader from '@/components/layout/CommonHeader.vue'
  import IndexFooter from '@/components/layout/IndexFooter.vue'
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
