<template>
  <div class="page">
    <CommonHeader title="博客" />
    <main class="main">
      <div class="blog-box">
        <div class="bb-title" @click="router.push({ name: 'blogDetails', params: { id: 1 } })">
          <div class="bt-l">
            <img :src="getAssetsFile('blog/banner_blog.webp')" />
          </div>
          <div class="bt-r">
            <h2>Discover the Emotions of Br.betano:Your Portal for Successful Online Betting!</h2>
            <p>
              br.betano is your portal to exciting thrills and successful online betting opportunities if you like sports or simply like to test your luck at gambling. This article will explore the
              fascinating world of br.betano and how it can become your favorite destinaton for leisure and profit.Learn what makes this online betting site so popular among enthusiasts across Brazil
              and get ready for an exciting experience.
            </p>
          </div>
        </div>
        <div class="bb-menu">
          <ul>
            <li @click="router.push({ name: 'blogList' })">
              <div class="bm-bd">
                <div class="bb-l">
                  <img :src="getAssetsFile('blog/crypto.webp')" />
                </div>
                <div class="bb-m">Crypto</div>
                <div class="bb-r"><i class="iconfont icon-right" /></div>
              </div>
            </li>
            <li @click="router.push({ name: 'blogList' })">
              <div class="bm-bd">
                <div class="bb-l">
                  <img :src="getAssetsFile('blog/howtoguides.webp')" />
                </div>
                <div class="bb-m">How to guides</div>
                <div class="bb-r"><i class="iconfont icon-right" /></div>
              </div>
            </li>
            <li @click="router.push({ name: 'blogList' })">
              <div class="bm-bd">
                <div class="bb-l">
                  <img :src="getAssetsFile('blog/seabetnews.webp')" />
                </div>
                <div class="bb-m">Seabet News</div>
                <div class="bb-r"><i class="iconfont icon-right" /></div>
              </div>
            </li>
            <li @click="router.push({ name: 'blogList' })">
              <div class="bm-bd">
                <div class="bb-l">
                  <img :src="getAssetsFile('blog/sports.webp')" />
                </div>
                <div class="bb-m">Sports</div>
                <div class="bb-r"><i class="iconfont icon-right" /></div>
              </div>
            </li>
            <li @click="router.push({ name: 'blogList' })">
              <div class="bm-bd">
                <div class="bb-l">
                  <img :src="getAssetsFile('blog/casino.webp')" />
                </div>
                <div class="bb-m">Casino</div>
                <div class="bb-r"><i class="iconfont icon-right" /></div>
              </div>
            </li>
            <li @click="router.push({ name: 'blogList' })">
              <div class="bm-bd">
                <div class="bb-l">
                  <img :src="getAssetsFile('blog/others.webp')" />
                </div>
                <div class="bb-m">Others</div>
                <div class="bb-r"><i class="iconfont icon-right" /></div>
              </div>
            </li>
          </ul>
        </div>
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
