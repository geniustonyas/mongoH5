<template>
  <div class="page">
    <UserHeader :route-name="'index'" />
    <main class="main">
      <div class="loginbox">
        <!-- <UserPartner /> -->
        <div class="l-signin third-reg">
          <h1>{{ t('thirdRegPage.beFinished') }}</h1>
          <h3>{{ t('thirdRegPage.fixInfo') }}</h3>
        </div>
        <div class="custom-form">
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('userName') }}</span>
            </div>
            <div class="cr-input">
              <input v-model="regForm.UserName" ref="userNameDom" type="text" class="form-control" :placeholder="t('regPage.holderUserName')" @blur="checkUserExist()" />
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('email') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.Email" ref="emailDom" type="email" class="form-control" :placeholder="t('regPage.holderEmail')" @blur="checkEmailExist()" />
              <Loading v-show="showloading" size="20px" class="captcha" />
              <span v-show="!showloading" :class="sended || regForm.Email.length == 0 ? 'captcha sended' : 'captcha'" @click="sendEmail()">{{ sended ? t('sended') : t('sendEmail') }}</span>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('emailCaptcha') }}</span>
            </div>
            <div class="cr-input">
              <input v-model.trim="regForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" :placeholder="t('tips.inputEmailcapcha')" />
            </div>
          </div>
          <!-- 生日 -->
          <!-- <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('birthday') }}</span>
            </div>
            <div class="cr-input group">
              <select class="form-control" v-model="day" ref="dayDom">
                <option v-for="item in 31" :key="item" :value="item < 10 ? '0' + item : item">{{ item < 10 ? '0' + item : item }}</option>
              </select>
              <select class="form-control" v-model="month" ref="monthDom">
                <option v-for="item in 12" :key="item" :value="item < 10 ? '0' + item : item">{{ item < 10 ? '0' + item : item }}</option>
              </select>
              <select class="form-control" v-model="year" ref="yearDom">
                <option v-for="item in getYearList()" :key="item" :value="item">{{ item }}</option>
              </select>
            </div>
          </div> -->
          <!-- 电话号码 -->
          <!-- <div class="cf-row">
            <div class="cr-label">
              <span>{{ t('telephone') }}</span>
            </div>
            <div class="cr-input group g-tel">
              <select v-model="regForm.CountryCode" ref="countryDom" class="form-control">
                <option v-for="(item, index) of countryCode" :key="index" :value="`${item.country_code} (+${item.phone_code})`">{{ `${item.country_code} (+${item.phone_code})` }}</option>
              </select>
              <input v-model="regForm.PhoneNumber" ref="phoneDom" type="tel" class="form-control" :placeholder="t('regPage.holderTelephone')" />
            </div>
          </div> -->

          <div class="cf-row">
            <div class="cr-mark cm-checkbox">
              <input v-model="isAudit" ref="isAuditDom" type="checkbox" />
              {{ t('regPage.isAdult') }}
              <a href="#">{{ t('regPage.termCondition') }}</a>
              {{ t('and') }}
              <a href="#">{{ t('regPage.privacyPolicy') }}</a>
            </div>
          </div>
          <div class="cf-row">
            <div ref="isAgreeDom" class="cr-mark cm-checkbox">
              <input v-model="isAgree" type="checkbox" />
              {{ t('regPage.isAgree') }}
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-btns">
              <a class="btn btn-primary full" @click="handleReg()">{{ t('createUser') }}</a>
            </div>
          </div>
          <div class="cf-row">
            <div class="cr-bo">
              {{ t('hasAccount') }}
              <a @click="router.push({ name: 'login' })">{{ t('login') }}</a>
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

// import UserPartner from '@/components/layout/UserPartner.vue'
import UserHeader from '@/components/layout/UserHeader.vue'

import { awaitWraper } from '@/utils'
import { useUserStore } from '@/store/modules/user'
// import { getYearList } from '@/utils'
// import { countryCode } from '@/utils/countryCode'
import { isUname, isEmail } from '@/utils/validate'
import { checkUserApi, checkEmailApi, thirdRegApi, sendEmailApi } from '@/api/user'

import { useI18n } from 'vue-i18n'
import { showToast } from 'vant'
import 'vant/es/toast/style'

const route = useRoute()
const router = useRouter()
const { t } = useI18n()

if (!route.query.ThirdPartyType || !route.query.ThirdPartyId || !route.query.ThirdPartyName || !route.query.Sign) {
  showToast('参数错误')
  router.back()
}
const userStore = useUserStore()

// 临时存储表单值
let sended = ref(false)
let showloading = ref(false)
// let day = ref<string | number>('')
// let month = ref<string | number>('')
// let year = ref<string | number>('')
let isAudit = ref(true)
let isAgree = ref(true)

