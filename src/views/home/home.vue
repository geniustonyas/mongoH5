<template>
  <div class="page">
    <header class="h-header">
      <div class="d-r">
        <a><i class="mvfont mv-kefu1" /></a>
        <a><i class="mvfont mv-setting" /></a>
      </div>
    </header>
    <section class="h-p-b">
      <div class="h-a">
        <div class="a-a">
          <div class="a-l">
            <img src="/assets/imgs/u_video.png" />
          </div>
          <div class="a-n">登录 / 注册</div>
        </div>
        <div class="a-b">
          <div class="b-l">
            <h3>新用户专项特惠</h3>
            <p>全球高清独家资源，免广告，专属线路</p>
          </div>
          <div class="b-r">
            <a>开通VIP</a>
          </div>
        </div>
        <div class="a-c">
          <a href="home-message.html"><i class="mvfont mv-tixing1-full" />我的消息</a>
          <a href="home-history.html"><i class="mvfont mv-zuji" />我的足迹</a>
          <a href="home-collect.html"><i class="mvfont mv-like_fill" />我的收藏</a>
          <a href="share.html"><i class="mvfont mv-fenxiang2" />分享好友</a>
        </div>
      </div>
      <div class="h-b">
        <ul class="au-rows">
          <li>
            <a href="#">
              <span> <i class="mvfont mv-appxiazai" />APP下载 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
          <li>
            <a href="#">
              <span> <i class="mvfont mv-fxlj" />永久地址 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
          <li>
            <a href="home-message.html">
              <span> <i class="mvfont mv-labax" />系统公告 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
          <li>
            <a href="#">
              <span> <i class="mvfont mv-zzjl" />购买记录 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
          <li>
            <a href="#">
              <span> <i class="mvfont mv-bets" />分享记录 </span>
              <i class="mvfont mv-right" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <Footer active-menu="home" />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/layout/Footer.vue'
</script>
