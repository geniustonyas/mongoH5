<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l" @click="router.back()">
          <i class="iconfont icon-return" />
        </div>
        <div class="hml-m">
          <div class="radio-tabs">
            <span :class="{ active: tab == 2 }" @click="selTab(2)">{{ t('notice') }}</span>
            <span :class="{ active: tab == 1 }" @click="selTab(1)">{{ t('mail') }}</span>
          </div>
        </div>
      </div>
    </header>
    <main class="main">
      <div class="notifications-box">
        <div v-if="dataList.length > 0" class="nb-head">
          <a @click="setAllReaded()" :class="(tab == 2 && announcementCount == 0) || (tab == 1 && personalLetterCount == 0) ? 'disable' : ''">{{ t('makeAllRead') }}</a>
        </div>
        <div v-if="dataList.length > 0" class="nb-list">
          <ul style="height: 100%">
            <PullRefresh v-model="refreshing" :success-text="t('refreshSuccess')" @refresh="fresh">
              <List v-model="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" :error-text="t('loadingFail')" :finished-text="t('noMore')" @load="loadData">
                <li v-for="(item, index) of dataList" :class="item.isRead ? '' : 'new'" :key="index" @click="setReaded(item)">
                  <div class="l-title">{{ item.title }}</div>
                  <div class="l-cont">{{ item.content }}</div>
                  <div class="l-date">{{ item.createTime }}</div>
                </li>
              </List>
            </PullRefresh>
          </ul>
        </div>
        <Nodata v-if="nodata" :message="t('noMessage')" />
      </div>
    </main>
  </div>
</template>

<script setup name="HomeMessage">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import Nodata from '@/components/Nodata.vue'

import { getMessageApi, setReadApi, setAllReadApi } from '@/api/home'
import { useUserStore } from '@/store/modules/user'
import { useI18n } from 'vue-i18n'

import { PullRefresh, List, showToast } from 'vant'
import 'vant/es/empty/style'
import 'vant/es/toast/style'
import 'vant/es/pull-refresh/style'
import 'vant/es/list/style'

const userStore = useUserStore()
const router = useRouter()
const { t } = useI18n()

let tab = ref(2)
let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)
let query = reactive({
  PageIndex: 1,
  PageSize: 10,
  noLoading: false,
  NotificationType: 2
})
const announcementCount = ref(0)
const personalLetterCount = ref(0)
let dataList = ref([])
let nodata = ref(false)

// 切换站内信与通知
const selTab = (tabValue) => {
  tab.value = tabValue
  query.NotificationType = tabValue
  query.PageIndex = 1
  dataList.value = []
  getList()
}

// 获取列表
const getList = () => {
  getMessageApi(query)
    .then((resp) => {
      if (refreshing.value) {
        dataList.value = resp.data.items
      } else {
        dataList.value.push(...resp.data.items)
      }
      nodata.value = dataList.value.length == 0
      refreshing.value = false
      finished.value = resp.data.items.length < query.PageSize
      listLoading.value = false
    })
    .catch((error) => {
      listLoading.value = false
      refreshing.value = false
      console.log(error)
    })
}

// 刷新
const fresh = () => {
  query.noLoading = true
  query.PageIndex = 1
  getList()
}

// 上拉加载更多数据
const loadData = () => {
  query.noLoading = true
  query.PageIndex++
  getList()
}

// 设置已读
const setReaded = (item) => {
  if (item.isRead) {
    return false
  }
  setReadApi({ Id: item.id.toString() })
    .then(() => {
      showToast(t('tips.setSuccess'))
      var index = dataList.value.findIndex((fitem) => fitem.id == item.id)
      dataList.value[index].isRead = true
    })
    .catch((error) => {
      console.log(error)
    })
}

// 全部设置已读
const setAllReaded = () => {
  setAllReadApi()
    .then(() => {
      dataList.value.forEach((item) => {
        item.isRead = true
      })
      showToast(t('tips.setSuccess'))
    })
    .catch((error) => {
      console.log(error)
    })
}

userStore
  .getNewMessageCount()
  .then((resp) => {
    announcementCount.value = resp.data.announcementCount
    personalLetterCount.value = resp.data.personalLetterCount
    getList()
  })
  .catch((error) => {
    console.log(error)
  })
</script>
