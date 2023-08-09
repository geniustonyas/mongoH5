import i18n from '@/i18n/index'
import { getAssetsFile } from '@/utils'
const t = i18n.global.t

// 1  Pragmatic Play
// 3  AG
// 4  沙巴
// 5  BTI 无图标
// 6  EVO
// 7  Ezugi
// 9  netent
// 11  PNG 无
// 15  Microgaming
// 16  SEXY 无图标

export const providerList = [
  // 体育提供商
  { id: '4', type: 'sports', tab: 'sports', name: t('provider.sabaSports'), img: getAssetsFile('svg/SabaSports.svg') },
  // { id: '2', type: 'sports', tab: 'sports', name: t('provider.fbSports'), img: getAssetsFile('svg/FBSports.svg') },
  // { id: '2', type: 'sports', tab: 'sports', name: t('provider.fbSports'), img: getAssetsFile('svg/FBSports.svg') },
  // 真人提供商
  { id: '6', type: 'casino', tab: 'casino', name: t('provider.evolution'), img: getAssetsFile('svg/Evolution.svg') },
  // { id: '4', type: 'casino', tab: 'casino', name: t('provider.bombayLive'), img: getAssetsFile('svg/BombayLive.svg') },
  { id: '7', type: 'casino', tab: 'casino', name: t('provider.ezugi'), img: getAssetsFile('svg/Ezugi.svg') },
  { id: '3', type: 'casino', tab: 'casino', name: t('provider.asiaGaming'), img: getAssetsFile('svg/AsiaGaming.svg') },
  // 电子提供商
  { id: '1', type: 'slots', tab: 'slots', name: t('provider.pragmaticPlay'), img: getAssetsFile('svg/PragmaticPlay.svg') },
  // { id: '8', type: 'slots', tab: 'slots', name: t('provider.playingo'), img: getAssetsFile('svg/Playingo.svg') },
  { id: '9', type: 'slots', tab: 'slots', name: t('provider.netEnt'), img: getAssetsFile('svg/NetEnt.svg') },
  // { id: '10', type: 'slots', tab: 'slots', name: t('provider.playTech'), img: getAssetsFile('svg/PlayTech.svg') },
  { id: '11', type: 'slots', tab: 'slots', name: t('provider.microgaming'), img: getAssetsFile('svg/Mg.svg') }
]

export interface providerListItemTypes {
  id: string
  type: string
  tab: string
  name: string
  img: string
}
