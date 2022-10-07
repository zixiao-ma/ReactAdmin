import axios from 'axios'
import {message} from 'antd';
import {getItem} from "./storage";
import {TOKEN_KEY} from "./config";
import NProgress from 'nprogress'

const instance = axios.create({
    baseURL: "/dev-api",
    timeout: 20000
})
// 添加请求拦截器

instance.interceptors.request.use(
    function (config) {
        // TODO 添加token
        // loading 可选 全屏loading和加载进度条
        NProgress.start()
        const token = getItem(TOKEN_KEY)
        if (token) config.headers.token = token
        return config
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
    }
)
// 添加响应拦截器
instance.interceptors.response.use(
    function (response) {
        NProgress.done()
        // 对响应数据做点什么
        const {status, data: {data, msg}} = response
        if (status === 200 || msg === 'ok') {
            return data
        }
    },
    function (error) {
        // 对响应错误做点什么
        const msg = error.toString()
        if (msg.includes('NetWork')) {
            message.error('网络错误，请检查您的网络！')
        }
        if (msg.includes('Timeout')) {
            message.error('请求超时，请检查您的网络！')
        }
        console.log(error, 'error')
        const {status} = error?.response || 504
        const messageError = error?.response?.data?.msg
        switch (status) {
            case 400:
                message.error(messageError)
                break
            case 401:
                message.error('Token超时,请重新登录！')
                // TODO token过期处理
                /* store.commit('user/loginOut')
                 router.push({name: 'login'}) */
                break
            case 404:
                message.error('访问接口地址不正确！')
                break
            case 500:
                message.error('服务器发生错误！')
                break
            case 504:
                message.error('服务暂时不可用！')
                break
            case 408:
                message.error('客户端请求超时!')
                break
        }
        return Promise.reject(error)
    }
)

export default instance
