<template>
  <div class="page">
    <CommonHeader />
    <main class="main">
      <div class="gamebox">
        <div class="gb-detail">
          <div class="gd-a">
            <div class="a-l">
              <img v-lazy="`https://seabet.imgix.net/${detailsData.imageName}?auto=compress,format&w=200&h=152&q=50&dpr=2`" />
              <i :class="detailsData.fg ? 'iconfont icon-shoucang_fill' : 'iconfont icon-shoucang'" @click.stop="setFav(detailsData)" />
            </div>
            <div class="a-r">
              <h3>{{ detailsData.name }}</h3>
              <p>
                <label>{{ detailsData.providerName }}</label>
              </p>
            </div>
          </div>
          <div class="gd-b">
            <template v-if="detailsData.currencyCodes.length > 1 && [1, 3, 4, 6, 7, 9, 11, 13, 16, 17, 18].includes(parseInt(detailsData.providerId))">
              <h3 class="item-title">{{ t('gameCurrency') }}</h3>
              <div class="item" @click.prevent="currencyBox()">
                <span>{{ selectedCurrency }}</span>
                <i class="iconfont icon-down" />
                <!-- <ConfigProvider theme="dark">
                  <DropdownMenu direction="down">
                    <DropdownItem :title="selectedCurrency" ref="currenyDom">
                      <div class="drop-item" v-for="(item, index) of detailsData.currencyCodes" :key="index" @click="confirmCurreny(item)">
                        <span :attr="item" :class="{ active: item == selectedCurrency }">{{ item }}</span>
                        <span><Icon v-show="item == selectedCurrency" name="success" class="active" /></span>
                      </div>
                    </DropdownItem>
                  </DropdownMenu>
                </ConfigProvider> -->
              </div>
            </template>
            <h3 class="item-title">{{ t('gameStatic') }}</h3>
            <div class="item" v-if="detailsData.defaultRTPName != ''">
              <label>RTP</label><span>{{ detailsData.defaultRTPName }}</span>
            </div>
            <div class="item">
              <label>{{ t('minMaxBet') }}</label>
              <span>
                {{ detailsData.minBetAmount != '' && detailsData.maxBetAmount != '' ? detailsData.minBetAmount + ' - ' + detailsData.maxBetAmount : '' }}
                {{ detailsData.currencyCode }}
              </span>
            </div>
            <div class="item" v-if="detailsData.volatility != '0' && parseInt(detailsData.gameType) == GameType.Slots">
              <label>{{ t('volatility') }}</label>
              <span>{{ detailsData.volatility != '' ? t('volatilitys.' + detailsData.volatility) : '' }}</span>
            </div>
            <div class="item" v-if="detailsData.hitRatio != '0' && parseInt(detailsData.gameType) == GameType.Slots">
              <label>{{ t('hitratio') }}</label>
              <span v-show="detailsData.hitRatio">{{ detailsData.hitRatio }}%</span>
            </div>
            <div class="item" v-if="detailsData.paylines != '0' && parseInt(detailsData.gameType) == GameType.Slots">
              <label>{{ t('paylines') }}</label>
              <span v-show="detailsData.paylines != ''">{{ detailsData.paylines }}</span>
            </div>
            <div class="btns">
              <a class="btn btn-primary" @click="startGame(detailsData.id, parseInt(detailsData.gameType), 'game/url', true, parseInt(detailsData.providerId))">{{ t('startNow') }}</a>
              <a
                v-if="parseInt(detailsData.gameType) === GameType.Slots && detailsData.providerId != '13' && detailsData.providerId != '18'"
                class="btn btn-primary dark"
                @click="startGame(detailsData.id, parseInt(detailsData.gameType), 'game/demo', true, parseInt(detailsData.providerId))"
              >
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
          <div v-for="(item, index) of detailsData.game" :key="index" class="item" @click="router.push({ name: 'gameDetails', params: { id: item.id }, query: { gameType: item.gameType } })">
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

    <ConfigProvider theme="dark">
      <Popup v-model:show="showCurrencyBox" position="bottom" round :closeable="true">
        <div class="picker-box">
          <div class="pb-title">{{ t('gameCurrency') }}</div>
          <ul>
            <li v-for="(item, index) of sortedCurrencyCode" :key="index" @click="confirmCurreny(item)">
              <span>{{ item }}</span>
              <Icon v-if="item == selectedCurrency" name="success" class="active" />
              <Icon v-else />
            </li>
          </ul>
        </div>
      </Popup>
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app'
import { getGameDetailsApi, setFavApi, cancalFavApi, setGameDefaultCurrency } from '@/api/game/index'
import { getGameDetailsRespItem, getFavGameListRespItem, getGameDetailsRespGameItem } from '@/api/game/types'
import { startGame } from '@/composables/startGame'
import router from '@/router'
import { GameType, PlatForm } from '@/utils/constant'
import { ConfigProvider, Popup, Icon } from 'vant'

