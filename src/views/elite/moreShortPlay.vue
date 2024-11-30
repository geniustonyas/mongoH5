<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="router.go(-1)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">短剧</div>
      <div class="d-r">
        <i class="mvfont mv-search1" />
      </div>
    </header>
    <main class="b-m-b">
      <nav class="b-m">
        <div class="m-row">
          <span class="active">全部</span>
          <span>霸总</span>
          <span>甜宠</span>
          <span>复仇</span>
          <span>逆袭</span>
          <span>穿越</span>
          <span>古风</span>
          <span>都市</span>
          <span>民国</span>
          <span>玄幻</span>
          <span>其他</span>
        </div>
        <div class="m-row">
          <span class="active">全部</span>
          <span>女频</span>
          <span>男频</span>
        </div>
        <div class="m-row">
          <span class="active">全部</span>
          <span>最新</span>
          <span>最热</span>
          <span>好评</span>
          <span>收藏</span>
        </div>
      </nav>
      <!-- <ul class="b-u-l">
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v1.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v2.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v3.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v4.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v5.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v6.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v7.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v8.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v2.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v3.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v4.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v5.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v1.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v3.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v4.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
        <li @click="router.push({ name: 'play', params: { id: 1 } })">
          <div class="l-a" :style="{ backgroundImage: `url(${getAssetsFile('mv/v5.jpg')})` }">
            <a class="a-a"><i class="mvfont mv-bofang2" />108.9万</a>
          </div>
          <div class="l-b">
            <p>明天我依然爱你</p>
            <span><small>都市</small>全70集</span>
          </div>
        </li>
      </ul> -->
    </main>
  </div>
</template>

<script setup lang="ts">
// import { useAppStore } from '@/store/app'
import { useRouter } from 'vue-router'
// import { getAssetsFile } from '@/utils'

const router = useRouter()
// const appStore = useAppStore()
</script>
