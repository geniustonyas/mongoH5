<template>
  <div class="page">
    <header class="d-header">
      <div class="d-l">
        <a @click="appStore.setBack(true)"><i class="mvfont mv-left" /></a>
      </div>
      <div class="d-m">
        <div class="au-tabs-box hms">
          <span :class="{ active: activeTab === 'message' }" @click="changeTab('message')">消息</span>
          <span :class="{ active: activeTab === 'notice' }" @click="changeTab('notice')">公告</span>
          <div ref="barRef" class="bar" style="transform: translateX(-50%)">
            <div class="cor" />
          </div>
        </div>
      </div>
    </header>
    <section class="h-m-b">
      <div class="mes-box">
        <!-- <ul>
          <li class="new">
            <div class="m-a">注册成功</div>
            <div class="m-b">恭喜您注册成功，您的用户名为：xxxx，密码为：xxxxxx，请妥善保管,尽快完善用户信息哦～</div>
            <div class="m-c">2024-10-02</div>
          </li>
          <li>
            <div class="m-a">注册成功</div>
            <div class="m-b">恭喜您注册成功，您的用户名为：xxxx，密码为：xxxxxx，请妥善保管,尽快完善用户信息哦～</div>
            <div class="m-c">2024-10-02</div>
          </li>
        </ul> -->
        <div class="nodata">
          <div class="d-i" />
          <div class="d-t">{{ tips }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()

const activeTab = ref('message')
const tips = ref('暂无消息')
const barRef = ref<HTMLElement | null>(null)

const changeTab = (tab: string) => {
  activeTab.value = tab
  tips.value = tab === 'message' ? '暂无消息' : '暂无公告'
  if (barRef.value) {
    barRef.value.style.transform = `translateX(${tab === 'message' ? '-50%' : '50%'})`
  }
}
</script>
