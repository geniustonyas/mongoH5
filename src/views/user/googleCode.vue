<template>
  <div class="page">
    <UserHeader />
    <main class="main">
      <div class="loginbox">
        <div class="custom-form">
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('googleCode') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="loginData.VerificationCode" ref="googleDom" type="text" class="form-control" :placeholder="t('typeCode')" autocomplete="off" />
              <div id="googleTip" class="tip">{{ errorMsg }}</div>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-btns">
              <a class="btn btn-primary full" @click="handleLogin()">{{ $t('login') }}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

import UserHeader from '@/components/layout/UserHeader.vue'

import { useUserStore } from '@/store/modules/user'
import { awaitWraper } from '@/utils/index'
import { thirdData } from '@/api/user/types'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()
const { t } = useI18n()

const loginData = <thirdData>reactive({
  VerificationCode: '',
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: ''
})
const errorMsg = ref('')
const handleLogin = async() => {
  if (loginData.VerificationCode == '') {
    errorMsg.value = t('tips.googleCode')
    return false
  }
  Object.assign(loginData, route.query)
  const loginRes = await awaitWraper(userStore.thirdLogin(loginData))
    if (loginRes[0]) {
      showToast(loginRes[0])
    } else {
      router.push({ name: 'index' })
    }
}
</script>
