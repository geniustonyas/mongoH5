<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l"><i class="iconfont icon-return" /></div>
        <div class="hml-m">财务报表</div>
      </div>
    </header>
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-e">
          <div class="a-l">
            <a class="btn btn-light">今日</a>
            <a class="btn btn-light">昨日</a>
            <a class="btn btn-light">本周</a>
            <a class="btn btn-light">上周</a>
            <a class="btn btn-light">本月</a>
          </div>
          <div class="a-r">
            <input class="form-control" placeholder="统计时间" />
            <a class="btn btn-primary">筛选</a>
          </div>
        </div>
        <div class="ar-b">
          <div class="report-finance-box">
            <ul>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>存款</span>
                      <b>29442</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-chongbi1" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a @click="showDepositBox = true">查看详情</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <div class="it-l">
                        <span>提现</span>
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
                      <span>奖励</span>
                      <b>0</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-pingtaihongli" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a>查看详情</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>网络费用</span>
                      <b>0</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-wangluofei" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a>查看详情</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>总输赢</span>
                      <b>-2330</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-zongshuying" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a>查看详情</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>存款手续费</span>
                      <b>0</b>
                    </div>
                    <div class="it-r">
                      <i class="iconfont icon-shouxufei" />
                    </div>
                  </div>
                  <div class="ib-more">
                    <a>查看详情</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <div class="ib-txt">
                    <div class="it-l">
                      <span>净输赢</span>
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
        <div class="ar-m"><i class="iconfont icon-info" /> 提示：总输赢、净输赢中正数表示公司盈利，负数表示公司亏损，每天数据只做普通参考，并不做实际佣金派发标准。</div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
