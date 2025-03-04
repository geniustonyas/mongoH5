import decryptionService from './decryptionService'
import i18n from '@/i18n'
const { t } = i18n.global

const decryptionServiceInstance = new decryptionService()

// 分类
const tmpCategorys = JSON.parse(decryptionServiceInstance.decryptResponseData(t('cryptedData.cryptedCategorys')))
const decryptedCategorys = tmpCategorys.data

// 首页分类列表
const indexCategory = JSON.parse(decryptionServiceInstance.decryptResponseData(t('cryptedData.cryptedIndexCategory')))

// 抖音
const douyin = decryptionServiceInstance.decryptResponseData(t('cryptedData.douyin'))

const zhiming = decryptionServiceInstance.decryptResponseData(t('cryptedData.zhiming'))

const nvyou = decryptionServiceInstance.decryptResponseData(t('cryptedData.nvyou'))

const wuma = decryptionServiceInstance.decryptResponseData(t('cryptedData.wuma'))

const youma = decryptionServiceInstance.decryptResponseData(t('cryptedData.youma'))

const riben = decryptionServiceInstance.decryptResponseData(t('cryptedData.riben'))

const guochan = decryptionServiceInstance.decryptResponseData(t('cryptedData.guochan'))

const suren = decryptionServiceInstance.decryptResponseData(t('cryptedData.suren'))

const dashen = decryptionServiceInstance.decryptResponseData(t('cryptedData.dashen'))

const madou = decryptionServiceInstance.decryptResponseData(t('cryptedData.madou'))
// 番号片名演员
const fanhaoPianmingYanyuan = decryptionServiceInstance.decryptResponseData(t('cryptedData.fanhaoPianmingYanyuan'))
export { decryptedCategorys, zhiming, douyin, fanhaoPianmingYanyuan, nvyou, wuma, youma, riben, guochan, suren, dashen, madou, indexCategory }
