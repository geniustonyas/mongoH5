import { createI18n } from 'vue-i18n'
import { getUrlAllParams } from '@/utils/index'
import cn from './config/cn'
import en from './config/en'

const params = getUrlAllParams()
const messages = {
  en,
  cn
}

const browerLang = (navigator.language || 'en').toLocaleLowerCase()
// 首先参数中获取语言，其次用本地获取，其次从浏览器获取，如果都没有则设置为英语
const lang = params?.lang || localStorage.getItem('lang') || browerLang.split('-')[0] || 'en'
localStorage.setItem('lang', lang)
const i18n = createI18n({
  globalInjection: true,
  locale: lang,
  legacy: false,
  fallbackLocale: 'en', // 设置备用语言
  messages
})
export default i18n
// import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// import { param2Obj } from 'utils'
// Vue.use(VueI18n)

// var params = param2Obj(window.location.href)
// var messages = {
//   'zh-cn': import('@/i18n/config/zh-cn'),
//   'en-us': import('@/i18n/config/en-us'),
//   'vi-vn': import('@/i18n/config/vi-vn'),
//   'id-id': import('@/i18n/config/id-id'),
//   'pt-br': import('@/i18n/config/pt-br'),
// }
// var lang = process.env.VUE_APP_LANG
// var localLang = localStorage.getItem('lang')
// if(localLang) {
//   lang = (localLang.toLowerCase() in messages) ? localLang : 'zh-cn'
// }
// if(params.lang) {
//   lang = ((params.lang.toLowerCase()) in  messages) ? params.lang.toLowerCase() : 'zh-cn'
// }
// lang = lang.toLowerCase()
// document.querySelector('html').setAttribute('lang', lang)
// localStorage.setItem('lang', lang)
// const i18n = new VueI18n({
//   locale: lang,
//   messages: messages,
//   silentFallbackWarn: true
// })

// export default i18n
