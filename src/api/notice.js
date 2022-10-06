/**
 * @author MaZiXiao
 * @date 2022-07-21 09:09
 */
import request from '@/utils/request'

const getRoleList = (page) => {
  return request({
    url: '/admin/notice/' + page,
    method: 'get'
  })
}

const delRole = id => {
  return request({
    url: `/admin/notice/${id}/delete`,
    method: 'post'
  })
}
const addRole = (data) => {
  return request({
    url: '/admin/notice',
    method: 'post',
    data
  })
}
const editRole = (id, data) => {
  return request({
    url: '/admin/notice/' + id,
    method: 'post',
    data
  })
}
export default {
  getRoleList,
  delRole,
  addRole,
  editRole
}
