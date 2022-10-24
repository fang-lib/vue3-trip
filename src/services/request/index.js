import axios from 'axios'
import useCommon from "@/stores/modules/common"
import { BASE_URL, TIMEOUT } from "@/services/request/config"

const commonStore = useCommon()

class HYRequest{
  constructor(baseUrl, timeout=10000) {
    this.instance = axios.create({
      baseURL: baseUrl,
      timeout: timeout
    })

    // 拦截器
    this.instance.interceptors.request.use(config => {
      const isShowLoading = config.isShowLoading ?? true
      if(isShowLoading) {
        commonStore.isLoading = true
      }
      // TODO:请求拦截，token处理
      return config
    }, err => {
      return Promise.reject(err)
    })
    this.instance.interceptors.response.use(res => {
      const isShowLoading = res.config.isShowLoading ?? true
      if(isShowLoading) {
        commonStore.isLoading = false
      }
      // TODO:状态码的处理
      return res.data.data
    }, err => {
      const isShowLoading = err.config.isShowLoading ?? true
      if(isShowLoading) {
        commonStore.isLoading = false
      }
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
  get(config) {
    return this.instance.request({...config, method: 'get'})
  }
  post(config) {
    return this.instance.request({...config, method: 'post'})
  }
}

export default new HYRequest(BASE_URL, TIMEOUT)