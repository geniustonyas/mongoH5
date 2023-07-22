<template>
  <div class="page">
    <CommonHeader :title="t('rewards')">
      <div class="hml-r t-i-w" @click="showAddBox = true">
        {{ t('claimReward') }}<span><i class="iconfont icon-add" /></span>
      </div>
    </CommonHeader>
    <main class="main">
      <div class="rewards-box">
        <div class="rb-title">RECENT TRANSACTIONS</div>
        <ul class="rb-list">
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>10:24 10/06/2023</span>
              <strong>EHGKHS</strong>
            </div>
            <div class="l-r">
              <strong>100.00USDT</strong>
              <span class="confirmed">Confirmed</span>
            </div>
          </li>
          <li>
            <div class="l-l">
              <span>11:24 10/06/2023</span>
              <strong>BCGKHG</strong>
            </div>
            <div class="l-r">
              <strong>200.00USDT</strong>
              <span class="incomplete">Incomplete</span>
            </div>
          </li>
        </ul>
      </div>
    </main>
    <div v-show="showAddBox" class="mask-box" id="claimReward">
      <div class="mb-bd">
        <div class="claim-reward-box">
          <span class="icon-btn" @click="showAddBox = false">
            <i class="iconfont icon-close" />
          </span>
          <h2>{{ t('claimNewReward') }}</h2>
          <div class="custom-form">
            <div class="cf-row">
              <div class="cr-input">
                <input type="text" class="form-control" :placeholder="t('rewardCode')" />
              </div>
            </div>

            <div class="cf-row">
              <div class="cr-btns">
                <a class="btn btn-primary full" href="#">{{ t('claim') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="HomeAccount">
import { ref } from 'vue'

import CommonHeader from '@/components/layout/CommonHeader.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

let showAddBox = ref(false)
</script>
