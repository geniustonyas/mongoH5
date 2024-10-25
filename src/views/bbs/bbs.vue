<template>
  <div class="page">
    <header class="m-header">
      <!--<div class="h-l" onclick="javascript: location.href='index.html'">
          <i class="mvfont mv-left"></i>
      </div>-->
      <div class="h-m">
        <a>收藏</a>
        <a class="active">最新</a>
        <a>热门</a>
      </div>
      <div class="h-r" @click="router.push({ name: 'search' })">
        <i class="mvfont mv-search1" />
      </div>
    </header>

    <main class="b-b-b">
      <div class="lb-b">
        <span class="active">最多评论</span>
        <span>最多点赞</span>
        <span>最多回复</span>
        <span>最多查看</span>
      </div>
      <ul class="bbs-list">
        <li @click="router.push({ name: 'bbsDetail', params: { id: 1 } })">
          <div class="l-l" :style="{ backgroundImage: `url(${getAssetsFile('u_video.png')})` }" />
          <div class="l-r">
            <div class="r-a">
              <div class="a-l">小芒果</div>
              <div class="a-r">2024-10-10</div>
            </div>
            <div class="r-b">纯欲双马尾女高学妹，被金主爸爸带到酒店沙发上爆操，不吃香菜 VS AAA建材老王的既视感【请复制链接到迅雷下载】</div>
            <div class="r-c pic9">
              <div class="item"><img :src="getAssetsFile('temp/m1.jpg')" /></div>
              <div class="item"><img :src="getAssetsFile('temp/m4.jpg')" /></div>
              <div class="item"><img :src="getAssetsFile('mv/m1.jpg')" /></div>
              <div class="item"><img :src="getAssetsFile('mv/m3.jpg')" /></div>
              <div class="item"><img :src="getAssetsFile('temp/m5.jpg')" /></div>
              <div class="item"><img :src="getAssetsFile('temp/m6.jpg')" /></div>
              <div class="item"><img :src="getAssetsFile('mv/m6.jpg')" /></div>
              <div class="item"><img :src="getAssetsFile('mv/m5.jpg')" /></div>
              <div class="item"><img :src="getAssetsFile('temp/m7.jpg')" /></div>
            </div>
            <div class="r-d">
              <div class="d-x">
                <span><i class="mvfont mv-pinglun" />5</span>
                <span><i class="mvfont mv-zan" />876</span>
                <span><i class="mvfont mv-like" />32</span>
              </div>
              <div class="d-x">
                <span><i class="mvfont mv-kan" />235</span>
              </div>
            </div>
          </div>
        </li>
        <!-- Repeat similar structure for other list items -->
      </ul>
    </main>
    <Footer active-menu="bbs" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Footer from '@/components/layout/Footer.vue'
import { getAssetsFile } from '@/utils/'

const router = useRouter()
</script>
