<template>
  <!-- 下载弹窗 -->
  <div class="fixed-foot" id="fixed-downloadApp">
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
          <span @click="closeDownloadPopup"><i class="mvfont mv-close" /></span>
        </div>
      </div>
    </div>
  </div>

  <div class="fixed-foot" id="fixed-Shortcut">
    <div class="ff-bd">
      <div class="d-c">
        <div class="f-a">
          <img :src="getAssetsFile('logo.png')" />
          <span>
            <b>芒果TV</b>
            <small>添加到主屏幕</small>
          </span>
        </div>
        <div class="f-b">
          <a onclick="javascript: $('#popShortcut').show()">添加</a>
          <span onclick="javascript: $('#fixed-Shortcut').hide()"><i class="mvfont mv-close" /></span>
        </div>
      </div>
    </div>
  </div>

  <div class="pop-fixed" id="popShortcut">
    <div class="pop-container">
      <div class="pop-bd shortcut">
        <div class="s-a">
          <h3>添加到主屏幕</h3>
          <span onclick="javascript: $('#popCollection').hide()">×</span>
        </div>
        <div class="s-b" id="sb-ios" style="display: none">
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
        <div class="s-b" id="sb-android" style="display: block">
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
import { getAssetsFile } from '@/utils'

</script>