const userStore = useUserStore()
const appStore = useAppStore()
const route = useRoute()
const { t } = useI18n()

const gameType = parseInt(route.query.gameType as string)

// 获取游戏列表
const detailsData = reactive<getGameDetailsRespItem>({
  currencyCode: '',
  currencyCodes: [],
  gameCurrency: null,
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
  paylines: '',
  fg: false
})

// 默认选中的币种
// const currenyDom = ref(null)
const selectedCurrency = ref('')
const showCurrencyBox = ref(false)
const currencyCodeSort = ref(['USD', 'USDT', 'JPY', 'BRL', 'INR', 'THB'])
const sortedCurrencyCode = ref([])

const getGameDetails = () => {
  getGameDetailsApi({ Id: route.params.id as string, platform: PlatForm.H5 })
    .then((resp) => {
      Object.assign(detailsData, resp.data)
      if (detailsData.minBetAmount != null && detailsData.minBetAmount != '') {
        //@ts-ignore
        detailsData.minBetAmount = detailsData.minBetAmount.toString().match(/^\d+(\.\d{0,4})?/)[0]
        //@ts-ignore
        detailsData.minBetAmount = parseFloat(detailsData.minBetAmount)
      }
      if (detailsData.maxBetAmount != null && detailsData.maxBetAmount != '') {
        //@ts-ignore
        detailsData.maxBetAmount = detailsData.maxBetAmount.toString().match(/^\d+(\.\d{0,4})?/)[0]
        //@ts-ignore
        detailsData.maxBetAmount = parseFloat(detailsData.maxBetAmount)
      }

      if (detailsData.currencyCodes.length > 0) {
        //@ts-ignore
        sortedCurrencyCode.value = currencyCodeSort.value.filter((items) => detailsData.currencyCodes.some((item) => item == items))
      }

      // 如果游戏支持的币种与默认币种一致， 则设置显示为默认币种， 否则设置显示为usd或者USDT
      if (detailsData.gameCurrency != null && detailsData.currencyCodes.includes(detailsData.gameCurrency)) {
        selectedCurrency.value = detailsData.gameCurrency
      } else {
        // if (detailsData.currencyCodes.includes(userStore.userInfo.defaultCurrencyCode)) {
        //   selectedCurrency.value = userStore.userInfo.defaultCurrencyCode
        // } else {
        if (detailsData.currencyCodes.includes('USD')) {
          selectedCurrency.value = 'USD'
        }
        if (detailsData.currencyCodes.includes('USDT')) {
          selectedCurrency.value = 'USDT'
        }
        // }
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

// 设置收藏或取消收藏
const setFav = async (gameItem: getFavGameListRespItem | getGameDetailsRespGameItem | getGameDetailsRespItem) => {
  if (userStore.userInfo.id == '') {
    router.push({ name: 'login' })
  } else {
    // 是否收藏
    const isFavIndex = appStore.detailsFav.indexOf(gameItem.id)
    const calcelFavIndex = appStore.detailsCancelFav.indexOf(gameItem.id)
    if (gameItem.fg) {
      // 取消收藏
      await cancalFavApi({ gameId: gameItem.id })
      if (isFavIndex != -1) {
        appStore.detailsFav.splice(isFavIndex, 1)
      }
      if (calcelFavIndex == -1) {
        appStore.detailsCancelFav.push(gameItem.id)
      }
    } else {
      await setFavApi({ gameId: gameItem.id })
      if (isFavIndex == -1) {
        appStore.detailsFav.push(gameItem.id)
      }
      if (calcelFavIndex != -1) {
        appStore.detailsCancelFav.splice(calcelFavIndex, 1)
      }
    }
    gameItem.fg = !gameItem.fg
    userStore.getFavCount()
  }
}

const currencyBox = () => {
  if (userStore.userInfo.id) {
    showCurrencyBox.value = true
  } else {
    router.push({ name: 'login' })
  }
}

// 切换币种
const confirmCurreny = (currency: string) => {
  selectedCurrency.value = currency
  setGameDefaultCurrency({ currency: currency })
    .then(() => {
      showCurrencyBox.value = false
      getGameDetails()
    })
    .catch((error) => {
      console.log(error)
    })
}

if (route.params.id) {
  getGameDetails()
}
</script>
