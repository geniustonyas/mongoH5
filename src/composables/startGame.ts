import router from '@/router'
import i18n from '@/i18n'
import { showConfirmDialog, showToast } from 'vant'

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
        window.open(resp.data)
      })
      .catch((error) => {
        showToast(t('tips.startGameFail'))
        console.log(error)
      })
  }
}
