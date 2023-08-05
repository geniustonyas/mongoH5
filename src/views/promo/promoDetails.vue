<template>
  <div class="page">
    <CommonHeader title="Promotions Details" />
    <main class="main">
      <div class="promo-box">
        <div class="pb-detail">
          <img :src="getAssetsFile('promo/p1.jpg')" />
          <h2 class="pd-title">Clubhouse Mystery Prize Drops</h2>
          <div class="pd-conts">
            <p>
              It's time to put your skills to the test with our Lucky Streak Promo! From May 28 to June 11, win as many consecutive <span class="highlight">live bets</span> as possible and claim your
              share of top-tier prizes. Join our Lucky Streak Challenge now and show us what you've got.
            </p>
            <p class="p-opt">
              <a class="btn btn-primary" href="#">OPT IN</a>
            </p>
            <div class="unflag">
              <h2>How Does it Work?</h2>
              <ul>
                <li>Opt-in to the promotion</li>
                <li>Place Live bets on French Open tennis tournament</li>
                <li>Hit consecutive wins.</li>
                <li>Unlock the reward based on your win streak.</li>
                <li>Bets need to be placed with minimum valid odds of 2.00</li>
                <li>Minimum bet amount is 20 USDT.</li>
              </ul>
            </div>
            <p class="p-opt" />
            <table class="promo-table">
              <thead>
                <tr class="dark-green">
                  <th>Win streak</th>
                  <th>Reward Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span style="font-weight: normal"> 5 </span>
                  </td>
                  <td>
                    <span style="font-weight: normal"> 20 USDT Free Bet </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style="font-weight: normal"> 7 </span>
                  </td>
                  <td>
                    <span style="font-weight: normal"> 75 USDT Free Spins </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style="font-weight: normal"> 10 </span>
                  </td>
                  <td>
                    <span style="font-weight: normal"> 500 USDT Free Chip </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span style="font-weight: normal"> 12 </span>
                  </td>
                  <td>
                    <span style="font-weight: normal"> 1,500 USDT Cash </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { getPromoDetailsApi } from '@/api/promo/index'
import { getPromoDetailsResp } from '@/api/promo/types'
import { useAppStore } from '@/store/modules/app'

import { getAssetsFile } from '@/utils'
import { useI18n } from 'vue-i18n'
import { reactive } from 'vue'

const route = useRoute()
const { t } = useI18n()

const promo = reactive({
  image: '',
  title: '',
  content: '',
  intro: ''
})

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
