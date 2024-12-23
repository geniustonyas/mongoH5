<template>
  <div class="fill-screen">
    <div class="mask grid-center hidden">
      <div class="dialog fill-screen scale-out" />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const mask = document.querySelector('.mask')
    const dialog = document.querySelector('.dialog')

    function enter(e) {
      dialog.style.transformOrigin = `${e.x}px ${e.y}px`
      mask.classList.add('visible')
      dialog.classList.add('scale-in')
      dialog.classList.add('half-screen')
    }

    function leave() {
      mask.classList.remove('visible')
      dialog.classList.remove('scale-in')
      dialog.classList.remove('half-screen')
    }

    document.addEventListener('click', enter)
    document.addEventListener('keydown', (e) => e.key === 'Escape' && leave())
    mask.addEventListener('click', (e) => {
      e.stopPropagation()
      e.target === mask && leave()
    })
  }
}
</script>

<style scoped>
body {
  margin: 0;
  background-color: rgba(79, 185, 255, 0.7);
}

.mask {
  width: 100vw;
  height: 100vh;
  position: fixed;
  transition: opacity 0.3s, transform 0.3s, visibility 0.3s;
  background-color: rgba(92, 92, 92, 0.7);
}

.dialog {
  transition: transform 0.3s, width 0.3s, height 0.3s;
  background-color: rgb(255, 255, 255);
}

.fill-screen {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}

.half-screen {
  width: 50vw;
  height: 80vh;
  overflow: auto;
}

.grid-center {
  display: grid;
  place-items: center;
}

.scale-out {
  transform: scale(0);
}

.scale-in {
  transform: scale(1);
}

.hidden {
  visibility: hidden;
  opacity: 0;
}

.visible {
  visibility: visible;
  opacity: 1;
}
</style>
