import axios from 'axios'

const api = {
  init: () => {
    axios.defaults.headers.Accept = 'application/json'
    axios.defaults.headers['Content-Type'] = 'application/json'
  },
  setBaseUrl: (url) => {
    axios.defaults.baseURL = url
  },
  setOrUpdateAccessToken: (token) => {
    axios.defaults.headers.Authorization = `Bearer ${token}`
  },
}

api.request = async ({ method, endpoint, body }) => {
  await api.init()

  const response = await axios[method](endpoint, JSON.stringify(body))

  if (response && response.status === 200) {
    return response.data
  }

  return false
}

['get', 'post', 'put', 'patch'].forEach((method) => {
  api[method] = (endpoint, body = {}) => api.request({ method, endpoint, body })
})

export default api
