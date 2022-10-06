/**
 * @author MaZiXiao
 * @date 2022-07-21 08:42
 */
import request from '@/utils/request'

const getManagerList = (page, key) => {
  return request({
    url: '/admin/manager/' + page + '?keyword=' + key,
    method: 'get'
  })
}
const updateManagerStatus = (id, data) => {
  return request({
    url: `/admin/manager/${id}/update_status`,
    method: 'post',
    data
  })
}
const delManage = id => {
  return request({
    url: `/admin/manager/${id}/delete`,
    method: 'post'
  })
}
const addManager = (data) => {
  return request({
    url: '/admin/manager',
    method: 'post',
    data
  })
}
const editManager = (id, data) => {
  return request({
    url: '/admin/manager/' + id,
    method: 'post',
    data
  })
}
export default {
  getManagerList,
  updateManagerStatus,
  delManage,
  addManager,
  editManager
}
