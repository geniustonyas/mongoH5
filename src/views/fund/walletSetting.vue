<template>
  <div class="page">
    <CommonHeader :title="t('walletSettings')" />
    <main class="main">
      <div class="wallet-box">
        <div class="w-title">{{ t('walletSettings') }}</div>
        <div class="wbt-list">
          <div class="wbtl-title">{{ t('currency') }}</div>
          <div class="wbtl-cont">
            <div class="wlc-text">{{ t('btcUnit') }}</div>
            <div class="wlc-tabs">
              <span :class="{ active: userStore.userInfo.btcUnit.currencyUnit == 'mBTC' }" @click="setBtcUnit('mBTC')">mBTC</span>
              <span :class="{ active: userStore.userInfo.btcUnit.currencyUnit == 'μBTC' }" @click="setBtcUnit('μBTC')">μBTC</span>
            </div>
          </div>
          <!-- <div class="wbtl-cont">
            <div class="wlc-text">偏好的法币</div>
            <div class="wlc-t">
              <select class="form-control">
                <option value="01">EUR</option>
              </select>
            </div>
          </div> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import CommonHeader from '@/components/layout/CommonHeader.vue'

import { useUserStore } from '@/store/modules/user'
import { useI18n } from 'vue-i18n'
import { setBtcUnitApi } from '@/api/fund/index'

const userStore = useUserStore()
const { t } = useI18n()

const setBtcUnit = (unit) => {
  setBtcUnitApi({ CurrencyUnit: unit })
    .then((resp) => {
      userStore.getUserInfo()
      console.log(resp)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>
