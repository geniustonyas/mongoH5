<template>
  <div class="page">
    <CommonHeader :title="t('finance')" />
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-e">
          <div class="a-l">
            <a class="btn btn-light">{{ t('today') }}</a>
            <a class="btn btn-light">{{ t('yestoday') }}</a>
            <a class="btn btn-light">{{ t('currentWeek') }}</a>
            <a class="btn btn-light">{{ t('laskWeek') }}</a>
            <a class="btn btn-light">{{ t('currentMonth') }}</a>
          </div>
          <div class="a-r">
            <input class="form-control" :placeholder="t('statTime')" />
            <a class="btn btn-primary">{{ t('filter') }}</a>
          </div>
        </div>
        <div class="ar-b">
          <div class="report-finance-box">
            <ul>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('deposit') }}</span>
                      <b>29442</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-chongbi1" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a @click="showDepositBox = true">{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <div class="it-l">
                        <span>{{ t('withdraw') }}</span>
                        <b>29442</b>
                      </div>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-tibi1" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('rewards') }}</span>
                      <b>0</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-pingtaihongli" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a>{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('netFee') }}</span>
                      <b>0</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-wangluofei" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a>{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('totalwinLose') }}</span>
                      <b>-2330</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-zongshuying" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a>{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('depositFee') }}</span>
                      <b>0</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-shouxufei" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a>{{ t('readMore') }}</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>{{ t('jingWinLose') }}</span>
                      <b>0</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-jinglirun" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ar-m"><i class="iconfont icon-info" />{{ t('winLoseTip') }}</div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import CommonHeader from '@/components/layout/CommonHeader.vue'

const { t } = useI18n()
const showDepositBox = ref(false)
</script>
