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
                      <input type="text" class="form-control" placeholder="Musk" disabled />
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Email</span>
                    </div>
                    <div class="cr-input">
                      <input type="email" class="form-control" placeholder="musk@autic.com" disabled />
                    </div>
                  </div>

                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Date of Birth</span>
                    </div>
                    <div class="cr-input group">
                      <select class="form-control">
                        <option>Day</option>
                      </select>
                      <select class="form-control">
                        <option>Month</option>
                      </select>
                      <select class="form-control">
                        <option>Year</option>
                      </select>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Phone number</span>
                    </div>
                    <div class="cr-input group g-tel">
                      <select class="form-control">
                        <option>AD（+376）</option>
                      </select>
                      <input type="tel" class="form-control" placeholder="" />
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
                      <input v-model="editPwdForm.NewPassword" type="password" class="form-control" placeholder="" />
                      <span class="password-addon">
                        <i class="iconfont icon-xianshi" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Enter new password</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editPwdForm.NewPassword" type="password" class="form-control" placeholder="" />
                      <span class="password-addon">
                        <i class="iconfont icon-xianshi" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Repeat password</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="confirmPwd" type="password" class="form-control" placeholder="" />
                      <span class="password-addon">
                        <i class="iconfont icon-xianshi" />
                      </span>
                    </div>
                  </div>
                  <div class="cf-row">
                    <div class="cr-label">
                      <span>Google VerificationCode</span>
                    </div>
                    <div class="cr-input">
                      <input v-model="editPwdForm.VerificationCode" type="password" class="form-control" placeholder="" />
                      <span class="password-addon">
                        <i class="iconfont icon-xianshi" />
                      </span>
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
import { getGoogleCode, bindGoogleCode, editPassword } from '@/api/home/index'
import { googleCodeData, ediPwdData } from '@/api/home/types'
import { useUserStore } from '@/store/modules/user'
import { isPwd } from '@/utils/validate'
//第三方插件
import QrcodeVue from 'qrcode.vue'
import { Vue3SlideUpDown } from 'vue3-slide-up-down'
import { showToast } from 'vant'
import 'vant/es/toast/style'

// 展开折叠
let collapseInfo = ref(false)
let collapsePwd = ref(false)
let collapseGoogle = ref(false)
let collapseVerify = ref(false)
// 用户信息
const userStore = useUserStore()

// 二维码值
let qrcodeValue = ref('')
const bindGoogleCodeForm: googleCodeData = reactive({ VerificationCode: '' })
const confirmPwd = ref('')
const editPwdForm: ediPwdData = reactive({
  OldPassword: '',
  NewPassword: '',
  VerificationCode: ''
})

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

const changePwd = () => {
  if (!isPwd(editPwdForm.NewPassword)) {
    showToast('输入密码错误')
  }
  editPassword(editPwdForm)
    .then((resp) => {
      showToast('修改密码成功，请重新登录')
    })
    .catch((error) => {
      showToast(error)
    })
}

const bindGoogle = () => {
  bindGoogleCode(bindGoogleCodeForm)
    .then((resp) => {
      const userStore = useUserStore()
      userStore.getUserInfo({ noLoading: false })
      showToast(resp.message)
    })
    .catch((error) => {
      showToast(error)
    })
}
</script>
