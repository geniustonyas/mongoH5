<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l"><i class="iconfont icon-return" /></div>
        <div class="hml-m">佣金报表</div>
      </div>
    </header>
    <main class="main">
      <div class="agent-report-box">
        <div class="ar-a">
          <div class="a-col col-2">
            <select class="form-control">
              <option>2023-10</option>
            </select>
          </div>
          <div class="a-col"><a class="btn btn-primary">筛选</a></div>
        </div>
        <div class="ar-d">
          <div class="d-item">
            <div class="di-l">发放时间</div>
            <div class="di-r">未发放</div>
          </div>
          <div class="d-item">
            <div class="di-l">活跃用户</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">有效新增会员</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">总输赢</div>
            <div class="di-r"><b class="txt-red">-1000</b></div>
          </div>
          <div class="d-item">
            <div class="di-l">网络费用</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">奖励</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">存提手续费</div>
            <div class="di-r">--</div>
          </div>
          <div class="d-item">
            <div class="di-l">净输赢</div>
            <div class="di-r"><b class="txt-green">2000</b></div>
          </div>
          <div class="d-item">
            <div class="di-l">佣金比例</div>
            <div class="di-r">35%</div>
          </div>
          <div class="d-item">
            <div class="di-l">佣金</div>
            <div class="di-r"><b>6000</b></div>
          </div>
          <div class="d-item">
            <div class="di-l">上月结余</div>
            <div class="di-r"><b>100</b></div>
          </div>
          <div class="d-item">
            <div class="di-l">实际佣金</div>
            <div class="di-r"><b>200</b></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
