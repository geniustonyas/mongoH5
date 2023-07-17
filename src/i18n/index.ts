import { createI18n } from 'vue-i18n'
import { getUrlAllParams } from '@/utils/index'
import zh from './config/zh'
import en from './config/en'
import { Locale } from 'vant'
// 引入语言包
import zhCN from 'vant/es/locale/lang/zh-CN'
import enUS from 'vant/es/locale/lang/en-US'

const messages = {
  en,
  zh
}

const vantLangMap: dynamicObject = {
  zh: zhCN,
  en: enUS
}

const params = getUrlAllParams()
const browerLang = (navigator.language || 'en').toLocaleLowerCase()
// 首先参数中获取语言，其次用本地获取，其次从浏览器获取，如果都没有则设置为英语
const lang = params?.lang || localStorage.getItem('lang') || browerLang.split('-')[0] || 'en'
localStorage.setItem('lang', lang)
Locale.use(lang, vantLangMap[lang])
const i18n = createI18n({
  globalInjection: true,
  locale: lang,
  legacy: false,
  fallbackLocale: 'en', // 设置备用语言
  messages
})
export default i18n

export const selLang = (lang: string) => {
  document.querySelector('html')!.setAttribute('lang', lang)
  localStorage.setItem('lang', lang)
  Locale.use(lang, vantLangMap[lang])
}
