<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a href="javascript:void(0)" onclick="javascript:history.go(-1)">
          <i class="mvfont mv-left" />
        </a>
      </div>
      <div class="d-m">回家不迷路</div>
    </header>
    <section class="s-h-b">
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-email_full" />
          <span>
            <b>邮箱地址</b>
            <small>发任意邮件到以下邮箱，获取最新地址</small>
          </span>
        </div>
        <div class="r-b">
          <div class="b-item">
            <a :href="`mailto:${appStore.spareData.Email}`">{{ appStore.spareData.Email }}</a>
            <span :data-clipboard-text="appStore.spareData.Email" @click="handleCopy"><i class="mvfont mv-fuzhi" />复制</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-guanwang" />
          <span>
            <b>官网地址</b>
            <small>官网地址，收藏关注不迷路</small>
          </span>
        </div>
        <div class="r-b">
          <div v-for="domain in appStore.spareData.Domains" :key="domain" class="b-item">
            <a>{{ domain }}</a>
            <span :data-clipboard-text="domain" @click="handleCopy"><i class="mvfont mv-fuzhi" />复制</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-telegram" />
          <span>
            <b>广告合作</b>
            <!-- <small>关注我们，获取最新信息</small> -->
          </span>
        </div>
        <div class="r-b">
          <div class="b-item">
            <a :href="appStore.spareData.TG">{{ appStore.spareData.TG }}</a>
            <span :data-clipboard-text="appStore.spareData.TG" @click="handleCopy"><i class="mvfont mv-fuzhi" />复制</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-ie" />
          <span>
            <b>推荐浏览器</b>
            <small>提升播放体验,建议使用以下浏览器</small>
          </span>
        </div>
        <div class="r-b">
          <div @click="downloadBrowser('chrome')" class="b-item">
            <a>谷歌浏览器</a>
            <span><i class="mvfont mv-xiazai1" />下载</span>
          </div>
          <div @click="downloadBrowser('quark')" class="b-item">
            <a>夸克浏览器</a>
            <span><i class="mvfont mv-xiazai1" />下载</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-erweima" />
          <span>
            <b>二维码</b>
            <small>长按保存二维码，请分享给身边的</small>
          </span>
        </div>
        <div class="r-c">
          <a href="#">
            <img v-lazy-decrypt="appStore.spareData.QR" />
          </a>
        </div>
      </div>
    </section>
    <NavBar active-menu="index" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { copy } from '@/utils/index'
import { useAppStore } from '@/store/app'
import NavBar from '@/components/layout/NavBar.vue'

const appStore = useAppStore()

const handleCopy = (event: MouseEvent) => {
  const target = event.currentTarget as HTMLElement
  const text = target.getAttribute('data-clipboard-text')
  if (text) {
    copy(`[data-clipboard-text="${text}"]`)
  }
}

const downloadBrowser = (browser: string) => {
  //@ts-ignore
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  if (/android/i.test(userAgent)) {
    if (browser === 'chrome') {
      window.open('https://play.google.com/store/apps/details?id=com.android.chrome', '_blank')
    } else if (browser === 'quark') {
      window.open('https://www.myquark.cn/', '_blank')
    }
    //@ts-ignore
  } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    if (browser === 'chrome') {
      window.open('https://apps.apple.com/us/app/google-chrome/id535886823', '_blank')
    } else if (browser === 'quark') {
      window.open('https://apps.apple.com/cn/app/id1127253508', '_blank')
    }
  } else {
    if (browser === 'chrome') {
      window.open('https://www.google.com/chrome/', '_blank')
    } else if (browser === 'quark') {
      window.open('https://www.myquark.cn/', '_blank')
    }
  }
}

onMounted(() => {
  copy('[data-clipboard-text]')
})
</script>
