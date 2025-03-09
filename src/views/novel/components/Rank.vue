<template>
  <div>
    <div v-if="!data.length" class="empty-container">
      <van-empty image="search" description="还没有作品噢" image-size="10rem" />
    </div>
    <ul v-else class="n-l-r" :class="{ row1: isRow }">
      <li v-for="(rankItem, index) in data" :key="rankItem.id" @click="handleBookClick(rankItem)">
        <div v-if="isRow" class="l-l">
          <img :src="rankItem.coverUrl" :alt="rankItem.title" />
          <span>{{ index + 1 }}</span>
        </div>
        <div v-if="isRow" class="l-r">
          <b>{{ rankItem.title }}</b>
          <p>{{ rankItem.categoryName }}<em>|</em>{{ rankItem.statusText }}</p>
          <p>{{ formatCount(rankItem.readCount) }}阅读</p>
        </div>
        <div v-if="!isRow" class="l-l">
          <img :src="rankItem.coverUrl" :alt="rankItem.title" />
          <span>{{ index + 1 }}</span>
        </div>
        <div v-if="!isRow" class="l-r">
          <b>{{ rankItem.title }}</b>
          <p>{{ rankItem.categoryName }}<em>|</em>{{ rankItem.statusText }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { NovelIndexListItem } from '@/types/novel'
  import { useRouter } from 'vue-router'
  import { formatCount } from '@/utils'

  const router = useRouter()

  defineProps<{
    data: NovelIndexListItem[]
    isRow?: boolean
  }>()

  const handleBookClick = (item: NovelIndexListItem) => {
    router.push({
      name: 'novelIntro',
      query: { nid: item.id, status: item.statusText }
    })
  }
</script>

<style scoped lang="less">
  .empty-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    gap: 16px;
  }
</style>
