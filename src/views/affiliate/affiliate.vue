<template>
  <div class="myprofile-box">
    <div class="mp-list">
      <p class="p-t">支持</p>
      <ul class="list-group">
        <li :class="{ active: route.name == 'overview' }">
          <a @click="router.push({ name: 'overview' })">
            <span><i class="iconfont icon-gaishu" />概述 </span>
            <i class="iconfont icon-right" />
          </a>
        </li>
        <li :class="{ active: route.name == 'advantage' }">
          <a @click="router.push({ name: 'advantage' })">
            <span><i class="iconfont icon-youshi" />优势 </span>
            <i class="iconfont icon-right" />
          </a>
        </li>
        <li :class="{ active: route.name == 'retention' }">
          <a @click="router.push({ name: 'retention' })">
            <span><i class="iconfont icon-changjianwenti" />常见问题 </span>
            <i class="iconfont icon-right" />
          </a>
        </li>
      </ul>
      <p class="p-t">报表</p>
      <ul class="list-group">
        <li :class="{ active: route.name == 'dashboard' }">
          <a @click="router.push({ name: 'dashboard' })">
            <span><i class="iconfont icon-yibiaopan" />仪表盘</span>
            <i class="iconfont icon-right" />
          </a>
        </li>
        <li :class="{ active: route.name == 'memberInfo' }">
          <a @click="router.push({ name: 'memberInfo' })">
            <span><i class="iconfont icon-cyxx" />成员信息</span>
            <i class="iconfont icon-right" />
          </a>
        </li>
        <li :class="{ active: route.name == 'memberRecord' }">
          <a @click="router.push({ name: 'memberRecord' })">
            <span><i class="iconfont icon-cyjl" />成员记录</span>
            <i class="iconfont icon-right" />
          </a>
        </li>
        <li :class="{ active: route.name == 'memberDeposit' }">
          <a @click="router.push({ name: 'memberDeposit' })">
            <span><i class="iconfont icon-cydc" />成员代存</span>
            <i class="iconfont icon-right" />
          </a>
        </li>

        <li :class="{ active: route.name == 'commission' }">
          <a @click="router.push({ name: 'commission' })">
            <span><i class="iconfont icon-yongjin1" />佣金报表</span>
            <i class="iconfont icon-right" />
          </a>
        </li>
        <li :class="{ active: route.name == 'finance' }">
          <a @click="router.push({ name: 'finance' })">
            <span><i class="iconfont icon-caiwu" />财务报表</span>
            <i class="iconfont icon-right" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import BigNumber from 'bignumber.js'
import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const { t } = useI18n()
</script>
