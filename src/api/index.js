import axios from 'axios'

//设置请求的根路径
const baseURL = 'http://www.lovegf.cn:8888/api/private/v1/'
axios.defaults.baseURL = baseURL
//登录验证
export const checkUser = params => {
  return axios.post('login',params).then(res => res.data)
}

axios.interceptors.request.use(function (config) {
  // 取出localStorage中存储的token值
  let token = localStorage.getItem('mytoken')
  // 设置到请求头中 Authorization这个名字是后台规定的
  config.headers['Authorization'] = token
  return config
}, function (error) {
  return Promise.reject(error)
})

//获取用户列表
export const getUserList = params => {
  return axios.get('user',params).then(res => res.data)
}
