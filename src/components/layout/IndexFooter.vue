<template>
  <nav class="m-mail">
    <form method="GET" ref="formDom" target="_blank">
      <!-- <div> -->
      <div class="mail-title">{{ t('keepContact') }}</div>
      <div class="mail-cont">
        <input v-model="email" type="email" name="EMAIL" class="required email" id="mce-EMAIL" :placeholder="t('emailAddress')" />
        <span class="btn btn-primary" @click="subscript">{{ t('subscribe') }}</span>
      </div>
      <div id="emailTip" class="tip" />
      <div class="mail-tip">
        {{ t('outAny') }} <br />
        {{ t('subBefore') }}
        <a @click="router.push({ name: 'terms', params: { type: 'privacy' } })">{{ t('privacyPolicy') }} </a>
        {{ t('subAfter') }}
      </div>
      <!-- </div> -->
    </form>
  </nav>
  <!-- 汇率 -->
  <nav class="m-rate">
    1
    <b>{{ props.currencyCode }}</b>
    = {{ props.exchangeRate }}
    <b>USDT</b>
  </nav>

  <!-- 游戏协议条款 -->
  <nav class="m-term">
    <dl>
      <dt>{{ site_name.split('.')[0] }}</dt>
      <dd>
        <a @click="router.push({ name: 'promo' })">{{ t('promotions') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'newVip' })">{{ t('vipClub') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'mall' })">{{ t('mallStore') }}</a>
      </dd>
      <dd>
        <a @click="router.push({ name: 'affiliate' })">{{ t('affiliate') }}</a>
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
        <a @click="router.push({ name: 'terms', params: { type: 'privacy' } })">{{ t('privacyPolicy') }}</a>
      </dd>
    </dl>
    <dl>
      <dt>{{ t('followUs') }}</dt>
      <dd>
        <a target="_blank" :href="appStore.followUrl.facebook">Facebook <i class="iconfont icon-share" /></a>
      </dd>
      <dd>
        <a target="_blank" :href="appStore.followUrl.twitter">Twitter <i class="iconfont icon-share" /></a>
      </dd>
      <dd>
        <a target="_blank" :href="appStore.followUrl.instagram">Instagram <i class="iconfont icon-share" /></a>
      </dd>
      <dd>
        <a target="_blank" :href="appStore.followUrl.youtube">Youtube <i class="iconfont icon-share" /></a>
      </dd>
      <dd>
        <a target="_blank" :href="appStore.followUrl.tiktok">Tiktok <i class="iconfont icon-share" /></a>
      </dd>
    </dl>
    <dl>
      <dt>{{ t('support2') }}</dt>
      <dd>
        <a @click="router.push({ name: 'terms', params: { type: 'fairness' } })">{{ t('fairness') }}</a>
      </dd>
      <dd>
        <a :href="appStore.subscribeUrl" target="_blank">{{ t('subscribeEmail') }}</a>
      </dd>
      <!-- <dd>
        <a @click="router.push({ name: 'support' })">{{ t('liveSupport') }}<i class="iconfont icon-share" /></a>
      </dd>
      <dd>
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
      <dd v-for="(item, index) of currencyList" :key="index">
        <a href="#"><img :src="getAssetsFile(item.icon)" /></a>
      </dd>
    </dl>
  </nav>

  <!-- 许可证与安全性 -->
  <nav class="m-security">
    <dl>
      <dt>{{ t('licencesSecurity') }}</dt>
      <dd class="pacor">
        <a href="#">
          <img :src="getAssetsFile('svg/ls-0.svg')" />
        </a>
      </dd>
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
  <FooterLanguage ref="langDom" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import FooterLanguage from '@/components/FooterLanguage.vue'

// import { subscribeApi } from '@/api/user'
import { currenyListData } from '@/utils/config'
import { getAssetsFile } from '@/utils'
import { languages } from '@/i18n/index'
import { useAppStore } from '@/store/modules/app'
import { isEmail } from '@/utils/validate'

// import { showToast } from 'vant'

const site_name = import.meta.env.VITE_APP_SITE_NAME

const appStore = useAppStore()
const router = useRouter()
const { t, locale } = useI18n()

const props = defineProps({
  currencyCode: { type: String, required: true, default: '' },
  exchangeRate: { type: String, required: true, default: '' }
})

const currencyList = currenyListData()

// 语言选择组件dom
let langDom = ref()

const formDom = ref<HTMLElement | null>(null)

const email = ref('')
let errorMsg = ref('')

// 显示语言选择框
const showLanguage = () => {
  if (langDom.value) {
    langDom.value.showLangPick = true
  }
}

const subscript = () => {
  const dm = document.getElementById('emailTip')
  if (!isEmail(email.value)) {
    errorMsg.value = t('tips.isEmail')
    dm!.innerHTML = errorMsg.value
    return false
  } else {
    errorMsg.value = ''
    dm!.innerHTML = ''
    //@ts-ignore
    formDom.value.action = appStore.subscribeUrl + '?email=' + email.value
    //@ts-ignore
    formDom.value.submit()
    // subscribeApi({ email: email.value })
    //   .then((resp) => {
    //     console.log(resp)
    //     showToast(t('subscribeSuccess'))
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     showToast(t('subscribeFail'))
    //   })
  }
}
</script>
