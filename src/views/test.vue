<template>
  <div>
    <h1>解密本地图片测试</h1>
    <div v-if="imageUrl">
      <h2>解密后的图片：</h2>
      <img :src="imageUrl" alt="Decrypted Image" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import decryptionService from '@/utils/decryptionService'

export default defineComponent({
  setup() {
    const imageUrl = ref<string | null>(null)
    const decryptionServiceInstance = new decryptionService()
    const remoteFileUrl = 'https://video.rf028.com/MGBBS/20241119/tu31529/3.jpg.js' // 远端文件的 URL

    onMounted(async () => {
      try {
        const blob = await decryptionServiceInstance.fetchAndDecrypt(remoteFileUrl)
        console.log('Decrypted Blob URL:', URL.createObjectURL(blob))
        imageUrl.value = URL.createObjectURL(blob)
      } catch (error) {
        console.error('解密远端图片失败:', error)
      }
    })

    return {
      imageUrl
    }
  }
})
</script>

<style scoped>
h1,
h2 {
  margin-bottom: 10px;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
