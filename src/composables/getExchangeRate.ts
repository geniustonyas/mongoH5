import { ref } from 'vue'

import { getExchangeRateApi } from '@/api/app/index'

/** 获取汇率 */
export function getExchangeRate() {
  const currencyCode = ref('')
  const exchangeRate = ref('')

  getExchangeRateApi()
    .then((resp) => {
      currencyCode.value = resp.data[0].currencyCode
      exchangeRate.value = resp.data[0].cxchangeRate.toString()
    })
    .catch((error) => {
      console.log(error)
    })

  return { currencyCode, exchangeRate }
}
