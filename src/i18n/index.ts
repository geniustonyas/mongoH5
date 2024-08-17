import { createI18n } from 'vue-i18n'
import { getUrlAllParams } from '@/utils/index'
import de from './config/de'
import en from './config/en'
import es from './config/es'
import fr from './config/fr'
import ja from './config/ja'
import ko from './config/ko'
import pt from './config/pt'
import th from './config/th'
import tr from './config/tr'
import vi from './config/vi'
import ru from './config/ru'
import zh from './config/zh'
import { Locale } from 'vant'
// 引入语言包
import deDE from 'vant/es/locale/lang/de-DE'
import enUS from 'vant/es/locale/lang/en-US'
import esES from 'vant/es/locale/lang/es-ES'
import frFR from 'vant/es/locale/lang/fr-FR'
import jaJP from 'vant/es/locale/lang/ja-JP'
import koKR from 'vant/es/locale/lang/ko-KR'
import ptBR from 'vant/es/locale/lang/pt-BR'
import thTH from 'vant/es/locale/lang/th-TH'
import trTR from 'vant/es/locale/lang/tr-TR'
import viVN from 'vant/es/locale/lang/vi-VN'
import ruRU from 'vant/es/locale/lang/ru-RU'
import zhCN from 'vant/es/locale/lang/zh-CN'

const messages = {
  de,
  en,
  es,
  fr,
  ja,
  ko,
  pt,
  th,
  tr,
  vi,
  ru,
  zh
}

const vantLangMap: dynamicObject = {
  de: deDE,
  en: enUS,
  es: esES,
  fr: frFR,
  ja: jaJP,
  ko: koKR,
  pt: ptBR,
  th: thTH,
  tr: trTR,
  vi: viVN,
  ru: ruRU,
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
export default i18n

// <option value="zh">中文</option>
// <option value="en">English</option>
// <option value="de">Deutsch</option>
// <option value="es">Español</option>
// <option value="pt">Português</option>
// <option value="tr">Türkçe</option>
// <option value="ja">ภาษาไทย</option>
// <option value="fr">Français</option>
// <option value="ko">한국어</option>
// <option value="vi">Tiếng Việt</option>
export const languages = [
  { value: 'ja', text: '日本語' },
  { value: 'es', text: 'Español' },
  { value: 'pt', text: 'Português' },
  { value: 'tr', text: 'Türkçe' },
  { value: 'th', text: 'ภาษาไทย' },
  { value: 'en', text: 'English' },
  { value: 'de', text: 'Deutsch' },
  { value: 'zh', text: '中文' },
  { value: 'fr', text: 'Français' },
  { value: 'ko', text: '한국어' },
  { value: 'vi', text: 'Tiếng Việt' },
  { value: 'ru-ru', text: 'Русский язык' }
  // { value: 'ar', text: 'العربية' }
]

export const selLang = (lang: string) => {
  document.querySelector('html')!.setAttribute('lang', lang)
  document.querySelector('body')!.setAttribute('lang', lang)
  localStorage.setItem('lang', lang)
  // 设置vant语言
  Locale.use(lang, vantLangMap[lang])
}
