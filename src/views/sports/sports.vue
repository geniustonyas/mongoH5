<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="mainDom">
      <IndexTab tab="sports" />
      <div class="sports-box">
        <div class="sb-items">
          <div class="item seabet">
            <div class="is-a">Seabet Sports</div>
            <div class="is-b">{{ t('btiSportIntro') }}</div>
            <div class="is-d">
              <a @click="startGame('2110', GameType.Sports)">{{ t('startNow') }}</a>
            </div>
          </div>
          <div class="item saba">
            <div class="is-a">Saba Sports</div>
            <div class="is-b">{{ t('sabaSportIntro') }}</div>
            <div class="is-d">
              <a @click="startGame('1439', GameType.Sports)">{{ t('startNow') }}</a>
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
import { getExchangeRate } from '@/composables/getExchangeRate'
import { GameType } from '@/utils/constant'

const appStore = useAppStore()
const { t } = useI18n()

// 汇率相关
const { currencyCode, exchangeRate } = getExchangeRate()
</script>
