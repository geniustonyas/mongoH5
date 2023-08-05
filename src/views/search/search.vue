<template>
  <div class="page">
    <header class="header">
      <div class="head-search">
        <b>{{ t('search') }}</b>
        <div class="search-box">
          <span><i class="iconfont icon-search" /></span>
          <input v-model="keywords" :placeholder="t('searchHolder')" />
        </div>
      </div>
    </header>
    <main class="main">
      <div v-if="keywords.length > 0" class="search-result">
        <div class="result-count">
          <span v-if="nodata || (keywords.length < 3 && keywords.length > 0)" class="noResult">{{ t('noSearchResult', { keyword: keywords }) }}</span>
          <span v-if="searchResult.length > 0" class="noResult">{{ t('searchResultNum', { searchResult: searchResult.length }) }}</span>
        </div>
        <div class="gamebox search">
          <div v-if="searchResult.length > 0" class="g-list row">
            <div v-for="(item, index) of searchResult" :key="index" class="item" @click="startGame(item)">
              <div class="i-bd">
                <div class="i-img">
                  <img v-lazy="appStore.cdnurl + item.img" />
                  <!-- <span class="red">FEATURED</span> -->
                </div>
                <div class="i-txt">
                  <strong>{{ item.name }}</strong>
                  <span>{{ item.pname }}</span>
                </div>
                <div class="i-btn">
                  <a>{{ t('enter') }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dl class="provider-list">
        <dt>{{ t('searchMore') }}</dt>
        <dd v-for="(item, index) of searchMoreList" :key="index" @click="router.push({ name: 'index', query: { tab: item.tab, providerId: item.id } })">
          <a><img v-lazy="item.img" />{{ item.name }}</a>
        </dd>
      </dl>

      <nav class="gamebox search">
        <div class="g-head">
          <div class="gh-t">
            <div class="gh-l">{{ t('searchRecommend') }}</div>
          </div>
        </div>
        <div v-if="recommendList.length > 0" class="g-list row">
          <div v-for="(item, index) of recommendList" :key="index" class="item" @click="startGame(item)">
            <div class="i-bd">
              <div class="i-img">
                <img v-lazy="appStore.cdnurl + item.imageName" />
                <!-- <span class="red">FEATURED</span> -->
              </div>
              <div class="i-txt">
                <strong>{{ item.gameName }}</strong>
                <span>ONETOUCH</span>
              </div>
              <div class="i-btn">
                <a>{{ t('enter') }}</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import Footer from '@/components/layout/Footer.vue'

import { getSearchGameApi, getGameRecommendApi, getGameUrlApi } from '@/api/game/index'
import { getSearchGameRespItem, recommendGameRespItem } from '@/api/game/types'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { providerList, providerListItemTypes } from '@/utils/gameProviders'

import { showConfirmDialog } from 'vant'
import { debounce } from 'lodash-es'
import { useI18n } from 'vue-i18n'

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
const { t } = useI18n()

// 搜索关键词
let keywords = ref('')
let searchResult = ref<getSearchGameRespItem[]>([])
// 推荐游戏列表
const recommendList = ref<recommendGameRespItem[]>([])
const nodata = ref(false)

// 搜索更多关键词列表-实际是跳转到首页对应的tab和providerId
const searchMoreList = ref<providerListItemTypes[]>([])
searchMoreList.value = providerList.filter((item: providerListItemTypes) => item.type != 'sports')

// 观察关键词变化, 3个字符以上才搜索, 否则不搜索
watch(keywords, () => {
  if (keywords.value.length >= 3) {
    getSearchGame()
  }
})

// 获取搜索结果, 防抖, 500ms, 3个字符以上才搜索, 否则不搜索, 3个字符以下清空搜索结果
const getSearchGame = debounce(function () {
  getSearchGameApi({ Keywords: keywords.value })
    .then((resp) => {
      searchResult.value = resp.data.items
      nodata.value = resp.data.items.length == 0
    })
    .catch((error) => {
      console.log(error)
    })
}, 500)

// 获取推荐游戏,
const getGameRecommend = () => {
  getGameRecommendApi({ id: 1, platform: 1 })
    .then((resp) => {
      recommendList.value = resp.data
    })
    .catch((error) => {
      console.log(error)
    })
}

// 开始游戏
const startGame = (game: getSearchGameRespItem | recommendGameRespItem) => {
  if (!userStore.userInfo.id) {
    showConfirmDialog({
      title: t('tips.noLogin'),
      message: t('tips.goLogin')
    })
      .then(() => {
        router.push({ name: 'login' })
      })
      .catch(() => {
        return false
      })
  } else {
    getGameUrlApi({ id: game.id, platform: 1 })
      .then((resp) => {
        window.location.href = resp.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

getGameRecommend()
</script>
