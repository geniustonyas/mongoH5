<template>
  <div>
    <div class="fixed-suggestion">
      <div v-show="showBtn">
        <div class="fs-t" @click="toggleBtn">
          <span><i class="mvfont mv-close" /></span>
        </div>
        <div class="fs-c">
          <span>
            <i class="mvfont mv-jianyi" />
            <small>建议<br />反馈</small>
          </span>
        </div>
      </div>
    </div>

    ,
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { Popup } from 'vant'

const showBtn = ref(true)
const showPopup = ref(true)

const toggleBtn = () => {
  showBtn.value = false
}
</script>