// dom元素
let userNameDom = ref<HTMLInputElement | null>(null)
let emailDom = ref<HTMLInputElement | null>(null)
// let dayDom = ref<HTMLInputElement | null>(null)
// let monthDom = ref<HTMLInputElement | null>(null)
// let yearDom = ref<HTMLInputElement | null>(null)
// let countryDom = ref<HTMLInputElement | null>(null)
// let phoneDom = ref<HTMLInputElement | null>(null)
let isAuditDom = ref<HTMLInputElement | null>(null)
let isAgreeDom = ref<HTMLInputElement | null>(null)
let verificationCodeDom = ref<HTMLInputElement | null>(null)

let regForm = reactive({
  UserName: '',
  CountryCode: '',
  // PhoneNumber: '',
  Email: '',
  AgentId: '',
  // DateOfBirth: '',
  RegisterUrl: document.domain,
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: '',
  VerificationCode: ''
})
let loginForm = {
  ThirdPartyType: '',
  ThirdPartyId: '',
  ThirdPartyName: '',
  Sign: ''
}

// 发送验证码
const sendEmail = async () => {
  if (sended.value) {
    return false
  }
  if (!isEmail(regForm.Email)) {
    showToast(t('tips.isEmail'))
    emailDom.value?.focus()
    return false
  }
  const isExistEmail = await checkEmailExist()
  if (isExistEmail) {
    return false
  }
  showloading.value = true
  sendEmailApi({ EmailCheckCodeType: 0, Email: regForm.Email })
    .then((resp) => {
      sended.value = true
      showloading.value = false
      showToast(t('tips.sendSuccess'))
      console.log(resp)
    })
    .catch((error) => {
      showloading.value = false
      // showToast(t('tips.sendFail'))
      console.log(error)
    })
}

// 检查用户名是否占用
const checkUserExist = async () => {
  try {
    if (regForm.UserName == '') {
      return false
    }
    if (!isUname(regForm.UserName)) {
      return false
    }
    const isExistUserResp = await checkUserApi({ UserName: regForm.UserName, noLoading: true })
    if (isExistUserResp.data) {
      userNameDom.value?.focus()
      showToast(t('tips.userNameExist'))
    }
    return isExistUserResp.data
  } catch (error: any) {
    // showToast(error)
    return false
  }
}

// 检查邮箱是否占用
const checkEmailExist = async () => {
  try {
    if (regForm.Email == '') {
      return false
    }
    if (!isEmail(regForm.Email)) {
      return false
    }
    const isExistEmailResp = await checkEmailApi({ Keyword: regForm.Email, noLoading: true })
    if (isExistEmailResp.data) {
      emailDom.value?.focus()
      showToast(t('tips.emailExist'))
    }
    return isExistEmailResp.data
  } catch (error: any) {
    // showToast(error)
    return false
  }
}

/** 登录逻辑 */
const handleReg = async () => {
  if (regForm.UserName == '') {
    showToast(t('tips.inputAccount'))
    userNameDom.value?.focus()
    return false
  }
  if (!isUname(regForm.UserName)) {
    showToast(t('tips.isAccount'))
    userNameDom.value?.focus()
    return false
  }
  if (regForm.Email == '') {
    showToast(t('tips.inputEmail'))
    emailDom.value?.focus()
    return false
  }
  if (!isEmail(regForm.Email)) {
    showToast(t('tips.isEmail'))
    emailDom.value?.focus()
    return false
  }
  if (regForm.VerificationCode == '') {
    showToast(t('tips.inputEmailcapcha'))
    verificationCodeDom.value?.focus()
    return false
  }
  // if (day.value == '') {
  //   showToast(t('tips.inputDay'))
  //   dayDom.value?.focus()
  //   return false
  // }
  // if (month.value == '') {
  //   showToast(t('tips.inputMonth'))
  //   monthDom.value?.focus()
  //   return false
  // }
  // if (year.value == '') {
  //   showToast(t('tips.inputYear'))
  //   yearDom.value?.focus()
  //   return false
  // }
  // if (regForm.CountryCode == '') {
  //   showToast(t('tips.inputCountryCode'))
  //   countryDom.value?.focus()
  //   return false
  // }
  // if (regForm.PhoneNumber == '') {
  //   showToast(t('tips.inputphoneNumber'))
  //   phoneDom.value?.focus()
  //   return false
  // }

  const isExistUser = await checkUserExist()
  if (isExistUser) {
    return false
  }

  const isExistEmail = await checkEmailExist()
  if (isExistEmail) {
    return false
  }
  Object.assign(regForm, route.query)
  Object.assign(loginForm, route.query)
  // regForm.DateOfBirth = `${year.value}-${month.value}-${day.value}`
  const regResult = await awaitWraper(thirdRegApi(regForm))
  if (regResult[0]) {
    showToast(t('tips.regFail'))
    return false
  } else {
    userStore
      .thirdLogin(loginForm)
      .then(() => {
        showToast(t('tips.regSuccess'))
        router.push({ name: 'index' })
        return false
      })
      .catch((error) => {
        // showToast(error)
        console.log(error)
        router.push({ name: 'login' })
        return false
      })
  }
}
</script>
<style lang="less">
.st0 {
  fill: #0cd664;
}
</style>
