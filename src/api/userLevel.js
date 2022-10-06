/**
 * @author MaZiXiao
 * @date 2022-07-20 09:59
 */
import request from '@/utils/request'

const getLevelList = (page) => {
  console.log(page, 's')
  return request({
    url: '/admin/user_level/' + page,
    method: 'get'
  })
}
const updateLevelStatus = (id, data) => {
  return request({
    url: `/admin/user_level/${id}/update_status`,
    method: 'post',
    data
  })
}
const addLevel = (data) => {
  return request({
    url: '/admin/user_level',
    method: 'post',
    data
  })
}
const editLevel = (id, data) => {
  return request({
    url: '/admin/user_level/' + id,
    method: 'post',
    data
  })
}
const delLevel = id => {
  return request({
    url: `/admin/user_level/${id}/delete`,
    method: 'post'
  })
}
export default {
  getLevelList,
  updateLevelStatus,
  addLevel,
  editLevel,
  delLevel
}
