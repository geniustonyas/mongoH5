import decryptionService from './decryptionService'
import i18n from '@/i18n'
const { t } = i18n.global

const decryptionServiceInstance = new decryptionService()

// 判断当前语言
const currentLanguage = i18n.global.locale.value

// 分类

const tmpCategorys = JSON.parse(decryptionServiceInstance.decryptResponseData(t('cryptedData.cryptedCategorys')))
const decryptedCategorys = tmpCategorys.data

// 首页分类列表
const indexCategory = JSON.parse(decryptionServiceInstance.decryptResponseData(t('cryptedData.cryptedIndexCategory')))

// 抖音
const douyin = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.douyin')) : t('cryptedData.douyin') // 直接返回翻译内容

const zhiming = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.zhiming')) : t('cryptedData.zhiming') // 直接返回翻译内容

const nvyou = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.nvyou')) : t('cryptedData.nvyou') // 直接返回翻译内容

const wuma = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.wuma')) : t('cryptedData.wuma') // 直接返回翻译内容

const youma = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.youma')) : t('cryptedData.youma') // 直接返回翻译内容

const riben = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.riben')) : t('cryptedData.riben') // 直接返回翻译内容

const guochan = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.guochan')) : t('cryptedData.guochan') // 直接返回翻译内容

const suren = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.suren')) : t('cryptedData.suren') // 直接返回翻译内容

const dashen = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.dashen')) : t('cryptedData.dashen') // 直接返回翻译内容

const madou = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.madou')) : t('cryptedData.madou') // 直接返回翻译内容

// 番号片名演员
const fanhaoPianmingYanyuan = currentLanguage == 'zh' ? decryptionServiceInstance.decryptResponseData(t('cryptedData.fanhaoPianmingYanyuan')) : t('cryptedData.fanhaoPianmingYanyuan') // 直接返回翻译内容

export { decryptedCategorys, zhiming, douyin, fanhaoPianmingYanyuan, nvyou, wuma, youma, riben, guochan, suren, dashen, madou, indexCategory }
