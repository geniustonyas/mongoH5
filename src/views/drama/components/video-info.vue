<template>
  <div class="v-d">
    <div class="d-a">
      <a href="#"><i class="mvfont mv-dianji" />点击查看更多短剧<i class="mvfont mv-right" /></a>
    </div>
    <div class="d-b">
      <h3>@芒果短剧-永久域名:mg91.tv</h3>
      <p>
        第{{ currentEpisodeIndex + 1 }}集
        <small v-if="dramaDetail?.introduction">|</small>
        {{ dramaDetail?.introduction || '暂无简介' }}
      </p>
    </div>
    <div class="d-c" @click="showDetailPopup">
      <div class="c-l">
        <img alt="" src="assets/imgs/logo-2.png" />
        短剧
        <b>●</b>
        {{ dramaDetail?.title || '-' }}
        <span>更新至第{{ dramaDetail?.episodeCount }}集</span>
      </div>
      <div class="c-r">
        <i class="mvfont mv-right" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { DramaDetailResponse } from '@/types/drama'

  interface Props {
    dramaDetail?: DramaDetailResponse | null
    currentEpisodeId?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    dramaDetail: null,
    currentEpisodeId: ''
  })

  const emit = defineEmits(['show-detail-popup'])

  const currentEpisodeIndex = computed(() => {
    if (!props.dramaDetail?.items || !props.currentEpisodeId) return 0

    const index = props.dramaDetail.items.findIndex(item => item.id === props.currentEpisodeId)
    return index >= 0 ? index : 0
  })

  const showDetailPopup = () => {
    emit('show-detail-popup')
  }
</script>

<style scoped>
  /* Styles are maintained in the parent component */
</style>
