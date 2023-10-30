<template>
  <div class="page">
    <CommonHeader :title="t('affiliateTitle')" />
    <main class="main">
      <div class="myprofile-box">
        <div class="mp-list">
          <p>{{ t('affiliateSupport') }}</p>
          <ul class="list-group">
            <li :class="{ active: route.name == 'overview' }">
              <a @click="router.push({ name: 'overview' })">
                <span><i class="iconfont icon-gaishu" />{{ t('overview') }} </span>
                <i class="iconfont icon-right" />
              </a>
            </li>
            <li :class="{ active: route.name == 'advantage' }">
              <a @click="router.push({ name: 'advantage' })">
                <span><i class="iconfont icon-youshi" />{{ t('advantage') }} </span>
                <i class="iconfont icon-right" />
              </a>
            </li>
            <li :class="{ active: route.name == 'retention' }">
              <a @click="router.push({ name: 'retention' })">
                <span><i class="iconfont icon-changjianwenti" />{{ t('affiliateQuestion') }} </span>
                <i class="iconfont icon-right" />
              </a>
            </li>
          </ul>
          <template v-if="userStore.userInfo.id != ''">
            <p>{{ t('manage') }}</p>
            <ul class="list-group">
              <li :class="{ active: route.name == 'dashboard' }">
                <a @click="router.push({ name: 'dashboard' })">
                  <span><i class="iconfont icon-yibiaopan" />{{ t('dashboard') }} </span>
                  <i class="iconfont icon-right" />
                </a>
              </li>
              <li :class="{ active: route.name == 'memberInfo' }">
                <a @click="router.push({ name: 'memberInfo' })">
                  <span><i class="iconfont icon-cyxx" />{{ t('memberInfo') }} </span>
                  <i class="iconfont icon-right" />
                </a>
              </li>
              <li :class="{ active: route.name == 'memberRecord' }">
                <a @click="router.push({ name: 'memberRecord' })">
                  <span><i class="iconfont icon-cyjl" />{{ t('memberRecord') }} </span>
                  <i class="iconfont icon-right" />
                </a>
              </li>
              <li :class="{ active: route.name == 'memberDeposit' }">
                <a @click="router.push({ name: 'memberDeposit' })">
                  <span><i class="iconfont icon-cydc" />{{ t('memberDeposit') }} </span>
                  <i class="iconfont icon-right" />
                </a>
              </li>
              <li :class="{ active: route.name == 'commission' }">
                <a @click="router.push({ name: 'commission' })">
                  <span><i class="iconfont icon-yongjin1" />{{ t('commissionReport') }}</span>
                  <i class="iconfont icon-right" />
                </a>
              </li>
              <li :class="{ active: route.name == 'finance' }">
                <a @click="router.push({ name: 'finance' })">
                  <span><i class="iconfont icon-caiwu" />{{ t('financeReport') }}</span>
                  <i class="iconfont icon-right" />
                </a>
              </li>
            </ul>
          </template>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useUserStore } from '@/store/modules/user'

import CommonHeader from '@/components/layout/CommonHeader.vue'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const { t } = useI18n()
</script>
