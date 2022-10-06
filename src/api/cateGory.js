/**
 * @author MaZiXiao
 * @date 2022-07-18 21:08
 */
import request from '@/utils/request'

export const addCateGory = (data) => {
  return request({
    url: '/admin/category',
    method: 'post',
    data
  })
}
export const delCateGory = (id) => {
  return request({
    url: `/admin/category/${id}/delete`,
    method: 'post'
  })
}
export const editCateGory = (data, id) => {
  return request({
    url: `/admin/category/${id}`,
    method: 'post',
    data
  })
}
export const updateStatus = (data, id) => {
  return request({
    url: `/admin/category/${id}/update_status`,
    method: 'post',
    data
  })
}
export const getRecommendedProductList = (id) => {
  return request({
    url: '/admin/app_category_item/list?category_id=' + id,
    method: 'get'
  })
}
export const deleteRecommendedProductList = (id) => {
  return request({
    url: `/admin/app_category_item/${id}/delete`,
    method: 'post'
  })
}
export const addProductAssociation = (data) => {
  return request({
    url: '/admin/app_category_item',
    method: 'post',
    data
  })
}
