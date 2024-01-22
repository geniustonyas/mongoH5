import i18n from '@/i18n/index'
const { t } = i18n.global
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
      chain: '',
      explorer: ''
    },
    {
      code: 'BTC',
      currenyName: t('currencyLang.btc'),
      unit: 'μBTC',
      currenyType: '10',
      icon: 'coin/btc.svg',
      chain: 'Bitcoin',
      explorer: ''
    },
    {
      code: 'ETH',
      currenyName: t('currencyLang.eth'),
      unit: 'ETH',
      currenyType: '10',
      icon: 'coin/eth.svg',
      chain: 'Ethereum',
      explorer: ''
    },
    {
      code: 'TRX',
      currenyName: t('currencyLang.trx'),
      unit: 'TRX',
      currenyType: '10',
      icon: 'coin/trx.svg',
      chain: 'Tron',
      explorer: ''
    },
    // {
    //   code: 'BNB',
    //   currenyName: t('currencyLang.bnb'),
    //   unit: 'BNB',
    //   currenyType: '10',
    //   icon: 'coin/binance_icon.svg',
    //   chain: 'Binance',
    //   explorer: ''
    // },
    // {
    //   code: 'BUSD',
    //   currenyName: t('currencyLang.busd'),
    //   unit: 'BUSD',
    //   currenyType: '10',
    //   icon: 'coin/busd.svg',
    //   chain: 'Binance',
    //   explorer: ''
    // },
    // {
    //   code: 'XRP',
    //   currenyName: t('currencyLang.xrp'),
    //   unit: 'XRP',
    //   currenyType: '10',
    //   icon: 'coin/xrp.svg',
    //   chain: 'Ripple',
    //   explorer: ''
    // },
    {
      code: 'LTC',
      currenyName: t('currencyLang.ltc'),
      unit: 'LTC',
      currenyType: '10',
      icon: 'coin/ltc.svg',
      chain: 'Litecoin',
      explorer: ''
    },
    // {
    //   code: 'ADA',
    //   currenyName: t('currencyLang.ada'),
    //   unit: 'ADA',
    //   currenyType: '10',
    //   icon: 'coin/ada.svg',
    //   chain: 'Cardano',
    //   explorer: ''
    // },
    {
      code: 'DOGE',
      currenyName: t('currencyLang.doge'),
      unit: 'DOGE',
      currenyType: '10',
      icon: 'coin/doge.svg',
      chain: 'Dogecoin',
      explorer: ''
    },
    {
      code: 'BRL',
      currenyName: t('currencyLang.brl'),
      unit: 'BRL',
      currenyType: '20',
      icon: 'coin/brl.svg',
      explorer: ''
    },
    {
      code: 'INR',
      currenyName: t('currencyLang.inr'),
      unit: 'INR',
      currenyType: '20',
      icon: 'coin/inr.svg',
      explorer: ''
    }
    // {
    //   code: 'TON',
    //   currenyName: t('currencyLang.ton'),
    //   unit: 'TON',
    //   currenyType: '10',
    //   icon: 'coin/ton.svg',
    //   chain: 'Toncoin',
    //   explorer: ''
    // }
    // {
    //   code: 'USD',
    //   currenyName: t('currencyLang.btc'),
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
  const t = i18n.global.t
  return [
    // 体育提供商
    {
      id: '2110',
      type: 'sports',
      tab: 'sports',
      show: true,
      name: t('provider.btiSports'),
      img: getAssetsFile('svg/seabetSport.svg'),
      indexImg: getAssetsFile('provider/seabetSport.svg'),
      indexSort: 5
    },
    {
      id: '1439',
      type: 'sports',
      tab: 'sports',
      show: true,
      name: t('provider.sabaSports'),
      img: getAssetsFile('svg/SabaSports.svg'),
      indexImg: getAssetsFile('provider/SabaSports.svg'),
      indexSort: 10
    },
    // 真人提供商
    { id: '6', type: 'casino', tab: 'casino', show: true, name: t('provider.evolution'), img: getAssetsFile('svg/Evolution.svg'), indexImg: getAssetsFile('provider/Evolution.svg'), indexSort: 1 },
    { id: '16', type: 'casino', tab: 'casino', show: true, name: t('provider.sexy'), img: getAssetsFile('svg/sexy.svg'), indexImg: getAssetsFile('provider/sexy.svg'), indexSort: 9 },
    { id: '7', type: 'casino', tab: 'casino', show: true, name: t('provider.ezugi'), img: getAssetsFile('svg/Ezugi.svg'), indexImg: getAssetsFile('provider/Ezugi.svg'), indexSort: 8 },
    { id: '3', type: 'casino', tab: 'casino', show: true, name: t('provider.asiaGaming'), img: getAssetsFile('svg/AsiaGaming.svg'), indexImg: getAssetsFile('provider/AsiaGaming.svg'), indexSort: 4 },
    // 电子提供商
    { id: '13', type: 'slots', tab: 'slots', show: true, name: t('provider.pgSoft'), img: getAssetsFile('svg/pgsoft.svg'), indexImg: getAssetsFile('provider/pgsoft.svg'), indexSort: 2 },
    {
      id: '1',
      type: 'slots',
      tab: 'slots',
      show: true,
      name: t('provider.pragmaticPlay'),
      img: getAssetsFile('svg/PragmaticPlay.svg'),
      indexImg: getAssetsFile('provider/PragmaticPlay.svg'),
      indexSort: 3
    },
    {
      id: '17',
      type: 'slots',
      tab: 'slots',
      show: true,
      name: t('provider.hacksawGaming'),
      img: getAssetsFile('svg/hacksawGaming.svg'),
      indexImg: getAssetsFile('provider/hacksawGaming.svg'),
      indexSort: 3
    },
    { id: '11', type: 'slots', tab: 'slots', show: true, name: t('provider.playingo'), img: getAssetsFile('svg/Playingo.svg'), indexImg: getAssetsFile('provider/Playingo.svg'), indexSort: 5 },
    { id: '9', type: 'slots', tab: 'slots', show: true, name: t('provider.netEnt'), img: getAssetsFile('svg/NetEnt.svg'), indexImg: getAssetsFile('provider/NetEnt.svg'), indexSort: 7 },
    { id: '15', type: 'slots', tab: 'slots', show: true, name: t('provider.microgaming'), img: getAssetsFile('svg/Mg.svg'), indexImg: getAssetsFile('provider/microgaming.svg'), indexSort: 6 }
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

export const pixTypeData = () => {
  return [
    { text: 'EMAIL', value: 'EMAIL' },
    { text: 'PHONE', value: 'PHONE' },
    { text: 'CPF', value: 'CPF' },
    { text: 'CNPJ', value: 'CNPJ' },
    { text: 'RANDOM', value: 'RANDOM' }
  ]
}

export const indiaBankData = () => {
  // const t = i18n.global.t
  return [
    { value: 'ASF', text: 'AU Small Finance Bank' },
    { value: 'ABP', text: 'Aditya Birla Payments Bank' },
    { value: 'AP', text: 'Airtel Payments Bank' },
    { value: 'ALLA', text: 'Allahabad Bank' },
    { value: 'ANDH', text: 'Andhra Bank' },
    { value: 'APGV', text: 'Andhra Pradesh Grameena Vikas Bank' },
    { value: 'APG', text: 'Andhra Pragathi Grameena Bank' },
    { value: 'APR', text: 'Arunachal Pradesh Rural Bank' },
    { value: 'ARYA', text: 'Aryavart Bank' },
    { value: 'AGV', text: 'Assam Gramin Vikash Bank' },
    { value: 'AXIS', text: 'Axis Bank' },
    { value: 'BOBAK', text: 'BANK OF BAHRAIN AND KUWAIT' },
    { value: 'BHARAT', text: 'BHARAT BANK' },
    { value: 'BANDHAN', text: 'Bandhan Bank' },
    { value: 'BGV', text: 'Bangiya Gramin Vikash Bank' },
    { value: 'DBS', text: 'Bank DBS Indonesia' },
    { value: 'BOB', text: 'Bank of Baroda' },
    { value: 'BOI', text: 'Bank of India' },
    { value: 'BOM', text: 'Bank of Maharashtra' },
    { value: 'BGG', text: 'Baroda Gujarat Gramin Bank' },
    { value: 'BRKG', text: 'Baroda Rajasthan Kshetriya Gramin Bank' },
    { value: 'BUPG', text: 'Baroda Uttar Pradesh Gramin Bank' },
    { value: 'BCCO', text: 'Bassein Catholic Co-operative Bank' },
    { value: 'CSFB', text: 'CAPITAL SMALL FINANCE BANK LTD' },
    { value: 'COSMOS', text: 'COSMOS BANK' },
    { value: 'CSB', text: 'CSB Bank' },
    { value: 'CANARA', text: 'Canara Bank' },
    { value: 'CASY', text: 'Catholic Syrian Bank' },
    { value: 'CBOI', text: 'Central Bank of India' },
    { value: 'CGG', text: 'Chaitanya Godavari Grameena Bank' },
    { value: 'CRG', text: 'Chhattisgarh Rajya Gramin Bank' },
    { value: 'CITI', text: 'Citi bank' },
    { value: 'CU', text: 'City Union Bank' },
    { value: 'CLA', text: 'Coastal Local Area Bank Limited' },
    { value: 'CORP', text: 'Corporation Bank' },
    { value: 'DCB', text: 'DCB Bank' },
    { value: 'DBOS', text: 'DEVELOPMENT BANK OF SINGAPORE' },
    { value: 'DNLM', text: 'DNLM' },
    { value: 'DBG', text: 'Dakshin Bihar Gramin Bank' },
    { value: 'DENA', text: 'Dena Bank' },
    { value: 'DBAG', text: 'Deutsche Bank AG' },
    { value: 'DHAN', text: 'Dhanlaxmi Bank' },
    { value: 'ESAF', text: 'ESAF Small Finance Bank' },
    { value: 'ELD', text: 'Ellaquai Dehati Bank' },
    { value: 'ESF', text: 'Equitas Small Finance Bank' },
    { value: 'EQUITAS', text: 'Equitas bank' },
    { value: 'EXIM', text: 'Exim Bank' },
    { value: 'FIP', text: 'FINO PAYMENT BANK' },
    { value: 'FEDERAL', text: 'Federal Bank' },
    { value: 'FSF', text: 'Fincare Small Finance Bank' },
    { value: 'GPPJS', text: 'GOPINATH PATIL PARSIK JANATA SAHAKARI BANK LTD' },
    { value: 'HDFC', text: 'HDFC Bank' },
    { value: 'HSBC', text: 'HSBC Bank' },
    { value: 'HPG', text: 'Himachal Pradesh Gramin Bank' },
    { value: 'ICICI', text: 'ICICI Bank' },
    { value: 'IDBI', text: 'IDBI Bank' },
    { value: 'IDFC', text: 'IDFC First Bank' },
    { value: 'IPP', text: 'India Post Payments Bank' },
    { value: 'IND', text: 'Indian Bank' },
    { value: 'INDOV', text: 'Indian Overseas Bank' },
    { value: 'INDUSIND', text: 'IndusInd Bank' },
    { value: 'JKG', text: 'J&K Grameen Bank' },
    { value: 'JANATA', text: 'JANATA SAHAKARI BANK LTD PUNE' },
    { value: 'JAK', text: 'Jammu and Kashmir Bank' },
    { value: 'JSF', text: 'Jana Small Finance Bank' },
    { value: 'JRG', text: 'Jharkhand Rajya Gramin Bank' },
    { value: 'JIO', text: 'Jio Payments Bank' },
    { value: 'KARNATAKA', text: 'Karnataka Bank' },
    { value: 'KG', text: 'Karnataka Gramin Bank' },
    { value: 'KVG', text: 'Karnataka Vikas Grameena Bank' },
    { value: 'KV', text: 'Karur Vysya Bank' },
    { value: 'KGSG', text: 'Kashi Gomti Samyut Gramin Bank' },
    { value: 'KEG', text: 'Kerala Gramin Bank' },
    { value: 'KM', text: 'Kotak Mahindra Bank' },
    { value: 'LV', text: 'Lakshmi Vilas Bank' },
    { value: 'LIND', text: 'Lndus Ind Bank' },
    { value: 'MBG', text: 'MADHYA BIHAR GRAMIN BANK' },
    { value: 'MR', text: 'MEGHALAYA RURAL BANK' },
    { value: 'MPG', text: 'Madhya Pradesh Gramin Bank' },
    { value: 'MADG', text: 'Madhyanchal Gramin Bank' },
    { value: 'MAHG', text: 'Maharashtra Gramin Bank' },
    { value: 'MANIPURR', text: 'Manipur Rural Bank' },
    { value: 'MIZORAMR', text: 'Mizoram Rural Bank' },
    { value: 'NHB', text: 'NHB' },
    { value: 'NSDL', text: 'NSDL Payments Bank' },
    { value: 'NAGALANDR', text: 'Nagaland Rural Bank' },
    { value: 'NAINITAL', text: 'Nainital Bank' },
    { value: 'NBARD', text: 'National Bankfor Agricultureand Rural Development' },
    { value: 'NESF', text: 'North East Small Finance Bank' },
    { value: 'OG', text: 'Odisha Gramya Bank' },
    { value: 'OBOC', text: 'Oriental Bank of Commerce' },
    { value: 'PAYTM', text: 'PAYTM PAYMENTS BANK' },
    { value: 'PUNJAB', text: 'PUNJAB GRAMIN BANK' },
    { value: 'PBG', text: 'Paschim Banga Gramin Bank' },
    { value: 'PKG', text: 'Pragathi Krishna Gramin Bank' },
    { value: 'PKGB', text: 'Pragati Krushna Gramina Bank' },
    { value: 'PUPG', text: 'Prathama UP Gramin Bank' },
    { value: 'PBGB', text: 'Puduvai Bharathiar Grama Bank' },
    { value: 'PUNNA', text: 'Punjab National Bank' },
    { value: 'PAS', text: 'Punjab and Sind Bank' },
    { value: 'PURVAN', text: 'Purvanchal Bank' },
    { value: 'RBL', text: 'RBL BANK LTD' },
    { value: 'RBOS', text: 'ROYAL BANK OF SCOTLAND' },
    { value: 'RMG', text: 'Rajasthan Marudhara Gramin Bank' },
    { value: 'RBOI', text: 'Reserve Bank of India' },
    { value: 'SCBTP', text: 'STANDARD CHARTERED BANK THAI PCL' },
    { value: 'SCBL', text: 'SVC COOPERATIVE BANK LTD' },
    { value: 'SG', text: 'Saptagiri Grameena Bank' },
    { value: 'SHG', text: 'Sarva Haryana Gramin Bank' },
    { value: 'SGB', text: 'Saurashtra Gramin Bank' },
    { value: 'SIDBI', text: 'Small Industries Development Bankof India' },
    { value: 'SIB', text: 'South Indian Bank' },
    { value: 'SCB', text: 'Standard Chartered Bank' },
    { value: 'SBOH', text: 'State Bank of Hyderabad' },
    { value: 'SBOI', text: 'State Bank of India' },
    { value: 'SLA', text: 'Subhadra Local Area Bank Ltd' },
    { value: 'SSS', text: 'Suco Souharda Sahakari Bank' },
    { value: 'SSFB', text: 'Suryoday Small Finance Bank Ltd' },
    { value: 'SYNDICATE', text: 'Syndicate Bank' },
    { value: 'TNG', text: 'Tamil Nadu Grama Bank' },
    { value: 'TMB', text: 'Tamilnad Mercantile Bank Limited' },
    { value: 'TG', text: 'Tripura Gramin Bank' },
    { value: 'UCO', text: 'UCO Bank' },
    { value: 'UBG', text: 'UTTAR BIHAR GRAMIN BANK' },
    { value: 'USF', text: 'Ujjivan Small Finance Bank' },
    { value: 'UKO', text: 'Uko Bank' },
    { value: 'UBOI', text: 'Union Bank of India' },
    { value: 'UNITEDBOI', text: 'United Bank of India' },
    { value: 'UG', text: 'Utkal Grameen Bank' },
    { value: 'UTKSF', text: 'Utkarsh Small Finance Bank' },
    { value: 'UBKG', text: 'Uttar Banga Kshetriya Gramin Bank' },
    { value: 'UTTG', text: 'Uttarakhand Gramin Bank' },
    { value: 'VANG', text: 'Vananchal Gramin Bank' },
    { value: 'VKG', text: 'Vidharbha Konkan Gramin Bank' },
    { value: 'VIJAYA', text: 'Vijaya Bank' },
    { value: 'YES', text: 'Yes Bank' },
    { value: 'ICICIC', text: 'ICICI corporate Bank' },
    { value: 'SARASWAT', text: 'Saraswat Bank' },
    { value: 'TELG', text: 'Telangana grameena Bank' }
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
  chain: string
}

export interface providerListItemTypes {
  id: string
  type: string
  tab: string
  show: boolean
  name: string
  img: string
}
