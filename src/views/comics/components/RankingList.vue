<template>
  <nav class="mv-t-c">
    <div class="mc-a">
      <div class="a-l"><i class="mvfont mv-xietiao" /><span>排行榜</span></div>
      <div class="a-r">
        <span @click="router.push({ name: 'novelRank' })">完整榜单<i class="mvfont mv-right" /></span>
      </div>
    </div>
    <div class="mc-b">
      <div class="b-tabs">
        <span :class="{ active: activeRankingList === 'Hots' }" @click="handleTabClick(0, 'Hots')">畅销榜</span>
        <span :class="{ active: activeRankingList === 'Series' }" @click="handleTabClick(1, 'Series')">连载榜</span>
        <span :class="{ active: activeRankingList === 'End' }" @click="handleTabClick(2, 'End')">完结榜</span>
        <span :class="{ active: activeRankingList === 'NewHots' }" @click="handleTabClick(3, 'NewHots')">新书榜</span>
      </div>
      <swiper
        :slides-per-view="1"
        :auto-height="true"
        :loop="false"
        @slide-change="handleSwipeChange"
        @swiper="getSwiperClass"
        :allow-touch-move="!isPc"
      >
        <swiper-slide :virtual-index="1">
          <Rank v-if="activeRankingList === 'Hots'" :data="hotBooks" />
        </swiper-slide>
        <swiper-slide :virtual-index="2">
          <Rank v-if="activeRankingList === 'Series'" :data="serialBooks" />
        </swiper-slide>
        <swiper-slide :virtual-index="3">
          <Rank v-if="activeRankingList === 'End'" :data="endBooks" />
        </swiper-slide>
        <swiper-slide :virtual-index="3">
          <Rank v-if="activeRankingList === 'NewHots'" :data="newHotBooks" />
        </swiper-slide>
      </swiper>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type { Swiper as SwiperClass } from 'swiper/types'
import Rank from './Rank.vue'
import { CommicIndexListItem } from '@/types/commic'
import 'swiper/css'
import { useRouter } from 'vue-router'

interface Props {
  hotBooks: CommicIndexListItem[]
  serialBooks: CommicIndexListItem[]
  endBooks: CommicIndexListItem[]
  newHotBooks: CommicIndexListItem[]
  isPc: boolean
}

const _props = defineProps<Props>()
const emit = defineEmits(['cleanupUrls'])
const router = useRouter()

const activeRankingList = ref('Hots')
const swiperInstance = ref<SwiperClass>()

const handleTabClick = (index: number, name: string) => {
  swiperInstance.value?.slideTo(index)
  activeRankingList.value = name
}

const getSwiperClass = (swiper: SwiperClass) => {
  swiperInstance.value = swiper
}

const handleSwipeChange = () => {
  if (!swiperInstance.value) return

  switch (swiperInstance.value.activeIndex) {
    case 0:
      activeRankingList.value = 'Hots'
      break
    case 1:
      activeRankingList.value = 'Series'
      break
    case 2:
      activeRankingList.value = 'End'
      break
    case 3:
      activeRankingList.value = 'NewHots'
      break
  }
}

onUnmounted(() => {
  emit('cleanupUrls')
})
</script>
