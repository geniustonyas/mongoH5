import i18n from '@/i18n/index'
import { getAssetsFile } from '@/utils'
const t = i18n.global.t

export const providerList = [
  // 体育提供商
  { id: '1', type: 'sports', tab: '', name: t('provider.fbSports'), img: getAssetsFile('svg/SabaSports.svg') },
  { id: '2', type: 'sports', tab: '', name: t('provider.fbSports'), img: getAssetsFile('svg/FBSports.svg') },
  // 真人提供商
  { id: '3', type: 'casino', tab: 'livecasino', name: t('provider.evolution'), img: getAssetsFile('svg/Evolution.svg') },
  { id: '4', type: 'casino', tab: 'livecasino', name: t('provider.bombayLive'), img: getAssetsFile('svg/BombayLive.svg') },
  { id: '5', type: 'casino', tab: 'livecasino', name: t('provider.ezugi'), img: getAssetsFile('svg/Ezugi.svg') },
  { id: '6', type: 'casino', tab: 'livecasino', name: t('provider.asiaGaming'), img: getAssetsFile('svg/AsiaGaming.svg') },
  // 电子提供商
  { id: '7', type: 'slots', tab: 'slots', name: t('provider.pragmaticPlay'), img: getAssetsFile('svg/PragmaticPlay.svg') },
  { id: '8', type: 'slots', tab: 'slots', name: t('provider.playingo'), img: getAssetsFile('svg/Playingo.svg') },
  { id: '9', type: 'slots', tab: 'slots', name: t('provider.netEnt'), img: getAssetsFile('svg/NetEnt.svg') },
  { id: '10', type: 'slots', tab: 'slots', name: t('provider.playTech'), img: getAssetsFile('svg/PlayTech.svg') },
  { id: '11', type: 'slots', tab: 'slots', name: t('provider.microgaming'), img: getAssetsFile('svg/Mg.svg') }
]

export interface providerListItemTypes {
  id: string
  type: string
  tab: string
  name: string
  img: string
}
