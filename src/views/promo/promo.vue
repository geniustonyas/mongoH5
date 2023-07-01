<template>
  <div class="page">
    <CommonHeader :show-back="false" title="Promotions" />
    <main class="main">
      <div class="promo-box">
        <ul class="pb-list">
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p1.jpg')" />
              <h3>Clubhouse Mystery Prize Drops</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p2.png')" />
              <h3>Megaways Bushido Princess:Cash Drop Launch</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p3.jpg')" />
              <h3>French Open Lucky Streak Challenge</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>

          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p4.jpg')" />
              <h3>Megaways Bushido Princess:Cash Drop Launch</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p5.jpg')" />
              <h3>French Open Lucky Streak Challenge</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p1.jpg')" />
              <h3>Clubhouse Mystery Prize Drops</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p2.png')" />
              <h3>Megaways Bushido Princess:Cash Drop Launch</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p3.jpg')" />
              <h3>French Open Lucky Streak Challenge</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>

          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p4.jpg')" />
              <h3>Megaways Bushido Princess:Cash Drop Launch</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p5.jpg')" />
              <h3>French Open Lucky Streak Challenge</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>{{ t('readMore') }}<i class="iconfont icon-right" /></span>
            </a>
          </li>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup name="PromoPromo">
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Footer from '@/components/layout/Footer.vue'

import { useI18n } from 'vue-i18n'
import { getAssetsFile } from '@/utils'

const router = useRouter()
const { t } = useI18n()
</script>
