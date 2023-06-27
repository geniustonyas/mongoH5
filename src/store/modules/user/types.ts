export interface UserInfoType {
  id?: string
  userName?: string
  integral?: string
  isBindGoogleAuth?: boolean
  vip?: string
  email?: string
  dateOfBirth?: string
  phoneNumber?: string
  countryCode?: string
  country?: string
  defaultCurrencyCode?: string
  balance?: number | null
  btcUnit?: {
    currencyUnit?: string
    rate?: number | null
  }
  address?: string
  zipcode?: string
  updatePassWordTime?: string
}
