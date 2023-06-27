<template>
  <div class="page">
    <header class="header">
      <div class="head-menu-lmr">
        <div class="hml-l" onclick="window.history.go(-1) ">
          <i class="iconfont icon-return" />
        </div>
        <div class="hml-m">Account</div>
      </div>
    </header>
    <main class="main">
      <div class="account-box">
        <div class="ab-list">
          <div class="l-item">
            <div class="i-title" @click="collapseInfo = !collapseInfo"><i class="iconfont icon-sfz" /> General Information</div>
            <Vue3SlideUpDown v-model="collapseInfo">
              <div class="i-form">
                <div class="custom-form">
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Username</span>
                    </div>
                    <div class="cr-input">
                      <input :value="userStore.userInfo.userName" type="text" class="form-control" placeholder="Musk" disabled />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Email</span>
                    </div>
                    <div class="cr-input">
                      <input :value="userStore.userInfo.email" type="email" class="form-control" placeholder="musk@autic.com" disabled />
                    </div>
                  </div>

                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Date of Birth</span>
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
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Phone number</span>
                    </div>
                    <div class="cr-input group g-tel">
                      <select v-model="editInfoForm.CountryCode" ref="countryDom" class="form-control">
                        <option v-for="(item, index) of countryCode" :key="index" :value="`${item.country_code} (+${item.phone_code})`">{{ `${item.country_code} (+${item.phone_code})` }}</option>
                      </select>
                      <input v-model="editInfoForm.PhoneNumber" ref="phoneDom" type="tel" class="form-control" placeholder="" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Address</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editInfoForm.Address" ref="addressDom" class="form-control" placeholder="Address" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Zipcode</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editInfoForm.Zipcode" ref="zipcodeDom" type="number" class="form-control" placeholder="Zipcode" />
                    </div>
                  </div>
                  <div class="cf-row" v-if="userStore.userInfo.isBindGoogleAuth">
                    <div class="cr-label">
                      <span>Google VerificationCode</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editInfoForm.VerificationCode" ref="editVerificationCodeDom" type="number" class="form-control" placeholder="Google VerificationCode" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-btns">
                      <a class="btn btn-primary full" @click="editInfo()">Save</a>
                    </div>
                  </div>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <!-- 修改用户密码 -->
          <div class="l-item">
            <div class="i-title" @click="collapsePwd = !collapsePwd"><i class="iconfont icon-password" /> Change Password</div>
            <Vue3SlideUpDown v-model="collapsePwd">
              <div class="i-form">
                <div class="custom-form">
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Enter your current password</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editPwdForm.OldPassword" ref="oldPwdDom" :type="showOldPwd ? 'text' : 'password'" class="form-control" placeholder="" />
                      <span :class="showOldPwd ? 'password-addon' : 'password-addon show'">
                        <i class="iconfont icon-xianshi" @click="showOldPwd = !showOldPwd" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Enter new password</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editPwdForm.NewPassword" ref="newPwdDom" :type="showNewPwd ? 'text' : 'password'" class="form-control" placeholder="" />
                      <span :class="showNewPwd ? 'password-addon' : 'password-addon show'">
                        <i class="iconfont icon-xianshi" @click="showNewPwd = !showNewPwd" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Repeat password</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="confirmPwd" ref="confirmPwdDom" :type="showConfirmPwd ? 'text' : 'password'" class="form-control" placeholder="" />
                      <span :class="showConfirmPwd ? 'password-addon' : 'password-addon show'">
                        <i class="iconfont icon-xianshi" @click="showConfirmPwd = !showConfirmPwd" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row" v-if="userStore.userInfo.isBindGoogleAuth">
                    <div class="cr-label">
                      <span>Google VerificationCode</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editPwdForm.VerificationCode" ref="verificationCodeDom" type="text" class="form-control" placeholder="" />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-mark">If you change your password,you will be unable to withdraw for 48 hours due to security reasons.</div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-btns">
                      <a class="btn btn-primary full" @click="changePwd()">Change Password</a>
                    </div>
                  </div>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <!-- region Google 验证码 -->
          <div class="l-item">
            <div class="i-title" @click="collapseGoogle = !collapseGoogle"><i class="iconfont icon-googlecode" /> Google Authenticator</div>
            <Vue3SlideUpDown v-model="collapseGoogle">
              <div class="i-form google">
                <div class="fg-title">
                  <h3>Google Authenticator is disabled</h3>
                  <p>To activate,scan the QR code or enter the code manually</p>
                </div>
                <div v-if="qrcodeValue != ''" class="fg-qrcode">
                  <qrcode-vue :value="qrcodeValue" :size="150" level="H" />
                  <a target="_blank"> <i class="iconfont icon-bangzhu" /> What is google authenticator? </a>
                </div>
                <div class="cr-input">
                  <input v-model="bindGoogleCodeForm.VerificationCode" type="text" class="form-control" placeholder="Type code" maxlength="8" />
                  <a class="btn btn-primary" @click="bindGoogle()">Submit Code</a>
                </div>
                <div class="cr-mark">Key value:GV3E25fceCJVJXARLUINRU2455C</div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <!-- endregion -->
          <div class="l-item">
            <div class="i-title" @click="collapseVerify = !collapseVerify"><i class="iconfont icon-scsfz" /> Verify Account</div>
            <Vue3SlideUpDown v-model="collapseVerify">
              <div class="i-form">.....</div>
            </Vue3SlideUpDown>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// vue自带
