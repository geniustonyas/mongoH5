/* eslint-disable */
let isFacebookInit = false

const facebookWebLogin = {}

/* 初始化授权登录环境配置动态加载Facebook官方JavaScript SDK */
facebookWebLogin.asyncLoadJs = function () {
  const me = this
  // #ifdef H5
  return new Promise((resolve, reject) => {
    let isScript = false
    for (let i = 0; i < document.scripts.length; i++) {
      let item = document.scripts[i]
      if (item['src'] && item['src'] == 'https://connect.facebook.net/en_US/sdk.js') {
        isScript = true
      }
    }
    if (isScript) {
      resolve(true)
    } else {
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'https://connect.facebook.net/en_US/sdk.js'
      document.body.appendChild(script)
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
    }
  })
  // #endif
}

/* 初始化Facebook授权登录相关配置信息 */
facebookWebLogin.init = async function (appId, complete = (status) => {}) {
  const me = this
  // #ifdef H5
  let isAsyncLoadJs = await me.asyncLoadJs()
  if (isAsyncLoadJs) {
    if (window['FB']) {
      window['FB'].init({
        appId: appId,
        cookie: true,
        xfbml: true,
        version: 'v6.0'
      })
      window['FB'].AppEvents.logPageView()
      isFacebookInit = true
      complete(true)
    }
  } else {
    isFacebookInit = false
    complete(false)
  }
  // #endif
}

/* 检查用户登录状态 */
facebookWebLogin.getLoginStatus = function (complete = (resp) => {}) {
  const me = this
  // #ifdef H5
  if (isFacebookInit) {
    window['FB'].getLoginStatus((response) => {
      complete(response)
    })
  }
  // #endif
}

/* 通过 Javascript SDK 登录对话框登录 */
facebookWebLogin.login = function (complete = () => {}, Permissions = {}) {
  const me = this
  // #ifdef H5
  if (isFacebookInit) {
    window['FB'].login((response) => {
      complete(response)
    }, Permissions)
  }
  // #endif
}

/* 通过 Javascript SDK 退出登录 */
facebookWebLogin.logout = function (complete = () => {}) {
  const me = this
  // #ifdef H5
  if (isFacebookInit) {
    me.getLoginStatus((response) => {
      if (response['status'] == 'connected') {
        window['FB'].logout((res) => {
          complete(res)
        })
      }
    })
  }
  // #endif
}

/* 通过 图谱 API 彻底取消授权应用或撤销登录 */
facebookWebLogin.revocationAuthorization = function (complete = () => {}) {
  const me = this
  // #ifdef H5
  if (isFacebookInit) {
    me.getLoginStatus((response) => {
      if (response['status'] == 'connected') {
        me.api('id', (res) => {
          window['FB'].api(`/${res['id']}/permissions`, 'DELETE', (req) => {
            complete(req)
          })
        })
      }
    })
  }
  // #endif
}

/* 通过 图谱 API 查询用户信息 */
facebookWebLogin.api = function (fields = 'id,name', complete = (info) => {}) {
  const me = this
  // #ifdef H5
  if (isFacebookInit) {
    me.getLoginStatus((response) => {
      if (response['status'] == 'connected') {
        window['FB'].api(
          '/me',
          'GET',
          {
            fields: fields
          },
          (res) => {
            complete(res)
          }
        )
      }
    })
  }
  // #endif
}

export default facebookWebLogin
