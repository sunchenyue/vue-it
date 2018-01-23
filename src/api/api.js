import axios from 'axios'
// 设置请求的基准路径
// axios.defaults.baseURL = 'http://47.96.21.88:8888/api/private/v1/'
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 登陆拦截器
// 拦截器处理token
axios.interceptors.request.use(function (config) {
  // 获取当前是否存在token
  let token = localStorage.getItem('mytoken')
  if (token) {
    // Authorization 请求头的键是前后台约定
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
// params 传入的就是登录表单提交的数据
export const login = (params) => {
  // 再.then 的数据数据返回 params
  return axios.post('login', params).then(res => {
    // 返回具体的数据
    return res.data
  })
}
// 测试请求头
export const testData = (params) => {
  // 再.then 的数据数据返回 params
  return axios.get('users', {params: params}).then(res => {
    // 返回具体的数据传给下一个太狠
    return res.data
  })
}
