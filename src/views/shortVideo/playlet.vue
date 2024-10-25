<template>
  <div class="page video-page">
    <header class="m-header h-video">
      <div class="h-m">
        <a @click="router.push({ name: 'shortVideo' })">抖阴</a>
        <a @click="router.push({ name: 'shortPlay' })" class="active">短剧</a>
      </div>
      <div class="h-r">
        <i class="mvfont mv-search1" />
      </div>
    </header>

    <section class="vp-main">
      <div class="vm-a">
        <a @click="router.push({ name: 'moreShortPlay' })">更多热门短剧<i class="mvfont mv-right" /></a>
      </div>
      <div class="vm-b">
        <div class="v-a">
          <video id="myVideo" muted="true" autoplay="true" preload="auto" loop="true" x5-video-player-fullscreen="true" x5-playsinline="true" playsinline="true" webkit-playsinline="true">
            <source src="https://media.xfollow.com/media/fans/post_public/3754/37540807/781680.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="v-b">
          <a><img :src="getAssetsFile('logo-1.png')" /><!--<small>免</small>--></a>
          <a><i class="mvfont mv-xihuan" /><b>999</b></a>
          <a><i class="mvfont mv-shoucang" /><b>53</b></a>
          <a><i class="mvfont mv-zhuanfa" /><b>分享</b></a>
        </div>
        <div class="v-d">
          <div class="d-a">
            <a @click="router.push({ name: 'moreShortPlay' })"><i class="mvfont mv-dianji" />点击查看更多短剧<i class="mvfont mv-right" /></a>
          </div>
          <div class="d-b">
            <h3>@芒果短剧-永久域名:mg91.tv</h3>
            <p>第2集<small>|</small>雇人假结婚被抓包？不过女主是专业的，看合约夫妻如何反击！</p>
          </div>
          <div class="d-c" @click="isMoreEpisodesVisible = !isMoreEpisodesVisible">
            <div class="c-l"><img :src="getAssetsFile('logo-2.png')" />短剧<b>●</b>三十天而已<span>更新至第3集</span></div>
            <div class="c-r">
              <i class="mvfont mv-right" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-show="isMoreEpisodesVisible" class="layer-box t50" id="moreEpisodes">
      <div class="lb-bd flex-end">
        <div class="layer-moreEpisodes">
          <div class="m-a">
            <div class="ma-t">
              <div class="t-l"><img :src="getAssetsFile('logo-2.png')" />短剧<b>●</b>三十天而已<span>更新至第3集</span></div>
              <div class="t-r" @click="isMoreEpisodesVisible = false">
                <i class="mvfont mv-close" />
              </div>
            </div>
            <div class="ma-b">
              <span class="active">选集</span>
              <span>热门短剧</span>
              <span>猜你喜欢</span>
            </div>
          </div>
          <div class="m-b">
            <ul class="p-l-i">
              <li>
                <div class="l-l" :style="{ backgroundImage: `url(${getAssetsFile('mv/v1.jpg')})` }" />
                <div class="l-r">
                  <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                  <div class="r-b">
                    <span>02:46</span>
                    <span><i class="mvfont mv-bofang2" />48.1万</span>
                    <span><i class="mvfont mv-like" />2982</span>
                    <span><i class="mvfont mv-zan" />2982</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-l" :style="{ backgroundImage: `url(${getAssetsFile('mv/v1.jpg')})` }" />
                <div class="l-r">
                  <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是先占个位置，后面在说</div>
                  <div class="r-b">
                    <span>02:46</span>
                    <span><i class="mvfont mv-bofang2" />48.1万</span>
                    <span><i class="mvfont mv-like" />2982</span>
                    <span><i class="mvfont mv-zan" />2982</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-l" :style="{ backgroundImage: `url(${getAssetsFile('mv/v1.jpg')})` }" />
                <div class="l-r">
                  <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                  <div class="r-b">
                    <span>02:46</span>
                    <span><i class="mvfont mv-bofang2" />48.1万</span>
                    <span><i class="mvfont mv-like" />2982</span>
                    <span><i class="mvfont mv-zan" />2982</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-l" :style="{ backgroundImage: `url(${getAssetsFile('mv/v1.jpg')})` }" />
                <div class="l-r">
                  <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是先占个位置，后面在说</div>
                  <div class="r-b">
                    <span>02:46</span>
                    <span><i class="mvfont mv-bofang2" />48.1万</span>
                    <span><i class="mvfont mv-like" />2982</span>
                    <span><i class="mvfont mv-zan" />2982</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-l" :style="{ backgroundImage: `url(${getAssetsFile('mv/v1.jpg')})` }" />
                <div class="l-r">
                  <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是...</div>
                  <div class="r-b">
                    <span>02:46</span>
                    <span><i class="mvfont mv-bofang2" />48.1万</span>
                    <span><i class="mvfont mv-like" />2982</span>
                    <span><i class="mvfont mv-zan" />2982</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-l" :style="{ backgroundImage: `url(${getAssetsFile('mv/v1.jpg')})` }" />
                <div class="l-r">
                  <div class="r-a">第一集<small>|</small>女主播被爆养狗不养老，真相竟然是先占个位置，后面在说</div>
                  <div class="r-b">
                    <span>02:46</span>
                    <span><i class="mvfont mv-bofang2" />48.1万</span>
                    <span><i class="mvfont mv-like" />2982</span>
                    <span><i class="mvfont mv-zan" />2982</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="m-c">
            <a><i class="mvfont mv-like" />收藏短剧</a>
            <a @click="router.push({ name: 'moreShortPlay' })"><i class="mvfont mv-home" />短剧首页</a>
          </div>
        </div>
      </div>
    </div>

    <Footer active-menu="shortVideo" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Footer from '@/components/layout/Footer.vue'
import { useAppStore } from '@/store/app'
import { useUserStore } from '@/store/user'
import { getAssetsFile } from '@/utils'

const router = useRouter()
const route = useRoute()
const appStore = useAppStore()
const userStore = useUserStore()

const isMoreEpisodesVisible = ref(false)
</script>
