/**
 * @author MaZiXiao
 * @date 2022-07-17 13:51
 */

import request from '@/utils/request'

const getStatisticsOne = () => {
  return request({ url: '/admin/statistics1', method: 'GET' })
}
const getStatisticsTwo = () => {
  return request({ url: '/admin/statistics2', method: 'GET' })
}
const getChart = (type) => {
  return request({ url: '/admin/statistics3?type=' + type, method: 'get' })
}
export default {
  getStatisticsOne,
  getStatisticsTwo,
  getChart
}