import { reactive, ref } from 'vue'

// import { getAssetsFile } from '@/utils'
import { editUserInfo, getGoogleCode, bindGoogleCode, editPassword } from '@/api/home/index'
import { editUserInfoData, googleCodeData, ediPwdData } from '@/api/home/types'
import { useUserStore } from '@/store/modules/user'
import { isPwd, isEmpty } from '@/utils/validate'
import { countryCode } from '@/utils/countryCode'
import { getYearList } from '@/utils'
//第三方插件
import QrcodeVue from 'qrcode.vue'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { showToast } from 'vant'
import 'vant/es/toast/style'
import router from '@/router'

const userStore = useUserStore()

// 展开折叠
let collapseInfo = ref(false)
let collapsePwd = ref(false)
let collapseGoogle = ref(false)
let collapseVerify = ref(false)

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
//@ts-ignore
year.value = birthday[0]
//@ts-ignore
month.value = birthday[1]
//@ts-ignore
day.value = birthday[2]
let editInfoForm: editUserInfoData = reactive({
  CountryCode: '',
  PhoneNumber: '',
  DateOfBirth: '',
  Address: '',
  Zipcode: '',
  VerificationCode: ''
})
editInfoForm.Address = userStore.userInfo.address
editInfoForm.Zipcode = userStore.userInfo.zipcode
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
const bindGoogleCodeForm: googleCodeData = reactive({ VerificationCode: '' })

// 修改个人信息
const editInfo = () => {
  if (isEmpty(day.value)) {
    showToast('出生日不能为空')
    dayDom.value?.focus()
    return false
  }
  if (isEmpty(month.value)) {
    showToast('出生月份不能为空')
    monthDom.value?.focus()
    return false
  }
  if (isEmpty(year.value)) {
    showToast('出生年份不能为空')
    yearDom.value?.focus()
    return false
  }
  if (isEmpty(editInfoForm.CountryCode)) {
    showToast('国家代码不能为空')
    countryDom.value?.focus()
    return false
  }
  if (isEmpty(editInfoForm.PhoneNumber)) {
    showToast('手机号码不能为空')
    phoneDom.value?.focus()
    return false
  }
  if (isEmpty(editInfoForm.Address)) {
    showToast('地址不能为空')
    addressDom.value?.focus()
    return false
  }
  if (isEmpty(editInfoForm.Zipcode)) {
    showToast('邮编不能为空')
    zipcodeDom.value?.focus()
    return false
  }
  if (userStore.userInfo.isBindGoogleAuth && editInfoForm.VerificationCode == '') {
    showToast('Google验证码不能为空')
    editVerificationCodeDom.value?.focus()
    return false
  }
  editInfoForm.DateOfBirth = `${year.value}-${month.value}-${day.value}`
  editUserInfo(editInfoForm)
    .then(() => {
      showToast('修改用户信息成功')
      userStore.getUserInfo({ noLoading: false })
      collapseInfo.value = false
    })
    .catch((error) => {
      showToast(error)
    })
}

// 修改密码
const changePwd = () => {
  if (!isPwd(editPwdForm.NewPassword)) {
    showToast('新密码格式错误')
    newPwdDom?.value?.focus()
    return false
  }
  if (!isPwd(editPwdForm.OldPassword)) {
    showToast('旧密码格式错误')
    oldPwdDom?.value?.focus()
    return false
  }
  if (editPwdForm.NewPassword != confirmPwd.value) {
    showToast('两次密码不一致')
    confirmPwdDom?.value?.focus()
    return false
  }
  if (userStore.userInfo.isBindGoogleAuth && editPwdForm.VerificationCode == '') {
    showToast('Google验证码不能为空')
    verificationCodeDom?.value?.focus()
    return false
  }
  editPassword(editPwdForm)
    .then(() => {
      userStore.logout()
      showToast('修改密码成功，请重新登录')
    })
    .catch((error) => {
      showToast(error)
    })
}

// 获取google验证码
const getGooogle = () => {
  getGoogleCode()
    .then((resp) => {
      const userStore = useUserStore()
      qrcodeValue.value = `otpauth://totp/Gamix?secret=${resp.manualEntryKey}&issuer=${userStore.userInfo.userName}`
    })
    .catch((error) => {
      showToast(error)
    })
}
// 获取Google验证码
getGooogle()

// 绑定google验证码
const bindGoogle = () => {
  bindGoogleCode(bindGoogleCodeForm)
    .then((resp) => {
      userStore.getUserInfo({ noLoading: false })
      showToast(resp.message)
      router.push({ name: 'login' })
    })
    .catch((error) => {
      showToast(error)
    })
}
</script>
