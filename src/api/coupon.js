/**
 * @author MaZiXiao
 * @date 2022-07-20 09:10
 */
import request from '@/utils/request'

const getCouponList = (page) => {
  return request({
    url: '/admin/coupon/' + page,
    method: 'get'
  })
}
const addCoupon = data => {
  return request({
    url: '/admin/coupon',
    method: 'post',
    data
  })
}
const delCoupon = id => {
  return request({
    url: `/admin/coupon/${id}/delete`,
    method: 'post'
  })
}
export default {
  getCouponList,
  addCoupon,
  delCoupon
}
