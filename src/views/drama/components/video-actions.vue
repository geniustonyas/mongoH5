<template>
  <div class="video-actions">
    <a href="#"><img alt="" :src="dramaDetail?.imgUrl" /></a>
    <a @click.prevent="handleLike">
      <i :class="['mvfont', 'mv-xihuan', { active: dramaDetail?.like }]" />
      <b>{{ dramaDetail?.likeCount || 0 }}</b>
    </a>
    <a @click.prevent="handleShowComment">
      <i class="mvfont mv-pinglun3" />
      <b>{{ dramaDetail?.likeCount || 0 }}</b>
    </a>
    <a @click.prevent="toggleCollection">
      <i :class="['mvfont', 'mv-shoucang', { active: dramaDetail?.collect }]" />
      <b>{{ dramaDetail?.collectionCount || 0 }}</b>
    </a>
    <a @click="handleShare">
      <i class="mvfont mv-zhuanfa" />
      <b>分享</b>
    </a>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { DramaDetailResponse } from '@/types/drama'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'

  interface Props {
    data?: DramaDetailResponse
  }

  const props = defineProps<Props>()

  const emit = defineEmits<{
    (e: 'like'): void
    (e: 'showComment'): void
    (e: 'toggleCollection'): void
    (e: 'share'): void
  }>()

  const decrypt = new decryptionService()
  const appStore = useAppStore()
  const dramaDetail = ref<DramaDetailResponse | null>(null)

  watch(
    () => props.data,
    async () => {
      if (props.data) {
        dramaDetail.value = props.data
        dramaDetail.value.imgUrl = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + props.data?.imgUrl))
      }
    },
    {
      immediate: true
    }
  )

  function handleLike() {
    emit('like')
  }

  function handleShowComment() {
    emit('showComment')
  }

  function toggleCollection() {
    emit('toggleCollection')
  }

  function handleShare() {
    emit('share')
  }
</script>

<style lang="less" scoped>
  .video-actions {
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 16px;
    z-index: 10;

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #fff;
      text-decoration: none;
      cursor: pointer;

      img {
        width: 40px;
        height: 40px;
      }

      i {
        font-size: 24px;
        margin-bottom: 4px;

        &.active {
          color: #ff4d4f;
        }
      }

      b {
        font-size: 12px;
      }
    }
  }
</style>
