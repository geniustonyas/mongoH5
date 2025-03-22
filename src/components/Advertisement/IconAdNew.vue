<template>
  <div class="fr-b">
    <div v-if="iconAdvertisement.length > 0" class="i-m-c">
      <template v-for="(item, index) in iconAdvertisement" :key="index">
        <a v-if="index < 12" @click="openAd(item.targetUrl, '首页图标广告', 'click', item.id)" target="_blank">
          <img v-lazy-decrypt="item.imgUrl" :alt="item.title" :loading-img="'sqare.jpg'" @load="onImageLoad" />
          <span>{{ item.title }}</span>
        </a>
      </template>
    </div>
    <div v-if="isDecrypting" class="load-box">
      <div class="lb-i-m-c">
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
        <div class="c-col">
          <div class="lb-s" />
          <div class="lb-s" />
        </div>
      </div>
    </div>
    <nav v-if="bannerTextAd.length > 0" class="i-m-b">
      <div class="a-row">
        <span v-for="item in bannerTextAd" :key="item.id">{{ item.title }}</span>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { computed, ref, defineProps, watch } from 'vue'
  import { openAd } from '@/utils'
  import { useAppStore } from '@/store/app'

  const appStore = useAppStore()
  const isDecrypting = ref(true)

  const onImageLoad = () => {
    isDecrypting.value = false
  }

  const bannerTextAd = computed(() => {
    const tmp = appStore.getAdvertisementById(11).items
    return tmp || []
  })

  const iconAdvertisement = computed(() => {
    return appStore.getAdvertisementById(16).items || []
  })

  watch(
    iconAdvertisement,
    (newVal) => {
      if (newVal.length == 0) {
        isDecrypting.value = false
      }
    },
    { immediate: true }
  )

  defineProps({
    customClass: {
      type: String,
      default: ''
    }
  })
</script>
