<template>
  <div class="page">
    <section class="a-d-b">
      <div class="ab-a">
        <a href="javascript:void(0)" @click="goBack" class="a-bk"><i class="mvfont mv-left" /></a>
        <div class="a-x" :style="{ backgroundImage: `url(${getAssetsFile('actor/a1.jpg')})` }">
          <div class="x-c">
            <div class="c-bd">
              <div class="c-i" :style="{ backgroundImage: `url(${getAssetsFile('actor/a1.jpg')})` }">
                <span class="i-a">知名女优</span>
              </div>
              <div class="c-n">
                <h3>森澤佳奈</h3>
                <span>收录：<b>80</b>部</span>
              </div>
            </div>
          </div>
          <div class="x-i">
            <span>
              <b>生日</b>
              <small>1992/5/9</small>
            </span>
            <span>
              <b>身高</b>
              <small>160cm</small>
            </span>
            <span>
              <b>胸围</b>
              <small>83cm(D)</small>
            </span>
            <span>
              <b>腰围</b>
              <small>53cm</small>
            </span>
            <span>
              <b>臀围</b>
              <small>83cm</small>
            </span>
          </div>
          <div class="x-n">
            <h3>森澤佳奈 曾用名</h3>
            <p>
              <span># Asakura Ayana</span>
              <span># Ayana Asakura</span>
              <span># Kana Ayano</span>
              <span># kana morisawa</span>
              <span># Kana Morisawa</span>
              <span># Kanako Iioka</span>
              <span># Kyouko Iijima</span>
              <span># Rino Okita</span>
              <span># Ryoko Fujiwara</span>
              <span># 森沢かな</span>
              <span># 森泽佳奈</span>
              <span># 森澤佳奈</span>
              <span># 沖田梨乃</span>
              <span># 浅倉彩菜</span>
              <span># 綾野かな</span>
              <span># 藤原遼子</span>
              <span># 飯岡かなこ</span>
              <span># 飯島恭子</span>
            </p>
          </div>
        </div>
        <div class="a-y">
          <div class="y-t">
            <div class="t-l">
              作品(
              <b> {{ videos.length }} </b>部)
            </div>
            <div class="t-r">
              <span :class="{ active: activeSort == 'addTime' }" @click="changeSort('addTime')">最近更新</span>
              <span :class="{ active: activeSort == 'clickCounts' }" @click="changeSort('clickCounts')">最多观看</span>
              <span :class="{ active: activeSort == 'favoriteCounts' }" @click="changeSort('favoriteCounts')">最多收藏</span>
            </div>
          </div>
          <div class="y-m">
            <nav class="mv-t-l">
              <div class="m-b">
                <div v-for="video in videos" :key="video.videoId" class="item" @click="router.push({ name: 'play', params: { id: video.videoId } })">
                  <div class="i-a" :style="{ backgroundImage: `url(${video.poster})` }">
                    <span v-if="video.resolution" class="a-a">{{ video.resolution }}</span>
                    <span class="a-b">{{ video.playTime }}</span>
                    <span class="a-c">{{ video.categoryName }}</span>
                  </div>
                  <div class="i-b">
                    <b>{{ video.title }}</b>
                    <p>
                      <span><i class="mvfont mv-kan" />{{ video.clickCounts }}</span>
                      <span><i class="mvfont mv-zan" />{{ video.goodCounts }}</span>
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAssetsFile } from '@/utils'
import { useRouter } from 'vue-router'
import { getVideoListApi } from '@/api/video'
import type { VideoQueryParams, Video } from '@/types/video'
import decryptionService from '@/utils/decryptionService'

const router = useRouter()
const decrypt = new decryptionService()

const videos = ref<Video[]>([])
const activeSort = ref('addTime')

const fetchVideos = async (sortBy: 'clickCounts' | 'goodCounts' | 'favoriteCounts' | 'addTime') => {
  try {
    const params: VideoQueryParams = {
      page: 1,
      pageSize: 30,
      sortBy: sortBy
      // 如果需要，这里可以添加演员ID的过滤条件
      // actorId: route.params.id // 假设你使用路由参数传递演员ID
    }
    const response = await getVideoListApi(params)

    if (response.data && response.data.data && Array.isArray(response.data.data)) {
      videos.value = await Promise.all(
        response.data.data.map(async (video) => ({
          ...video,
          poster: await decrypt.fetchAndDecrypt(`${video.posterDomain}${video.poster}`)
        }))
      )
    } else {
      videos.value = []
    }
  } catch (error) {
    console.error(`获取视频列表失败 (${sortBy}):`, error)
    videos.value = []
  }
}

const changeSort = (sortBy: 'clickCounts' | 'goodCounts' | 'favoriteCounts' | 'addTime') => {
  activeSort.value = sortBy
  fetchVideos(sortBy)
}

const goBack = () => {
  router.go(-1)
}

onMounted(() => {
  fetchVideos('addTime')
})
</script>
