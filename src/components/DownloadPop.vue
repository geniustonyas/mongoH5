<template>
  <div v-show="showDownloadTips" class="fixed-foot">
    <div class="ff-bd">
      <div class="d-c">
        <div class="f-a">
          <img :src="getAssetsFile('logo-download.png')" />
          <span>
            <b>App独享超清加速，永久免费</b>
            <small>刷抖阴更流畅，海量高清影片抢先看</small>
          </span>
        </div>
        <div class="f-b">
          <a @click="downloadApp">立即下载</a>
          <span @click="showDownloadTips = false"><i class="mvfont mv-close" /></span>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showAddToHomeTip" class="fixed-foot">
    <div class="ff-bd">
      <div class="d-c">
        <div class="f-a">
          <img :src="getAssetsFile('logo-download.png')" />
          <span>
            <b>芒果TV</b>
            <small>添加到主屏幕</small>
          </span>
        </div>
        <div class="f-b">
          <a @click="popAddToHomeTip">添加</a>
          <span @click="showAddToHomeTip = false"><i class="mvfont mv-close" /></span>
        </div>
      </div>
    </div>
  </div>

  <div v-if="showAddToHomePop" class="pop-fixed" id="popShortcut">
    <div class="pop-container">
      <div class="pop-bd shortcut">
        <div class="s-a">
          <h3>添加到主屏幕</h3>
          <span @click="closePop()">×</span>
        </div>
        <div class="s-b" id="sb-ios">
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
        <!-- <div v-show="showAndroid" class="s-b" id="sb-android">
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
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getAssetsFile } from '@/utils'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const showDownloadTips = ref(false)
const showAddToHomeTip = ref(false)
const showAddToHomePop = ref(false)
const showIos = ref(false)
// const showAndroid = ref(false)

//@ts-ignore 检测是否在独立模式下运行
const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone

// 从 localstorage 的 nu 中获取 nu  nu由 App.vue 中获获取query并且设置
const nu = localStorage.getItem('nu')
onMounted(() => {
  // 不是独立模式, 并且 nu 不是 a1 和 a2 , nu由打包app时传入url参数, 由App.vue中获取并且写入localstorage
  if (!isStandalone && nu != 'a1' && nu != 'a2') {
    if (appStore.shownDownload) {
      // const ua = navigator.userAgent
      // 如果是IOS, 则显示添加到主屏幕
      // if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
      //   showAddToHomeTip.value = true
      // } else {
      // 判断如果是PC端浏览器访问, 则不弹窗
      if (appStore.isPc) {
        showDownloadTips.value = false
      } else {
        showDownloadTips.value = true
      }
      // }
      // 设置已经显示下载提示, 不再显示
      appStore.setShownDownload(false)
    }
  }
})

// 如果是ios, 则显示添加到主屏幕
const popAddToHomeTip = () => {
  showAddToHomePop.value = true
  showIos.value = true
  showAddToHomeTip.value = false
}

const closePop = () => {
  showAddToHomePop.value = false
  showAddToHomeTip.value = false
  showDownloadTips.value = false
  showIos.value = false
}

// 下载APP
const downloadApp = () => {
  const ua = navigator.userAgent
  if (ua.indexOf('iPhone') > -1 || ua.indexOf('iPad') > -1 || ua.indexOf('Macintosh') > -1) {
    window.open(appStore.iosDownloadUrl, '_blank')
  } else {
    window.open(appStore.androidDownloadUrl, '_blank')
  }
}
</script>
