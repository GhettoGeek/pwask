import axios from 'axios'
import { t } from 'i18next'
import storage from './storage'

const api = {
  init: async () => {
    const { accessToken } = await storage.get('auth')

    axios.defaults.headers.Accept = 'application/json'
    axios.defaults.headers['Content-Type'] = 'application/json'
    axios.defaults.headers.Authorization = accessToken
  },
  setBaseUrl: (url) => {
    axios.defaults.baseURL = url
  },
  redirectToLoginPage: () => {
    window.location = '/login'

    return false
  },
}

api.request = async ({
  method, endpoint, body, options,
}) => {
  if (axios.defaults.baseURL) {
    await api.init()

    return axios({
      method,
      url: endpoint,
      data: JSON.stringify(body),
    }).then((response) => {
      if (response.status === 401) {
        return api.redirectToLoginPage()
      }

      return response
    }).catch((error) => {
      if (error.response && error.response.status === 401) {
        return api.redirectToLoginPage()
      }

      if (options.handleException) {
        if (error.response && error.response.data) {
          throw error.response.data.message
        } else {
          throw t('common.error')
        }
      }

      if (options.handleException) {
        return false
      }

      throw error
    })
  }

  return false
}

['get', 'post', 'delete', 'put', 'patch'].forEach((method) => {
  api[method] = (endpoint, body = {}, options = { handleException: true }) => api.request({
    method, endpoint, body, options,
  })
})

export default api
