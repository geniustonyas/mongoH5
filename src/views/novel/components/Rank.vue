<template>
  <div>
    <div v-if="!data.length" class="empty-container">
      <van-empty image="search" description="还没有作品噢" image-size="10rem" />
    </div>
    <ul v-else class="n-l-r">
      <li v-for="(rankItem, index) in data" :key="rankItem.id">
        <div class="l-l">
          <img :src="rankItem.coverUrl" :alt="rankItem.title" />
          <span>{{ index + 1 }}</span>
        </div>
        <div class="l-r">
          <b>{{ rankItem.title }}</b>
          <p>{{ rankItem.categoryName }}<em>|</em>{{ rankItem.statusText }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { NovelIndexListItem } from '@/types/novel'

defineProps({
  data: {
    type: Array<NovelIndexListItem>,
    required: true
  }
})
</script>

<style scoped>
.n-l-r {
  padding: 0 1.2rem;
}
</style>
