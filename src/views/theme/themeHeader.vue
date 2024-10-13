<template>
  <header class="m-header">
    <div class="h-m">
      <a href="hot.html" class="active">热点</a>
      <a href="theme.html">主题</a>
      <a href="actor.html">女优</a>
    </div>
    <div class="h-r">
      <i class="mvfont mv-search" />
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
