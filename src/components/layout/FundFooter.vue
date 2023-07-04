<template>
  <dl class="cur-lsit">
    <dt>{{ t('rewards') }}</dt>
    <dd>
      <a @click="router.push({ name: 'promo' })">
        <span> <i class="iconfont icon-rewards" />{{ t('promoCode') }}</span>
        <i class="iconfont icon-right" />
      </a>
    </dd>
    <dd>
      <a @click="router.push({ name: 'myReward' })">
        <span> <i class="iconfont icon-jiangli" />{{ t('rewards') }} </span>
        <i class="iconfont icon-right" />
      </a>
    </dd>
  </dl>
  <dl class="cur-lsit">
    <dt>{{ t('recentTransaction') }}</dt>
    <dd>
      <a @click="router.push({ name: 'tradeRecord' })">
        <span> <i class="iconfont icon-zzjl" />{{ t('transactionHistory') }} </span>
        <i class="iconfont icon-right" />
      </a>
    </dd>
  </dl>
  <dl class="cur-lsit">
    <dt>{{ t('supportSettings') }}</dt>
    <dd>
      <a @click="router.push({ name: 'walletSetting' })">
        <span> <i class="iconfont icon-setting" />{{ t('walletSettings') }}</span>
        <i class="iconfont icon-right" />
      </a>
    </dd>
    <dd>
      <a @click="router.push({ name: 'promo' })">
        <span> <i class="iconfont icon-guanyuwomen" />{{ t('faq') }} </span>
        <i class="iconfont icon-right" />
      </a>
    </dd>
    <dd>
      <a @click="router.push({ name: 'support' })">
        <span> <i class="iconfont icon-xiaoxi" />{{ t('liveSupport') }} </span>
        <i class="iconfont icon-right" />
      </a>
    </dd>
  </dl>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()
const { t } = useI18n()
</script>
