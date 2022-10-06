/**
 * @author MaZiXiao
 * @date 2022-07-22 08:36
 */
import request from '@/utils/request'

const getMenuRights = () => {
  return request({
    url: '/admin/rule/1',
    method: 'get'
  })
}
const updateStatus = (id, data) => {
  return request({
    url: '/admin/rule/' + id + '/update_status',
    method: 'post',
    data
  })
}
const deleteRule = id => {
  return request({
    url: '/admin/rule/' + id + '/delete',
    method: 'post'
  })
}
export default {
  getMenuRights,
  updateStatus,
  deleteRule
}
