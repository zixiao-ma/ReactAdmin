/**
 * @author MaZiXiao
 * @date 2022-07-17 18:39
 */
import request from '@/utils/request'

export const getClassify = () => {
  return request({ url: '/admin/category', method: 'GET' })
}
export const getGoodsList = (data, page) => {
  return request({
    url: '/admin/goods/' + page,
    method: 'get',
    params: data
  })
}

export const addGoods = (data) => {
  return request({
    url: '/admin/goods',
    method: 'post',
    data
  })
}
export const DeleteProductsInBulk = (data) => {
  return request({
    url: '/admin/goods/delete_all',
    method: 'post',
    data
  })
}
export const apiChangeStatus = (data) => {
  return request({
    url: '/admin/goods/changestatus',
    method: 'post',
    data
  })
}
export const editGoodsInfo = (data, id) => {
  return request({
    url: '/admin/goods/' + id,
    method: 'post',
    data
  })
}
export const editGoodsSkus = (data, id) => {
  return request({
    url: '/admin/goods/updateskus/' + id,
    method: 'post',
    data
  })
}
