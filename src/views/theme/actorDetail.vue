<template>
  <div class="page">
    <section class="a-d-b">
      <div class="ab-a">
        <a @click="appStore.setBack(true)" class="a-bk"><i class="mvfont mv-left" /></a>
        <div class="a-x" v-if="actor.imgUrl" v-lazy-decrypt="actor.imgUrl">
          <div class="x-c">
            <div class="c-bd">
              <div class="c-i" v-lazy-decrypt="actor.imgUrl">
                <span class="i-a">{{ zhiming }}{{ nvyou }}</span>
              </div>
              <div class="c-n">
                <h3>{{ actor.title }}</h3>
                <span>
                  {{ $t('actor.recorded') }}：
                  <b>{{ videos.length }}</b>
                  {{ $t('actor.videos') }}
                </span>
              </div>
            </div>
          </div>
          <div class="x-i">
            <span>
              <b>{{ $t('actor.birthday') }}</b>
              <small>{{ actor.birthday }}</small>
            </span>
            <span>
              <b>{{ $t('actor.height') }}</b>
              <small>{{ actor.height }}</small>
            </span>
            <span>
              <b>{{ $t('actor.chest') }}</b>
              <small>{{ actor.chest }}</small>
            </span>
            <span>
              <b>{{ $t('actor.waist') }}</b>
              <small>{{ actor.waist }}</small>
            </span>
            <span>
              <b>{{ $t('actor.hip') }}</b>
              <small>{{ actor.hip }}</small>
            </span>
          </div>
          <div class="x-n">
            <h3>{{ $t('actor.formerName') }}</h3>
            <p>
              {{ actor.formerName }}
            </p>
          </div>
        </div>
        <div class="a-y">
          <div class="y-t">
            <div class="t-l">
              {{ $t('actor.works') }}(
              <b> {{ route.query.videoCount }} </b>
              {{ $t('actor.videos') }})
            </div>
            <div class="t-r">
              <span v-for="option in sortOptions" :key="option.value" :class="{ active: activeSort == option.value }" @click="changeSort(option.value)">{{ option.label }}</span>
            </div>
          </div>
          <div class="y-m">
            <nav class="mv-t-l">
              <div class="m-b">
                <VideoGridItem v-for="video in videos" :key="video.id" :video="video" @click="router.push({ name: 'play', params: { id: video.id } })" />
              </div>
            </nav>
            <div v-if="noData" class="nodata">
              <div class="d-i" />
              <div class="d-t">{{ $t('common.noData') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <NavBar active-menu="theme" />
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
import { useAppStore } from '@/store/app'
import NavBar from '@/components/layout/NavBar.vue'
import { zhiming, nvyou } from '@/utils/cryptedData'
import { useI18n } from 'vue-i18n'

const appStore = useAppStore()
const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const noData = ref(false)

const sortOptions = [
  { label: t('actor.lastUpdate'), value: '1' },
  { label: t('actor.sort.mostView'), value: '2' },
  { label: t('actor.sort.moveCollect'), value: '3' }
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

  window.scrollTo(0, 0)
})
</script>
