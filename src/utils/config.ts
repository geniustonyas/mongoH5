import i18n from '@/i18n/index'
const t = i18n.global.t
import { getAssetsFile } from '@/utils'

export const usdtChainListData = () => {
  return [
    {
      chainName: 'Ethereum (ERC20)',
      subtitle: t('currencyLang.usdt'),
      code: 'Ethereum',
      icon: 'iconfont icon-eth'
    },
    {
      chainName: 'Tron (Trc20)',
      subtitle: t('currencyLang.usdt'),
      code: 'Tron',
      icon: 'iconfont icon-trx'
    }
    // {
    //   chainName: 'Polygon',
    //   subtitle: t('currencyLang.usdt'),
    //   code: 'polygon',
    //   icon: 'iconfont icon-polygon'
    // }
  ]
}

export const currenyListData = () => {
  return [
    {
      code: 'USDT',
      currenyName: t('currencyLang.usdt'),
      unit: 'USDT',
      currenyType: '11',
      icon: 'coin/usdt.svg',
      explorer: ''
    },
    {
      code: 'BTC',
      currenyName: t('currencyLang.btc'),
      unit: 'μBTC',
      currenyType: '10',
      icon: 'coin/btc.svg',
      explorer: ''
    },
    {
      code: 'ETH',
      currenyName: t('currencyLang.eth'),
      unit: 'ETH',
      currenyType: '10',
      icon: 'coin/eth.svg',
      explorer: ''
    },
    {
      code: 'TRX',
      currenyName: t('currencyLang.trx'),
      unit: 'TRX',
      currenyType: '10',
      icon: 'coin/trx.svg',
      explorer: ''
    },
    {
      code: 'BNB',
      currenyName: t('currencyLang.bnb'),
      unit: 'BNB',
      currenyType: '10',
      icon: 'coin/binance_icon.svg',
      explorer: ''
    },
    {
      code: 'BUSD',
      currenyName: t('currencyLang.busd'),
      unit: 'BUSD',
      currenyType: '10',
      icon: 'coin/busd.svg',
      explorer: ''
    },
    {
      code: 'XRP',
      currenyName: t('currencyLang.xrp'),
      unit: 'XRP',
      currenyType: '10',
      icon: 'coin/xrp.svg',
      explorer: ''
    },
    {
      code: 'LTC',
      currenyName: t('currencyLang.ltc'),
      unit: 'LTC',
      currenyType: '10',
      icon: 'coin/ltc.svg',
      explorer: ''
    },
    {
      code: 'ADA',
      currenyName: t('currencyLang.ada'),
      unit: 'ADA',
      currenyType: '10',
      icon: 'coin/ada.svg',
      explorer: ''
    },
    {
      code: 'DOGE',
      currenyName: t('currencyLang.doge'),
      unit: 'DOGE',
      currenyType: '10',
      icon: 'coin/doge.svg',
      explorer: ''
    },
    {
      code: 'TON',
      currenyName: t('currencyLang.ton'),
      unit: 'TON',
      currenyType: '10',
      icon: 'coin/ton.svg',
      explorer: ''
    }
    // {
    //   code: 'USD',
    //   currenyName: t('currencyLang.usd'),
    //   unit: 'USD',
    //   currenyType: '20',
    //   icon: 'coin/usd.svg',
    //   explorer: ''
    // },
    // {
    //   code: 'CNY',
    //   currenyName: t('currencyLang.cny'),
    //   unit: 'CNY',
    //   currenyType: '20',
    //   icon: 'coin/cny.svg',
    //   explorer: ''
    // }
  ]
}

export const providerListData = () => {
  return [
    // 体育提供商
    { id: '2110', type: 'sports', tab: 'sports', name: t('provider.btiSports'), img: getAssetsFile('svg/seabetSport.svg') },
    { id: '1439', type: 'sports', tab: 'sports', name: t('provider.sabaSports'), img: getAssetsFile('svg/SabaSports.svg') },
    // { id: '2', type: 'sports', tab: 'sports', name: t('provider.fbSports'), img: getAssetsFile('svg/FBSports.svg') },
    // 真人提供商
    { id: '6', type: 'casino', tab: 'casino', name: t('provider.evolution'), img: getAssetsFile('svg/Evolution.svg') },
    { id: '16', type: 'casino', tab: 'casino', name: t('provider.sexy'), img: getAssetsFile('svg/sexy.svg') },
    { id: '7', type: 'casino', tab: 'casino', name: t('provider.ezugi'), img: getAssetsFile('svg/Ezugi.svg') },
    { id: '3', type: 'casino', tab: 'casino', name: t('provider.asiaGaming'), img: getAssetsFile('svg/AsiaGaming.svg') },
    // 电子提供商
    { id: '1', type: 'slots', tab: 'slots', name: t('provider.pragmaticPlay'), img: getAssetsFile('svg/PragmaticPlay.svg') },
    { id: '11', type: 'slots', tab: 'slots', name: t('provider.playingo'), img: getAssetsFile('svg/Playingo.svg') },
    { id: '9', type: 'slots', tab: 'slots', name: t('provider.netEnt'), img: getAssetsFile('svg/NetEnt.svg') },
    // { id: '10', type: 'slots', tab: 'slots', name: t('provider.playTech'), img: getAssetsFile('svg/PlayTech.svg') },
    { id: '15', type: 'slots', tab: 'slots', name: t('provider.microgaming'), img: getAssetsFile('svg/Mg.svg') }
  ]
}

export const fundCategoryData = () => {
  return [
    { value: '', text: t('categoryFilter') },
    { value: '1', text: t('fundCategory.1') },
    { value: '2', text: t('fundCategory.2') },
    { value: '3', text: t('fundCategory.3') },
    { value: '4', text: t('fundCategory.4') },
    { value: '5', text: t('fundCategory.5') },
    { value: '6', text: t('fundCategory.6') },
    { value: '7', text: t('fundCategory.7') },
    { value: '8', text: t('fundCategory.8') },
    { value: '9', text: t('fundCategory.9') },
    { value: '10', text: t('fundCategory.10') },
    { value: '17', text: t('fundCategory.17') }
  ]
}

export const buyCryptoData = () => {
  return [
    { name: 'Moonpay', sub: t('moonpayExchange'), url: 'https://www.moonpay.com/', img: getAssetsFile('coin/moonpay.svg') },
    { name: 'Binance', sub: t('recommendExchange'), url: 'https://www.binance.com/', img: getAssetsFile('coin/binance_icon.svg') },
    { name: 'OKX', sub: t('recommendExchange'), url: 'https://www.okx.com/', img: getAssetsFile('coin/okx.svg') },
    { name: 'Bybit', sub: t('recommendExchange'), url: 'https://www.bybit.com/', img: getAssetsFile('coin/bybit_icon.svg') },
    { name: 'Blockfinex', sub: t('recommendExchange'), url: 'https://www.blockfinex.com/', img: getAssetsFile('coin/blockfinex_icon.svg') },
    { name: 'Bitflyer', sub: t('recommendExchange'), url: 'https://www.bitflyer.com/', img: getAssetsFile('coin/bitflyer_icon.svg') }
  ]
}

export interface usdtChainListTypes {
  chainName: string
  subtitle: string
  code: string
  icon: string
}

export interface currenyListTypes {
  code: string
  currenyName: string
  unit: string
  currenyType: string
  icon: string
}

export interface providerListItemTypes {
  id: string
  type: string
  tab: string
  name: string
  img: string
}
