<template>
  <header class="header">
    <div class="head-search">
      <div class="hs-a">
        <img src="@/assets/imgs/logo.svg" />
        <span>芒果TV</span>
      </div>
      <div class="hs-b">
        <input placeholder="番号/片名/演员" />
        <i class="mvfont mv-search1" />
      </div>
      <div class="hs-c">
        <a><i class="mvfont mv-lishishijian-" /></a>
        <a><i class="mvfont mv-touxiang1" /></a>
      </div>
    </div>
    <div class="head-menu">
      <div class="hm-a">
        <a href="index.html" class="active">首页</a>
        <a href="move.html">国产</a>
        <a href="move.html">日韩</a>
        <a>欧美</a>
        <a>传媒</a>
        <a>动漫</a>
        <a>换脸</a>
        <a>三级</a>
        <a>吃瓜</a>
        <a>猎奇</a>
        <a>福利姬</a>
        <a>异族</a>
      </div>
      <div class="hm-b">
        <i class="mvfont mv-search1" />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  const header = document.querySelector('.header')!
  const hmB = document.querySelector('.head-menu .hm-b') as HTMLElement

  if (scrollTop > 100) {
    hmB.style.display = 'block'
    header.classList.add('fixed')
  } else {
    hmB.style.display = 'none'
    header.classList.remove('fixed')
  }
}

// 使用 passive 选项来提高滚动性能
window.addEventListener('scroll', handleScroll, { passive: true })
</script>
