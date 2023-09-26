import router from '@/router'
import i18n from '@/i18n'
import { showConfirmDialog } from 'vant'

import { getGameUrlApi } from '@/api/game'
import { useUserStoreHook } from '@/store/modules/user'
import { GameType, PlatForm } from '@/utils/constant'

const userStore = useUserStoreHook()
const { t } = i18n.global

/**
 *
 * @param gameId 游戏ID
 * @param gameType 游戏类型
 * @param url 游戏url
 * @param startNow 是否立即开始游戏, 默认为false, 用于游戏详情中的启动游戏
 */
export function startGame(gameId: string | number, gameType = GameType.Sports, url = 'game/url', startNow = false) {
  // 体育必须登录
  if (gameType == GameType.Sports) {
    if (userStore.userInfo.id == '') {
      router.push({ name: 'reg' })
      return false
    } else {
      getGameUrl(gameId.toString(), url)
    }
  } else {
    if (startNow) {
      if ((gameType != GameType.Slots && userStore.userInfo.id == '') || (gameType == GameType.Slots && userStore.userInfo.id == '' && url == 'game/url')) {
        router.push({ name: 'reg' })
        return false
      } else {
        getGameUrl(gameId.toString(), url)
      }
    } else {
      router.push({ name: 'gameDetails', params: { id: gameId } })
    }
  }
}

// 弹出提示登录框
export function showLoginBox() {
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
}

// 获取游戏链接
export function getGameUrl(gameId: string, gameUrl = 'game/url') {
  getGameUrlApi({ id: gameId, platform: PlatForm.H5 }, gameUrl)
    .then((resp) => {
      window.location.href = resp.data
    })
    .catch((error) => {
      console.log(error)
    })
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
