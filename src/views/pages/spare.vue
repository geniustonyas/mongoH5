<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a href="javascript:void(0)" onclick="javascript:history.go(-1)"><i class="mvfont mv-left" /></a>
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
            <a>mg91.tv@gmail.com</a><span data-clipboard-text="mg91.tv@gmail.com" @click="handleCopy"><i class="mvfont mv-fuzhi" />复制</span>
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
          <div class="b-item">
            <a>mg97.cc</a><span data-clipboard-text="mg97.cc" @click="handleCopy"><i class="mvfont mv-fuzhi" />复制</span>
          </div>
          <div class="b-item">
            <a>mg41.cc</a><span data-clipboard-text="mg41.cc" @click="handleCopy"><i class="mvfont mv-fuzhi" />复制</span>
          </div>
          <div class="b-item">
            <a>mg42.cc</a><span data-clipboard-text="mg42.cc" @click="handleCopy"><i class="mvfont mv-fuzhi" />复制</span>
          </div>
        </div>
      </div>
      <div class="s-row">
        <div class="r-a">
          <i class="mvfont mv-telegram" />
          <span>
            <b>TG频道</b>
            <small>关注我们，获取最新信息</small>
          </span>
        </div>
        <div class="r-b">
          <div class="b-item">
            <a href="https://t.me/cai7899">https://t.me/cai7899</a><span data-clipboard-text="https://t.me/cai7899" @click="handleCopy"><i class="mvfont mv-fuzhi" />复制</span>
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
            <a>谷歌浏览器</a><span><i class="mvfont mv-xiazai1" />下载</span>
          </div>
          <div @click="downloadBrowser('quark')" class="b-item">
            <a>夸克浏览器</a><span><i class="mvfont mv-xiazai1" />下载</span>
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
            <img src="../../assets/imgs/qr.png" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { copy } from '@/utils/index'

  const handleCopy = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement
    const text = target.getAttribute('data-clipboard-text')
    if (text) {
      copy(`[data-clipboard-text="${text}"]`)
    }
  }

  const downloadBrowser = (browser: string) => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera
    if (/android/i.test(userAgent)) {
      // Android
      if (browser === 'chrome') {
        window.open('https://play.google.com/store/apps/details?id=com.android.chrome', '_blank')
      } else if (browser === 'quark') {
        window.open('https://www.myquark.cn/', '_blank')
      }
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // iOS
      if (browser === 'chrome') {
        window.open('https://apps.apple.com/us/app/google-chrome/id535886823', '_blank')
      } else if (browser === 'quark') {
        window.open('https://apps.apple.com/cn/app/id1127253508', '_blank')
      }
    } else {
      // Web
      if (browser === 'chrome') {
        window.open('https://www.google.com/chrome/', '_blank')
      } else if (browser === 'quark') {
        window.open('https://www.myquark.cn/', '_blank')
      }
    }
  }

  onMounted(() => {
    // 只对有 data-clipboard-text 属性的元素进行复制绑定
    copy('[data-clipboard-text]')
  })
</script>
