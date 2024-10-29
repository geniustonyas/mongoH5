<template>
  <!-- 下载弹窗 -->
  <!-- <div v-show="showDownloadTips" class="fixed-foot" id="fixed-downloadApp">
    <div class="ff-bd">
      <div class="d-c">
        <div class="f-a">
          <img :src="getAssetsFile('logo-2.png')" />
          <span>
            <b>芒果TV-下载不迷路</b>
            <small>海量高清无码，国产吃瓜抢先看</small>
          </span>
        </div>
        <div class="f-b">
          <a>安装</a>
          <span><i class="mvfont mv-close" /></span>
        </div>
      </div>
    </div>
  </div> -->

  <div v-show="showDownloadTips" class="fixed-foot">
    <div class="ff-bd">
      <div class="d-c">
        <div class="f-a">
          <img :src="getAssetsFile('logo-1.png')" />
          <span>
            <b>芒果TV</b>
            <small>添加到主屏幕</small>
          </span>
        </div>
        <div class="f-b">
          <a @click="popAddToHomeTip">添加</a>
          <span @click="showDownloadTips = false"><i class="mvfont mv-close" /></span>
        </div>
      </div>
    </div>
  </div>

  <div v-show="showAddToHomeTip" class="pop-fixed" id="popShortcut">
    <div class="pop-container">
      <div class="pop-bd shortcut">
        <div class="s-a">
          <h3>添加到主屏幕</h3>
          <span @click="showAddToHomeTip = false">×</span>
        </div>
        <div v-show="showIos" class="s-b" id="sb-ios">
          <div class="b-item">
            <div class="i-a">步骤<b>1</b></div>
            <div class="i-b">
              <img src="https://sjtv.xianliao.voto/daohang/IOS-step1.png" />
            </div>
            <div class="i-c">点击共享按钮</div>
          </div>
          <div class="b-item">
            <div class="i-a">步骤<b>2</b></div>
            <div class="i-b">
              <img src="https://sjtv.xianliao.voto/daohang/IOS-step2.png" />
            </div>
            <div class="i-c">点击添加到主屏幕</div>
          </div>
          <div class="b-item">
            <div class="i-a">步骤<b>3</b></div>
            <div class="i-b">
              <img src="https://sjtv.xianliao.voto/daohang/IOS-step3.png" />
            </div>
            <div class="i-c">点击添加按钮，它将添加到您的主屏幕</div>
          </div>
        </div>
        <div v-show="showAndroid" class="s-b" id="sb-android">
          <div class="b-item">
            <div class="i-a">步骤<b>1</b></div>
            <div class="i-b">
              <img src="https://sjtv.xianliao.voto/daohang/Android-step1.png" />
            </div>
            <div class="i-c">点击共享按钮</div>
          </div>
          <div class="b-item">
            <div class="i-a">步骤<b>2</b></div>
            <div class="i-b">
              <img src="https://sjtv.xianliao.voto/daohang/Android-step2.png" />
            </div>
            <div class="i-c">点击添加到主屏幕</div>
          </div>
          <div class="b-item">
            <div class="i-a">步骤<b>3</b></div>
            <div class="i-b">
              <img src="https://sjtv.xianliao.voto/daohang/Android-step3.png" />
            </div>
            <div class="i-c">点击添加按钮，它将添加到您的主屏幕</div>
          </div>
        </div>
      </div>
      <!--<div class="pop-bd shortcut">
        <div class="s-a">
          <h3>添加到主屏幕</h3>
          <span onclick="javascript: $('#popShortcut').hide()"><i class="mvfont mv-close"></i></span>
        </div>
        <div class="s-b">
          <div class="b-item">
            <div class="i-a">步骤<b>1</b></div>
            <div class="i-b">
              <img src="assets/imgs/temp/IOS-step1.png" />
            </div>
            <div class="i-c">点击共享按钮</div>
          </div>
          <div class="b-item">
            <div class="i-a">步骤<b>2</b></div>
            <div class="i-b">
              <img src="assets/imgs/temp/IOS-step2.png" />
            </div>
            <div class="i-c">点击添加到主屏幕</div>
          </div>
          <div class="b-item">
            <div class="i-a">步骤<b>3</b></div>
            <div class="i-b">
              <img src="assets/imgs/temp/IOS-step3.png" />
            </div>
            <div class="i-c">点击添加按钮，它将添加到您的主屏幕</div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getAssetsFile } from '@/utils'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const route = useRoute()
const nu = route.query.nu

const showDownloadTips = ref(false)
const showAddToHomeTip = ref(false)
const showIos = ref(false)
const showAndroid = ref(false)

if (appStore.shownDownload && nu != 'a1' && nu != 'a2') {
  showDownloadTips.value = true
  appStore.setShownDownload(false)
}

const popAddToHomeTip = () => {
  // 判断当前浏览器是IOS还是Android
  showAddToHomeTip.value = true
  const ua = navigator.userAgent
  console.log(ua)
  if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
    showIos.value = true
  } else {
    showAndroid.value = true
    console.log('android')
  }
}
</script>
