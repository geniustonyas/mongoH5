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
    btiports: 'BTI Sports',
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
    inputInRoomDay: '请输入入住天数'
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
  btiSportIntro: '多年体育平台运营经验，BTi体育博彩平台为玩家提供身临其境、优化的体育博彩游戏体验。',
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

  problem: {
    whatVip: 'What is the VIP Club?',
    whatVips: `<p>The seabet.io VIP Club is a dedicated community open to cryptocurrency customers, allowing them to enjoy all the promotional activities available on the website at any time. Every bet, spin, and game you play will accumulate points, gradually leveling up in the club and unlocking exciting rewards along the way. As you unlock VIP levels, you will also earn Seabet betting points, which will provide you with even more rewarding experiences and services.</p>
                <p>In simple terms, it means: You play games, and we reward you.</p>`,
    howGetIntegrial: 'How to Earn Points?',
    howGetIntegrials: `<p>How to Earn Points?</p>
                        <p>You earn club points with every bet, slot machine spin, and table game you play. The more points you collect, the higher your level becomes. As you progress through the ranks, you will unlock a variety of exciting rewards. The rewards will keep getting better as you continue to unlock new levels.</p>
                        <p></p>`,
    whatVipLevel: 'What are VIP Levels?',
    whatVipLevels: `<p>VIP levels determine the value and type of rewards you can claim. As you progress through the club and level up, your rewards will also increase.</p>
                    <p>VIP Level 	Required Bet Amount	Frequency</p>
                    <p>Bronze 	100	1</p>
                    <p>Silver	500	5</p>
                    <p>Gold 	15000	8</p>
                    <p>Platinum 	300,000	10</p>
                    <p>Titanium	1,900,000	10</p>
                    <p>Diamond 	6,000,000	6</p>
                    <p></p>`,
    howComputeInterial: 'How are Points Calculated?',
    howComputeInterials: `<p>Whether it's sports betting or playing casino games, using cryptocurrency will earn you points. To calculate the points you earn with each bet, we convert your bet amount to USDT at the real-time market exchange rate during settlement. This ensures that all point collections, regardless of the cryptocurrency used, are fair. Due to fluctuating conversion rates, we follow the principle of rounding to the nearest whole number when calculating points.</p>
                          <p>The formula for earning Seabet points is: Player's betting amount * 0.1 * corresponding level's point coefficient. For example, if a player is at the Platinum level and bets 5000, according to the point calculation formula, the player will earn 5000 * 0.1 * 1.3 = 650 points. Seabet points have a wide range of uses, and players can redeem equivalent gifts and services from the points store.</p>`,
    whyMergedReward: 'Why are My Rewards Merged?',
    whyMergedRewards: `<p>Your rewards are merged because a single bet may unlock multiple rewards. To make it convenient for you, we add up the value of the rewards and display them as a single reward.</p>`,
    resetVip: 'When will My VIP Level Reset?',
    resetVips: `<p>Your VIP level will reset to 0 at the beginning of each month. You can then start again from the Bronze level and claim all the rewards of the next level. Your accumulated points will still be retained for you to redeem more rewards and services.</p>`,
    everyGetInterial: 'Can I Earn Club Points with Every Bet?',
    everyGetInterials: `<p>No, club points are only accumulated when placing bets with real money. Additionally, certain categories of events and games are not included in the club, so bets placed on them will not earn you points. These categories include:</p>
                        <p>Horse Racing</p>
                        <p>Esports Sports</p>
                        <p>Sportsbook Masters</p>
                        <p>Furthermore, the following casino games are also not included in the club, and bets placed on them will not earn you points.</p>
                        <p></p>
                        <p>OneTouch - Russian Poker</p>
                        <p>Genii - Aces And Faces Video Poker</p>
                        <p>Betsoft - Max Quest: Wrath of Ra 2.0, 21 Burn Blackjack, Jacks or Better BSG, Multihand Bonus Deluxe, Pontoon, Single Deck Blackjack, Split Way Royal, Super 7 Blackjack</p>
                        <p>NetEnt - Blackjack Touch, Blackjack Touch - Single Deck, Jacks or Better Double Up</p>
                        <p>Microgaming - Max Damage, Atlantic City Blackjack Gold, Vegas Strip Blackjack, Vegas Strip Blackjack Gold, Premier Euro Bonus Blackjack Gold, European Blackjack Gold, European Blackjack Redeal Gold, Perfect Pairs European Blackjack Gold, Premier Euro Blackjack Gold, Premier Hi Lo 13 Euro Blackjack Gold, Premier High Streak Euro Blackjack Gold, Big 5 Blackjack Gold, Jacks or Better, Spanish 21 Blackjack Gold, Spanish Blackjack</p>
                        <p>Realistic - Realistic Blackjack, Realistic Hi Lo Blackjack</p>
                        <p>Yggdrasil - Dr. Fortuno Blackjack, Sonya Blackjack</p>
                        <p>Tangente - Joker Poker Kings, Double Bonus Poker</p>
                        <p>Asia Gaming - Fish Hunter</p>
                        <p>Spadegaming - Fishing God, Fishing War</p>
                        <p>Gamatron - Tokyo Kombat</p>`
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
    q4: '¿Es necesario verificar mi cuenta (KYC) para retirar?',
    a4: `<p>Le recomendamos que verifique su cuenta antes de retirar dinero, ya que esto ayuda a evitar posibles problemas con las transacciones en un momento posterior.</p>
        <p>Al registrarse, puede enviar documentos de verificación de cuenta a través de tu perfil.</p>
        <p>Nuestro Equipo de garantía de seguridad del jugador se comunicará con los usuarios más adelante si hay inquietudes con respecto al uso de nuestra plataforma y el origen/destino de los fondos.</p>`,
    q5: '¿Qué monedas y métodos de pago ofrecen?',
    a5: `Las opciones de moneda disponibles en seabet.io son:
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
    q6: '¿Aplican comisiones en las transacciones?',
    a6: `<p>Si bien no aplicamos ninguna tarifa de transacción para depósitos y retiros en Sportsbet.io, puede haber tarifas de transacción que deba pagar al usar la cadena de bloques y/o su banco.</p>`,
    q7: '',
    a7: ``,
    q8: '',
    a8: ``,
    q9: '',
    a9: ``,
    q10: '',
    a10: ``
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
