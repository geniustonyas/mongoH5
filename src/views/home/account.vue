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
                      <input type="password" class="form-control" placeholder="" />
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
                      <input type="password" class="form-control" placeholder="" />
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
                      <input type="password" class="form-control" placeholder="" />
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
                      <a class="btn btn-primary full" href="#">Change Password</a>
                    </div>
                  </div>
                </div>
              </div>
            </Vue3SlideUpDown>
          </div>
          <div class="l-item">
            <div class="i-title" @click="collapseGoogle = !collapseGoogle"><i class="iconfont icon-googlecode" /> Google Authenticator</div>
            <Vue3SlideUpDown v-model="collapseGoogle">
              <div class="i-form google">
                <div class="fg-title">
                  <h3>Google Authenticator is disabled</h3>
                  <p>To activate,scan the QR code or enter the code manually</p>
                </div>
                <div class="fg-qrcode">
                  <img :src="getAssetsFile('qrcode.gif')" />
                  <a href="www.baidu.com" target="_blank"> <i class="iconfont icon-bangzhu" /> What is google authenticator? </a>
                </div>
                <div class="cr-input">
                  <input type="text" class="form-control" placeholder="Type code" maxlength="8" />
                  <a class="btn btn-primary">Submit Code</a>
                </div>
                <div class="cr-mark">Key value:GV3E25fceCJVJXARLUINRU2455C</div>
              </div>
            </Vue3SlideUpDown>
          </div>

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

<script setup name="HomeAccount">
// vue自带
import { ref } from 'vue'
//第三方插件
import { Vue3SlideUpDown } from 'vue3-slide-up-down'

import { getAssetsFile } from '@/utils'

// 展开折叠
let collapseInfo = ref(false)
let collapsePwd = ref(false)
let collapseGoogle = ref(false)
let collapseVerify = ref(false)
</script>
