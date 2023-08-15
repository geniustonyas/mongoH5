/** 游戏类型枚举 */
export enum GameType {
  Sports = 1,
  Casino = 2,
  Slots = 3,
  Esports = 4,
  Lottery = 5
}

/** 客户端类型枚举 */
export enum PlatForm {
  Web = 0,
  H5 = 1,
  APP = 2
}

/** 账变记录类型 */
export enum FundCategory {
  Deposit = 1,
  Withdraw = 2,
  Bet = 3,
  Settle = 4,
  AdministratorCharge = 5,
  AdministratorDeduction = 6,
  PromotionalGift = 7,
  Refund = 8,
  VIPRewards = 9,
  ExchangeGoods = 10,
  WithdrawFailure = 17
}
