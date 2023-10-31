/** 验证手机
 * @param {String} arg
 * @returns {Boolean}
 */
export function isPhone(arg: any): boolean {
  return /^[1][3,4,5,6,7,8,9][0-9]{9}$/.test(arg)
}

/** 验证用户名
 * @param {String} arg
 * @returns {Boolean}
 */
export function isUname(arg: any): boolean {
  return /^[a-zA-Z]{1}\w{4,12}$/.test(arg)
}

/** 验证昵称
 * @param {String} arg
 * @returns {Boolean}
 */
export function isNickName(arg: any): boolean {
  return /^[\u4e00-\u9fa5a-zA-Z]{2,10}$/.test(arg)
}

/** 验证密码
 * @param {String} arg
 * @returns {Boolean}
 */
export function isPwd(arg: any): boolean {
  return /^(?=.*[a-zA-Z0-9\W_]).{6,16}$/.test(arg)
}

/** 验证验证码
 * @param {String} arg
 * @returns {Boolean}
 */
export function isCaptcha(arg: any): boolean {
  return /^\d{6}$/.test(arg)
}

/** 验证姓名
 * @param {String} arg
 * @returns {Boolean}
 */
export function isTrueName(arg: any): boolean {
  return /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,10}$/.test(arg)
}

/** 验证邮箱
 * @param {String} arg
 * @returns {Boolean}
 */
export function isEmail(arg: any): boolean {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(arg)
}

/** 验证是否为空
 * @param {String} arg
 * @returns {Boolean}
 */
export function isEmpty(arg: any): boolean {
  return typeof arg === 'undefined' || arg == null || arg == '' || arg.length == 0
}

/** 验证微信
 * @param {String} arg
 * @returns {Boolean}
 */
export function isWeixin(arg: any): boolean {
  return /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(arg)
}

/** 验证QQ
 * @param {String} arg
 * @returns {Boolean}
 */
export function isQQ(arg: any): boolean {
  return /^[1-9][0-9]{4,14}$/.test(arg)
}

/** 验证日期
 * @param {String} arg
 * @returns {Boolean}
 */
export function isDate(arg: any): boolean {
  return /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-9]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/.test(
    arg
  )
}

/** 验证时间
 * @param {String} arg
 * @returns {Boolean}
 */
export function isDatetime(arg: any): boolean {
  return /^(((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-)) (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d)$/.test(
    arg
  )
}
