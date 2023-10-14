<template>
  <div class="page">
    <CommonHeader :title="t('userAccount')" />
    <main class="main">
      <div class="account-box">
        <div class="ab-list">
          <div class="l-item">
            <div class="i-title" @click="collapseInfo = !collapseInfo"><i class="iconfont icon-sfz" /> {{ t('generalInformation') }}</div>
            <Vue3SlideUpDown v-model="collapseInfo">
              <div class="i-form">
                <div class="custom-form">
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>{{ t('userName') }}</span>
                    </div>
                    <div class="cr-input">
                      <input :value="userStore.userInfo.userName" type="text" class="form-control disabled" disabled placeholder="" autocomplete="off" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>{{ t('email') }}</span>
                    </div>
                    <div class="cr-input">
                      <input :value="userStore.userInfo.email" type="email" class="form-control disabled" disabled placeholder="" autocomplete="off" />
                    </div>
                  </div>

                  <div class="cf-row">
                    <div class="cr-label">
                      <span>{{ t('birthday') }}</span>
                    </div>
                    <div class="cr-input group">
                      <select class="form-control" v-model="day" ref="dayDom">
                        <option value="">{{ t('day') }}</option>
                        <option v-for="item in 31" :key="item" :value="item < 10 ? '0' + item : item">{{ item < 10 ? '0' + item : item }}</option>
                      </select>
                      <select class="form-control" v-model="month" ref="monthDom">
                        <option value="">{{ t('month') }}</option>
                        <option v-for="item in 12" :key="item" :value="item < 10 ? '0' + item : item">{{ item < 10 ? '0' + item : item }}</option>
                      </select>
                      <select class="form-control" v-model="year" ref="yearDom">
                        <option value="">{{ t('year') }}</option>
                        <option v-for="item in getYearList()" :key="item" :value="item">{{ item }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label g-tel">
                      <span>{{ t('countryCode') }}</span>
                      <span>{{ t('telephone') }}</span>
                    </div>
                    <div class="cr-input group g-tel">
                      <select v-model="editInfoForm.CountryCode" ref="countryDom" class="form-control">
                        <option value="">{{ t('countryCode') }}</option>
                        <option v-for="(item, index) of countryCode" :key="index" :value="`${item.country_code} (+${item.phone_code})`">{{ `${item.country_code} (+${item.phone_code})` }}</option>
                      </select>
                      <input v-model="editInfoForm.PhoneNumber" ref="phoneDom" type="tel" class="form-control" autocomplete="off" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>{{ t('address') }}</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editInfoForm.Address" ref="addressDom" class="form-control" placeholder="" autocomplete="off" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>{{ t('zipCode') }}</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editInfoForm.Zipcode" ref="zipcodeDom" type="text" class="form-control" placeholder="" autocomplete="off" />
                    </div>
                  </div>
                  <div class="cf-row" v-if="userStore.userInfo.isBindGoogleAuth">
                    <div class="cr-label">
                      <span>{{ t('googleCode') }}</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editInfoForm.VerificationCode" ref="editVerificationCodeDom" type="text" class="form-control" placeholder="" autocomplete="off" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-btns">
                      <a class="btn btn-primary full" @click="editInfo()">{{ t('save') }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <!-- 修改用户密码 -->
          <div class="l-item">
            <div class="i-title" @click="collapsePwd = !collapsePwd"><i class="iconfont icon-password" /> {{ t('changePassword') }}</div>
            <Vue3SlideUpDown v-model="collapsePwd">
              <div class="i-form">
                <div class="custom-form">
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>{{ t('currentPwd') }}</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editPwdForm.OldPassword" ref="oldPwdDom" :type="showOldPwd ? 'text' : 'password'" class="form-control" placeholder="" autocomplete="off" />
                      <span :class="showOldPwd ? 'password-addon' : 'password-addon show'">
                        <i class="iconfont icon-xianshi" @click="showOldPwd = !showOldPwd" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>{{ t('newPwd') }}</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editPwdForm.NewPassword" ref="newPwdDom" :type="showNewPwd ? 'text' : 'password'" class="form-control" placeholder="" autocomplete="off" />
                      <span :class="showNewPwd ? 'password-addon' : 'password-addon show'">
                        <i class="iconfont icon-xianshi" @click="showNewPwd = !showNewPwd" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>{{ t('confirmPwd') }}</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="confirmPwd" ref="confirmPwdDom" :type="showConfirmPwd ? 'text' : 'password'" class="form-control" placeholder="" autocomplete="off" />
                      <span :class="showConfirmPwd ? 'password-addon' : 'password-addon show'">
                        <i class="iconfont icon-xianshi" @click="showConfirmPwd = !showConfirmPwd" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row" v-if="userStore.userInfo.isBindGoogleAuth">
                    <div class="cr-label">
                      <span>{{ t('googleAuthenticator') }}</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editPwdForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" placeholder="" autocomplete="off" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-mark">{{ t('changePwdLimit') }}</div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-btns">
                      <a class="btn btn-primary full" @click="changePwd()">{{ t('changePassword') }}</a>
                    </div>
                  </div>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <!-- region Google 验证码 -->
          <div class="l-item">
            <div class="i-title" @click="collapseGoogle = !collapseGoogle"><i class="iconfont icon-googlecode" /> {{ t('googleAuthenticator') }}</div>
            <Vue3SlideUpDown v-model="collapseGoogle">
              <div class="i-form google">
                <template v-if="userStore.userInfo.isBindGoogleAuth">
                  <div class="fg-title">
                    <h3>{{ t('enabledGoogle') }}</h3>
                    <p>{{ t('stopGoogle') }}</p>
                  </div>
                </template>
                <template v-else>
                  <div class="fg-title">
                    <h3>{{ t('disabledGoogle') }}</h3>
                    <p>{{ t('activeGoogle') }}</p>
                  </div>
                  <div v-if="qrcodeValue != ''" class="fg-qrcode">
                    <qrcode-vue :value="qrcodeValue" :size="150" level="H" />
                    <a target="_blank" href="https://support.google.com/accounts/answer/1066447?co=GENIE.Platform%3DAndroid&hl=en"> <i class="iconfont icon-bangzhu" />{{ t('whatGoogleCode') }}</a>
                  </div>
                </template>
                <div class="cr-input">
                  <input v-model="bindGoogleCodeForm.VerificationCode" type="text" class="form-control" :placeholder="t('typeCode')" maxlength="8" autocomplete="off" />
                  <a class="btn btn-primary" @click="bindGoogle()">{{ t('submitCode') }}</a>
                </div>
                <div v-if="!userStore.userInfo.isBindGoogleAuth" class="cr-mark">
                  {{ t('keyValue') }}: {{ keyValue }}
                  <span class="copy" :data-clipboard-text="keyValue">
                    <i class="iconfont icon-fuzhi" />
                  </span>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <!-- endregion -->
          <div class="l-item">
            <div class="i-title" @click="collapsePrivacy = !collapsePrivacy"><i class="iconfont icon-scsfz" /> {{ t('privacySetting') }}</div>
            <Vue3SlideUpDown v-model="collapsePrivacy">
              <div class="i-form privacy">
                <div class="privacy-switch-box">
                  <div>{{ t('enableVisible') }}</div>
                  <ConfigProvider theme="dark">
                    <Switch v-model="openVisible" size="18px" @click="setPrivacy()" />
                  </ConfigProvider>
                </div>
                <div>{{ t('hiddenYourBet') }}</div>
              </div>
            </Vue3SlideUpDown>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

import CommonHeader from '@/components/layout/CommonHeader.vue'

// import { getAssetsFile } from '@/utils'
import { editUserInfoApi, getGoogleCodeApi, bindGoogleCodeApi, unBindGoogleCodeApi, editPasswordApi, setPrivacyApi } from '@/api/home/index'
import { editUserInfoData, googleCodeData, ediPwdData } from '@/api/home/types'
import { useUserStore } from '@/store/modules/user'
import { isPwd, isEmpty } from '@/utils/validate'
import { countryCode } from '@/utils/countryCode'
import { getYearList, copy } from '@/utils'
//第三方插件
import { useI18n } from 'vue-i18n'
import QrcodeVue from 'qrcode.vue'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { showToast, ConfigProvider, Switch } from 'vant'

const router = useRouter()
const site_name = import.meta.env.VITE_APP_SITE_NAME
const userStore = useUserStore()
const { t } = useI18n()

// 展开折叠
let collapseInfo = ref(false)
let collapsePwd = ref(false)
let collapseGoogle = ref(false)
let collapsePrivacy = ref(false)

// 修改个人信息
let dayDom = ref<HTMLInputElement | null>(null)
let monthDom = ref<HTMLInputElement | null>(null)
let yearDom = ref<HTMLInputElement | null>(null)
let countryDom = ref<HTMLInputElement | null>(null)
let phoneDom = ref<HTMLInputElement | null>(null)
let addressDom = ref<HTMLInputElement | null>(null)
let zipcodeDom = ref<HTMLInputElement | null>(null)
let editVerificationCodeDom = ref<HTMLInputElement | null>(null)
let birthday = userStore.userInfo.dateOfBirth?.split('-')

let day = ref<string | number>('')
let month = ref<string | number>('')
let year = ref<string | number>('')
year.value = birthday[0] ?? ''
month.value = birthday[1] ?? ''
day.value = birthday[2] ?? ''
let editInfoForm: editUserInfoData = reactive({
  CountryCode: '',
  PhoneNumber: '',
  DateOfBirth: '',
  Address: '',
  Zipcode: '',
  VerificationCode: ''
})
editInfoForm.Address = userStore.userInfo.address
editInfoForm.Zipcode = userStore.userInfo.zipCode
editInfoForm.PhoneNumber = userStore.userInfo.phoneNumber
editInfoForm.CountryCode = userStore.userInfo.countryCode

// 修改密码 显示隐藏密码
const oldPwdDom = ref<HTMLInputElement | null>(null)
const newPwdDom = ref<HTMLInputElement | null>(null)
const confirmPwdDom = ref<HTMLInputElement | null>(null)
const verificationCodeDom = ref<HTMLInputElement | null>(null)
const showOldPwd = ref(false)
const showNewPwd = ref(false)
const showConfirmPwd = ref(false)
const confirmPwd = ref('')
const editPwdForm: ediPwdData = reactive({
  OldPassword: '',
  NewPassword: '',
  VerificationCode: ''
})

// 绑定google验证码 二维码值
let qrcodeValue = ref('')
let keyValue = ref('')
const bindGoogleCodeForm: googleCodeData = reactive({ VerificationCode: '' })

// 隐身模式
const openVisible = ref(userStore.userInfo.inVisible == '1')
// 修改个人信息
const editInfo = () => {
  if (isEmpty(day.value)) {
    showToast(t('tips.inputDay'))
    dayDom.value?.focus()
    return false
  }
  if (isEmpty(month.value)) {
    showToast(t('tips.inputMonth'))
    monthDom.value?.focus()
    return false
  }
  if (isEmpty(year.value)) {
    showToast(t('tips.inputYear'))
    yearDom.value?.focus()
    return false
  }
  if (isEmpty(editInfoForm.CountryCode)) {
    showToast(t('tips.inputCountryCode'))
    countryDom.value?.focus()
    return false
  }
  if (isEmpty(editInfoForm.PhoneNumber)) {
    showToast(t('tips.inputphoneNumber'))
    phoneDom.value?.focus()
    return false
  }
  if (isEmpty(editInfoForm.Address)) {
    showToast(t('tips.inputAddress'))
    addressDom.value?.focus()
    return false
  }
  if (isEmpty(editInfoForm.Zipcode)) {
    showToast(t('tips.inputZipCode'))
    zipcodeDom.value?.focus()
    return false
  }
  if (userStore.userInfo.isBindGoogleAuth && editInfoForm.VerificationCode == '') {
    showToast(t('tips.googleCode'))
    editVerificationCodeDom.value?.focus()
    return false
  }
  editInfoForm.DateOfBirth = `${year.value}-${month.value}-${day.value}`
  editUserInfoApi(editInfoForm)
    .then(() => {
      showToast(t('tips.editUserInfoSuccess'))
      userStore.getUserInfo({ noLoading: false })
      // collapseInfo.value = false
    })
    .catch((error) => {
      console.log(error)
    })
}

// 修改密码
const changePwd = () => {
  if (editPwdForm.NewPassword == '') {
    showToast(t('tips.inputNewPwd'))
    newPwdDom?.value?.focus()
    return false
  }
  if (!isPwd(editPwdForm.NewPassword)) {
    showToast(t('tips.isNewPwd'))
    newPwdDom?.value?.focus()
    return false
  }
  if (editPwdForm.NewPassword == '') {
    showToast(t('tips.inputOldPwd'))
    newPwdDom?.value?.focus()
    return false
  }
  if (!isPwd(editPwdForm.OldPassword)) {
    showToast(t('tips.isOldPwd'))
    oldPwdDom?.value?.focus()
    return false
  }
  if (editPwdForm.NewPassword != confirmPwd.value) {
    showToast(t('tips.pwdNotMatch'))
    confirmPwdDom?.value?.focus()
    return false
  }
  if (userStore.userInfo.isBindGoogleAuth && editPwdForm.VerificationCode.length != 6) {
    showToast(t('tips.googleCode'))
    verificationCodeDom?.value?.focus()
    return false
  }
  editPasswordApi(editPwdForm)
    .then(() => {
      showToast(t('tips.editPwdSuccess'))
      router.push({ name: 'logout' })
    })
    .catch((error) => {
      console.log(error)
    })
}

// 获取google验证码
const getGooogle = () => {
  getGoogleCodeApi()
    .then((resp) => {
      const userStore = useUserStore()
      keyValue.value = resp.manualEntryKey
      qrcodeValue.value = `otpauth://totp/${userStore.userInfo.userName}?secret=${resp.manualEntryKey}&issuer=${site_name}`
    })
    .catch((error) => {
      console.log(error)
    })
}
// 获取Google验证码
getGooogle()

// 绑定google验证码
const bindGoogle = () => {
  if (userStore.userInfo.isBindGoogleAuth) {
    unBindGoogleCodeApi(bindGoogleCodeForm)
      .then(() => {
        userStore.getUserInfo({ noLoading: false })
        showToast(t('tips.unBindGoogleSuccess'))
        bindGoogleCodeForm.VerificationCode = ''
      })
      .catch((error) => {
        console.log(error)
      })
  } else {
    bindGoogleCodeApi(bindGoogleCodeForm)
      .then(() => {
        userStore.getUserInfo({ noLoading: false })
        showToast(t('tips.bindGoogleSuccess'))
        bindGoogleCodeForm.VerificationCode = ''
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

const setPrivacy = () => {
  setPrivacyApi({ InVisible: openVisible.value ? 1 : 0 })
    .then((resp) => {
      console.log(resp)
      showToast(t('tips.setSuccess'))
    })
    .catch((err) => {
      console.log(err)
    })
}

onMounted(() => {
  nextTick(() => {
    copy('.copy')
  })
})
</script>
