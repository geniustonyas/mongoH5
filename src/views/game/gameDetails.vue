<template>
  <div class="page">
    <CommonHeader />
    <main class="main">
      <div class="gamebox">
        <div class="gb-detail">
          <div class="gd-a">
            <div class="a-l">
              <img v-lazy="`https://seabet.imgix.net/${detailsData.imageName}?auto=compress,format&w=200&h=152&q=50&dpr=2`" />
            </div>
            <div class="a-r">
              <!-- <span>{{ t('newGame') }}</span> -->
              <h3>{{ detailsData.name }}</h3>
              <p>
                <label>{{ detailsData.providerName }}</label>
                <!-- <label>ELK</label> -->
              </p>
            </div>
          </div>
          <div class="gd-b">
            <!-- <div class="st-item">
              <span class="active">{{ t('oneDay') }}<b>58.58%</b><i class="iconfont icon-xj" /> </span>
              <span> {{ t('week') }}<b>59.58%</b><i class="iconfont icon-ss" /> </span>
              <span> {{ t('month') }}<b>81.73%</b><i class="iconfont icon-xj" /> </span>
            </div> -->
            <div class="item" v-if="detailsData.defaultRTPName != ''">
              <label>RTP</label><span>{{ detailsData.defaultRTPName }}</span>
            </div>
            <div class="item">
              <label>{{ t('minMaxBet') }}</label
              ><span>{{ parseFloat(detailsData.minBetAmount).toFixed(2) }} - {{ parseFloat(detailsData.maxBetAmount).toFixed(2) }} USDT</span>
            </div>
            <div class="item" v-if="detailsData.volatility != '0'">
              <label>{{ t('volatility') }}</label
              ><span>{{ t('volatilitys.' + detailsData.volatility) }}</span>
            </div>
            <!-- <div class="item"><label>命中率</label><span>30%</span></div> -->
            <a class="btn btn-primary" @click="startGame(detailsData.id)">{{ t('startNow') }}</a>
            <!-- <div class="sb-item">
              <a>#高波动性</a>
              <a>#历史</a>
              <a>#定制老虎机</a>
            </div> -->
          </div>
        </div>
        <div class="g-head">
          <div class="gh-t">
            <div class="gh-l">{{ t('moreGame') }}</div>
          </div>
        </div>
        <div v-if="detailsData.game.length > 0" class="g-list">
          <div v-for="(item, index) of detailsData.game" :key="index" class="item" @click="router.replace({ name: 'gameDetails', params: { id: item.id } })">
            <div class="i-bd">
              <div class="i-img">
                <img v-lazy="`https://seabet.imgix.net/${item.imageName}?auto=compress,format&w=200&h=152&q=50&dpr=2`" />
                <!-- <span class="red">FEATURED</span> -->
              </div>
              <div class="i-txt">
                <strong>{{ item.name }}</strong>
                <span>{{ item.providerName }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { getGameDetailsApi } from '@/api/game/index'
import { getGameDetailsRespItem } from '@/api/game/types'
import { startGame } from '@/composables/startGame'
import router from '@/router'

const route = useRoute()
const { t } = useI18n()

// 获取游戏列表
const detailsData = reactive<getGameDetailsRespItem>({
  defaultRTPName: '',
  volatility: '',
  lines: '',
  minBetAmount: '',
  maxBetAmount: '',
  gameType: '',
  providerCode: '',
  providerId: '',
  providerName: '',
  name: '',
  id: '',
  imageName: '',
  game: []
})
const getGameDetails = () => {
  getGameDetailsApi({ Id: route.params.id as string })
    .then((resp) => {
      Object.assign(detailsData, resp.data)
    })
    .catch((error) => {
      console.log(error)
    })
}

if (route.params.id) {
  getGameDetails()
}
</script>
