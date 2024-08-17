import i18n from '@/i18n/index'
const t = i18n.global.t

export const usdtChainList = [
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
  },
  {
    chainName: 'Polygon',
    subtitle: t('currencyLang.usdt'),
    code: 'polygon',
    icon: 'iconfont icon-polygon'
  }
]

export const currenyList = [
  {
    code: 'USDT',
    currenyName: t('currencyLang.usdt'),
    unit: 'USDT',
    currenyType: '11',
    icon: 'coin/usdt.svg'
  },
  {
    code: 'BTC',
    currenyName: t('currencyLang.btc'),
    unit: 'μBTC',
    currenyType: '10',
    icon: 'coin/btc.svg'
  },
  {
    code: 'ETH',
    currenyName: t('currencyLang.eth'),
    unit: 'ETH',
    currenyType: '10',
    icon: 'coin/eth.svg'
  },
  {
    code: 'TRX',
    currenyName: t('currencyLang.trx'),
    unit: 'TRX',
    currenyType: '10',
    icon: 'coin/trx.svg'
  },
  {
    code: 'BNB',
    currenyName: t('currencyLang.bnb'),
    unit: 'BNB',
    currenyType: '10',
    icon: 'coin/trx.svg'
  },
  {
    code: 'BUSD',
    currenyName: t('currencyLang.busd'),
    unit: 'BUSD',
    currenyType: '10',
    icon: 'coin/busd.svg'
  },
  {
    code: 'XRP',
    currenyName: t('currencyLang.xrp'),
    unit: 'XRP',
    currenyType: '10',
    icon: 'coin/xrp.svg'
  },
  {
    code: 'LTC',
    currenyName: t('currencyLang.ltc'),
    unit: 'LTC',
    currenyType: '10',
    icon: 'coin/ltc.svg'
  },
  {
    code: 'ADA',
    currenyName: t('currencyLang.ada'),
    unit: 'ADA',
    currenyType: '10',
    icon: 'coin/ada.svg'
  },
  {
    code: 'DOGE',
    currenyName: t('currencyLang.doge'),
    unit: 'DOGE',
    currenyType: '10',
    icon: 'coin/doge.svg'
  },
  {
    code: 'TON',
    currenyName: t('currencyLang.ton'),
    unit: 'TON',
    currenyType: '10',
    icon: 'coin/ton.svg'
  },
  {
    code: 'USD',
    currenyName: t('currencyLang.btc'),
    unit: 'USD',
    currenyType: '20',
    icon: 'coin/usd.svg'
  },
  {
    code: 'CNY',
    currenyName: t('currencyLang.cny'),
    unit: 'CNY',
    currenyType: '20',
    icon: 'coin/cny.svg'
  },
  {
    code: 'BRL',
    currenyName: t('currencyLang.brl'),
    unit: 'BRL',
    currenyType: '20',
    icon: 'coin/brl.svg'
  },
  {
    code: 'INR',
    currenyName: t('currencyLang.inr'),
    unit: 'INR',
    currenyType: '20',
    icon: 'coin/inr.svg'
  },
  {
    code: 'THD',
    currenyName: t('currencyLang.thd'),
    unit: 'THD',
    currenyType: '20',
    icon: 'coin/thd.svg'
  },
  {
    code: 'VND',
    currenyName: t('currencyLang.vnd'),
    unit: 'VND',
    currenyType: '20',
    icon: 'coin/vnd.svg'
  },
  {
    code: 'PHP',
    currenyName: t('currencyLang.php'),
    unit: 'PHP',
    currenyType: '20',
    icon: 'coin/php.svg'
  },
  {
    code: 'JPY',
    currenyName: t('currencyLang.jpy'),
    unit: 'JPY',
    currenyType: '20',
    icon: 'coin/jpy.svg'
  }
]

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
