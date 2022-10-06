/**
 * @author MaZiXiao
 * @date 2022-07-21 09:45
 */
import request from '@/utils/request'

const getImageClassList = (page) => {
  return request({
    url: '/admin/image_class/' + page,
    method: 'get'
  })
}

const getImageList = (classID, page) => {
  return request({
    url: `/admin/image_class/${classID}/image/${page}`,
    method: 'get'
  })
}
const deleteImageClass = (id) => {
  return request({
    url: '/admin/image_class/' + id + '/delete',
    method: 'post'
  })
}
const deleteimgAll = (id) => {
  return request({
    url: '/admin/image/delete_all',
    method: 'post',
    data: { ids: [id] }
  })
}
const editImgName = (id, name) => {
  return request({
    url: '/admin/image/' + id,
    method: 'post',
    data: { name }
  })
}
const addClassImg = (data) => {
  return request({
    url: '/admin/image_class',
    method: 'post',
    data
  })
}
const editClassImg = (id, data) => {
  return request({
    url: '/admin/image_class/' + id,
    method: 'post',
    data
  })
}
export default {
  getImageClassList,
  getImageList,
  deleteimgAll,
  deleteImageClass,
  editImgName,
  addClassImg,
  editClassImg
}
