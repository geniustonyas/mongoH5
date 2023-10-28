export interface getDashboardData {
  t: number
}
// 仪表板报表数据
export interface getDashboardRespItem {
  members: number
  first: number
  reg: number
  commission: {
    year: number
    month: number
    activePlayers: number
    newPlayers: number
    winlose: number
    network: number
    reward: number
    fee: number
    netWinlose: number
    rate: number
    comm: number
    last: number
    actComm: number
  }
  chart: {
    labels: string[]
    datasets: chartItem[]
  }
}

export interface chartItem {
  label: string
  data: number[]
}

// 获取成员信息数据
export interface getMemberInfoData {
  name: null | string
  startreg: string
  endreg: string
  start: string
  end: string
  bet: null | number | string
  page: number
  pcount: number
}

// 成员信息数据项数组
export interface getMemberInfoRespItem {
  memberUserName: string
  registerTime: string
  memberUserId: number
  lastAccessTime: string
  gameBetAmount: number
  withdrawAmount: number
  depositAmount: number
  memberVip: number
}

// 获取佣金数据
export interface getCommissionData {
  date: string
}

// 获取佣金返回数据项
export interface getCommissionDataRespItem {
  year: number
  month: number
  payTime?: string
  activePlayers: number
  newPlayers: number
  winlose: number
  network: number
  reward: number
  fee: number
  netWinlose: number
  rate: number
  comm: number
  last: number
  actComm: number
}

// 财务报表数据
export interface getFinanceData {
  start: string
  end: string
}

// 财务报表返回数据项
export interface getFinanceDataRespItem {
  deposit: number
  withdraw: number
  reward: number
  fee: number
  winlose: number
  network: number
  netwin: number
}

export type getDashboardResp = ApiResponseData<getDashboardRespItem>
export type getAmountCountChartResp = ApiResponseData<{ items: getMemberInfoRespItem[]; pageIndex: string; pageSize: string; pageCount: string; recordCount: string }>
export type getMemberInfoDataResp = ApiResponseData<{ items: getMemberInfoRespItem[]; page: string; size: string; pages: string; recordCount: string }>
export type getCommissionDataResp = ApiResponseData<getCommissionDataRespItem>
export type getFinanceDataResp = ApiResponseData<getFinanceDataRespItem>
