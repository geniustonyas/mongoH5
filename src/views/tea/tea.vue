<template>
  <div class="page">
    <header class="tea-header">
      <div class="t-l">
        <a>
          <i class="mvfont mv-dingwei1" />
          <span>北京</span>
        </a>
        <a href="index.html" class="active">楼凤</a>
        <a href="gaoduan.html">高端</a>
        <a href="baoyang.html">包养</a>
        <a href="banyou.html">伴游</a>
        <a href="jiaoyou.html">交友</a>
        <a href="shangcheng.html">商城</a>
      </div>
      <div class="t-r" onclick="javascript: location.href='search.html'">
        <i class="mvfont mv-jia2" />
      </div>
    </header>

    <main class="t-b-m">
      <div class="bbs-swiper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper-slide-center none-effect">
              <a href="#"><img :src="getAssetsFile('banner/tb1.png')" /></a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img :src="getAssetsFile('banner/tb2.png')" /></a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img :src="getAssetsFile('banner/tb3.png')" /></a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img :src="getAssetsFile('banner/tb4.png')" /></a>
            </div>
            <div class="swiper-slide">
              <a href="#"><img :src="getAssetsFile('banner/tb5.png')" /></a>
            </div>
          </div>
          <div class="swiper-pagination" />
        </div>
      </div>
      <div class="au-tab-group">
        <div class="g-item">
          <div class="i-l">分类</div>
          <div class="i-r">
            <span class="active">楼凤</span>
            <span>外围</span>
            <span>兼职</span>
            <span>足浴</span>
            <span>会所</span>
            <span>KTV</span>
          </div>
        </div>
        <div class="g-item">
          <div class="i-l">标签</div>
          <div class="i-r">
            <span class="active">全部</span>
            <span>可赔付</span>
            <span>已认证</span>
            <span>官方合作</span>
          </div>
        </div>
        <div class="g-item">
          <div class="i-l">排序</div>
          <div class="i-r">
            <span class="active">更新</span>
            <span>已解锁</span>
            <span>未解锁</span>
            <span>评分</span>
            <span>收藏</span>
          </div>
        </div>
      </div>
      <ul class="tea-list" onclick="javascript: location.href='loufeng_detail.html'">
        <li>
          <div class="i-a">
            <img :src="getAssetsFile('temp/tm1.jpg')" />
            <span>楼凤</span>
          </div>
          <div class="i-b">
            <div class="b-a">北京最全套半裸情趣海选</div>
            <div class="b-d">会一字马身高168 体重85 皮肤雪白牛奶肌服务好，配合度高解锁各种新姿势6蛇纹 yt 可纯可御你</div>
            <div class="b-y">
              <div class="y-col">人数：<span>8人</span></div>
              <div class="y-col">消费：<span>800-1000</span></div>
              <div class="y-col">颜值：<i class="mvfont mv-xing5" /></div>
            </div>
            <div class="b-c"><span>舌吻</span><span>深喉</span><span>口爆</span><span>69互舔</span><span>双飞</span><span>啪啪</span> <span>胸推</span><span>调情</span><span>全套</span></div>
          </div>
          <div class="i-d">
            <span class="sd-1"><i class="mvfont mv-peifutubiao" />可赔付</span>
            <span class="sd-2"><i class="mvfont mv-renzhengguanli" />已认证</span>
            <span class="sd-3"><i class="mvfont mv-guanfangrenzheng" />官方自营</span>
          </div>
          <div class="i-c">
            <div class="c-x"><span>11分钟前</span></div>
            <div class="c-x">
              <span><i class="mvfont mv-jiesuo" />123</span>
              <span><i class="mvfont mv-like" />43</span>
            </div>
          </div>
          <div class="i-e">
            <i class="mvfont mv-yijiesuo" />
          </div>
        </li>
        <li>
          <div class="i-a">
            <img :src="getAssetsFile('temp/tm2.jpg')" />
            <span>外围</span>
          </div>
          <div class="i-b">
            <div class="b-a">北京最全套半裸情趣海选</div>
            <div class="b-d">会一字马身高168 体重85 皮肤雪白牛奶肌服务好，配合度高解锁各种新姿势6蛇纹 yt 可纯可御你</div>
            <div class="b-y">
              <div class="y-col">人数：<span>8人</span></div>
              <div class="y-col">消费：<span>800-1000</span></div>
              <div class="y-col">颜值：<i class="mvfont mv-xing5" /></div>
            </div>
            <div class="b-c"><span>舌吻</span><span>深喉</span><span>口爆</span><span>69互舔</span><span>双飞</span><span>啪啪</span> <span>胸推</span><span>调情</span><span>全套</span></div>
          </div>
          <div class="i-d">
            <span class="sd-1"><i class="mvfont mv-peifutubiao" />可赔付</span>
            <span class="sd-2"><i class="mvfont mv-renzhengguanli" />已认证</span>
          </div>
          <div class="i-c">
            <div class="c-x"><span>11分钟前</span></div>
            <div class="c-x">
              <span><i class="mvfont mv-jiesuo" />123</span>
              <span><i class="mvfont mv-like" />43</span>
            </div>
          </div>
        </li>
        <li>
          <div class="i-a">
            <img :src="getAssetsFile('temp/tm3.jpg')" />
            <span>兼职</span>
          </div>
          <div class="i-b">
            <div class="b-a">北京最全套半裸情趣海选</div>
            <div class="b-d">会一字马身高168 体重85 皮肤雪白牛奶肌服务好，配合度高解锁各种新姿势6蛇纹 yt 可纯可御你</div>
            <div class="b-y">
              <div class="y-col">人数：<span>8人</span></div>
              <div class="y-col">消费：<span>800-1000</span></div>
              <div class="y-col">颜值：<i class="mvfont mv-xing5" /></div>
            </div>
            <div class="b-c"><span>舌吻</span><span>深喉</span><span>口爆</span><span>69互舔</span><span>双飞</span><span>啪啪</span> <span>胸推</span><span>调情</span><span>全套</span></div>
          </div>
          <div class="i-d">
            <span class="sd-1"><i class="mvfont mv-peifutubiao" />可赔付</span>
            <span class="sd-2"><i class="mvfont mv-renzhengguanli" />已认证</span>
            <span class="sd-3"><i class="mvfont mv-guanfangrenzheng" />官方自营</span>
          </div>
          <div class="i-c">
            <div class="c-x"><span>11分钟前</span></div>
            <div class="c-x">
              <span><i class="mvfont mv-jiesuo" />123</span>
              <span><i class="mvfont mv-like" />43</span>
            </div>
          </div>
        </li>
        <li>
          <div class="i-a">
            <img :src="getAssetsFile('temp/tm4.jpg')" />
            <span>足浴</span>
          </div>
          <div class="i-b">
            <div class="b-a">北京最全套半裸情趣海选</div>
            <div class="b-d">会一字马身高168 体重85 皮肤雪白牛奶肌服务好，配合度高解锁各种新姿势6蛇纹 yt 可纯可御你</div>
            <div class="b-y">
              <div class="y-col">人数：<span>8人</span></div>
              <div class="y-col">消费：<span>800-1000</span></div>
              <div class="y-col">颜值：<i class="mvfont mv-xing5" /></div>
            </div>
            <div class="b-c"><span>舌吻</span><span>深喉</span><span>口爆</span><span>69互舔</span><span>双飞</span><span>啪啪</span> <span>胸推</span><span>调情</span><span>全套</span></div>
          </div>
          <div class="i-d">
            <span class="sd-1"><i class="mvfont mv-peifutubiao" />可赔付</span>
            <span class="sd-2"><i class="mvfont mv-renzhengguanli" />已认证</span>
            <span class="sd-3"><i class="mvfont mv-guanfangrenzheng" />官方自营</span>
          </div>
          <div class="i-c">
            <div class="c-x"><span>11分钟前</span></div>
            <div class="c-x">
              <span><i class="mvfont mv-jiesuo" />123</span>
              <span><i class="mvfont mv-like" />43</span>
            </div>
          </div>
        </li>
        <li>
          <div class="i-a">
            <img :src="getAssetsFile('temp/tm5.jpg')" />
            <span>会所</span>
          </div>
          <div class="i-b">
            <div class="b-a">北京最全套半裸情趣海选</div>
            <div class="b-d">会一字马身高168 体重85 皮肤雪白牛奶肌服务好，配合度高解锁各种新姿势6蛇纹 yt 可纯可御你</div>
            <div class="b-y">
              <div class="y-col">人数：<span>8人</span></div>
              <div class="y-col">消费：<span>800-1000</span></div>
              <div class="y-col">颜值：<i class="mvfont mv-xing5" /></div>
            </div>
            <div class="b-c"><span>舌吻</span><span>深喉</span><span>口爆</span><span>69互舔</span><span>双飞</span><span>啪啪</span> <span>胸推</span><span>调情</span><span>全套</span></div>
          </div>
          <div class="i-d">
            <span class="sd-1"><i class="mvfont mv-peifutubiao" />可赔付</span>
            <span class="sd-2"><i class="mvfont mv-renzhengguanli" />已认证</span>
            <span class="sd-3"><i class="mvfont mv-guanfangrenzheng" />官方自营</span>
          </div>
          <div class="i-c">
            <div class="c-x"><span>11分钟前</span></div>
            <div class="c-x">
              <span><i class="mvfont mv-jiesuo" />123</span>
              <span><i class="mvfont mv-like" />43</span>
            </div>
          </div>
        </li>
        <li>
          <div class="i-a">
            <img :src="getAssetsFile('temp/tm6.jpg')" />
            <span>KTV</span>
          </div>
          <div class="i-b">
            <div class="b-a">北京最全套半裸情趣海选</div>
            <div class="b-d">会一字马身高168 体重85 皮肤雪白牛奶肌服务好，配合度高解锁各种新姿势6蛇纹 yt 可纯可御你</div>
            <div class="b-y">
              <div class="y-col">人数：<span>8人</span></div>
              <div class="y-col">消费：<span>800-1000</span></div>
              <div class="y-col">颜值：<i class="mvfont mv-xing5" /></div>
            </div>
            <div class="b-c"><span>舌吻</span><span>深喉</span><span>口爆</span><span>69互舔</span><span>双飞</span><span>啪啪</span> <span>胸推</span><span>调情</span><span>全套</span></div>
          </div>
          <div class="i-d">
            <span class="sd-1"><i class="mvfont mv-peifutubiao" />可赔付</span>
            <span class="sd-2"><i class="mvfont mv-renzhengguanli" />已认证</span>
            <span class="sd-3"><i class="mvfont mv-guanfangrenzheng" />官方自营</span>
          </div>
          <div class="i-c">
            <div class="c-x"><span>11分钟前</span></div>
            <div class="c-x">
              <span><i class="mvfont mv-jiesuo" />123</span>
              <span><i class="mvfont mv-like" />43</span>
            </div>
          </div>
        </li>
      </ul>
    </main>
    <Footer active-menu="tea" />
    <NavBar active-menu="tea" />
  </div>
</template>

<script setup lang="ts">
import { getAssetsFile } from '@/utils'
import Footer from '@/components/layout/Footer.vue'
import NavBar from '@/components/layout/NavBar.vue'
</script>
