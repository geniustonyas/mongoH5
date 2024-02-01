<template>
  <div class="page">
    <CommonHeader  />
    <main class="main">
      <div class="blog-box">
        <div class="bb-details">
          <div class="bd-title">How to Choose the Right Crypto Coin</div>
          <div class="bd-date">
            <div class="d-l">Seabet - 2023年12月22日</div>
            <div class="d-r">
              <a @click="share('facebook')">
                <i class="iconfont icon-facebook" />
              </a>
              <a @click="share('twitter')">
                <i class="iconfont icon-twitter" />
              </a>
            </div>
          </div>
          <div class="bd-photo">
            <img :src="getAssetsFile('blog/banner_blog.webp')" />
          </div>
          <div class="bd-cont">
            <h3>Choosing the Right Coin for You - Beginner's Guide to Cryptocurrencies</h3>
            <p>
              When we opened our virtual doors in 2017, Stake Casino was one of the first cryptocurrency casinos available. As crypto enthusiasts, we staked our bets on this exciting technology,
              believing in the power of decentralised finance and the opportunities it creates.
            </p>
            <p>
              The entire cryptocurrency world might seem like a minefield that’s difficult to navigate, from non-fungible tokens and blockchain technology to crypto exchanges and the crypto market.
              However, when it comes to crypto gambling, it’s not that different from using a fiat currency (regular money like USD, EUR, or GBP) to place your bets.
            </p>
            <p>
              Whether you’re an online slot game enthusiast, here to experience the immersive gameplay of live dealer games , wanting to place a bet on your favorite sports , or sit down to a virtual
              table game like poker or blackjack , it’s safe and easy to do so from your crypto wallet.
            </p>
            <h3>Choosing the Right Coin for You - Beginner's Guide to Cryptocurrencies</h3>
            <p>
              When we opened our virtual doors in 2017, Stake Casino was one of the first cryptocurrency casinos available. As crypto enthusiasts, we staked our bets on this exciting technology,
              believing in the power of decentralised finance and the opportunities it creates.
            </p>
            <p>
              The entire cryptocurrency world might seem like a minefield that’s difficult to navigate, from non-fungible tokens and blockchain technology to crypto exchanges and the crypto market.
              However, when it comes to crypto gambling, it’s not that different from using a fiat currency (regular money like USD, EUR, or GBP) to place your bets.
            </p>
            <p>
              Whether you’re an online slot game enthusiast, here to experience the immersive gameplay of live dealer games , wanting to place a bet on your favorite sports , or sit down to a virtual
              table game like poker or blackjack , it’s safe and easy to do so from your crypto wallet.
            </p>
          </div>
        </div>
        <div class="bd-hot">
          <div class="bh-title">热门其他文章</div>
          <div class="bb-list">
            <ul>
              <li @click="router.push({ name: 'blogDetails', params: { id: 3 } })">
                <div class="bl-bd">
                  <img :src="getAssetsFile('blog/banner_blog.webp')" />
                  <h2>New Games on Stake: January 19th 2024 Casino Releases & Sports Promos</h2>
                  <p>
                    2024 is officially here! To kick off the new year, we've got a fresh line up of hot new casino games, amazing betting bonuses, exciting giveaways, and the latest sports betting
                    markets for you to enjoy. Check them out!
                  </p>
                </div>
              </li>
              <li @click="router.push({ name: 'blogDetails', params: { id: 4 } })">
                <div class="bl-bd">
                  <img :src="getAssetsFile('blog/banner_blog.webp')" />
                  <h2>Sergio Aguero: 2024 Predictions</h2>
                  <p>It’s a new year but the football action hasn’t slowed down, so we caught up with Stake’s Global Ambassador Sergio Agüero to break down all the hot topics!</p>
                </div>
              </li>
              <li @click="router.push({ name: 'blogDetails', params: { id: 5 } })">
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
