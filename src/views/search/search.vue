<template>
  <div class="page">
    <header class="header">
      <div class="head-search">
        <b>{{ t('search') }}</b>
        <div class="search-box">
          <span><i class="iconfont icon-search" /></span>
          <input :placeholder="t('searchHolder')" />
        </div>
      </div>
    </header>
    <main class="main">
      <dl class="provider-list">
        <dt>{{ t('searchMore') }}</dt>
        <dd>
          <a><img :src="getAssetsFile('svg/PragmaticPlay.svg')" />Pragmatic Pay</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/FBSports.svg')" />FB Sports</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/Evolution.svg')" />Evolution</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/BombayLive.svg')" />Bombay Live</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/Ezugi.svg')" />Ezugi</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/AsiaGaming.svg')" />Asia Gaming</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/PragmaticPlay.svg')" />Pragmatic Pay</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/Playingo.svg')" />Play'n Go</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/NetEnt.svg')" />NetEnt</a>
        </dd>
        <dd>
          <a><img :src="getAssetsFile('svg/PlayTech.svg')" />PlayTech</a>
        </dd>
      </dl>

      <nav class="gamebox search">
        <div class="g-head">
          <div class="gh-t">
            <div class="gh-l">{{ t('searchRecommend') }}</div>
          </div>
        </div>
        <div class="g-list row">
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img :src="getAssetsFile('game/game9.jpg')" />
                <span class="red">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Wild Coyote Megaways</strong>
                <span>ONETOUCH</span>
              </div>
              <div class="i-btn">
                <a>{{ t('enter') }}</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img :src="getAssetsFile('game/game8.jpg')" />
                <span class="dark">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Kasahara vs lto Baccarat</strong>
                <span>EXCLUSIVE</span>
              </div>
              <div class="i-btn">
                <a>进入</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img :src="getAssetsFile('game/game7.jpg')" />
              </div>
              <div class="i-txt">
                <strong>Evolution Live Baccarat Lobby</strong>
                <span>EVOLUTION</span>
              </div>
              <div class="i-btn">
                <a>进入</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img :src="getAssetsFile('game/game6.jpg')" />
                <span class="dark">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Kasahara vs lto Baccarat</strong>
                <span>EXCLUSIVE</span>
              </div>
              <div class="i-btn">
                <a>进入</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img :src="getAssetsFile('game/game5.jpg')" />
                <span class="red">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Wild Coyote Megaways</strong>
                <span>ONETOUCH</span>
              </div>
              <div class="i-btn">
                <a>进入</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img :src="getAssetsFile('game/game4.jpg')" />
                <span class="dark">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Kasahara vs lto Baccarat</strong>
                <span>EXCLUSIVE</span>
              </div>
              <div class="i-btn">
                <a>进入</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img :src="getAssetsFile('game/game3.jpg')" />
              </div>
              <div class="i-txt">
                <strong>Evolution Live Baccarat Lobby</strong>
                <span>EVOLUTION</span>
              </div>
              <div class="i-btn">
                <a>进入</a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="i-bd">
              <div class="i-img">
                <img :src="getAssetsFile('game/game2.jpg')" />
                <span class="dark">FEATURED</span>
              </div>
              <div class="i-txt">
                <strong>Kasahara vs lto Baccarat</strong>
                <span>EXCLUSIVE</span>
              </div>
              <div class="i-btn">
                <a>进入</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </main>
    <Footer />
  </div>
</template>

<script setup name="PromoPromo">
import Footer from '@/components/layout/Footer.vue'

import { getAssetsFile } from '@/utils'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
