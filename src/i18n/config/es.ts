const site_name = import.meta.env.VITE_APP_SITE_NAME

export default {
  home: 'Inicio',
  search: 'Buscar',
  promo: 'Promociones',
  support: 'Soporte',
  onlineSupport: 'Soporte en Línea',
  accountMenu: 'Cuenta',
  account: 'Cuenta',
  confirm: 'Confirmar',
  confirmd: 'Confirmado',
  all: 'Todos',
  save: 'Guardar',
  cancel: 'Cancelar',
  close: 'Cerrar',
  start: 'Comenzar',
  loading: 'Cargando',
  end: 'Fin',
  to: ' a ',
  or: 'o',
  and: 'y',
  at: 'a',
  goto: 'Ir a',
  refreshSuccess: 'Actualización exitosa',
  loadingFail: 'Error de carga',
  noMore: 'No hay más...',
  login: 'Iniciar sesión',
  otherMethod: 'Otro Método',
  reg: 'Registro',
  userName: 'Nombre de Usuario',
  email: 'Correo Electrónico',
  sendEmail: 'Enviar Código',
  sended: 'Enviado',
  emailCaptcha: 'Código de Correo Electrónico',
  password: 'Contraseña',
  forgetPassword: 'Olvidé la Contraseña',
  resetPwd: 'Restablecer Contraseña',
  noUser: '¿No tienes una cuenta?',
  createUser: 'Crear Cuenta',
  googleCode: 'Código de Google',
  inputGoole: 'Introduce el Código de Google',
  partner: 'Socio Oficial:',
  date: 'Fecha',
  day: 'Día',
  month: 'Mes',
  year: 'Año',
  birthday: 'Fecha de Nacimiento',
  telephone: 'Teléfono',
  country: 'País',
  hasAccount: '¿Ya tienes una cuenta?',
  logout: 'Cerrar Sesión',
  address: 'Dirección',
  zipCode: 'Código Postal',
  loginPage: {
    useGoogle: 'Usar Autenticador de Google',
    userNameOrEmail: 'Nombre de Usuario o Correo Electrónico'
  },
  regPage: {
    holderUserName: 'Crea tu Nombre de Usuario',
    holderEmail: `Ejemplo: tu{'@'}ejemplo.com`,
    holderTelephone: 'Teléfono (+66 xxxxxxxxxxx)',
    isAdult: 'Confirmo que tengo 18 años o más y acepto',
    termCondition: 'Términos y Condiciones',
    privacyPolicy: 'Política de Privacidad',
    isAgree: `Acepto recibir información sobre promociones y actividades de mercado de ${site_name}`
  },
  thirdRegPage: {
    beFinished: '¡Casi terminado!',
    fixInfo: 'Por favor, completa tu información'
  },
  myprfile: 'Mi Perfil',
  clubLevel: 'Nivel del Club',
  userLevels: {
    '101': 'Hierro',
    '102': 'Bronce',
    '103': 'Plata',
    '104': 'Oro',
    '105': 'Platino',
    '106': 'Titanio',
    '107': 'Diamante'
  },
  homePage: {
    currentMultiplier: 'Multiplicador de Puntos Actual',
    nextReward: 'Recompensa del Próximo Nivel',
    showProgress: 'Mostrar mi Progreso'
  },
  userAccount: 'Cuenta de Usuario',
  wallet: 'Billetera',
  myBets: 'Mis Apuestas',
  rewards: 'Recompensas',
  notifications: 'Notificaciones',
  // Búsqueda
  noSearchResult: 'Lo siento, no se encontraron resultados para "{ keyword }". Por favor, intenta con otra palabra clave.',
  searchResultNum: 'Se encontraron { searchResult } resultados',
  // Detalle de Promociones
  promoDetail: 'Detalles de la Promoción',
  // Club
  club: 'Club',
  tiers: 'Niveles',
  clubTips: 'Cada mes, tus recompensas se restablecerán. Asegúrate de reclamar tus recompensas antes de que termine el mes.',
  currentPoints: 'Puntos Actuales',
  currentPointsMultiplier: 'Multiplicador de Puntos Actuales',
  receiveReward: 'Reclamar Recompensa',
  alreadyReceived: 'Ya Reclamado',
  mergedReards: 'Se han acumulado recompensas para el próximo nivel y pueden reclamarse en conjunto',
  noReward: 'No hay recompensas por el momento. Alcanza el siguiente nivel para desbloquear tu primera recompensa.',
  // Club VIP
  vipClub: 'Club VIP',
  // Tienda de Puntos
  mallStore: 'Tienda de Puntos',
  // Configuración de la Cuenta
  generalInformation: 'Información General',
  changePassword: 'Cambiar Contraseña',
  googleAuthenticator: 'Autenticador de Google',
  privacySetting: 'Configuración de Privacidad',
  currentPwd: 'Contraseña Actual',
  newPwd: 'Nueva Contraseña',
  confirmPwd: 'Confirmar Contraseña',
  changePwdLimit: 'Para asegurar la seguridad de tus fondos, después de cambiar la contraseña no podrás realizar retiros durante 48 horas.',
  disabledGoogle: 'Autenticador de Google desactivado',
  activeGoogle: 'Usa el Autenticador de Google para escanear el código QR o ingresar el código para activarlo.',
  whatGoogleCode: '¿Qué es el Código de Google?',
  typeCode: 'Ingresa el Código',
  submitCode: 'Enviar Código',
  keyValue: 'Valor de Clave',
  // Notificaciones
  notice: 'Noticias',
  mail: 'Correo Interno',
  makeAllRead: 'Marcar Todos como Leídos',
  noMessage: 'No tienes ninguna notificación en este momento',
  // Recompensas
  claimReward: 'Reclamar Recompensa',
  claimNewReward: 'Reclamar Nueva Recompensa',
  rewardCode: 'Código de Recompensa',
  claim: 'Reclamar',
  recentTransaction: 'Transacciones Recientes',
  // Búsqueda
  searchHolder: 'Juegos, Proveedores',
  searchMore: 'Buscar Más',
  searchRecommend: 'Recomendados para Ti',
  enter: 'Entrar',
  // Fondos
  fundAccount: 'Fondos de Cuenta',
  activeBalance: 'Saldo Activo',
  balance: 'Saldo',
  deposit: 'Depósito',
  buyCrypto: 'Comprar Cripto',
  withdraw: 'Retirar',
  youDepositAddress: 'Tu Dirección de Depósito',
  minDepositAmount: 'Monto Mínimo de Depósito',
  quickTips: 'Consejos Rápidos',
  quickTipCont: 'Asegúrate de usar siempre la dirección de depósito más reciente de nuestro cajero al realizar cualquier transferencia.',
  promoCode: 'Código de Promoción',
  currentBalance: 'Saldo Actual',
  myRewards: 'Mis Recompensas',
  transactionHistory: 'Historial de Transacciones',
  supportSettings: 'Soporte y Configuración',
  walletSettings: 'Configuración de Billetera',
  faq: 'Ayuda',
  liveSupport: 'Soporte en Vivo',
  chooseCrypto: 'Selecciona tu Moneda Preferida',
  cryptoCurrency: 'Criptomoneda',
  bank: 'Banco',
  chooseDepositChain: 'Selecciona la Red de Depósito',
  confirmDepositAddress: 'Confirma tu Dirección de Depósito antes de realizar la transacción.',
  recommendExchange: 'Compra criptomonedas en los exchanges recomendados.',
  // Historial de Transacciones
  deposits: 'Depósitos',
  withdrawals: 'Retiros',
  bets: 'Apuestas',
  wins: 'Ganancias',
  currencyFilter: 'Filtrar por Moneda',
  dateFilter: 'Filtrar por Fecha',
  winLose: 'Ganar/Perder',
  nodata: 'No hay registros',
  // Configuración de Billetera
  currency: 'Moneda',
  btcUnit: 'Unidad de Bitcoin',
  // Retiros
  inputAmount: 'Ingrese el Monto',
  walletDetails: 'Detalles de la Billetera',
  walletDetailsBig: 'Detalles de la Billetera',
  waitingResults: 'Esperando Resultados',
  withdrawUsdt: 'Retiro {curreny}',
  amount: 'Monto',
  minWithdrawAmount: 'Monto Mínimo de Retiro',
  next: 'Siguiente',
  youWithdrawAddress: 'Tu Dirección de Retiro',
  payto: 'Pago a',
  checkWithdrawAddress: 'Por favor, verifica tu dirección de retiro antes de cada transacción.',
  previewWithdraw: 'Vista Previa de Retiro',
  confirmWithdrawInfo: 'Por favor, confirma que toda la información es correcta.',
  network: 'Red',
  withdrawing: 'Retirando',
  summary: 'Resumen',
  transactionType: 'Tipo de Transacción',
  finalBalance: 'Saldo Final',
  backToFund: 'Volver a Fondos',
  chooseWithdrawChain: 'Selecciona la Red de Retiro',
  confirmWithdrawAddress: 'Confirma tu Dirección de Retiro antes de realizar la transacción.',
  walletAddress: 'Dirección de Billetera',
  walletAddressBig: 'Dirección de Billetera',
  tradeStatus: { 1: 'No Completado', 2: 'Completado', 3: 'Eliminado' },
  // Inicio
  readMore: 'Leer Más',
  sports: 'Deportes',
  liveCasino: 'Casino en Vivo',
  slots: 'Máquinas Tragamonedas',
  sbSport: 'Deportes de Arena',
  fbSport: 'Deportes de Fútbol',
  downloadApp: 'Descargar App',
  androidApple: 'Disponible para Android y Apple',
  globalPaymentSolutions: 'Soluciones Globales de Pago',
  otherPayment: 'Otros Métodos de Pago Populares',
  sportsBet: 'Apuestas Deportivas',
  liveCasinoBet: 'Apuestas en Casino en Vivo',
  slotBet: 'Apuestas en Máquinas Tragamonedas',
  more: 'Más',
  loadMore: 'Cargar Más',
  providers: 'Proveedores',
  allProviders: 'Todos los Proveedores',
  sortBy: 'Ordenar por',
  polular: 'Popular',
  promotions: 'Promociones',
  aboutUs: 'Acerca de Nosotros',
  selectLanguage: 'Selecciona Idioma',
  ruleTerms: 'Reglas y Términos',
  responsibleGambling: 'Juego Responsable',
  amlPolicy: 'Política AML',
  selfExclusion: 'Autoexclusión',
  privacyPolicy: 'Política de Privacidad',
  fairness: 'Equidad',
  game: 'Juego',
  followUs: 'Síguenos',
  language: 'Idioma',
  helpCenter: 'Centro de Ayuda',
  acceptCrypto: 'Aceptamos Criptomonedas',
  licencesSecurity: 'Licencias y Seguridad',
  gameBig: 'Juego',
  userBig: 'Usuario',
  payoutBig: 'Pago',
  betUser: 'Apuestas',
  multiplier: 'Multiplicador',
  paymentAmount: 'Monto de Pago',
  invisibility: 'Invisibilidad',
  currencyLang: {
    usdt: 'USDT',
    btc: 'BTC',
    eth: 'ETH',
    busd: 'BUSD',
    trx: 'TRX',
    xrp: 'XRP',
    bnb: 'BNB',
    ltc: 'LTC',
    ada: 'ADA',
    doge: 'DOGE',
    ton: 'TON',
    usd: 'USD',
    cny: 'CNY'
  },
  // Tienda de Puntos
  points: 'Puntos',
  pointsNum: 'Cantidad de Puntos',
  earnPoints: 'Ganar Puntos',
  pointType: 'Tipo',
  spentPoints: 'Gastar Puntos',
  afterPoints: 'Puntos Después de Transacción',
  createTime: 'Fecha de Creación',
  pointsType: {
    '1': 'Apuestas',
    '2': 'Canje de Productos',
    '3': 'Promociones',
    '4': 'Añadido por Admin',
    '5': 'Deducido por Admin',
    '6': 'Canje Cancelado'
  },
  // Proveedores de Juegos
  provider: {
    all: 'Todos',
    sabaSports: 'Saba Sports',
    btiSports: 'Seabet Sports',
    fbSports: 'FB Sports',
    evolution: 'Evolution',
    bombayLive: 'Bombay Live',
    ezugi: 'Ezugi',
    asiaGaming: 'Asia Gaming',
    pragmaticPlay: 'Pragmatic Play',
    playingo: "Play'n Go",
    netEnt: 'NetEnt',
    playTech: 'PlayTech',
    microgaming: 'Microgaming',
    sexy: 'Sexy Baccarat'
  },

  // Consejos de validación de datos
  tips: {
    // Usuario - Iniciar sesión y registrarse
    inputAccount: 'Ingrese el nombre de usuario',
    isAccount: 'El nombre de usuario debe tener entre 5 y 12 caracteres y comenzar con una letra',
    inputPassword: 'Ingrese la contraseña',
    isPwd: 'La contraseña debe tener entre 6 y 16 caracteres y contener números o letras',
    pwdNotMatch: 'Las contraseñas no coinciden',
    googleCode: 'El código de autenticación de Google debe tener 6 dígitos numéricos',
    loginFail: 'Fallo al iniciar sesión',
    inputEmail: 'Ingrese el correo electrónico',
    isEmail: 'Formato de correo electrónico incorrecto',
    inputEmailcapcha: 'Ingrese el código de verificación de correo electrónico',
    inputDay: 'Seleccione el día de nacimiento',
    inputMonth: 'Seleccione el mes de nacimiento',
    inputYear: 'Seleccione el año de nacimiento',
    inputCountryCode: 'Ingrese el código de país',
    inputphoneNumber: 'Ingrese el número de teléfono',
    inputAddress: 'Ingrese la dirección',
    inputZipCode: 'Ingrese el código postal',
    userNameExist: 'El nombre de usuario ya existe',
    emailExist: 'El correo electrónico ya existe',
    emailNotExist: 'El correo electrónico no existe',
    isAudit: 'Confirme que es mayor de edad y acepta la política de privacidad',
    isAgree: 'Lea y acepte la información relacionada con las actividades de mercado',
    regSuccess: 'Registro exitoso',
    regFail: 'Fallo en el registro',
    loginSuccess: 'Inicio de sesión exitoso',
    sendSuccess: 'Envío exitoso',
    resetSuccess: 'Restablecimiento de contraseña exitoso, vuelva a iniciar sesión',
    resetFail: 'Fallo en el restablecimiento de contraseña',
    sendFail: 'Fallo en el envío',
    editUserInfoSuccess: 'Información de usuario editada con éxito',
    inputNewPwd: 'Ingrese la nueva contraseña',
    isNewPwd: 'La nueva contraseña debe tener entre 6 y 16 caracteres y contener números o letras',
    inputOldPwd: 'Ingrese la contraseña anterior',
    isOldPwd: 'La contraseña anterior debe tener entre 6 y 16 caracteres y contener números o letras',
    editPwdSuccess: 'Contraseña cambiada con éxito, vuelva a iniciar sesión',
    bindGoogleSuccess: 'Código de autenticación de Google vinculado con éxito',
    logoutSuccess: 'Cierre de sesión exitoso',
    setSuccess: 'Configuración exitosa',
    inputWithdrawAmount: 'Ingrese el monto a retirar',
    overMaxWithdrawAmount: 'El monto a retirar no puede ser mayor que el saldo',
    underMinWithdrawAmount: 'El monto a retirar debe ser mayor que el monto mínimo',
    inputWithdrawAddress: 'Ingrese la dirección de retiro',
    withdrawSuccess: 'Solicitud de retiro exitosa',
    withdrawFail: 'Fallo en la solicitud de retiro',
    receivedRewardSuccess: 'Recompensa recibida con éxito',
    receivedRewardFail: 'Fallo al recibir la recompensa',
    noLogin: 'Aún no ha iniciado sesión',
    goLogin: 'Ir al inicio de sesión ahora',
    invalidThirdUser: 'Fallo en la verificación del usuario de terceros',
    authFail: 'Fallo en la autorización',
    copySuccess: 'Copia exitosa',
    copyFail: 'Este navegador no admite la copia automática, copie manualmente',
    inputExhangeCode: 'Ingrese el código de intercambio',
    startGameFail: 'Fallo al iniciar el juego',
    insufficientPoints: '积分不足',
    exhangeSuccess: '兑换成功',
    openWindow: '即将为您打开窗口进行游戏，祝您游戏愉快',
    openExchange: '即将为您打开窗口进入交易所',
    unBindGoogleSuccess: '解绑成功',
    openExplorer: '即将为您打开窗口查询交易',

    inputTrueName: '请输入姓名',
    selectDocType: '点击选择证件类型',
    inputDocType: '请选择证件类型',
    inputDdocNumber: '请输入证件号码',
    airlineCompany: '请输入航空公司',
    inputDeparture: '请输入出发地',
    inputDestination: '请输入目的地',
    inputHotelName: '请输入酒店名称',
    inputCity: '请输入酒店所在城市',
    inputCountry: '请输入酒店所在国家',
    inputRoomNum: '请输入酒店房间数量',
    inputInRoomDay: '请输入入住天数',
    betHolder: '投注时间',
    inputBetTime: '请选择投注时间',
    inputOrderId: '请输入注单号码',
    orderNoholder: "注单号码，多个请用'，'隔开",
    applySuccess: '申请成功',
    applyFail: '申请失败'
  },

  rewardsBig: 'Recompensas',
  myStats: 'Mis Estadísticas',
  exclusiveRewards: 'Recompensas Exclusivas',
  quickBuys: 'Compras Rápidas',
  earned: 'Ganado',
  spent: 'Gastado',
  pointsHistory: 'Historial de Puntos',
  earnPointsAndTrack: 'Gane puntos y haga un seguimiento de ellos',
  viewPointsRecord: 'Ver todos los registros de consumo de puntos',
  buyNow: 'Comprar Ahora',
  youWillGet: 'Usted recibirá',
  bonusValue: 'Valor del Bono',
  wageringRequirement: 'Requisito de Apuesta',
  enableVisible: 'Habilitar Modo Invisible',
  hiddenYourBet: 'Sus apuestas no aparecerán en las actividades públicas ni en las vistas previas de apuestas',
  startNow: 'Iniciar Ahora',
  withdrawStatus: { 1: '处理中', 2: '成功', 3: '失败' },
  time: '时间',
  betAmount: '投注金额',
  support2: '支持',
  btiSportIntro: '多年体育平台运营经验，Seabet体育博彩平台为玩家提供身临其境、优化的体育博彩游戏体验。',
  sabaSportIntro: '经过近二十年的多方证实，沙巴体育平台提供广泛的体育赛事、多种创新投注类型、业界最佳赔率。',
  fundRecord: '账变记录',
  categoryFilter: '按分类筛选',
  fundCategory: {
    1: '存款',
    2: '提款',
    3: '投注',
    4: '结算',
    5: '管理员加款',
    6: '管理员扣款',
    7: '促销活动赠送',
    8: '退款',
    9: 'VIP升级奖励',
    10: '兑换筹码',
    17: '提款失败'
  },
  beforeBalance: '账变前余额',
  afterBalance: '账变后余额',
  tradeDetails: '交易详情',
  tradeNo: '订单号',
  orderStatus: '订单状态',
  orderType: '订单类型',
  orderTypes: { 1: '存款', 2: '提现', 3: '投注', 4: '奖金' },
  blockChain: '链',
  betAndEarn: '下注 & 赢取',
  placeAndEarn: '投注 & 赢取',
  spinAndEarn: '旋转 & 赢取',
  enabledGoogle: '谷歌身份验证器已启用',
  stopGoogle: '谷歌身份验证器已启用, 如果想关闭此功能, 请使输入谷歌验证码后点击"提交代码"关闭。',
  unlockNewReward: '新奖励已解锁！',
  unlockNewRewardTip: '恭喜您！ 刚刚解锁了新奖励。点击此处选择您的奖励类型',
  dymondReward: '当您达到该等级时，将会自动生成奖励',
  siteTitle: '最领先的加密货币赌场及体育博彩平台',
  unlockAllReward: '恭喜您！ 解锁了全部奖励',
  newGame: '新游戏',
  oneDay: '24小时',
  week: '周',
  moreGame: '更多游戏',
  question: '常见问题',
  status: '状态',
  tradeCode: '交易代码',
  copyTradeCode: '复制交易代码',
  realName: '姓名',
  sex: '性别',
  male: '男',
  female: '女',
  documentType: '证件类型',
  documentNumber: '证件号码',
  airlineCompany: '航空公司',
  placeOfDeparture: '出发地',
  destination: '目的地',
  onewayOrRoundtrip: '是否往返',
  oneway: '单程',
  roundtrip: '往返',
  engineroomType: '机舱类型',
  economyClass: '经济舱',
  businessClass: '商务舱',
  firstClass: '头等舱',
  submit: '提交',
  hotelName: '酒店名称',
  city: '城市',
  roomType: '房间类型',
  presidentialSuite: '总统套房',
  luxurySuite: '豪华套房',
  businessSuite: '商务套房',
  roomNum: '房间数量',
  roomDay: '入住天数',
  otherService: '其他服务',
  idCard: '身份证',
  passport: '护照',
  militaryId: '军官证',
  diplomaticCard: '护照',
  moonpayExchange: '使用借记卡/信用卡购买加密货币',
  learnMore: 'Learn More',
  comingSoon: '即将开放...',
  affiliate: '联盟计划',
  rewardActivities: '奖励活动',
  rewardRecords: '奖励记录',
  applyPromo: '申请奖励',
  rewardStatus: { 0: '处理中', 1: '通过', 2: '拒绝' },
  betTime: '投注时间',
  betOrderNo: '注单号码',
  startEarning: '开始赚取',
  historyType: '类型',
  rewardName: '奖励名称',
  startTime: '开始时间',
  endTime: '结束时间',
  minMaxBet: '最小-最大投注',
  volatility: '波动性',
  volatilitys: { 1: '低', 2: '中低', 3: '中', 4: '中高', 5: '高', 6: '非常高', 7: '非常低' },
  myPoints: '我的积分',
  backPromo: '返回促销',
  noSupportFullScreen: '当前浏览器不支持全屏',
  pointsExchange: '积分兑换',
  view: '详情',
  oprate: '查看',
  remain: '剩余',

  problem: {
    whatVip: '1.¿Qué es el Club VIP?',
    whatVips: `<p>El Club VIP de seabet.io es una comunidad exclusiva abierta a los clientes que utilizan criptomonedas, que les permite disfrutar de todas las actividades promocionales disponibles en el sitio web en cualquier momento. Cada apuesta, giro y juego que realices acumulará puntos, lo que te permitirá subir de nivel gradualmente en el club y desbloquear emocionantes recompensas en el camino. A medida que desbloquees niveles VIP, también ganarás puntos de apuesta de Seabet, lo que te proporcionará experiencias y servicios aún más gratificantes.</p>
                <p>En términos sencillos, significa: Tú juegas y nosotros te recompensamos.</p>`,
    howGetIntegrial: '2.Cómo ganar puntos？',
    howGetIntegrials: `Ganas puntos del club con cada apuesta que realices, cada giro de la máquina tragamonedas y cada juego de mesa en el que participes. Cuantos más puntos acumules, mayor será tu nivel. A medida que avances en los rangos, desbloquearás una variedad de recompensas emocionantes. Las recompensas irán mejorando a medida que sigas desbloqueando nuevos niveles.`,
    whatVipLevel: '3.¿Qué son los niveles VIP?',
    whatVipLevels: `<p>Los niveles VIP determinan el valor y el tipo de recompensas que puedes reclamar. A medida que avanzas en el club y subes de nivel, tus recompensas también aumentarán.</p>
                      <table>
                      <tr>
                        <th>Nivel VIP</th>
                        <th>Cantidad de Apuesta Requerida</th>
                        <th>Frecuencia</th>
                      </tr>
                      <tr>
                        <td>Bronce</td>
                        <td>100</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>Plata</td>
                        <td>500</td>
                        <td>5</td>
                      </tr>
                      <tr>
                        <td>Oro</td>
                        <td>15000</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>Platino</td>
                        <td>300,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Titanio</td>
                        <td>1,900,000</td>
                        <td>10</td>
                      </tr>
                      <tr>
                        <td>Diamante</td>
                        <td>6,000,000</td>
                        <td>6</td>
                      </tr>
                    </table>`,
    howComputeInterial: '4.¿Cómo se calculan los puntos?',
    howComputeInterials: `<pYa sea en apuestas deportivas o jugando juegos de casino, el uso de criptomonedas te permitirá ganar puntos. Para calcular los puntos que ganas con cada apuesta, convertimos la cantidad de tu apuesta a USDT utilizando la tasa de cambio de mercado en tiempo real durante la liquidación. Esto asegura que todas las acumulaciones de puntos, independientemente de la criptomoneda utilizada, sean justas. Debido a las fluctuaciones en las tasas de conversión, seguimos el principio de redondear al número entero más cercano al calcular los puntos.</p>
                          <p>La fórmula para ganar puntos Seabet es: Cantidad apostada por el jugador * 0.1 * coeficiente de puntos del nivel correspondiente. Por ejemplo, si un jugador está en el nivel Platino y apuesta 5000, según la fórmula de cálculo de puntos, el jugador ganará 5000 * 0.01 * 1.3 = 65 puntos. Los puntos Seabet tienen una amplia variedad de usos, y los jugadores pueden canjear regalos y servicios equivalentes en la tienda de puntos.</p>`,
    whyMergedReward: '5.¿Por qué se combinan mis recompensas?',
    whyMergedRewards: `<p>Tus recompensas se combinan porque una sola apuesta puede desbloquear múltiples recompensas. Para hacértelo más conveniente, sumamos el valor de las recompensas y las mostramos como una única recompensa.</p>`,
    resetVip: '6.¿Cuándo se reiniciará mi nivel VIP?',
    resetVips: `<p>Tu nivel VIP se reiniciará a 0 al comienzo de cada mes. Luego podrás comenzar nuevamente desde el nivel Bronce y reclamar todas las recompensas del siguiente nivel. Tus puntos acumulados seguirán conservándose para que puedas canjear más recompensas y servicios.</p>`,
    everyGetInterial: '7.¿Puedo ganar puntos del club con cada apuesta?',
    everyGetInterials: `<p>No, los puntos del club solo se acumulan al realizar apuestas con dinero real. Además, ciertas categorías de eventos y juegos no están incluidas en el club, por lo que las apuestas realizadas en ellas no te otorgarán puntos. Estas categorías incluyen:</p>
                        <p>Carreras de caballos</p>
                        <p>Deportes electrónicos</p>
                        <p>Masters de apuestas deportivas</p>
                        <p>Además, los siguientes juegos de casino tampoco están incluidos en el club y las apuestas realizadas en ellos no te otorgarán puntos.</p>
                        <p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Asia Gaming - Fish Hunter</p>`
  },
  faqs: {
    q1: '¿Cómo hago un depósito?<',
    a1: `<p>1. Selecciona la criptomoneda de tu elección, luego haz clic en Depositar.</p>
        <p>2. Copia la dirección de depósito único y utilícela en tu billetera (o escanee el código QR).</p>
        <p>3. Una vez que se confirme tu transacción, recibirá una notificación.</p>`,
    q2: '¿Cómo hago un retiro?',
    a2: `<p>1. Elige la criptomoneda que te gustaría retirar, luego haz clic en Retirar.</p>
        <p>2. Ingresa la cantidad que deseas retirar.</p>
        <p>3. Ingresa la dirección de tu billetera.</p>
        <p>4. Haz clic en el botón Retirar.</p>`,
    q3: '¿Cuánto tardan los depósitos/retiros?',
    a3: `<p>La mayoría de los depósitos criptográficos se procesan a la velocidad del rayo. Sin embargo, puede haber algunos retrasos de los servicios de terceros. Para los depósitos de BTCXE, tu transacción puede tardar hasta 30 minutos en procesarse debido al tiempo necesario para la conversión de fondos fiduciarios a BTC.</p>
        <p>Retiro</p>
        <p>La mayoría de los retiros se procesan instantáneamente. En el caso de grandes retiros, procesamos estos retiros manualmente, por lo que puede haber un ligero retraso.</p>`,
    q4: '¿Qué monedas y métodos de pago ofrecen?',
    a4: `Las opciones de moneda disponibles en seabet.io son:
          <p>• @:currencyLang.usdt </p>
          <p>• @:currencyLang.btc </p>
          <p>• @:currencyLang.eth </p>
          <p>• @:currencyLang.usdt </p>
          <p>• @:currencyLang.busd </p>
          <p>• @:currencyLang.trx </p>
          <p>• @:currencyLang.xrp </p>
          <p>• @:currencyLang.bnb </p>
          <p>• @:currencyLang.ltc </p>
          <p>• @:currencyLang.ada </p>
          <p>• @:currencyLang.doge </p>
          <p>• @:currencyLang.ton </p>`,
    q5: '¿Aplican comisiones en las transacciones?',
    a5: `<p>Si bien no aplicamos ninguna tarifa de transacción para depósitos y retiros en Sportsbet.io, puede haber tarifas de transacción que deba pagar al usar la cadena de bloques y/o su banco.</p>`,
    q6: '',
    a6: ``,
    q7: '',
    a7: ``,
    q8: '',
    a8: ``,
    q9: '',
    a9: ``,
    q10: '',
    a10: ``
  },

  errorCodes: {
    1001: '记录不存在',
    1002: '活动已关闭',
    1003: '数据已存在',
    1004: '数据错误',
    1005: '参数错误',
    1006: '您未达到领取要求',
    1007: '您今日已提交过该优惠申请',
    1008: '优惠活动已过期',
    1009: '您已领取过此优惠',
    1010: '没有符合要求的存款订单',
    1011: '存款金额未达到领取要求',
    1012: '谷歌验证码错误',
    1013: '还需要完成 { data } USD有效投注才能提款',
    1014: '用户名已存在',
    1015: '手机号码已存在',
    1016: '邮箱地址已存在',
    1017: '用户名格式错误',
    1018: '密码格式错误',
    1019: '验证码错误',
    1020: '系统繁忙，请稍后再试',
    1021: '签名错误',
    1022: '您的账号已被停用，请联系客服',
    1023: '用户名或密码错误',
    1024: '账号已被锁定',
    1025: 'Google验证器已绑定',
    1026: '未绑定Google验证器',
    1027: '当前密码错误',
    1028: '邮箱地址格式错误',
    1029: '邮件发送失败',
    1030: '商品数量不足',
    1031: '可用积分不足',
    1101: '可用余额不足',
    1032: '为确保您的资金安全，当您修改密码后， 24小时内您将无法进行提款操作。'
  },

  // Términos y Contenidos HTML
  html: {
    // Títulos HTML
    vipTitle: 'Club VIP',
    rulesTitle: 'Reglas y Términos',
    responsibleTitle: 'Juego Responsable',
    amlTitle: 'Política de Prevención de Lavado de Dinero',
    selfExclusionTitle: 'Autoexclusión',
    privacyTitle: 'Política de Privacidad',
    fairnessTitle: 'Equidad',

    // Contenido HTML
    vipContent: `<div class="vip-clubhouse-box">
                  <div class="vc-rows">
                    <div class="vr-title">1、VIP Club Introduction</div>
                    <div class="vr-conts">
                      <p>Welcome to the ${site_name} VIP Club!</p>
                      <p>At ${site_name}, we are committed to enhancing the quality of gaming and providing the best gaming experience. We are excited to introduce our brand new VIP Club, designed to reward our loyal members who spend time playing games on our website.</p>
                      <p>Simply place bets on any game or sports event provided by ${site_name} to unlock exclusive rewards as you climb through the ranks.</p>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">2、Personalized Service</div>
                    <div class="vr-conts">
                      <p>Professional Customer Manager Team Ensures All Your Needs and Meets Industry's Highest Standards. VIP members can enjoy exclusive bonuses, invitations to renowned events, and a variety of customized rewards to provide you with fast, enjoyable, and efficient gaming experiences.</p>
                      <dl>
                        <dt>VIP Exclusive Manager：</dt>
                        <dd>Devoted to addressing your needs</dd>
                        <dd>Tailored private gaming experiences just for you</dd>
                      </dl>
                      <dl>
                        <dt>High Rewards：</dt>
                        <dd>Exclusive offers designed for you</dd>
                        <dd>No-wager bonuses</dd>
                        <dd>Rapid accumulation of points</dd>
                      </dl>
                      <dl>
                        <dt>Industry's Highest Betting Limits：</dt>
                        <dd>Unlimited daily deposits and withdrawals with cryptocurrencies</dd>
                      </dl>
                      <dl>
                        <dt>VIP Exclusive Promotions：</dt>
                        <dd>Distinguished from regular member promotions</dd>
                        <dd>Preserve the best gaming experience for you</dd>
                        <dd>Exclusive to VIP users</dd>
                        <dd>Personalized offers</dd>
                        <dd>Customized entertainment services exclusively for you</dd>
                      </dl>
                      <dl>
                        <dt>24/7 Priority Service：</dt>
                        <dd>No need to queue or wait</dd>
                        <dd>Your needs are our top priority</dd>
                        <dd>Multiple social media contact methods, dedicated customer managers providing online services.</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">3、Level Structure</div>
                    <div class="vr-conts">
                      <p>Six VIP levels that comprehensively cover your entire gaming journey:</p>
                      <dl>
                        <dd>Bronze: Bronze 1</dd>
                        <dd>Silver: Silver 1 - Silver 5</dd>
                        <dd>Gold: Gold 1 - Gold 8</dd>
                        <dd>Platinum: Platinum 1 - Platinum 10</dd>
                        <dd>Titanium: Titanium 1 - Titanium 10</dd>
                        <dd>Diamond: Diamond 1 - Diamond 6</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">4、Benefits for VIP Club Members</div>
                    <div class="vr-conts">
                      <dl>
                        <dd>Boost Bonuses: You can earn bonuses based on your weekly and monthly gaming volume. The more you play, the more bonuses you receive.</dd>
                        <dd>Recent Game Performance Bonus: Having a streak of bad luck? ${site_name} will provide additional funds based on your losses every time you level up.</dd>
                        <dd>Level Up Bonuses: Receive bonuses upon reaching the next level. The higher the level you achieve, the greater the bonus.</dd>
                        <dd>Customized Exclusive Offers: Not interested in regular promotions? No problem. Once you reach the corresponding VIP level, we will specially tailor offers based on your interests, exclusively for you</dd>
                        <dd>Personalized Entertainment Experience: Whether it's major sports events, concerts, music shows, or a luxurious trip, as a senior VIP member, all your personal expenses will be covered by the trusted ${site_name}, and we will arrange your itinerary.</dd>
                        <dd>Exclusive VIP Service: You will be assigned a dedicated VIP service representative who will support and meet your betting needs</dd>
                        <dd>Faster Points Accumulation: VIP levels earn points at a faster rate compared to regular members. Higher levels earn more points, leading to a wider range of prizes for redemption.</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">5、How to Become a VIP Member</div>
                    <div class="vr-conts">
                      <p>How to become a VIP member of ${site_name}'s VIP Club:</p>
                      <dl>
                        <dd>
                          Keep Betting: The key to becoming a VIP is consistently placing bets on various sports events and casino games. ${site_name} rewards your consistency. As a top cryptocurrency gambling site, regularly use your digital assets to place bets on any sports events and casino games offered by ${site_name}. You can also try betting with USDT and continue using your funds
                        </dd>
                        <dd>
                          Participate in Regular Events: ${site_name}'s promotional activities include various events and competitions that you can participate in at any time. Regular participation in any of these events will increase your chances of receiving an invitation to the VIP Club. Moreover, you can be more active in other club features offered by ${site_name}.
                        </dd>
                        <dd>
                          Await the Invitation: The final thing you need to do is wait for us to send you an invitation. Continue playing games and participating in high roller events. After a few rounds of casino gambling and sports betting, once you are deemed worthy of becoming a VIP Club member, you will receive an invitation immediately.
                        </dd>
                        <dd>
                          Experience the Luxury Life as a ${site_name} VIP: Take your USDT gambling experience to a whole new level while enjoying top-notch privileges as a ${site_name} VIP Club member. As a valued player, you'll experience the best fun, fast, and fair betting when engaging in sports betting and casino games.
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>`,
    rulesContent: ``,
    responsibleContent: ``,
    amlContent: `<div>
                  <h3>Declaración contra el lavado de dinero y el financiamiento del terrorismo</h3>
                  <h4>1. Modelo de negocio de la empresa</h4>
                  <p>Seabet actualmente brinda soporte a sus usuarios en más de 169 países alrededor del mundo. Como parte de sus operaciones globales, Seabet ha implementado medidas de cumplimiento diseñadas para prevenir y detectar actividades ilegales en su plataforma. Estas incluyen la incorporación y evaluación de cumplimiento para sus clientes, así como controles basados en transacciones.</p>
                  <h4>2. Declaración de política de la empresa</h4>
                  <p>Seabet prohíbe y rechaza explícitamente el uso de sus productos para cualquier forma de actividad ilegal, incluyendo el lavado de dinero, el financiamiento del terrorismo o violaciones de sanciones comerciales, de acuerdo con las leyes, regulaciones y directrices nacionales contra el lavado de dinero (AML). Seabet sigue monitoreando los parámetros establecidos por el Grupo de Acción Financiera Internacional (GAFI) y otras organizaciones comerciales de juegos, así como la Comisión de Control de Juegos de Curazao, y tomará las medidas que considere apropiadas para reflejar los cambios en la legislación. Seabet tiene la intención de seguir las mejores prácticas globales y evitar que sus productos sean utilizados para facilitar tales actividades. Estas mejores prácticas incluyen:</p>
                  <ul>
                      <li>Adoptar políticas escritas, procedimientos y controles razonablemente diseñados para prevenir el lavado de dinero, el financiamiento del terrorismo y las violaciones de sanciones comerciales;</li>
                      <li>Designar, cuando corresponda, a un oficial de cumplimiento para supervisar la implementación de políticas, procedimientos y controles;</li>
                      <li>Proporcionar educación y capacitación relevante al personal pertinente;</li>
                      <li>Realizar revisiones independientes, monitoreo y mantenimiento de políticas, procedimientos y controles.</li>
                  </ul>
                  <h4>3. Definiciones</h4>
                  <p>Los siguientes términos definitorios son ampliamente utilizados en la industria:</p>
                  <p>- Lavado de dinero: El proceso de hacer que las ganancias obtenidas ilegalmente parezcan legítimas. Este proceso generalmente implica tres etapas: colocación, estratificación e integración.</p>
                  <p>- Colocación: El acto de depositar fondos ilegales en una institución financiera tradicional;</p>
                  <p>- Estratificación: El proceso de separar los productos de actividades delictivas de su origen mediante el uso de transacciones financieras complejas, como la conversión de efectivo en cheques de viaje, giros postales, transferencias electrónicas, cartas de crédito, adquisición de acciones, bonos o bienes raíces;</p>
                  <p>- Integración: El uso de transacciones aparentemente legítimas para mezclar fondos ilícitos con recursos legales, con el fin de reintroducirlos en el sistema financiero legal;</p>
                  <p>- Actividad sospechosa: Actividad realizada por un usuario o no usuario que utiliza la institución financiera donde existen indicios de que la transacción puede estar motivada por fraude o actividades ilegales;</p>
                  <p>- Sanciones: Medidas adoptadas por la comunidad internacional para prohibir o restringir ciertas actividades. Se utilizan para alentar un cambio de comportamiento, presionar a un país objetivo para que cumpla con los objetivos establecidos, como una herramienta de aplicación de la ley cuando se amenaza la paz y seguridad internacionales y han fallado los esfuerzos diplomáticos, así como prevenir y combatir el financiamiento del terrorismo o actos terroristas.</p>
                  <h4>4. Gobernanza y supervisión</h4>
                  <p>Seabet ha designado a un Director de Cumplimiento (CCO) para coordinar la implementación de las políticas y programas de AML. Las responsabilidades del Director de Cumplimiento también incluyen el desarrollo de planes AML, trabajar con otras partes interesadas para revisar las políticas de AML, evaluar nuevos requisitos regulatorios e investigar posibles actividades sospechosas o inusuales. Seabet también proporciona regularmente capacitación en AML a todos sus empleados.</p>
                  <h4>5. Educación y formación</h4>
                  <p>Seabet, con la asistencia de su asesor legal y bajo la supervisión de su CCO, puede proporcionar capacitación periódica en cumplimiento de AML, financiamiento del terrorismo y sanciones comerciales a sus empleados según sea necesario.</p>
                  <h4>6. Informes</h4>
                  <p>Seabet está obligado a informar cualquier transacción inusual o sospechosa de acuerdo con los decretos nacionales. Los clientes identificados en listas de sanciones relacionadas con el lavado de dinero, financiamiento del terrorismo u otras actividades delictivas, serán reportados al regulador como actividad sospechosa.</p>
              </div>`,
    selfExclusionContent: ``,
    privacyContent: ``,
    fairnessContent: ``
  }
}
