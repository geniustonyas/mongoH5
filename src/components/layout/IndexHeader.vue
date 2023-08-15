<template>
  <header class="header">
    <nav :class="userStore.userInfo.id == '' ? 'head-menu' : 'head-menu top-head'">
      <!-- logo 跳转主页 -->
      <div class="hm-l">
        <a @click="appStore.showSideBar = !appStore.showSideBar" class="icon-btn navbar-left">
          <i :class="appStore.showSideBar ? 'iconfont icon-close' : 'iconfont icon-zhedie1'" />
        </a>
        <!-- <a v-if="userStore.userInfo.id == ''" class="icon-btn" @click="router.push({ name: 'mall' })">
          <i class="iconfont icon-shangcheng" />
        </a> -->
      </div>

      <!-- 用户信息 -->
      <div class="hm-m">
        <template v-if="userStore.userInfo.id">
          <div class="user-info" @click="router.push({ name: 'fund' })">
            <b>{{ userStore.userInfo.userName }}</b>
            <a>
              <label>+</label>
              <span>{{ moneyFormat(userStore.userInfo?.balance) }}</span>
              {{ userStore.userInfo?.defaultCurrencyCode == 'BTC' ? userStore.userInfo?.btcUnit?.currencyUnit : userStore.userInfo?.defaultCurrencyCode }}
            </a>
          </div>
        </template>
      </div>

      <!-- 积分商城或登录注册 -->
      <div class="hm-r">
        <template v-if="userStore.userInfo.id">
          <a class="icon-btn" @click="router.push({ name: 'clubHouse' })">
            <img :src="getAssetsFile(`grade/${userStore.userInfo.vipCode}.png`)" />
          </a>
          <a class="icon-btn" @click="router.push({ name: 'mall' })">
            <i class="iconfont icon-shangcheng" />
          </a>
          <a class="icon-btn" @click="loginTo('message')">
            <i class="iconfont icon-message" />
            <em v-if="userStore.newMessageCount > 0" class="badge" />
          </a>
        </template>
        <template v-else>
          <a class="btn" @click="router.push({ name: 'reg' })">{{ t('reg') }}</a>
          <a class="btn btn-primary" @click="router.push({ name: 'login' })">{{ t('login') }}</a>
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { moneyFormat, getAssetsFile, loginTo } from '@/utils'

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
const { t } = useI18n()
</script>
