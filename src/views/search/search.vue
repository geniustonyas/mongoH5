<template>
  <div class="page">
    <header class="header">
      <div class="head-search">
        <b>{{ t('search') }}</b>
        <div class="search-box">
          <span><i class="iconfont icon-search" /></span>
          <input v-model="Keywords" :placeholder="t('searchHolder')" />
        </div>
      </div>
    </header>
    <main class="main">
      <div class="search-result">
        <div class="result-count">
          <span v-if="nodata || (Keywords.length < 3 && Keywords.length > 0)" class="noResult">{{ t('noSearchResult', { keyword: Keywords }) }}</span>
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
        <dd>
          <a><img :src="getAssetsFile('svg/PragmaticPlay.svg')" />Pragmatic Pay</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/FBSports.svg')" />FB Sports</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/Evolution.svg')" />Evolution</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/BombayLive.svg')" />Bombay Live</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/Ezugi.svg')" />Ezugi</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/AsiaGaming.svg')" />Asia Gaming</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/PragmaticPlay.svg')" />Pragmatic Pay</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/Playingo.svg')" />Play'n Go</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/NetEnt.svg')" />NetEnt</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/PlayTech.svg')" />PlayTech</a>
        </dd>
      </dl>

      <nav class="gamebox search">
        <div class="g-head">
          <div class="gh-t">
            <div class="gh-l">{{ t('searchRecommend') }}</div>
          </div>
        </div>
        <div v-if="dataList.length > 0" class="g-list row">
          <div v-for="(item, index) of dataList" :key="index" class="item" @click="startGame(item)">
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

<script setup name="PromoPromo">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

import Footer from '@/components/layout/Footer.vue'

import { getSearchGameApi, getGameRecommendApi, getGameUrlApi } from '@/api/game/index'
import { useAppStore } from '@/store/modules/app'
import { useUserStore } from '@/store/modules/user'
import { getAssetsFile } from '@/utils'

import { showConfirmDialog } from 'vant'
import { debounce } from 'lodash-es'
import { useI18n } from 'vue-i18n'

const appStore = useAppStore()
const userStore = useUserStore()
const router = useRouter()
const { t } = useI18n()

let Keywords = ref('')
let searchResult = ref([])
const dataList = ref([])
const nodata = ref(false)

watch(Keywords, () => {
  if (Keywords.value.length >= 3) {
    getSearchGame()
  }
})

const getSearchGame = debounce(function () {
  if (Keywords.value.length < 3) {
    return false
  }
  getSearchGameApi({ Keywords: Keywords.value })
    .then((resp) => {
      searchResult.value = resp.data.items
      nodata.value = resp.data.items.length == 0
    })
    .catch((error) => {
      console.log(error)
    })
}, 500)

const getGameRecommend = () => {
  getGameRecommendApi({ id: 1, platform: 1 })
    .then((resp) => {
      dataList.value = resp.data
    })
    .catch((error) => {
      console.log(error)
    })
}

const startGame = (game) => {
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
