export interface UserInfoType {
  address: string
  balance: string
  btcUnit: {
    currencyUnit: string
    rate: string
  }
  country: string
  countryCode: string
  dateOfBirth: string
  defaultCurrencyCode: string
  email: string
  id: string
  inVisible: string
  integral: string
  isBindGoogleAuth: boolean
  nextVipRequiredTotalBetAmount: string
  phoneNumber: string
  totalBetAmount: string
  updatePassWordTime: string | null
  userName: string
  vip: string
  vipCode: string
  zipcode: string
}
