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
  sendEmail: 'Send',
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
  currentPoints: 'Monto de Apuesta Actual',
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
  changePwdLimit: 'Para garantizar la seguridad de sus fondos, no podrá realizar retiros a una nueva dirección de billetera dentro de las 24 horas posteriores a la modificación de su contraseña.',
  disabledGoogle: 'Autenticador de Google desactivado',
  activeGoogle: 'Usa el Autenticador de Google para escanear el código QR o ingresar el código para activarlo.',
  whatGoogleCode: '¿Qué es el Autenticador de Google?',
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
  downloadApp: 'Download APP',
  androidApple: 'Android/IOS',
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
  polular: 'Popularidad',
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
    '4': 'Adición del Sistema',
    '5': 'Deducción del Sistema',
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
    insufficientPoints: 'Puntos insuficientes',
    exhangeSuccess: 'Intercambio exitoso',
    openWindow: 'La ventana se abrirá pronto para que juegues. ¡Te deseamos una experiencia de juego feliz!',
    openExchange: 'Está a punto de abrirse una nueva ventana para que ingreses al intercambio.',
    unBindGoogleSuccess: 'Desvinculado con éxito',
    openExplorer: 'La ventana se abrirá para que consultes transacciones.',

    inputTrueName: 'Por favor, ingresa tu nombre',
    selectDocType: 'Haz clic para seleccionar el tipo de documento',
    inputDocType: 'Por favor, selecciona un tipo de documento',
    inputDdocNumber: 'Por favor, ingresa el número de identificación',
    airlineCompany: 'Por favor, ingresa la aerolínea',
    inputDeparture: 'Por favor, ingresa el lugar de partida',
    inputDestination: 'Por favor, ingresa el destino',
    inputHotelName: 'Por favor, ingresa el nombre del hotel',
    inputCity: 'Por favor, ingresa la ciudad donde se encuentra el hotel',
    inputCountry: 'Por favor, ingresa el país donde se encuentra el hotel',
    inputRoomNum: 'Por favor, ingresa el número de habitaciones de hotel',
    inputInRoomDay: 'Por favor, ingresa el número de días de estancia',
    betHolder: 'Hora de la apuesta',
    inputBetTime: 'Por favor, selecciona la hora de la apuesta',
    inputOrderId: 'Por favor, ingresa el número de boleto',
    orderNoholder: "Por favor, utiliza ',' para separar múltiples órdenes de apuesta.",
    applySuccess: 'Solicitud exitosa',
    applyFail: 'Solicitud fallida'
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
  withdrawStatus: { 1: 'Procesando', 2: 'Completado', 3: 'Rechazado' },
  time: 'Tiempo',
  betAmount: 'Cantidad apostad',
  support2: 'Soporte',
  btiSportIntro:
    'Con años de experiencia en la operación de plataformas deportivas, la plataforma de apuestas deportivas Seabet ofrece a los jugadores una experiencia de apuestas deportivas inmersiva y optimizada.',
  sabaSportIntro:
    'Verificado por diversas partes durante casi dos décadas, la plataforma de deportes Saba ofrece una amplia variedad de eventos deportivos, múltiples tipos de apuestas innovadoras y cuotas líderes en la industria.',
  fundRecord: 'Historial de transacciones',
  categoryFilter: 'FILTRAR POR CATEGORÍA',
  fundCategory: {
    1: 'Depósito',
    2: 'Retirada',
    3: 'Apuesta',
    4: 'Liquidación',
    5: 'Depósito del Sistema',
    6: 'Deducción del Sistema',
    7: 'Regalo Promocional',
    8: 'Reembolso',
    9: 'Recompensas VIP',
    10: 'Intercambiar Bienes',
    17: 'Fallo en Retirada'
  },
  beforeBalance: 'Antes del cambio',
  afterBalance: 'Después del cambio',
  tradeDetails: 'Detalles de la transacción',
  tradeNo: 'Número de pedido',
  orderStatus: 'Estado del pedido',
  orderType: 'Tipo de pedido',
  orderTypes: { 1: 'Depósito', 2: 'Retiro', 3: 'Apuesta', 4: 'Ganancia' },
  blockChain: 'Cadena de bloques',
  betAndEarn: 'Apuesta y Gana',
  placeAndEarn: 'Apostar y Ganar',
  spinAndEarn: 'Girar y Ganar',
  enabledGoogle: 'Google Authenticator está habilitado',
  stopGoogle: 'Google Authenticator está habilitado, si desea desactivar esta función, ingrese el código y haga clic en "Enviar código" para cerrar！',
  unlockNewReward: '¡Se han desbloqueado nuevas recompensas!',
  unlockNewRewardTip: '¡Felicidades! Acabas de desbloquear una nueva recompensa. Haga clic aquí para seleccionar su tipo de premio',
  dymondReward: 'Sus recompensas se desbloquearán cuando alcance este nivel',
  siteTitle: 'Mejor sitio de apuestas deportivas y casino de criptomonedas | Apuestas de Bitcoin',
  unlockAllReward: '¡Felicidades! Has desbloqueado todas las recompensas.',
  newGame: 'Nuevo juego',
  oneDay: '24 horas',
  week: 'Semana',
  moreGame: 'Más juegos',
  question: 'Preguntas frecuentes',
  status: 'Estado',
  tradeCode: 'Código de transacción',
  copyTradeCode: 'Copiar código de transacción',
  realName: 'Nombre',
  sex: 'Género',
  male: 'Hombre',
  female: 'Mujer',
  documentType: 'Tipo de documento',
  documentNumber: 'Número de documento',
  airlineCompany: 'Aerolínea',
  placeOfDeparture: 'Lugar de salida',
  destination: 'Destino',
  onewayOrRoundtrip: 'Viaje de ida y vuelta',
  oneway: 'Viaje de ida',
  roundtrip: 'Viaje de ida y vuelta',
  engineroomType: 'Clase de vuelo',
  economyClass: 'Clase económica',
  businessClass: 'Clase ejecutiva',
  firstClass: 'Primera clase',
  submit: 'Enviar',
  hotelName: 'Nombre del hotel',
  city: 'Ciudad',
  roomType: 'Tipo de habitación',
  presidentialSuite: 'Suite Presidencial',
  luxurySuite: 'Suite de lujo',
  businessSuite: 'Suite Ejecutiva',
  roomNum: 'Número de habitaciones',
  roomDay: 'Días de estancia',
  otherService: 'Otros servicios',
  idCard: 'Carné de identidad',
  passport: 'Pasaporte',
  militaryId: 'Carné militar',
  diplomaticCard: 'Pasaporte diplomático',
  moonpayExchange: 'Comprar criptomonedas con tarjeta de crédito/débito',
  learnMore: 'Más información',
  comingSoon: 'próximamente...',
  affiliate: 'Afiliado',
  rewardActivities: 'Actividades de recompensa',
  rewardRecords: 'Registros de recompensa',
  applyPromo: 'Aplicar recompensas',
  rewardStatus: { 0: 'Procesando', 1: 'Aprobado', 2: 'Rechazado' },
  betTime: 'Hora de la apuesta',
  betOrderNo: 'Número de pedido de apuesta',
  startEarning: 'para empezar a ganar',
  historyType: 'Tipo',
  rewardName: 'Nombre de la recompensa',
  startTime: 'Hora de inicio',
  endTime: 'Hora de finalizació',
  minMaxBet: 'Apuesta mínima-máxima',
  volatility: 'Volatilidad',
  volatilitys: { 1: 'Baja', 2: 'Baja-Media', 3: 'Media', 4: 'Media-Alta', 5: 'Alta', 6: 'Muy alta', 7: 'Muy baja' },
  myPoints: 'Mis puntos',
  backPromo: 'Volver a promociones',
  noSupportFullScreen: 'Tu navegador no admite pantalla completa',
  pointsExchange: 'Intercambio',
  view: 'más',
  oprate: 'ver',
  remain: 'Restante',
  directlyLogin: 'O Inicie sesión directamente',
  fastDeposit: 'Depositar ahora',
  demoMode: 'Juego de prueba',
  trueMode: 'Apostar ahora',
  gameStatic: 'Estadísticas del juego',
  receivedSuccess: '{ amount } USDT Recibido exitosamente',
  goTime: 'Hora de salida',
  backTime: 'Hora de llegada',
  inTime: 'Hora de registro en el hotel',
  outTime: 'Hora de salida del hotel',
  sabaSportDesc: {
    0: 'Todos los eventos deportivos',
    1: 'Compatible con todos los dispositivos digitales: iOS, Android, MacOS y Windows',
    2: 'Encriptación de seguridad',
    3: 'Cuotas en tiempo real',
    4: 'Backend independiente'
  },
  seabetSportDesc: {
    0: 'Desarrollado de forma independiente',
    1: 'Las mejores cuotas',
    2: 'Personalizar la interfaz de apuestas',
    3: 'Liquidación precisa',
    4: 'cientos de opciones de apuestas'
  },
  pickDate: 'Seleccionar Fecha',
  inputGotime: 'Por favor, seleccione la hora de salida',
  inputBacktime: 'Por favor, seleccione la hora de regreso',
  inputInTime: 'Por favor, seleccione la hora de check-in',
  inputOutTime: 'Por favor, seleccione la hora de check-out',
  hotelTimeError: 'La hora de check-out no puede ser anterior a la hora de check-in',
  ticketTimeError: 'La hora de regreso no puede ser anterior a la hora de salida',
  countryHolder: 'Código de País',
  numberHolder: 'Número de Teléfono',
  submitInfoSuccess: 'Sus datos se han enviado correctamente',
  back: 'Devolver',
  countryCode: 'Código de país',

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
                          <p>La fórmula para ganar puntos Seabet es: Cantidad apostada por el jugador * 0.01 * coeficiente de puntos del nivel correspondiente. Por ejemplo, si un jugador está en el nivel Platino y apuesta 5000, según la fórmula de cálculo de puntos, el jugador ganará 5000 * 0.01 * 1.3 = 65 puntos. Los puntos Seabet tienen una amplia variedad de usos, y los jugadores pueden canjear regalos y servicios equivalentes en la tienda de puntos.</p>`,
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
    a5: `<p>Si bien no aplicamos ninguna tarifa de transacción para depósitos y retiros en Seabet.io, puede haber tarifas de transacción que deba pagar al usar la cadena de bloques y/o su banco.</p>`
  },

  errorCodes: {
    1001: 'El registro no existe',
    1002: 'La actividad está cerrada',
    1003: 'Los datos ya existen',
    1004: 'Error en los datos',
    1005: 'Error en el parámetro',
    1006: 'No ha cumplido con los requisitos para reclamar',
    1007: 'Ya ha enviado la solicitud de promoción hoy',
    1008: 'La promoción ha expirado',
    1009: 'Ya ha reclamado esta promoción',
    1010: 'No existen órdenes de depósito que cumplan los requisitos',
    1011: 'La cantidad del depósito no cumple con los requisitos para reclamar',
    1012: 'El código de verificación de Google es incorrecto',
    1013: 'Todavía necesita completar {data} USD en apuestas válidas para hacer un retiro',
    1014: 'El nombre de usuario ya existe',
    1015: 'El número de teléfono ya existe',
    1016: 'La dirección de correo electrónico ya existe',
    1017: 'Formato de nombre de usuario incorrecto',
    1018: 'Formato de contraseña incorrecto',
    1019: 'Código de verificación incorrecto',
    1020: 'El sistema está ocupado, por favor inténtelo de nuevo más tarde',
    1021: 'Error de firma',
    1022: 'Su cuenta ha sido deshabilitada, por favor contacte con el servicio de atención al cliente',
    1023: 'Nombre de usuario o contraseña incorrectos',
    1024: 'La cuenta está bloqueada',
    1025: 'La autenticación de Google ya está vinculada',
    1026: 'La autenticación de Google no está vinculada',
    1027: 'La contraseña actual es incorrecta',
    1028: 'Formato incorrecto de dirección de correo electrónico',
    1029: 'Fallo al enviar el correo electrónico',
    1030: 'Cantidad de producto insuficiente',
    1031: 'Puntos disponibles insuficientes',
    1101: 'Saldo disponible insuficiente',
    1032: 'Para garantizar la seguridad de sus fondos, después de cambiar su contraseña, no podrá realizar retiros durante 24 horas.',
    1033: 'El código de verificación por correo electrónico es incorrecto'
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
                    <div class="vr-title">1.Introducción al Club VIP</div>
                    <div class="vr-conts">
                      <p>¡Bienvenido al Club VIP de Seabet!</p>
                      <p>En Seabet, estamos comprometidos a mejorar la calidad del juego y brindar la mejor experiencia de juego. Estamos emocionados de presentar nuestro nuevo Club VIP, diseñado para recompensar a nuestros miembros leales que pasan tiempo jugando en nuestro sitio web.</p>
                      <p>Simplemente realiza apuestas en cualquier juego o evento deportivo proporcionado por Seabet.io para desbloquear recompensas exclusivas a medida que avanzas en los niveles.</p>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">2.Servicio Personalizado</div>
                    <div class="vr-conts">
                      <p>Nuestro equipo profesional de Gerentes de Atención al Cliente se asegura de cubrir todas tus necesidades y cumplir con los más altos estándares de la industria. Los miembros VIP pueden disfrutar de bonificaciones exclusivas, invitaciones a eventos de renombre y una variedad de recompensas personalizadas para brindarte experiencias de juego rápidas, agradables y eficientes.</p>
                      <dl>
                        <dt>VGerente Exclusivo VIP:</dt>
                        <dd>Comprometido en atender tus necesidades</dd>
                        <dd>Experiencias de juego privadas diseñadas especialmente para ti</dd>
                      </dl>
                      <dl>
                        <dt>Recompensas Generosas:</dt>
                        <dd>Ofertas exclusivas diseñadas para ti</dd>
                        <dd>Bonos sin requisito de apuesta</dd>
                        <dd>Acumulación rápida de puntos</dd>
                      </dl>
                      <dl>
                        <dt>Límites de Apuesta Más Altos de la Industria:</dt>
                        <dd>Unlimited daily deposits and withdrawals with cryptocurrencies</dd>
                      </dl>
                      <dl>
                        <dt>Promociones Exclusivas VIP:</dt>
                        <dd>Distinguished from regular member promotions</dd>
                        <dd>Preserve the best gaming experience for you</dd>
                        <dd>Exclusive to VIP users</dd>
                        <dd>Personalized offers</dd>
                        <dd>Customized entertainment services exclusively for you</dd>
                      </dl>
                      <dl>
                        <dt>24/7 Priority Service：</dt>
                        <dd>Sin necesidad de hacer fila ni esperar</dd>
                        <dd>Tus necesidades son nuestra principal prioridad</dd>
                        <dd>Múltiples métodos de contacto en redes sociales, gerentes de atención al cliente dedicados que ofrecen servicios en línea.</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">3.Estructura de Niveles</div>
                    <div class="vr-conts">
                      <p>Seis niveles VIP que cubren de manera integral todo tu viaje de juego:</p>
                      <dl>
                        <dd>Bronce: Bronce 1</dd>
                        <dd>Plata: Plata 1 - Plata 5</dd>
                        <dd>Oro: Oro 1 - Oro 8</dd>
                        <dd>Platino: Platino 1 - Platino 10</dd>
                        <dd>Titanio: Titanio 1 - Titanio 10</dd>
                        <dd>Diamante: Diamante 1 - Diamante 6</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">4.Beneficios para los Miembros del Club VIP</div>
                    <div class="vr-conts">
                      <dl>
                        <dd>Bonificaciones al Subir de Nivel: Recibe bonificaciones al alcanzar el siguiente nivel. Cuanto más alto sea el nivel que alcances, mayor será la bonificación.</dd>
                        <dd>Ofertas Exclusivas Personalizadas: ¿No estás interesado en las promociones regulares? No hay problema. Una vez que llegues al nivel VIP correspondiente, adaptaremos ofertas especialmente diseñadas según tus intereses, exclusivamente para ti.</dd>
                        <dd>Experiencia de Entretenimiento Personalizada: Ya sea en eventos deportivos importantes, conciertos, espectáculos de música o un viaje de lujo, como miembro VIP senior, todos tus gastos personales serán cubiertos por Seabet, y organizaremos tu itinerario.</dd>
                        <dd>Servicio VIP Exclusivo: Se te asignará un representante de servicio VIP dedicado que apoyará y satisfará tus necesidades de apuestas.</dd>
                        <dd>Acumulación más Rápida de Puntos: Los niveles VIP acumulan puntos a una velocidad más rápida en comparación con los miembros regulares. Los niveles más altos acumulan más puntos, lo que conduce a una amplia gama de premios para canjear.</dd>
                      </dl>
                    </div>
                  </div>
                  <div class="vc-rows">
                    <div class="vr-title">5.Cómo Convertirse en Miembro VIP</div>
                    <div class="vr-conts">
                      <p>Cómo convertirse en miembro VIP del Club VIP de Seabet:</p>
                      <dl>
                        <dd>
                        Sigue Apostando: La clave para convertirse en VIP es apostar de manera constante en diversos eventos deportivos y juegos de casino. Seabet recompensa tu consistencia. Como uno de los principales sitios de apuestas con criptomonedas, utiliza regularmente tus activos digitales para realizar apuestas en cualquier evento deportivo y juegos de casino ofrecidos por Seabet. También puedes probar a apostar con USDT y seguir utilizando tus fondos.
                        </dd>
                        <dd>
                        Participa en Eventos Regulares: Las actividades promocionales de Seabet incluyen varios eventos y competiciones en los que puedes participar en cualquier momento. La participación regular en cualquiera de estos eventos aumentará tus posibilidades de recibir una invitación al Club VIP. Además, puedes ser más activo en otras funciones del club ofrecidas por Seabet.
                        </dd>
                        <dd>
                        Espera la Invitación: Lo último que debes hacer es esperar a que te enviemos una invitación. Continúa jugando y participando en eventos de alto nivel. Después de algunas rondas de juegos de casino y apuestas deportivas, una vez que se te considere digno de convertirte en miembro del Club VIP, recibirás una invitación de inmediato.
                        </dd>
                        <dd>
                          Experimenta la Vida de Lujo como VIP de Seabet: Lleva tu experiencia de apuestas con USDT a un nivel completamente nuevo mientras disfrutas de privilegios de primer nivel como miembro del Club VIP de Seabet. Como jugador valorado, experimentarás la mejor diversión, apuestas rápidas y justas al participar en apuestas deportivas y juegos de casino.
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
