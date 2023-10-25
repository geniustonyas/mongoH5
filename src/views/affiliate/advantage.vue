<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l"><i class="iconfont icon-return"></i></div>
        <div class="hml-m">优势</div>
      </div>
    </header>
    <main class="main">
      <div class="agent-overview advantage">
        <div class="ao-row">
          <div class="r-title">{{ t('advantageTitle') }}</div>
          <div class="r-cont">
            <h3><i class="iconfont icon-dui"></i>{{ t('advantageQ1') }}</h3>
            <p>{{ t('advantageA1') }}</p>
            <h3><i class="iconfont icon-dui"></i>{{ t('advantageQ2') }}</h3>
            <p>{{ t('advantageA2') }}</p>
            <h3><i class="iconfont icon-dui"></i>{{ t('advantageQ3') }}</h3>
            <p>{{ t('advantageA3') }}</p>
            <h3><i class="iconfont icon-dui"></i>{{ t('advantageQ4') }}</h3>
            <p>{{ t('advantageA4') }}</p>
            <h3><i class="iconfont icon-dui"></i>{{ t('advantageQ5') }}</h3>
            <p>{{ t('advantageA5') }}</p>
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
