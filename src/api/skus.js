/**
 * @author MaZiXiao
 * @date 2022-07-19 19:00
 */
import request from '@/utils/request'

const getSkusList = (page) => {
  return request({
    url: '/admin/skus/' + page,
    method: 'get'
  })
}
const updateStatus = (data, id) => {
  return request({
    url: `admin/skus/${id}/update_status`,
    method: 'post',
    data
  })
}
const deleteSkuList = (data) => {
  return request({
    url: '/admin/skus/delete_all',
    method: 'post',
    data
  })
}
const addSkus = (data) => {
  return request({
    url: '/admin/skus',
    method: 'post',
    data
  })
}
const editSkus = (data, id) => {
  return request({
    url: '/admin/skus/' + id,
    method: 'post',
    data
  })
}
export default {
  getSkusList,
  updateStatus,
  deleteSkuList,
  addSkus,
  editSkus
}
