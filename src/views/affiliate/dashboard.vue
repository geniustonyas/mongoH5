<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l"><i class="iconfont icon-return" /></div>
        <div class="hml-m">仪表盘</div>
      </div>
    </header>
    <main class="main">
      <div class="agent-dashboard">
        <div class="ad-a">
          <div class="a-t">
            <span>本月净输赢(USDT)</span>
            <b>2,9422</b>
          </div>
          <div class="a-b">
            <ul>
              <li>
                <div class="l-bd">
                  <span>下级成员</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>首存人数</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>本月新注册</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>有效新增会员</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>本月活跃成员</span>
                  <b>0</b>
                </div>
              </li>
              <li>
                <div class="l-bd">
                  <span>佣金比例</span>
                  <b>35%</b>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ad-h">
          <div class="h-l">数据对比</div>
          <div class="h-r">
            <div class="radio-tabs"><span class="active">金额</span><span class="">人数</span></div>
          </div>
        </div>
        <div class="ad-c">柱状图</div>
      </div>
    </main>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
