<template>
  <div class="page">
    <iframe v-if="provider == '13'" style="width: 100%; height: 100vh; border: none" id="gameIframe" allow="camera;microphone;fullscreen" v-show="gameUrl != ''" />
    <iframe v-else style="width: 100%; height: 100%; border: none" id="gameIframe" allow="camera;microphone;fullscreen" v-show="gameUrl != ''" :src="gameUrl" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const gameUrl = ref('')
const provider = ref('')
if (!route.query.url || route.query.url == '') {
  router.back()
}
provider.value = route.query.provider as string
gameUrl.value = route.query.url as string

onMounted(() => {
  if (gameUrl.value && gameUrl.value != '') {
    nextTick(() => {
      const iframeDom = document.getElementById('gameIframe')
      if (iframeDom) {
        if (provider.value == '13') {
          const html = localStorage.getItem('pgsoftUrl')
          //@ts-ignore
          const doc = iframeDom.contentDocument || iframeDom.contentWindow.document
          doc.open()
          doc.write(html)
          doc.close()
        } else {
          const tmpUrl = new URL(gameUrl.value)
          iframeDom.onload = function () {
            GameCommunicator.init(document.getElementById('gameIframe'), tmpUrl.origin)
            GameCommunicator.postMessage({ messageType: 'addEventListener', eventType: 'reloadGame' })
            GameCommunicator.postMessage({ messageType: 'addEventListener', eventType: 'backToLobby' })
          }
        }
      }
    })
  }
})
const GameCommunicator = {
  source: undefined,
  origin: undefined,
  /**
   * 注意origin必须和游戏iframe的url域名一致
   * @@param {iframe} element
   */
  init: function (element: any, url: string) {
    window.addEventListener('message', this.processGameMessage.bind(this))
    //@ts-ignore
    this.source = element.contentWindow
    //@ts-ignore
    this.origin = url
  },
  /**
   * Sends the message to the Iframe
   * @@param {object} data
   * Example of adding an Engage event listener: GameCommunicator.postMessage({ messageType: "addEventListener", eventType: "roundStarted" })
   * Example of calling Engage function: GameCommunicator.postMessage({ messageType: "request", eventType: "spin" })
   */
  postMessage: function (data: any) {
    //@ts-ignore
    this.source.postMessage(data, this.origin)
  },
  /**
   * Receives the messages the PNG game dispatches
   * @@param {object} e
   * */
  processGameMessage: function (e: any) {
    switch (e.data.type) {
      case 'reloadGame':
        window.location.reload()
        break
      case 'backToLobby':
        router.push({ name: 'index' })
        console.log('backToLobby')
        break
      default:
        break
    }
  }
}
</script>
