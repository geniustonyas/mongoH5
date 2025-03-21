<template>
  <div class="page page-search">
    <header class="d-header">
      <div class="d-l" @click="goBack">
        <i class="mvfont mv-left" />
      </div>
      <div class="d-m dm-input">
        <input placeholder="请输入搜索内容" />
      </div>
      <div class="d-r dr-txt">
        <span>搜索</span>
      </div>
    </header>
    <section class="p-s-b">
      <!--历史搜索-->
      <nav class="ps-ssfx">
        <div class="s-a">
          <b>历史搜索</b>
          <span class="c-btn">
            <i class="mvfont mv-shanchu" />
          </span>
        </div>
        <div class="s-b">
          <a href="result.html">长发</a>
        </div>
      </nav>
      <!--热门标签-->
      <nav class="ps-ssfx">
        <div class="s-a">
          <b>热门标签</b>
          <span class="c-btn"> <i class="mvfont mv-hyh" />换一换 </span>
        </div>
        <div class="s-b">
          <a href="result.html">自拍<small>热</small></a>
          <a href="result.html">后入</a>
        </div>
      </nav>
    </section>
  </div>
</template>
<script setup lang="ts">
  import { useAppStore } from '@/store/app'
  import { getHotSeachKeywords } from '@/api/search'
  import { onMounted } from 'vue'

  const appStore = useAppStore()

  const goBack = () => {
    appStore.setBack(true)
  }

  onMounted(() => {
    getHotSeachKeywords().then(res => {
      console.log(res.data.data)
    })
  })
</script>
<style scoped lang="less"></style>
