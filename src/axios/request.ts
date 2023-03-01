import instance from './index'
import { type AxiosResponse } from 'axios'
import { type FetchOptions } from './types'
// import qs from 'qs'

const DEFAULT_OPTIONS: FetchOptions = {
  checkDouble: false,
  needToken: true,
  loading: true,
  handleError: true,
  enableCatchNetworkError: true,
  disabledCheckLogout: false,
  jsonType: true,
  isNQS: true,
  headers: {}
}

// Get
// export const get = async (url: string, params: object = {}, configs?: FetchOptions) => {
//   configs = { ...DEFAULT_OPTIONS, ...configs }
//   // 请求参数拼接到url
//   if (Object.keys(params).length !== 0) url = `${url}?${qs.stringify(params)}`
//   return await instance.get(url, { ...configs }).then(
//     (res: AxiosResponse) => {
//       return res
//     },
//     err => {
//       return err
//     }
//   )
// }

// post
export const post = async (url: string, params: object, configs?: FetchOptions) => {
  configs = { ...DEFAULT_OPTIONS, ...configs }
  return await instance.post(url, params, configs).then(
    (res: AxiosResponse) => {
      return res
    },
    err => {
      return err
    }
  )
}

// delete 默认请求参数放到请求体,若要拼接到url,将data替换成params即可
export const deleteAxios = async (url: string, params: object, configs?: FetchOptions) => {
  configs = { ...DEFAULT_OPTIONS, ...configs, data: { ...params } }
  return await instance.delete(url, { ...configs }).then(
    (res: AxiosResponse) => {
      return res
    },
    err => {
      return err
    }
  )
}

// 上传文件数组
export const uploadForm = async (url: string, data: any, configs?: FetchOptions) => {
  configs = { ...DEFAULT_OPTIONS, ...configs } || {}
  configs.method = 'post'
  configs.url = url
  const formData = new FormData()
  Object.keys(data).map(key => {
    formData.append(key, data[key])
  })

  configs.data = formData
  return await instance.request(configs).then(
    (res: AxiosResponse) => {
      return res
    },
    err => {
      return err
    }
  )
}

// get下载附件 application/octet-stream; responseType: 'blob'
export const downLoadAnnex = async (url: string, params: any, configs?: FetchOptions) => {
  configs = { ...DEFAULT_OPTIONS, ...configs } || {}
  configs.method = 'get'
  if (params && Object.keys(params).length) {
    url += '?'
    const searchText: string[] = []
    Object.keys(params).map((p, index) => {
      searchText.push(`${index ? '&' : ''}${p}=${params[p]}`)
    })
    url += searchText.join('')
  }
  configs.url = url
  return await instance.get(url, { ...configs, responseType: 'blob' }).then(
    (res: AxiosResponse) => {
      return res
    },
    err => {
      return err
    }
  )
}
