import { AxiosPromise, AxiosResponse } from 'axios'
import { Interceptors } from './request'

export class HttpServer {
  axios: any
  // get axios 实例
  constructor() {
    this.axios = new Interceptors().getInterceptors()
  }
  // 封装请求方法
  request(config: any): AxiosPromise {
    return new Promise((resolve, reject) => {
      this.axios(config).then((res: AxiosResponse) => {
        resolve(res)
      }).catch((err: any) => {
        reject(err)
      })
    })
  }
}

const http = new HttpServer()

export default http
