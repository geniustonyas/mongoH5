<template>
  <div class="page">
    <section class="a-d-b">
      <div class="ab-a">
        <a href="javascript:void(0)" @click="router.back()" class="a-bk"><i class="mvfont mv-left" /></a>
        <div class="a-x" :style="{ backgroundImage: `url(${actor.imgUrl})` }">
          <div class="x-c">
            <div class="c-bd">
              <div class="c-i" :style="{ backgroundImage: `url(${actor.imgUrl})` }">
                <span class="i-a">知名女优</span>
              </div>
              <div class="c-n">
                <h3>{{ actor.title }}</h3>
                <span>
                  收录：
                  <b>{{ videos.length }}</b>
                  部
                </span>
              </div>
            </div>
          </div>
          <div class="x-i">
            <span>
              <b>生日</b>
              <small>{{ actor.birthday }}</small>
            </span>
            <span>
              <b>身高</b>
              <small>{{ actor.height }}</small>
            </span>
            <span>
              <b>胸围</b>
              <small>{{ actor.chest }}</small>
            </span>
            <span>
              <b>腰围</b>
              <small>{{ actor.waist }}</small>
            </span>
            <span>
              <b>臀围</b>
              <small>{{ actor.hip }}</small>
            </span>
          </div>
          <div class="x-n">
            <h3>曾用名</h3>
            <p>
              {{ actor.formerName }}
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
              <span v-for="option in sortOptions" :key="option.value" :class="{ active: activeSort == option.value }" @click="changeSort(option.value)">{{ option.label }}</span>
            </div>
          </div>
          <div class="y-m">
            <nav class="mv-t-l">
              <div class="m-b">
                <VideoGridItem v-for="video in videos" :key="video.id" :video="video" />
              </div>
            </nav>
            <div v-if="noData" class="nodata">
              <div class="d-i" />
              <div class="d-t">暂无作品</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getActorDetailApi } from '@/api/theme'
import { getVideoListApi } from '@/api/video'
import type { Actor } from '@/types/theme'
import type { Video, VideoListRequest } from '@/types/video'
import VideoGridItem from '@/components/VideoGridItem.vue'

const router = useRouter()
const route = useRoute()

const noData = ref(false)

const sortOptions = [
  { label: '最近更新', value: '1' },
  { label: '最多观看', value: '2' },
  { label: '最多收藏', value: '3' }
]

const actor = ref<Actor>({
  id: '',
  title: '',
  categoryIds: '',
  categoryNames: '',
  imgUrl: '',
  height: '',
  birthday: '',
  chest: '',
  hip: '',
  formerName: '',
  waist: ''
})

const videos = ref<Video[]>([])
const activeSort = ref('1')
const actorId = route.params.id as string

const fetchActorDetail = async () => {
  try {
    const {
      data: { data }
    } = await getActorDetailApi(actorId)
    actor.value = data
  } catch (error) {
    console.error('获取演员详情失败:', error)
  }
}

const fetchVideos = async () => {
  try {
    const params: VideoListRequest = {
      PageIndex: 1,
      PageSize: 30,
      SortType: activeSort.value,
      ActressId: actorId
    }
    const {
      data: { data }
    } = await getVideoListApi(params)
    videos.value = data.items
    noData.value = videos.value.length === 0
  } catch (error) {
    console.error(`获取视频列表失败 (${activeSort.value}):`, error)
    videos.value = []
    noData.value = true
  }
}

const changeSort = (sortBy: string) => {
  activeSort.value = sortBy
  fetchVideos()
}

onMounted(() => {
  fetchActorDetail()
  fetchVideos()
})
</script>
