const TokenKey = 'MongoTV'
const TokenPrefix = 'Bearer '
const isLogin = () => {
  return !!localStorage.getItem(TokenKey)
}
const getToken = () => {
  return localStorage.getItem(TokenKey)
}
const setToken = (token: string) => {
  console.log(token)
  try {
    localStorage.setItem(TokenKey, token)
  } catch (error) {
    console.error('设置token失败:', error)
  }
}
const clearToken = () => {
  localStorage.removeItem(TokenKey)
}
export { TokenPrefix, isLogin, getToken, setToken, clearToken }
