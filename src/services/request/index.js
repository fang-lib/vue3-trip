import axios from 'axios'
import { BASE_URL, TIMEOUT } from "@/services/request/config"

class HYRequest{
  constructor(baseUrl, timeout=10000) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: timeout
    })

    // 拦截器
    this.instance.interceptors.request.use(config => {
      // TODO:请求拦截，token处理
      return config
    }, err => {
      return Promise.reject(err)
    })
    this.instance.interceptors.response.use(res => {
      // TODO:状态码的处理
      return res.data
    }, err => {
      return Promise.reject(err)
    })
  }
  request(config){
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
   })
  }
  get(url, config) {
    return this.instance.request({...config, method: 'get'})
  }
  post(url, config) {
    return this.instance.request({...config, method: 'post'})
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)