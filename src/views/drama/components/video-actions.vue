<script setup lang="ts">
  interface Props {
    videoDetail?: {
      likeCount: string | number
      collectionCount: string | number
    }
  }

  defineProps<Props>()
  const emit = defineEmits<{
    (e: 'like'): void
    (e: 'showComment'): void
    (e: 'toggleCollection'): void
    (e: 'share'): void
  }>()

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

<template>
  <div class="video-actions">
    <a href="#"><img alt="" src="@/assets/imgs/logo-4.png" /></a>
    <a @click.prevent="handleLike">
      <i :class="['mvfont', 'mv-xihuan', { active: videoDetail?.likeCount === '1' }]" />
      <b>{{ videoDetail?.likeCount || 0 }}</b>
    </a>
    <a @click.prevent="handleShowComment">
      <i class="mvfont mv-pinglun3" />
      <b>{{ videoDetail?.likeCount || 0 }}</b>
    </a>
    <a @click.prevent="toggleCollection">
      <i class="mvfont mv-shoucang" />
      <b>{{ videoDetail?.collectionCount || 0 }}</b>
    </a>
    <a @click="handleShare">
      <i class="mvfont mv-zhuanfa" />
      <b>分享</b>
    </a>
  </div>
</template>

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
