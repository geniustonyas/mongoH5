<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="mainDom">
      <IndexTab tab="sports" />

      <!-- 体育 -->
      <div class="sports-box">
        <div class="sb-a">
          <div class="item">
            <div class="i-l" v-lazy:background-image="getAssetsFile('svg/SabaSports.svg')" />
            <div class="i-r">
              <div class="ir-a"><img v-lazy="getAssetsFile('svg/SabaSports.svg')" />Saba Sports</div>
              <div class="ir-b">
                <span>超全赛事</span>
                <span>玩法多样</span>
                <span>多终端支持</span>
                <span>优质体验</span>
              </div>
              <div class="ir-c">
                <a class="btn btn-primary" @click="startGame(1439)">{{ t('startNow') }}</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-l" v-lazy:background-image="getAssetsFile('svg/FBSports.svg')" />
            <div class="i-r">
              <div class="ir-a"><img v-lazy="getAssetsFile('svg/FBSports.svg')" />FB Sports</div>
              <div class="ir-b">
                <span>实时扫描</span>
                <span>秒级结算</span>
                <span>提前兑现</span>
                <span>及时止损</span>
              </div>
              <div class="ir-c">
                <a class="btn btn-primary" @click="startGame('2')">{{ t('startNow') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <IndexFooter :currency-code="currencyCode" :exchange-rate="exchangeRate" />
    </main>
    <Footer />

    <!-- 侧边栏开始 -->
    <Sidebar :currency-code="currencyCode" :exchange-rate="exchangeRate" />
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import IndexHeader from '@/components/layout/IndexHeader.vue'
import IndexFooter from '@/components/layout/IndexFooter.vue'
import IndexTab from '@/components/layout/IndexTab.vue'
import Footer from '@/components/layout/Footer.vue'
import Sidebar from '@/components/layout/SideBar.vue'

import { startGame } from '@/composables/startGame'

import { useAppStore } from '@/store/modules/app'
import { getAssetsFile } from '@/utils'
import { getExchangeRate } from '@/composables/getExchangeRate'

const appStore = useAppStore()
const { t } = useI18n()

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()
</script>
