<template>
  <div class="page">
    <CommonHeader :title="t('memberDeposit')" />
    <main class="main">
      <div class="agent-deposit">
        <div class="line-tabs">
          <span :class="{ active: tab == 'deposit' }" @click="toggleTab()">{{ t('agentDepositLimit') }}</span>
          <span :class="{ active: tab == 'depositRecord' }" @click="toggleTab()">{{ t('agentDepositRecord') }}</span>
        </div>
        <div class="ine-conts">
          <div :class="tab == 'deposit' ? 'cont active' : 'cont'">
            <div class="ad-escrow">
              <div class="ae-a">
                <div class="a-l">
                  <span><i class="iconfont icon-wallet" /></span>
                </div>
                <div class="a-r">
                  <span>{{ t('canUseLimit') }}</span>
                  <p>
                    <b>{{ showAmount ? '158.90' : '******' }}</b>
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
                        <input type="text" class="form-control" :placeholder="t('inputChildAccount')" autocomplete="off" />
                      </div>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('agentDepositAmount') }}</span>
                      </div>
                      <div class="cr-input">
                        <input type="text" class="form-control" :placeholder="t('inputAgentDepositAmount')" autocomplete="off" />
                      </div>
                    </div>
                    <p class="cr-tips">
                      <b>1.00</b> ≤
                      {{ t('singleAgentDepositAmount') }}
                      ≤<b>50,000.00</b>,
                      {{ t('agentDepositDayLimit') }}<b>10,000,000.00</b>
                    </p>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('withdrawFlowMult') }}</span>
                      </div>
                      <div class="cr-input ci-group"><input type="text" class="form-control" :placeholder="t('inputWithdrawFlowMult')" autocomplete="off" /><span class="password-addon">倍</span></div>
                    </div>
                    <p class="cr-tips">
                      <b>1</b>≤
                      {{ t('withdrawFlowMult') }}
                      ≤<b>8</b>
                    </p>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('remark') }}</span>
                      </div>
                      <div class="cr-input"><input type="password" class="form-control" :placeholder="t('inputRemark')" autocomplete="off" /></div>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="col-2">
                      <div class="cr-label">
                        <span>{{ t('loginPwd') }}</span>
                      </div>
                      <div class="cr-input"><input type="password" class="form-control" :placeholder="t('inputLoginPwd')" autocomplete="off" /></div>
                    </div>
                  </div>
                  <div class="cf-row">
                    <a class="btn btn-primary">{{ t('submit') }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div :class="tab == 'depositRecord' ? 'cont active' : 'cont'">
            <div class="agent-report-box">
              <div class="ar-a">
                <div class="a-col col-50">
                  <select class="form-control">
                    <option>{{ t('status') }}</option>
                  </select>
                </div>
                <div class="a-col col-50"><input class="form-control" :placeholder="t('memberAccount')" /></div>
                <div class="a-col col-2"><input class="form-control" :placeholder="t('optime')" /></div>
                <div class="a-col">
                  <a class="btn btn-primary">{{ t('filter') }}</a>
                </div>
              </div>
              <div class="ar-c">
                <ul>
                  <li>
                    <div class="l-bd">
                      <div class="d-a">
                        <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                        <div class="da-r">1711273443074514946</div>
                      </div>
                      <div class="d-d">
                        <div class="dd-l">
                          <span>操作时间</span>
                          2023-10-10 11:22
                        </div>
                        <div class="dd-r">
                          <b>1000</b>
                          <span class="txt-green">成功</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="l-bd">
                      <div class="d-a">
                        <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                        <div class="da-r">1711273443074514946</div>
                      </div>
                      <div class="d-d">
                        <div class="dd-l">
                          <span>操作时间</span>
                          2023-10-10 11:22
                        </div>
                        <div class="dd-r">
                          <b>1000</b>
                          <span class="txt-green">成功</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="l-bd">
                      <div class="d-a">
                        <div class="da-l"><span>bb001</span>-<b>白银</b></div>
                        <div class="da-r">1711273443074514946</div>
                      </div>
                      <div class="d-d">
                        <div class="dd-l">
                          <span>操作时间</span>
                          2023-10-10 11:22
                        </div>
                        <div class="dd-r">
                          <b>1000</b>
                          <span class="txt-green">成功</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import CommonHeader from '@/components/layout/CommonHeader.vue'

const { t } = useI18n()
const tab = ref('deposit')
const showAmount = ref(false)
const toggleTab = () => {
  tab.value = tab.value === 'deposit' ? 'depositRecord' : 'deposit'
}
</script>
