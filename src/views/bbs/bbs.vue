<template>
  <div class="page">
    <header class="header">
      <div class="head-search">
        <div class="hs-a">
          <img :src="getAssetsFile('logo.png')" />
        </div>
        <div class="hs-b">
          <div class="sb-i">
            <input />
            <i class="mvfont mv-search1" />
          </div>
          <div class="swiper-container sb-t" style="line-height: 50px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide">搜索关键字</div>
              <div class="swiper-slide">永久域名:<span>mg51.tv</span></div>
              <div class="swiper-slide">永久域名:<span>mg91.tv</span></div>
            </div>
          </div>
        </div>
        <div class="hs-c">
          <a class="c-hot" @click="router.push({ name: 'hotVideo' })"><i class="mvfont mv-zhutirebangbeifen" /></a>
        </div>
      </div>
      <div class="head-tabs">
        <div class="hm-a">
          <span class="active">最新</span>
          <span>热门</span>
          <span>收藏</span>
        </div>
        <div class="hm-b">
          <span>最多评论</span>
          <a><i class="mvfont mv-xia" /></a>
        </div>
      </div>
    </header>

    <main class="b-b-b">
      <ul class="bbs-list">
        <li @click="router.push({ name: 'bbsDetail' })">
          <div class="i-a">
            <div class="a-l">
              <img :src="getAssetsFile('u_video.png')" />
              <div class="l-n">
                <h3>小芒果</h3>
                <span>2024-10-10</span>
              </div>
            </div>
            <div class="a-r" />
          </div>
          <div class="i-b">纯欲双马尾女高学妹，被金主爸爸带到酒店沙发上爆操，不吃香菜 VS AAA建材老王的既视感【请复制链接到迅雷下载】</div>
          <div class="i-c pic9">
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
          <div class="i-d">
            <div class="d-x">
              <span><i class="mvfont mv-pinglun" />5</span>
              <span><i class="mvfont mv-zan" />876</span>
              <span><i class="mvfont mv-like" />32</span>
            </div>
            <div class="d-x">
              <span><i class="mvfont mv-kan" />235</span>
            </div>
          </div>
        </li>

        <li @click="router.push({ name: 'bbsDetail' })">
          <div class="i-a">
            <div class="a-l">
              <img :src="getAssetsFile('u_video.png')" />
              <div class="l-n">
                <h3>小芒果</h3>
                <span>2024-10-10</span>
              </div>
            </div>
            <div class="a-r" />
          </div>
          <div class="i-b">纯欲双马尾女高学妹，被金主爸爸带到酒店沙发上爆操，不吃香菜 VS AAA建材老王的既视感【请复制链接到迅雷下载】</div>
          <div class="i-c pic4">
            <div class="item"><img :src="getAssetsFile('temp/m9.jpg')" /></div>
            <div class="item"><img :src="getAssetsFile('mv/m10.jpg')" /></div>
            <div class="item"><img :src="getAssetsFile('mv/m11.jpg')" /></div>
            <div class="item"><img :src="getAssetsFile('temp/m10.jpg')" /></div>
          </div>
          <div class="i-d">
            <div class="d-x">
              <span><i class="mvfont mv-pinglun" />5</span>
              <span><i class="mvfont mv-zan" />876</span>
              <span><i class="mvfont mv-like" />32</span>
            </div>
            <div class="d-x">
              <span><i class="mvfont mv-kan" />235</span>
            </div>
          </div>
        </li>
        <li @click="router.push({ name: 'bbsDetail' })">
          <div class="i-a">
            <div class="a-l">
              <img :src="getAssetsFile('u_video.png')" />
              <div class="l-n">
                <h3>小芒果</h3>
                <span>2024-10-10</span>
              </div>
            </div>
            <div class="a-r" />
          </div>
          <div class="i-b">纯欲双马尾女高学妹，被金主爸爸带到酒店沙发上爆操，不吃香菜 VS AAA建材老王的既视感【请复制链接到迅雷下载】</div>
          <div class="i-c pic3">
            <div class="item"><img :src="getAssetsFile('temp/m11.jpg')" /></div>
            <div class="item"><img :src="getAssetsFile('mv/m12.jpg')" /></div>
            <div class="item"><img :src="getAssetsFile('mv/m13.jpg')" /></div>
          </div>
          <div class="i-d">
            <div class="d-x">
              <span><i class="mvfont mv-pinglun" />5</span>
              <span><i class="mvfont mv-zan" />876</span>
              <span><i class="mvfont mv-like" />32</span>
            </div>
            <div class="d-x">
              <span><i class="mvfont mv-kan" />235</span>
            </div>
          </div>
        </li>
        <li onclick="javascript: location.href='bbs-detail.html'">
          <div class="i-a">
            <div class="a-l">
              <img :src="getAssetsFile('u_video.png')" />
              <div class="l-n">
                <h3>小芒果</h3>
                <span>2024-10-10</span>
              </div>
            </div>
            <div class="a-r" />
          </div>
          <div class="i-b">纯欲双马尾女高学妹，被金主爸爸带到酒店沙发上爆操，不吃香菜 VS AAA建材老王的既视感【请复制链接到迅雷下载】</div>
          <div class="i-c pic2">
            <div class="item"><img :src="getAssetsFile('mv/m14.jpg')" /></div>
            <div class="item"><img :src="getAssetsFile('temp/m14.jpg')" /></div>
          </div>
          <div class="i-d">
            <div class="d-x">
              <span><i class="mvfont mv-pinglun" />5</span>
              <span><i class="mvfont mv-zan" />876</span>
              <span><i class="mvfont mv-like" />32</span>
            </div>
            <div class="d-x">
              <span><i class="mvfont mv-kan" />235</span>
            </div>
          </div>
        </li>
        <li onclick="javascript: location.href='bbs-detail.html'">
          <div class="i-a">
            <div class="a-l">
              <img :src="getAssetsFile('u_video.png')" />
              <div class="l-n">
                <h3>小芒果</h3>
                <span>2024-10-10</span>
              </div>
            </div>
            <div class="a-r" />
          </div>
          <div class="i-b">纯欲双马尾女高学妹，被金主爸爸带到酒店沙发上爆操，不吃香菜 VS AAA建材老王的既视感【请复制链接到迅雷下载】</div>
          <div class="i-c pic1">
            <div class="item"><img :src="getAssetsFile('temp/m7.jpg')" /></div>
          </div>
          <div class="i-d">
            <div class="d-x">
              <span><i class="mvfont mv-pinglun" />5</span>
              <span><i class="mvfont mv-zan" />876</span>
              <span><i class="mvfont mv-like" />32</span>
            </div>
            <div class="d-x">
              <span><i class="mvfont mv-kan" />235</span>
            </div>
          </div>
        </li>
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
