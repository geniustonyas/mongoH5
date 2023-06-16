<template>
  <header class="header">
    <nav class="head-menu">
      <div class="hm-l">
        <a @click="appStore.setSideBar(!appStore.showSideBar)" class="icon-btn navbar-left">
          <i class="iconfont icon-zhedie1" />
        </a>
      </div>
      <div class="hm-m" />
      <div class="hm-r">
        <a class="btn" @click="router.push({ name: 'reg' })">Register</a>
        <a class="btn btn-primary" @click="router.push({ name: 'login' })">Sign In</a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
const router = useRouter()
</script>
