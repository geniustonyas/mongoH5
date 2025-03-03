import { dynamicObject } from '@/types/global.d'
import { createI18n } from 'vue-i18n'
import { getUrlAllParams } from '@/utils/index'
import en from './config/en'
import vi from './config/vi'
import zh from './config/zh'
import { Locale } from 'vant'
// 引入语言包
import enUS from 'vant/es/locale/lang/en-US'
import viVN from 'vant/es/locale/lang/vi-VN'
import zhCN from 'vant/es/locale/lang/zh-CN'

const messages = {
  en,
  vi,
  zh
}

const vantLangMap: dynamicObject = {
  en: enUS,
  vi: viVN,
  zh: zhCN
}

const params = getUrlAllParams()
const browerLang = (navigator.language || 'en').toLocaleLowerCase()
// 首先参数中获取语言，其次用本地获取，其次从浏览器获取，如果都没有则设置为英语
const lang = params?.lang || localStorage.getItem('lang') || browerLang.split('-')[0] || 'en'
localStorage.setItem('lang', lang)
Locale.use(lang, vantLangMap[lang])
document.querySelector('body')!.setAttribute('lang', lang)
document.querySelector('html')!.setAttribute('lang', lang)
const i18n = createI18n({
  globalInjection: true,
  locale: lang,
  legacy: false,
  fallbackLocale: 'en', // 设置备用语言
  warnHtmlMessage: false,
  messages
})

// 添加全局变量
window.$t = i18n.global.t
window.$i18n = i18n.global

export default i18n

export const languages = [
  { value: 'en', text: 'English' },
  { value: 'zh', text: '中文' },
  { value: 'vi', text: 'Tiếng Việt' }
]

export const selLang = (lang: string) => {
  document.querySelector('html')!.setAttribute('lang', lang)
  document.querySelector('body')!.setAttribute('lang', lang)
  localStorage.setItem('lang', lang)
  // 设置vant语言
  Locale.use(lang, vantLangMap[lang])
}
