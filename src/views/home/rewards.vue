<template>
  <div class="page">
    <CommonHeader :title="t('rewards')">
      <div class="hml-r t-i-w" @click="showAddBox = true">
        {{ t('claimReward') }}<span><i class="iconfont icon-add" /></span>
      </div>
    </CommonHeader>
    <main class="main">
      <div class="record-box">
        <div class="rb-head">
          <div class="line-tabs">
            <span :class="{ active: tab == 'activities' }" @click="toggleTab('activities')">{{ t('rewardActivities') }}</span>
            <span :class="{ active: tab == 'records' }" @click="toggleTab('records')">{{ t('rewardRecords') }}</span>
          </div>
        </div>
        <div class="mb-conts">
          <div v-show="tab == 'activities'" class="mc-box">
            <div class="rewards-box">
              <ul v-if="promoCodeList.length > 0" class="rb-promo-list">
                <li v-for="(item, index) of promoCodeList" :key="index">
                  <div class="rewards-card">
                    <div class="rc-t">
                      <div class="rct-l">
                        <img :src="`https://seabet.imgix.net/${item.image}?auto=compress,format&w=200&h=160&q=50&dpr=2`" />
                      </div>
                      <div class="rct-r">
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.intro }}</p>
                      </div>
                    </div>
                    <div class="rc-b">
                      <a class="btn btn-primary" @click="claimPromo(item)">{{ t('applyNow') }}</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div v-show="tab == 'records'" class="mc-box">
            <div class="rewards-box">
              <div class="rb-title">{{ t('recentTransaction') }}</div>
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
                        <strong>{{ item.rewardName }}</strong>
                      </div>
                      <div class="l-r">
                        <strong>{{ item.orderStatus == '1' ? moneyFormat(item.amount) + item.currencyCode : '' }}</strong>
                        <span :class="`${rewardStatusCss[item.orderStatus]}`">{{ t(`rewardStatus[${item.orderStatus}]`) }}</span>
                      </div>
                    </li>
                  </List>
                </PullRefresh>
              </ul>
              <Nodata v-if="nodata" :message="t('nodata')" />
            </div>
          </div>
        </div>
      </div>
    </main>
    <div v-show="showAddBox" class="mask-box">
      <div class="mb-bd">
        <div class="claim-reward-box">
          <span class="icon-btn" @click="showAddBox = false">
            <i class="iconfont icon-close" />
          </span>
          <h2>{{ t('claimNewReward') }}</h2>
          <div class="custom-form">
            <div class="cf-row">
              <div class="cr-input">
                <input v-model="rewardCode" type="text" class="form-control" :placeholder="t('rewardCode')" autocomplete="off" />
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

    <div v-show="showPromoBox" class="mask-box">
      <div class="mb-bd">
        <div class="claim-reward-box">
          <span class="icon-btn" @click="showPromoBox = false">
            <i class="iconfont icon-close" />
          </span>
          <h2>{{ t('applyPromo') }}</h2>
          <div class="custom-form">
            <div class="cf-row">
              <div class="cr-input">
                <input v-model="promoQuery.Data.BetTime" type="text" class="form-control" readonly style="border-radius: 0.4rem" :placeholder="t('tips.betHolder')" @focus="selectDate" />
              </div>
            </div>
            <div class="cf-row">
              <div class="cr-input">
                <textarea v-model="promoQuery.Data.OrderNo" class="form-control bor-rad" :placeholder="t('tips.orderNoholder')" rows="3" />
              </div>
            </div>
            <div class="cf-row">
              <div class="cr-btns">
                <a class="btn btn-primary full" @click="applyReward">{{ t('claim') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ConfigProvider theme="dark">
      <Calendar
        v-model:show="showDatePicker"
        :default-date="defaultDate"
        type="range"
        :min-date="minDate"
        :max-date="maxDate"
        color="#f7cc00"
        :allow-same-day="true"
        :style="{ height: '500px' }"
        round
        :show-confirm="false"
        :show-mark="false"
        :formatter="dayFormatter"
        @confirm="customDate"
      />
    </ConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Nodata from '@/components/Nodata.vue'

import { getRewardCodeListApi, getRewardListApi, exchangeRewardApi, applyRewardApi } from '@/api/home'
import { getRewardListData, getRewardListItem, getRewardCodeListItem } from '@/api/home/types'

import { useI18n } from 'vue-i18n'
import { moneyFormat } from '@/utils'
import dynamicObject from '@/types/dynamicObject'

import { PullRefresh, List, showToast, Calendar, ConfigProvider } from 'vant'
import dayjs from 'dayjs'
import { cloneDeep } from 'lodash-es'

const { t } = useI18n()

const tab = ref('activities')
const rewardStatusCss = ref<dynamicObject>(['incomplete', 'confirmed', 'deleted'])
let defaultDate = [dayjs().subtract(7, 'day').toDate(), dayjs().add(1, 'day').toDate()]
// 显示兑奖弹窗
let showAddBox = ref(false)
let showPromoBox = ref(false)
// 奖励代码
let rewardCode = ref('')

// 优惠码列表
let currentNeedForm = ref(false)
let promoCodeList = ref<getRewardCodeListItem[]>([])

const promoQuery = reactive({
  Id: '',
  Data: {
    OrderNo: '',
    BetTime: '',
    Expand: '',
    Expand1: ''
  }
})

const defaultPromoQuery = cloneDeep(promoQuery)

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

// 筛选 - 日期控件参数
const minDate = dayjs().subtract(1, 'months').toDate()
const maxDate = dayjs().toDate()
let showDatePicker = ref(false)
// 日期控件去掉日历格子下文字信息
const dayFormatter = (day: any) => {
  day.bottomInfo = ''
  return day
}

// 切换tab选项
const toggleTab = (tabs: string) => {
  tab.value = tabs
  if (tab.value == 'activities') {
    getPromoCodeList()
  } else {
    query.PageIndex = 1
    rewardList.value = []
    getRewardList()
  }
}

// 获取优惠码列表
const getPromoCodeList = () => {
  getRewardCodeListApi()
    .then((resp) => {
      promoCodeList.value = resp.data
    })
    .catch((error) => showToast(error))
}

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

// 申请优惠前判断是否需要提交表单
const claimPromo = (item: getRewardCodeListItem) => {
  promoQuery.Id = item.id
  currentNeedForm.value = item.needForm
  if (item.needForm) {
    showPromoBox.value = true
  } else {
    applyReward()
  }
}

// 申请优惠
const applyReward = () => {
  if (currentNeedForm.value) {
    if (!promoQuery.Data.BetTime) {
      showToast(t('tips.inputBetTime'))
      return false
    }
    if (promoQuery.Data.OrderNo == '') {
      showToast(t('tips.inputOrderId'))
      return false
    }
  }
  applyRewardApi(promoQuery)
    .then(() => {
      showToast(t('tips.applySuccess'))
    })
    .catch((error) => {
      console.log(error)
    })
  Object.assign(promoQuery, defaultPromoQuery)
  showPromoBox.value = false
  showDatePicker.value = false
}

// 兑换奖励
const exchangeReward = () => {
  if (rewardCode.value == '') {
    showToast(t('tips.inputExhangeCode'))
    return false
  }
  exchangeRewardApi({ RewardCode: rewardCode.value })
    .then(() => {
      showToast(t('tips.receivedRewardSuccess'))
      showAddBox.value = false
      query.PageIndex = 1
      rewardList.value = []
      getRewardList()
    })
    .catch((error) => {
      // showToast(t('tips.receivedRewardFail'))
      console.log(error)
    })
}

// 选择日期后回调
const customDate = (time: any) => {
  promoQuery.Data.BetTime = dayjs(time[0]).format('YYYY-MM-DD HH:mm:ss') + ' - ' + dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD HH:mm:ss')
  showDatePicker.value = false
}

const selectDate = () => {
  showDatePicker.value = true
  console.log(showDatePicker.value)
}

toggleTab('activities')
</script>
