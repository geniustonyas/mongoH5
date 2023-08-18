<template>
  <ConfigProvider theme="dark">
    <Popup v-model:show="showLangPick" position="bottom" round :closeable="true">
      <div class="picker-box">
        <div class="pb-title">{{ t('selectLanguage') }}</div>
        <ul>
          <li v-for="(item, index) of languages" :key="index" @click="selLanguage(item.value)">
            <span>{{ item.text }}</span>
            <Icon v-if="item.value == locale" name="success" class="active" />
          </li>
        </ul>
      </div>
    </Popup>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { selLang, languages } from '@/i18n/index'
import { ConfigProvider, Popup, Icon } from 'vant'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store/modules/user'

const userStore = useUserStore()
const { t, locale } = useI18n()

const showLangPick = ref(false)

// 选择语言
const selLanguage = (val: string) => {
  selLang(val)
  locale.value = val
  showLangPick.value = !showLangPick.value
  userStore.getUserInfo({ noLoading: false })
}

defineExpose({
  showLangPick
})
</script>
