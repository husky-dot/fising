import axios from 'axios'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import { getToken } from '@/utils/auth';

const service = axios.create({
  // baseURL: process.env.BASE_API, // api 的 base_url
  // baseURL: '/mock/api',
  baseURL: '/api',
  timeout: 5000 // 请求超时时间
})

service.interceptors.request.use(config => {
  // Do something before request is sent
  NProgress.start()
  config.headers['X-Page-Url'] = location.href
  config.headers['Authorization'] = getToken()
  getToken
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})

// respone 拦截器
service.interceptors.response.use((response)  => {
  NProgress.done()
  const res = response.data;
  if (res.code !== 20000) {

    // return Promise.reject('error');
  } else {
    return response.data;
  }
}, (error: any) => {
  NProgress.done()
  let resData = error.response.data || {}
  Message({
    message: resData.message || error.message,
    type: 'error',
    duration: 5 * 1000
  })
  return Promise.reject(error)
})

export default service;
