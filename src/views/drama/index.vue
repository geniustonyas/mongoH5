<template>
  <HomeLayout>
    <DramaPlayer v-model:drama-id="currentDramaId" v-model:episode-id="currentEpisodeId" :dramas="dramas" />
  </HomeLayout>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { getDramaList } from '@/api/drama'
  import { DramaItemVM } from '@/types/drama'
  import decryptionService from '@/utils/decryptionService'
  import { useAppStore } from '@/store/app'
  import DramaPlayer from './components/drama-player.vue'

  const appStore = useAppStore()
  const decrypt = new decryptionService()
  const dramas = ref<DramaItemVM[]>([])
  const currentDramaId = ref('')
  const currentEpisodeId = ref('')
  const pageIndex = ref(1)
  const totalCount = ref(0)

  const fetchDramaList = async () => {
    try {
      const {
        data: { data }
      } = await getDramaList({
        PageIndex: pageIndex.value,
        PageSize: 5,
        ChannelId: '',
        GenderChannelType: ''
      })
      if (data && data.items) {
        for (const episode of data.items) {
          episode.poster = URL.createObjectURL(await decrypt.fetchAndDecrypt(appStore.cdnUrl + episode.imgUrl))
          dramas.value.push(episode)
        }
        totalCount.value = data.recordCount

        // 设置初始播放的剧集和集数
        if (dramas.value.length > 0) {
          currentDramaId.value = dramas.value[0].id
          currentEpisodeId.value = dramas.value[0].first.id
        }
      }
    } catch (error) {
      console.error('获取剧集列表失败:', error)
    }
  }

  onMounted(async () => {
    await fetchDramaList()
  })
</script>
