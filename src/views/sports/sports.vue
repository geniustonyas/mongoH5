<template>
  <div :class="appStore.showSideBar ? 'page open-sidebar' : 'page'">
    <IndexHeader />
    <main class="main" ref="mainDom">
      <IndexTab tab="sports" />

      <!-- 体育 -->
      <!--<div class="sports-box">
        <div class="sb-a">
          <div class="item">
            <div class="i-l" v-lazy:background-image="getAssetsFile('svg/seabetSport.svg')" />
            <div class="i-r">
              <div class="ir-a"><img v-lazy="getAssetsFile('svg/seabetSport.svg')" />{{ t('provider.btiSports') }}</div>
              <div class="ir-b">{{ t('btiSportIntro') }}</div>
              <div class="ir-c">
                <a class="btn btn-primary" @click="startGame('2110', GameType.Sports)">{{ t('startNow') }}</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-l" v-lazy:background-image="getAssetsFile('svg/SabaSports.svg')" />
            <div class="i-r">
              <div class="ir-a"><img v-lazy="getAssetsFile('svg/SabaSports.svg')" />{{ t('provider.sabaSports') }}</div>
              <div class="ir-b">{{ t('sabaSportIntro') }}</div>
              <div class="ir-c">
                <a class="btn btn-primary" @click="startGame('1439', GameType.Sports)">{{ t('startNow') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>-->

      <div class="sports-box">
        <div class="sb-items">
          <div class="item seabet">
            <div class="is-a">Seabet Sports</div>
            <div class="is-b">{{ t('btiSportIntro') }}</div>
            <!-- <ul class="is-c">
              <li><img :src="getAssetsFile('sports/seabet_icon_1.svg')" />{{ t('seabetSportDesc.0') }}</li>
              <li><img :src="getAssetsFile('sports/seabet_icon_2.svg')" />{{ t('seabetSportDesc.1') }}</li>
              <li><img :src="getAssetsFile('sports/seabet_icon_3.svg')" />{{ t('seabetSportDesc.2') }}</li>
              <li><img :src="getAssetsFile('sports/seabet_icon_4.svg')" />{{ t('seabetSportDesc.3') }}</li>
              <li><img :src="getAssetsFile('sports/seabet_icon_5.svg')" />{{ t('seabetSportDesc.4') }}</li>
            </ul> -->
            <div class="is-d">
              <a @click="startGame('2110', GameType.Sports)">{{ t('startNow') }}</a>
            </div>
          </div>
          <div class="item saba">
            <div class="is-a">Saba Sports</div>
            <div class="is-b">{{ t('sabaSportIntro') }}</div>
            <!-- <ul class="is-c">
              <li><img :src="getAssetsFile('sports/saba_icon_1.svg')" />{{ t('sabaSportDesc.0') }}</li>
              <li><img :src="getAssetsFile('sports/saba_icon_2.svg')" />{{ t('sabaSportDesc.1') }}</li>
              <li><img :src="getAssetsFile('sports/saba_icon_3.svg')" />{{ t('sabaSportDesc.2') }}</li>
              <li><img :src="getAssetsFile('sports/saba_icon_4.svg')" />{{ t('sabaSportDesc.3') }}</li>
              <li><img :src="getAssetsFile('sports/saba_icon_5.svg')" />{{ t('sabaSportDesc.4') }}</li>
            </ul> -->
            <div class="is-d">
              <a @click="startGame('1439', GameType.Sports)">{{ t('startNow') }}</a>
            </div>
          </div>
        </div>
        <!--<ul class="sb-items">
          <li class="i-seabet">
            <div class="is-a"><span>Seabet</span>Sports</div>
            <div class="is-b">{{ t('btiSportIntro') }}</div>
            <div class="is-c">

            </div>
          </li>
          <li class="i-saba">
            b
          </li>
        </ul>-->
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
