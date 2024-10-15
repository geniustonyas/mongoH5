<template>
  <div class="page">
    <section class="v-l-b">
      <div class="v-box">
        <div class="v-a">
          <video loop="loop" src="https://imp.volccdn.com/obj/vcloud-imp-lite/vcloudlite_sv_phone1.mp4" poster="" autoplay="autoplay" webkit-playsinline="" playsinline="" class="uni-video-video" />
        </div>
        <div class="v-b">
          <a><img src="assets/imgs/u_video.png" /><small>免</small></a>
          <a><i class="mvfont mv-xihuan" /><b>999</b></a>
          <a><i class="mvfont mv-shoucang" /><b>53</b></a>
          <a><i class="mvfont mv-zhuanfa" /></a>
        </div>
        <div class="v-c">
          <h3>@芒果TV</h3>
          <p>
            随时随地看视频，这个就是视频的标题，先占个位置
            <span>#国产</span><span>#高清</span><span>#老师</span>
          </p>
        </div>
      </div>
    </section>
    <Footer active-menu="shortVideo" />
  </div>
</template>

<script setup lang="ts">
import { getAssetsFile } from '@/utils'
import Footer from '@/components/layout/Footer.vue'
</script>
