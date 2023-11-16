<template>
  <div class="page">
    <CommonHeader :title="t('memberDeposit')" />
    <main class="main">
      <div class="agent-deposit">
        <div class="line-tabs">
          <span :class="{ active: tab == 'deposit' }" @click="toggleTab('deposit')">{{ t('agentDepositLimit') }}</span>
          <span :class="{ active: tab == 'depositRecord' }" @click="toggleTab('depositRecord')">{{ t('agentDepositRecord') }}</span>
        </div>
        <div class="ine-conts">
          <div v-if="tab == 'deposit'" class="cont">
            <div class="ad-escrow">
              <div class="ae-a">
                <div class="a-l">
                  <span><i class="iconfont icon-wallet" /></span>
                </div>
                <div class="a-r">
                  <span>{{ t('canUseLimit') }}</span>
                  <p>
                    <b>{{ showAmount ? moneyFormat(balance) : '********' }}</b>
                    <i :class="showAmount ? 'iconfont icon-xianshi' : 'iconfont icon-yincang'" @click="showAmount = !showAmount" />
                  </p>
                </div>
              </div>
              <div class="ae-b">
                <div class="custom-form">
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('childAccount') }}</span>
                      </div>
                      <div class="cr-input">
                        <input v-model="depositForm.name" type="text" class="form-control" :placeholder="t('inputChildAccount')" autocomplete="off" />
                        <div id="accountTip" class="tip" />
                      </div>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('agentDepositAmount') }}</span>
                      </div>
                      <div class="cr-input">
                        <input v-model="depositForm.amount" type="text" class="form-control" :placeholder="t('inputAgentDepositAmount')" autocomplete="off" />
                        <div id="amountTip" class="tip" />
                      </div>
                    </div>
                    <p class="cr-tips">
                      <b>1.00 ≤</b>
                      {{ t('singleAgentDepositAmount') }}
                      <b>≤ 50,000.00</b>
                    </p>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('withdrawFlowMult') }}</span>
                      </div>
                      <div class="cr-input">
                        <input v-model="depositForm.times" type="text" class="form-control" :placeholder="t('inputWithdrawFlowMult')" autocomplete="off" maxlength="18" />
                        <!-- <span class="password-addon">{{ t('multiple') }}</span> -->
                        <div id="multipleTip" class="tip" />
                      </div>
                    </div>
                    <p class="cr-tips">
                      <b>1 ≤</b>
                      {{ t('withdrawFlowMult') }}
                      <b>≤ 8</b>
                    </p>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('remark') }}</span>
                      </div>
                      <div class="cr-input">
                        <!-- <input v-model="" type="text" class="form-control" :placeholder="t('inputRemark')" autocomplete="off" /> -->
                        <select v-model="depositForm.remark" class="form-control">
                          <option v-for="(item, index) of remarkOptions" :key="index" :value="item.text">{{ item.text }}</option>
                        </select>
                        <div id="remarkTip" class="tip" />
                      </div>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('loginPwd') }}</span>
                      </div>
                      <div class="cr-input">
                        <input v-model="depositForm.pwd" type="password" class="form-control" :placeholder="t('inputLoginPwd')" autocomplete="off" />
                        <div id="pwdTip" class="tip" />
                      </div>
                    </div>
                  </div>
                  <div class="cf-row">
                    <a class="btn btn-primary" @click="memberDeposit">{{ t('submit') }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="tab == 'depositRecord'" class="cont">
            <div class="agent-report-box">
              <div class="ar-a">
                <div class="a-col col-50">
                  <ConfigProvider theme="dark" class="agent-sel">
                    <DropdownMenu direction="down">
                      <DropdownItem v-model="status" ref="categoryDom" :options="options" @change="selStatus" />
                    </DropdownMenu>
                  </ConfigProvider>
                </div>
                <div class="a-col col-50">
                  <input v-model="query.name" class="form-control" :placeholder="t('memberAccount')" />
                </div>
                <div class="a-col col-2">
                  <input readonly class="form-control" :value="query.start != '' ? selDate : ''" :placeholder="t('optime')" @focus="showDatePicker = true" />
                </div>
                <div class="a-col">
                  <a class="btn btn-primary" @click="filterGetDepositRecord">{{ t('filter') }}</a>
                </div>
              </div>
              <div class="ar-c">
                <ul v-if="dataList.length > 0">
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
                      <li v-for="(item, index) of dataList" :key="index">
                        <div class="l-bd">
                          <div class="d-a">
                            <div class="da-l">
                              <span>{{ item.payeeName }}</span>
                              <!-- -<b>白银</b> -->
                            </div>
                            <div class="da-r">{{ item.id }}</div>
                          </div>
                          <div class="d-d">
                            <div class="dd-l">
                              <span>{{ t('optime') }}</span>
                              {{ dayjs(item.time).format('YYYY-MM-DD HH:mm:ss') }}
                            </div>
                            <div class="dd-r">
                              <b>{{ moneyFormat(item.amount) }}</b>
                              <span v-if="item.status == 1" class="txt-green">{{ t('agentDepositStatus.1') }}</span>
                              <span v-else class="txt-red">{{ t('agentDepositStatus.0') }}</span>
                            </div>
                          </div>
                          <div class="d-e">{{ t('remark') }}: {{ item.remark }}</div>
                        </div>
                      </li>
                    </List>
                  </PullRefresh>
                </ul>
                <Nodata v-show="nodata" :message="t('nodata')" />
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
          @confirm="customRegDate"
        />
      </ConfigProvider>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { getBalanceApi } from '@/api/fund/index'
import { memberDepositApi, getDepositRecordApi } from '@/api/affiliate'
import { memberDepositData, getDepositRecordData, getDepositRecordRespItem } from '@/api/affiliate/types'
import { moneyFormat } from '@/utils/index'
import { isUname, isPwd } from '@/utils/validate'

import { ConfigProvider, DropdownMenu, DropdownItem, Calendar, PullRefresh, List, showToast } from 'vant'
import dayjs from 'dayjs'

import CommonHeader from '@/components/layout/CommonHeader.vue'
import Nodata from '@/components/Nodata.vue'

const { t } = useI18n()

const tab = ref('deposit')
const showAmount = ref(false)

const remarkOptions = [
  { text: t('selRemark'), value: '' },
  { text: t('remarkContent.1'), value: '1' },
  { text: t('remarkContent.2'), value: '2' },
  { text: t('remarkContent.3'), value: '3' },
  { text: t('remarkContent.4'), value: '4' },
  { text: t('remarkContent.5'), value: '5' }
]
const status = ref(-1)
const options = computed(() => {
  return [
    { text: t('status'), value: -1 },
    { text: t('agentDepositStatus.0'), value: 5 },
    { text: t('agentDepositStatus.1'), value: 1 }
  ]
})
const balance = ref('')

const btnLoading = ref(false)
const errorMsg = ref('')
const depositForm = reactive<memberDepositData>({
  name: '',
  amount: '',
  times: '',
  remark: '',
  pwd: ''
})
const defaultDepositForm = {
  name: '',
  amount: '',
  times: '',
  remark: '',
  pwd: ''
}

const showDatePicker = ref(false)
// 默认日期
let defaultDate = [dayjs().subtract(1, 'month').toDate(), dayjs().add(1, 'day').toDate()]
// 筛选 - 日期控件参数
const minDate = dayjs().subtract(1, 'months').toDate()
const maxDate = dayjs().toDate()

const selDate = ref('')

const query = reactive<getDepositRecordData>({
  name: '',
  start: '',
  end: '',
  s: null,
  page: 1,
  pcount: 10
})
const defaultQuery = {
  name: '',
  start: '',
  end: '',
  s: null,
  page: 1,
  pcount: 10
}
// 列表刷新下拉等参数
let listLoading = ref(false)
let refreshing = ref(false)
let finished = ref(false)
let error = ref(false)
let nodata = ref(false)
const dataList = ref<getDepositRecordRespItem[]>([])

const selStatus = (val: number) => {
  query.s = val == -1 ? null : val
}

// 日期控件去掉日历格子下文字信息
const dayFormatter = (day: any) => {
  day.bottomInfo = ''
  return day
}
const customRegDate = (time: any) => {
  query.start = dayjs(time[0]).format('YYYY-MM-DD')
  query.end = dayjs(time[1]).add(1, 'day').format('YYYY-MM-DD')
  selDate.value = dayjs(time[0]).format('YYYY-MM-DD') + ' ~ ' + dayjs(time[1]).format('YYYY-MM-DD')
  showDatePicker.value = false
}

// 获取余额列表
const getBalanceList = () => {
  getBalanceApi()
    .then((resp) => {
      if (resp.data.length > 0) {
        const tmp = resp.data.find((item) => item.name == 'USDT')
        if (tmp) {
          balance.value = tmp.balance
        }
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

// 提交代存请求
const memberDeposit = async () => {
  if (btnLoading.value) {
    return false
  }
  btnLoading.value = true

  errorMsg.value = ''
  const allTip = document.getElementsByClassName('tip')
  for (var i = 0; i < allTip.length; i++) {
    allTip[i].innerHTML = ''
  }
  const accountEl = document.getElementById('accountTip')
  const amountEl = document.getElementById('amountTip')
  const multipleEl = document.getElementById('multipleTip')
  const remarkEl = document.getElementById('remarkTip')
  const pwdEl = document.getElementById('pwdTip')

  if (depositForm.name == '') {
    errorMsg.value = t('inputChildAccount')
    accountEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    accountEl!.innerHTML = ''
  }
  if (!isUname(depositForm.name)) {
    errorMsg.value = t('tips.isAccount')
    accountEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    accountEl!.innerHTML = ''
  }

  // const isExistUserResp = await checkUserApi({ UserName: depositForm.UserName, noLoading: true })
  // if (isExistUserResp.data) {
  //   errorMsg.value = t('childAccountNotExist')
  //   accountEl!.innerHTML = errorMsg.value
  //   btnLoading.value = false
  //   return false
  // } else {
  //   errorMsg.value = ''
  //   accountEl!.innerHTML = ''
  // }

  if (depositForm.amount == '') {
    errorMsg.value = t('inputAgentDepositAmount')
    amountEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    amountEl!.innerHTML = ''
  }
  //@ts-ignore
  if (isNaN(depositForm.amount)) {
    errorMsg.value = t('mustBeNumber', { tmp: t('amount') })
    amountEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    amountEl!.innerHTML = ''
  }
  if (parseFloat(depositForm.amount.toString()) < 1 || parseFloat(depositForm.amount.toString()) > 50000) {
    errorMsg.value = t('depositAmountLimit')
    amountEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    amountEl!.innerHTML = ''
  }

  if (depositForm.times == '') {
    errorMsg.value = t('inputWithdrawFlowMult')
    multipleEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    multipleEl!.innerHTML = ''
  }
  //@ts-ignore
  if (isNaN(depositForm.times)) {
    errorMsg.value = t('mustBeNumber', { tmp: t('withdrawFlowMult') })
    multipleEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    multipleEl!.innerHTML = ''
  }
  if (parseFloat(depositForm.times.toString()) > 8 || parseFloat(depositForm.times.toString()) < 1) {
    errorMsg.value = t('withdrawFlowMultLimit')
    multipleEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    multipleEl!.innerHTML = ''
  }

  if (depositForm.remark == '') {
    errorMsg.value = t('inputRemark')
    remarkEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    remarkEl!.innerHTML = ''
  }

  if (depositForm.pwd == '') {
    errorMsg.value = t('inputLoginPwd')
    pwdEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    pwdEl!.innerHTML = ''
  }

  if (!isPwd(depositForm.pwd)) {
    errorMsg.value = t('tips.isPwd')
    pwdEl!.innerHTML = errorMsg.value
    btnLoading.value = false
    return false
  } else {
    errorMsg.value = ''
    pwdEl!.innerHTML = ''
  }

  memberDepositApi(depositForm)
    .then((resp: any) => {
      console.log(resp)
      Object.assign(depositForm, defaultDepositForm)
      btnLoading.value = false
      showToast(t('agentDepositSuccess'))
    })
    .catch((error: any) => {
      console.log(error)
      btnLoading.value = false
    })
}

// 获取代存记录
const getDepositRecord = () => {
  getDepositRecordApi(query)
    .then((resp: any) => {
      if (refreshing.value) {
        dataList.value = resp.data.items
      } else {
        dataList.value.push(...resp.data.items)
      }
      nodata.value = dataList.value.length == 0
      refreshing.value = false
      finished.value = resp.data.items.length < query.pcount
      listLoading.value = false
    })
    .catch((error: any) => {
      listLoading.value = false
      refreshing.value = false
      console.log(error)
    })
}

const filterGetDepositRecord = () => {
  query.page = 1
  dataList.value = []
  listLoading.value = true
  getDepositRecord()
}

// 刷新
const fresh = () => {
  query.page = 1
  getDepositRecord()
}

// 上拉加载更多数据
const loadData = () => {
  query.page += 1
  getDepositRecord()
}

// 切换tab
const toggleTab = (tb: string) => {
  tab.value = tb
  if (tab.value == 'depositRecord') {
    getDepositRecord()
  } else {
    status.value = -1
    Object.assign(query, defaultQuery)
  }
}

getBalanceList()
</script>
