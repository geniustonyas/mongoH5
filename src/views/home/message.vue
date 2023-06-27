<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l" @click="router.back()">
          <i class="iconfont icon-return" />
        </div>
        <div class="hml-m">Notifications</div>
      </div>
    </header>
    <main class="main">
      <div class="notifications-box">
        <div v-if="dataList.length > 0" class="nb-head">
          <a @click="setAllReaded()" class="disable">Mark all as read</a>
        </div>
        <div class="nb-list">
          <ul v-if="dataList.length > 0" style="height: 100%">
            <PullRefresh v-model="refreshing" success-text="刷新成功" @refresh="fresh">
              <List v-model="listLoading" :offset="20" :finished="finished" :immediate-check="false" v-model:error="error" error-text="加载失败" finished-text="没有更多了..." @load="loadData">
                <li v-for="(item, index) of dataList" class="top" :key="index" @click="setReaded(item)">
                  <div class="l-title">{{ item.title }}</div>
                  <div class="l-cont">{{ item.content }}</div>
                  <div class="l-date">{{ item.createTime }}</div>
                </li>
                <!-- <li class="new">
                  <div class="l-title">Welcome to the new Sportsbet.io!</div>
                  <div class="l-date">03/21/2023,10:11 PM</div>
                </li> -->
              </List>
            </PullRefresh>
          </ul>
          <Empty v-else description="暂无数据" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup name="HomeMessage">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

import { getMessage, setRead, setAllRead } from '@/api/home'

import { PullRefresh, List, Empty, showToast } from 'vant'
import 'vant/es/empty/style'
import 'vant/es/toast/style'

const router = useRouter()
let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)
let query = reactive({
  PageIndex: 1,
  PageSize: 10,
  noLoading: false
})
let dataList = reactive([])
let nodata = ref(false)

const getList = () => {
  getMessage(query)
    .then((resp) => {
      if (refreshing.value) {
        dataList = resp.data.items
      } else {
        dataList.push(...resp.data.items)
      }
      nodata.value = dataList.length == 0
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

getList()

// 刷新
const fresh = () => {
  this.query.noLoading = true
  this.query.PageIndex = 1
  this.getList()
}

// 上拉加载更多数据
const loadData = () => {
  this.query.noLoading = true
  this.query.PageIndex++
  this.getList()
}

// 设置已读
const setReaded = (item) => {
  if (item.isRead) {
    return false
  }
  setRead({ Id: item.id.toString() })
    .then(() => {
      showToast('设置成功')
      var index = this.dataList.findIndex((fitem) => fitem.id == item.id)
      this.dataList[index].isRead = true
    })
    .catch((error) => {
      console.log(error)
    })
}

// 全部设置已读
const setAllReaded = () => {
  setAllRead()
    .then(() => {
      this.dataList.forEach((item) => {
        item.isRead = true
      })
      showToast('设置成功')
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<style lang="less" scoped></style>
