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
              <h3>{{ detailsData.name }}</h3>
              <p>
                <label>{{ detailsData.providerName }}</label>
              </p>
            </div>
          </div>
          <div class="gd-b">
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
            <div class="item" v-if="detailsData.hitRatio != '0'">
              <label>{{ t('hitratio') }}</label
              ><span>{{ detailsData.hitRatio }}%</span>
            </div>
            <div class="item" v-if="detailsData.paylines != '0'">
              <label>{{ t('paylines') }}</label
              ><span>{{ detailsData.paylines }}</span>
            </div>
            <div class="btns">
              <a class="btn btn-primary" @click="startGame(detailsData.id, parseInt(detailsData.gameType), 'game/url', true)">{{ t('startNow') }}</a>
              <a v-if="parseInt(detailsData.gameType) === GameType.Slots" class="btn btn-primary dark" @click="startGame(detailsData.id, parseInt(detailsData.gameType), 'game/demo', true)">
                {{ t('demoMode') }}
              </a>
            </div>
          </div>
        </div>
        <!-- 更多游戏列表 -->
        <div class="g-head">
          <div class="gh-t">
            <div class="gh-l">{{ t('moreGame') }}</div>
          </div>
        </div>
        <div v-if="detailsData.game.length > 0" class="g-list">
          <div v-for="(item, index) of detailsData.game" :key="index" class="item" @click="router.push({ name: 'gameDetails', params: { id: item.id } })">
            <div class="i-bd">
              <div class="i-img">
                <img v-lazy="`https://seabet.imgix.net/${item.imageName}?auto=compress,format&w=200&h=152&q=50&dpr=2`" />
                <div v-if="userStore.userInfo.id" class="sp_sc">
                  <i :class="item.fg ? 'iconfont icon-shoucang_fill' : 'iconfont icon-shoucang'" @click.stop="setFav(item)" />
                </div>
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

import { useUserStore } from '@/store/modules/user'
import { getGameDetailsApi, setFavApi, cancalFavApi } from '@/api/game/index'
import { getGameDetailsRespItem, getFavGameListRespItem, getGameDetailsRespGameItem } from '@/api/game/types'
import { startGame } from '@/composables/startGame'
import router from '@/router'
import { GameType } from '@/utils/constant'

const userStore = useUserStore()
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
  game: [],
  hitRatio: '',
  paylines: ''
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

// 设置收藏或取消收藏
const setFav = async (gameItem: getFavGameListRespItem | getGameDetailsRespGameItem) => {
  if (userStore.userInfo.id == '') {
    router.push({ name: 'login' })
  } else {
    // 是否收藏
    if (gameItem.fg) {
      await cancalFavApi({ gameId: gameItem.id })
    } else {
      await setFavApi({ gameId: gameItem.id })
    }
    gameItem.fg = !gameItem.fg
    userStore.getFavCount()
  }
}

if (route.params.id) {
  getGameDetails()
}
</script>
