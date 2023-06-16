<template>
  <div ref="telegram" class="test" />
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TelegramLogin',
  props: {
    mode: {
      type: String,
      required: true,
      validator(value) {
        return ['callback', 'redirect'].includes(value)
      }
    },
    telegramLogin: {
      type: String,
      required: true,
      validator(value) {
        return value.endsWith('bot') || value.endsWith('Bot')
      }
    },
    redirectUrl: {
      type: String,
      default: ''
    },
    requestAccess: {
      type: String,
      default: 'write',
      validator(value) {
        return ['read', 'write'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'small',
      validator(value) {
        return ['small', 'medium', 'large'].includes(value)
      }
    },
    userpic: {
      type: Boolean,
      default: true
    },
    radius: {
      type: String
    }
  },
  mounted() {
    // 这里是根据步骤3的代码动态创建的，有需要可自行修改
    const script = document.createElement('script')
    script.async = true
    script.src = 'https://telegram.org/js/telegram-widget.js?14'
    script.setAttribute('data-size', this.size)
    script.setAttribute('data-userpic', this.userpic)
    script.setAttribute('data-telegram-login', this.telegramLogin)
    script.setAttribute('data-request-access', this.requestAccess)
    if (this.radius) {
      script.setAttribute('data-radius', this.radius)
    }
    if (this.mode === 'callback') {
      window.onTelegramAuth = this.onTelegramAuth
      script.setAttribute('data-onauth', 'window.onTelegramAuth(user)')
    } else {
      script.setAttribute('data-auth-url', this.redirectUrl)
    }
    this.$refs.telegram.appendChild(script)
  },
  methods: {
    onTelegramAuth(user) {
      this.$emit('callback', user)
    }
  }
})
</script>
<style lang="less">
.test {
  // 这里可以自己调整外框样子
  height: 100px;
  color: greenyellow;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
<style>
/* 这里可以在控制台找到Telegram的dom结构和样式，自行修改Telegram呈现的样式 */
.tgme_widget_login.large button.tgme_widget_login_button {
  /* opcity: 0; */
  cursor: pointer;
}
</style>
