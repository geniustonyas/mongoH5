<template>
  <div class="page">
    <CommonHeader :title="t('rewards')">
      <div class="hml-r t-i-w" @click="showAddBox = true">
        {{ t('claimReward') }}<span><i class="iconfont icon-add" /></span>
      </div>
    </CommonHeader>
    <main class="main">
      <div class="rewards-box">
        <!-- <div class="rb-title">RECENT TRANSACTIONS</div> -->
        <ul v-if="rewardList.length > 0" class="rb-list">
          <PullRefresh v-model="refreshing" :success-text="t('refreshSuccess')" @refresh="fresh">
            <List
              v-model:loading="listLoading"
              :offset="20"
              :finished="finished"
              :immediate-check="false"
              v-model:error="error"
              :error-text="t('loadingFail')"
              :finished-text="t('noMore')"
              @load="loadData"
            >
              <li v-for="(item, index) of rewardList" :key="index">
                <div class="l-l">
                  <span>{{ item.createTime }}</span>
                  <strong>{{ item.rewardCode }}</strong>
                </div>
                <div class="l-r">
                  <strong>{{ moneyFormat(item.amount) }} {{ item.currencyCode }}</strong>
                  <span class="confirmed">{{ t('confirmd') }}</span>
                </div>
              </li>
            </List>
          </PullRefresh>
        </ul>
      </div>
    </main>
    <div v-show="showAddBox" class="mask-box" id="claimReward">
      <div class="mb-bd">
        <div class="claim-reward-box">
          <span class="icon-btn" @click="showAddBox = false">
            <i class="iconfont icon-close" />
          </span>
          <h2>{{ t('claimNewReward') }}</h2>
          <div class="custom-form">
            <div class="cf-row">
              <div class="cr-input">
                <input v-model="rewardCode" type="text" class="form-control" :placeholder="t('rewardCode')" />
              </div>
            </div>

            <div class="cf-row">
              <div class="cr-btns">
                <a class="btn btn-primary full" @click="exchangeReward()">{{ t('claim') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import { getRewardListApi, exchangeRewardApi } from '@/api/home'
import { getRewardListData, getRewardListItem } from '@/api/home/types'

import { useI18n } from 'vue-i18n'
import { moneyFormat } from '@/utils'

import { PullRefresh, List, showToast } from 'vant'

const { t } = useI18n()

// 显示兑奖弹窗
let showAddBox = ref(false)
let rewardCode = ref('')

// 列表刷新下拉等参数
let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)
let nodata = ref(false)
const query = reactive<getRewardListData>({
  noLoading: false,
  PageIndex: 1,
  PageSize: 12
})
// 奖励列表
let rewardList = ref<getRewardListItem[]>([])

// 获取奖励列表
const getRewardList = () => {
  getRewardListApi(query)
    .then((resp) => {
      if (refreshing.value) {
        rewardList.value = resp.data.items
      } else {
        rewardList.value.push(...resp.data.items)
      }
      nodata.value = rewardList.value.length == 0
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
  getRewardList()
}

// 上拉加载更多数据
const loadData = () => {
  listLoading.value = true
  query.noLoading = true
  query.PageIndex = parseInt(query.PageIndex.toString()) + 1
  getRewardList()
}

// 兑换奖励
const exchangeReward = () => {
  if (rewardCode.value == '') {
    showToast('请输入兑换码')
    return false
  }
  exchangeRewardApi({ RewardCode: rewardCode.value })
    .then(() => {
      showToast('领取成功')
      showAddBox.value = false
      query.PageIndex = 1
      rewardList.value = []
      getRewardList()
    })
    .catch((error) => {
      showToast('领取失败')
      console.log(error)
    })
}

getRewardList()
</script>
