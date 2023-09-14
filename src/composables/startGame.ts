import router from '@/router'
import i18n from '@/i18n'
import { showConfirmDialog } from 'vant'

import { getGameUrlApi } from '@/api/game'
import { useUserStore } from '@/store/modules/user'
import { PlatForm } from '@/utils/constant'

const userStore = useUserStore()
const { t } = i18n.global

/**
 * 启动游戏
 * @param id 游戏id
 */
export function startGame(gameId: string | number) {
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
 * 参考 https://codepen.io/intercom/pen/QGqWxw
 * @param message
 * @returns
 */
export function startService(message: string) {
  //@ts-ignore
  window.Intercom(message)
  return true
}
