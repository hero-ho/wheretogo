import axios from 'axios'
import { Indicator } from 'mint-ui'
/* axios.defaults.baseURL = 'https://hero-ho.github.io/wheretogoShow' */

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  Indicator.open({
    text: '加载中...',
    spinnerType: 'fading-circle'
  })
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export const getIndex = (params) => {
  return axios.get('/static/mock/index.json', params).then((res) => res.data)
}
export const getDetail = (params) => {
  return axios.get('/static/mock/detail.json', params).then((res) => res.data)
}
export const getCity = (params) => {
  return axios.get('/static/mock/city.json', params).then((res) => res.data)
}
