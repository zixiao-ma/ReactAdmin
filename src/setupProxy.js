/**
 * @author MaZiXiao
 * @date 2022-10-06 21:54
 */
//需要采用CommonJS的写法
const {createProxyMiddleware} = require('http-proxy-middleware')
let env = process.env.NODE_ENV
let [baseUrl, baseApi] = ['', '']
if (env === 'development') {
    baseUrl = 'http://shopadmin.dishawang.com/api';
    baseApi = '/dev-api';
} else if (env === 'production') {
    baseUrl = 'http://shopadmin.dishawang.com/api';
    baseApi = '/prod-api';
}
module.exports = function (app) {
    app.use(createProxyMiddleware(baseApi, //遇见/api-elm前缀的请求,就会触发该代理配置
        {
            target: baseUrl, //请求转发给谁（能返回数据的服务器地址）
            changeOrigin: true,  //控制服务器收到的响应头中Host字段的值
            pathRewrite: {['^' + baseApi]: ''} //重写请求路径，保证交给后台服务器是正常地请求地址（必须配置）
        })
    )
}
