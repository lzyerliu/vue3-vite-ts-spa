import http from '@/utils/service/axios.ts'
import urls from './api'

/**
 * login
 * @param params 
 * @returns 
 */
const login = async (params?: Object) => {
  return http.request({
    url: urls._login,
    method: 'POST',
    data: params
  })
}

export {
  login
}
