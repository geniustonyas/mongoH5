<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a href="javascript:void(0)" onclick="javascript:history.go(-1)">
          <i class="mvfont mv-left" />
        </a>
      </div>
      <div class="d-m">{{ $t('spare.title') }}</div>
    </header>
    <section class="s-h-b">
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-email_full" />
          <span>
            <b>{{ $t('spare.emailAddress') }}</b>
            <small>{{ $t('spare.emailDescription') }}</small>
          </span>
        </div>
        <div class="r-b">
          <div class="b-item">
            <a :href="`mailto:${appStore.spareData.Email}`">{{ appStore.spareData.Email }}</a>
            <span :data-clipboard-text="appStore.spareData.Email" @click="handleCopy"><i class="mvfont mv-fuzhi" />{{ $t('spare.copy') }}</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-guanwang" />
          <span>
            <b>{{ $t('spare.websiteAddress') }}</b>
            <small>{{ $t('spare.websiteDescription') }}</small>
          </span>
        </div>
        <div class="r-b">
          <div v-for="domain in appStore.spareData.Domains" :key="domain" class="b-item">
            <a>{{ domain }}</a>
            <span :data-clipboard-text="domain" @click="handleCopy"><i class="mvfont mv-fuzhi" />{{ $t('spare.copy') }}</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-telegram" />
          <span>
            <b>{{ $t('spare.advertisingCooperation') }}</b>
          </span>
        </div>
        <div class="r-b">
          <div class="b-item">
            <a :href="appStore.spareData.TG">{{ appStore.spareData.TG }}</a>
            <span :data-clipboard-text="appStore.spareData.TG" @click="handleCopy"><i class="mvfont mv-fuzhi" />{{ $t('spare.copy') }}</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-ie" />
          <span>
            <b>{{ $t('spare.recommendedBrowser') }}</b>
            <small>{{ $t('spare.browserDescription') }}</small>
          </span>
        </div>
        <div class="r-b">
          <div @click="downloadBrowser('chrome')" class="b-item">
            <a>{{ $t('spare.chromeBrowser') }}</a>
            <span><i class="mvfont mv-xiazai1" />{{ $t('spare.download') }}</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-erweima" />
          <span>
            <b>{{ $t('spare.qrCode') }}</b>
            <small>{{ $t('spare.qrCodeDescription') }}</small>
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
