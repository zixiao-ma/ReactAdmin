/**
 * @author MaZiXiao
 * @date 2022-07-21 09:09
 */
import request from '@/utils/request'

const getRoleList = (page) => {
  return request({
    url: '/admin/role/' + page,
    method: 'get'
  })
}
const updateRoleStatus = (id, data) => {
  return request({
    url: `/admin/role/${id}/update_status`,
    method: 'post',
    data
  })
}
const delRole = id => {
  return request({
    url: `/admin/role/${id}/delete`,
    method: 'post'
  })
}
const addRole = (data) => {
  return request({
    url: '/admin/role',
    method: 'post',
    data
  })
}
const editRole = (id, data) => {
  return request({
    url: '/admin/role/' + id,
    method: 'post',
    data
  })
}
const getRuleTree = () => {
  return request({
    url: '/admin/rule/1',
    method: 'get'
  })
}
const setRuleTree = (id, ids) => {
  return request({
    url: '/admin/role/set_rules',
    method: 'post',
    data: {
      id,
      rule_ids: ids
    }
  })
}
export default {
  getRoleList,
  updateRoleStatus,
  delRole,
  addRole,
  editRole,
  getRuleTree,
  setRuleTree
}
