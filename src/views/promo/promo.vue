<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-m">Promotions</div>
      </div>
    </header>
    <main class="main">
      <div class="promo-box">
        <ul class="pb-list">
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p1.jpg')" />
              <h3>Clubhouse Mystery Prize Drops</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p2.png')" />
              <h3>Megaways Bushido Princess:Cash Drop Launch</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p3.jpg')" />
              <h3>French Open Lucky Streak Challenge</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>

          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p4.jpg')" />
              <h3>Megaways Bushido Princess:Cash Drop Launch</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p5.jpg')" />
              <h3>French Open Lucky Streak Challenge</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p1.jpg')" />
              <h3>Clubhouse Mystery Prize Drops</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p2.png')" />
              <h3>Megaways Bushido Princess:Cash Drop Launch</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p3.jpg')" />
              <h3>French Open Lucky Streak Challenge</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>

          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p4.jpg')" />
              <h3>Megaways Bushido Princess:Cash Drop Launch</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>
          <li>
            <a @click="router.push({ name: 'promoDetails' })">
              <img :src="getAssetsFile('promo/p5.jpg')" />
              <h3>French Open Lucky Streak Challenge</h3>
              <p>It's time to unwarp your mystery rewards with Clubhouse Mystery Prize Drops!</p>
              <span>Read More <i class="iconfont icon-right" /></span>
            </a>
          </li>
        </ul>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script setup name="PromoPromo">
import { getAssetsFile } from '@/utils'
import Footer from '@/components/layout/Footer.vue'
import { useRouter } from 'vue-router'
// const { proxy } = getCurrentInstance()
const router = useRouter()
// const route = useRoute()
</script>

<style lang="less" scoped></style>
