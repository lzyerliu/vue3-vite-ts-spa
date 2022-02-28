
/**
 * get url 查询参数
 * @param name 查询的key
 * @returns null | string
 */
const getUrlQueryParam = (name: string) => {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  let r = window.location.search.substring(1).match(reg)
  if (r !== null) {
    return decodeURI(r[2])
  }
  return null
}

/**
 * url中查询参数（含带hash）
 * @returns Object
 */
const getUrlVars = () => {
  let vars: {[key: string]: any} = {}
  let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    // @ts-ignore
    (m: any, key: string, value: string) => {
      vars[key] = <string>value
    }
  )
  return vars
}

export {
  getUrlQueryParam,
  getUrlVars
}
