<template>
  <!-- 汇率 -->
  <nav class="m-rate">
    1
    <b>{{ props.currencyCode }}</b>
    = {{ moneyFormat(props.exchangeRate) }}
    <b>USDT</b>
  </nav>

  <!-- 游戏协议条款 -->
  <nav class="m-term">
    <dl>
      <dt>{{ site_name }}</dt>
      <dd>
        <a @click="router.push({ name: 'promo' })">{{ t('promotions') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'terms', params: { type: 'vip' } })">{{ t('vipClub') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'mall' })">{{ t('mallStore') }}</a>
      </dd>
    </dl>
    <dl>
      <dt>{{ t('game') }}</dt>
      <dd>
        <a @click="router.push({ name: 'sports' })">{{ t('sports') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'casino' })">{{ t('liveCasino') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'slots' })">{{ t('slots') }}</a>
      </dd>
    </dl>
    <dl>
      <dt>{{ t('aboutUs') }}</dt>
      <dd>
        <a @click="router.push({ name: 'terms', params: { type: 'rules' } })">{{ t('html.rulesTitle') }} </a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'terms', params: { type: 'responsible' } })">{{ t('html.responsibleTitle') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'terms', params: { type: 'aml' } })">{{ t('html.amlTitle') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'terms', params: { type: 'selfExclusion' } })">{{ t('html.selfExclusionTitle') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'terms', params: { type: 'rules' } })">{{ t('html.fairnessTitle') }}</a>
      </dd>
    </dl>
    <dl>
      <dt>{{ t('followUs') }}</dt>
      <dd>
        <a href="#">Facebook <i class="iconfont icon-share" /></a>
      </dd>
      <dd>
        <a href="#">Twitter <i class="iconfont icon-share" /></a>
      </dd>
      <dd>
        <a href="#">Instagram <i class="iconfont icon-share" /></a>
      </dd>
      <dd>
        <a href="#">Youtube <i class="iconfont icon-share" /></a>
      </dd>
      <dd>
        <a href="#">Tiktok <i class="iconfont icon-share" /></a>
      </dd>
    </dl>
    <dl>
      <dt>{{ t('onlineSupport') }}</dt>
      <!-- <dd>
            <a @click="toggleTab('srpots')">{{ t('fairness') }}</a>
          </dd> -->
      <dd>
        <a @click="router.push({ name: 'support' })">{{ t('liveSupport') }}<i class="iconfont icon-share" /></a>
      </dd>
      <!-- <dd>
            <a @click="toggleTab('sports')">{{ t('helpCenter') }}</a>
          </dd> -->
    </dl>
    <dl>
      <dt>{{ t('language') }}</dt>
      <dd class="lang">
        <div class="form-control m-lang" @click.prevent="showLanguage()">
          <span>{{ languages.find((item) => item.value == locale)?.text }}</span>
          <i class="iconfont icon-right" />
        </div>
      </dd>
    </dl>
  </nav>

  <!-- 支持的加密货币 -->
  <nav class="m-accepted">
    <dl>
      <dt>{{ t('acceptCrypto') }}</dt>
      <dd>
        <a href="#"><img :src="getAssetsFile('payment/btc.png')" /></a>
      </dd>
      <dd>
        <a href="#"><img :src="getAssetsFile('payment/ltc.png')" /></a>
      </dd>
      <dd>
        <a href="#"><img :src="getAssetsFile('payment/tether.png')" /></a>
      </dd>
      <dd>
        <a href="#"><img :src="getAssetsFile('payment/eth.png')" /></a>
      </dd>
      <dd>
        <a href="#"><img :src="getAssetsFile('payment/trx.png')" /></a>
      </dd>
      <dd>
        <a href="#"><img :src="getAssetsFile('payment/cardano.svg')" /></a>
      </dd>
      <dd>
        <a href="#"><img :src="getAssetsFile('payment/busd.svg')" /></a>
      </dd>
      <dd>
        <a href="#"><img :src="getAssetsFile('payment/bnb.svg')" /></a>
      </dd>
    </dl>
  </nav>

  <!-- 许可证与安全性 -->
  <nav class="m-security">
    <dl>
      <dt>{{ t('licencesSecurity') }}</dt>
      <dd>
        <a href="#">
          <img :src="getAssetsFile('svg/ls-1.svg')" />
        </a>
      </dd>
      <dd>
        <a href="#">
          <img :src="getAssetsFile('svg/ls-2.svg')" />
        </a>
      </dd>
      <dd>
        <a href="#">
          <img :src="getAssetsFile('svg/ls-3.svg')" />
        </a>
      </dd>
      <dd>
        <a href="#">
          <img :src="getAssetsFile('svg/ls-4.svg')" />
        </a>
      </dd>
      <dd>
        <a href="#">
          <img :src="getAssetsFile('svg/ls-5.svg')" />
        </a>
      </dd>
      <dd>
        <a href="#">
          <img :src="getAssetsFile('svg/ls-6.svg')" />
        </a>
      </dd>
    </dl>
  </nav>

  <!-- 语言选择组件 -->
  <Language ref="langDom" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import Language from '@/components/Language.vue'

import { moneyFormat, getAssetsFile } from '@/utils'
import { languages } from '@/i18n/index'

const site_name = import.meta.env.VITE_APP_SITE_NAME

const router = useRouter()
const { t, locale } = useI18n()

const props = defineProps({
  currencyCode: { type: String, required: true, default: '' },
  exchangeRate: { type: String, required: true, default: '' }
})

// 语言选择组件dom
let langDom = ref()

// 显示语言选择框
const showLanguage = () => {
  if (langDom.value) {
    langDom.value.showLangPick = true
  }
}
</script>
