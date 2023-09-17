import router from '@/router'
import i18n from '@/i18n'
import { showConfirmDialog } from 'vant'

import { getGameUrlApi } from '@/api/game'
import { useUserStoreHook } from '@/store/modules/user'
import { PlatForm } from '@/utils/constant'

const userStore = useUserStoreHook()
const { t } = i18n.global

/**
 * 启动游戏
 * @param id 游戏id
 */
export function startGame(gameId: string | number) {
  console.log(gameId)
  if (!userStore.userInfo.id) {
    showConfirmDialog({
      title: t('tips.noLogin'),
      message: t('tips.goLogin')
    })
      .then(() => {
        router.push({ name: 'login' })
      })
      .catch(() => {
        return false
      })
  } else {
    getGameUrlApi({ id: gameId, platform: PlatForm.H5 })
      .then((resp) => {
        const wd = window.open(resp.data)
        if (!wd) {
          showConfirmDialog({
            title: t(''),
            message: t('tips.openWindow')
          })
            .then(() => {
              window.open(resp.data)
            })
            .catch(() => {
              return false
            })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

/**
 * 参考 https://platform.text.com/docs/extending-chat-widget/javascript-api
 * @returns
 */
export function liveChatCall(key: string, value: string | undefined = undefined) {
  if (value) {
    //@ts-ignore
    window.LiveChatWidget.call(key, value)
  } else {
    //@ts-ignore
    window.LiveChatWidget.call(key)
  }
}
