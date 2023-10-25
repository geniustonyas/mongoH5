<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l"><i class="iconfont icon-return"></i></div>
        <div class="hml-m">常见问题</div>
      </div>
    </header>
    <main class="main">
      <!--<div class="clubhouse-box">
        <div class="cb_help"><div class="lm-title">常见问题</div><ul class="faq-box"><li><div class="l-title"><span>1. 什么是VIP俱乐部?</span><i class="iconfont icon-down"></i></div>--><!----><!--</li><li><div class="l-title"><span>2. 如何获得积分?</span><i class="iconfont icon-down"></i></div>--><!----><!--</li><li><div class="l-title"><span>3. 什么是VIP等级?</span><i class="iconfont icon-down"></i></div>--><!----><!--</li>--><!--v-if--><!--</ul><div class="lm-bottom"><a class="btn btn-primary">了解更多</a></div></div>
      </div>-->
        <div class="agent-overview">
    <div class="ao-row">
      <div class="r-title">{{ t('retentionTitle') }}</div>
      <div class="r-cont">
        {{ t('retentionSubTitle') }}
        <h3>{{ t('generalInfo') }}</h3>
        <div class="cb_help">
          <ul class="faq-box faq-page">
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ1') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA1') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ2') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA2') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ3') }}?</span><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA3') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ4') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA4') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ5') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA5') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>S{{ t('commissionQ6') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>
                  {{ t('commissionA6') }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <h3>{{ t('commission') }}</h3>
        <div class="cb_help">
          <ul class="faq-box faq-page">
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ1') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA1') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ1') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>
                  {{ t('commissionA2') }}
                  <br />{{ t('commissionQ2Desc') }}
                </p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ3') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA3') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ4') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA4') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ5') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA5') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ6') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>{{ t('commissionA6') }}</p>
              </div>
            </li>
            <li>
              <div class="l-title">
                <span>{{ t('commissionQ7') }}</span
                ><i class="iconfont icon-down"></i>
              </div>
              <div class="l-cont">
                <p>
                  {{ t('commissionA7') }}
                </p>
              </div>
            </li>
          </ul>
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

  const { t } = useI18n()
</script>
