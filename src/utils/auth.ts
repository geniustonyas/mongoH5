const TokenKey = 'MongoTV'
const TokenPrefix = 'Bearer '
const isLogin = () => {
  return !!localStorage.getItem(TokenKey)
}
const getToken = () => {
  return localStorage.getItem(TokenKey)
}
const setToken = (token: string) => {
  localStorage.setItem(TokenKey, token)
}
const clearToken = () => {
  console.log(TokenKey)
  localStorage.removeItem(TokenKey)
}
export { TokenPrefix, isLogin, getToken, setToken, clearToken }
