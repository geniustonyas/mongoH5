import { request } from '@/utils/axios'
import type * as Affiliate from './types'

// 获取仪表板数据
export function getDashboardApi(data: Affiliate.getDashboardData) {
  return request<Affiliate.getDashboardResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'affiliate/dashboard',
    method: 'post',
    data
  })
}

// 获取成员信息
export function getMemberInfoApi(data: Affiliate.getMemberInfoData) {
  return request<Affiliate.getMemberInfoDataResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'affiliate/memberInfo',
    method: 'post',
    data
  })
}

// 获取佣金报表
export function getCommissionDataApi(data: Affiliate.getCommissionData) {
  return request<Affiliate.getCommissionDataResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'affiliate/commission',
    method: 'post',
    data
  })
}

// 获取财务报表
export function getFinanceDataApi(data: Affiliate.getFinanceData) {
  return request<Affiliate.getFinanceDataResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'affiliate/finance',
    method: 'post',
    data
  })
}

// 额度代存
export function memberDepositApi(data: Affiliate.memberDepositData) {
  return request<anyResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'affiliate/deposit',
    method: 'post',
    data
  })
}

// 代存记录
export function getDepositRecordApi(data: Affiliate.getDepositRecordData) {
  return request<Affiliate.getDepositRecordResp>({
    headers: { 'Content-Type': 'application/json' },
    url: 'affiliate/depositlist',
    method: 'post',
    data
  })
}
