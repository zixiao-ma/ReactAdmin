import request from '../utils/request'

/**
 * login
 * @returns
 */
const login = (data) => {
  return request({ url: '/admin/login', method: 'POST', data })
}
const getUserInfo = () => {
  return request({ url: '/admin/getinfo', method: 'POST' })
}
const logout = () => {
  return request({ url: '/admin/logout', method: 'POST' })
}
export default {
  login,
  getUserInfo,
  logout
}
