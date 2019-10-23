import 'regenerator-runtime/runtime'
import * as axios from 'axios'
import api from './api'

jest.mock('axios')
jest.mock('i18next', () => ({
  init: () => {},
  t: (k) => k,
}))

const items = [
  {
    key1: 'value1',
    key2: 'value2',
  },
  {
    key1: 'value1',
    key2: 'value2',
  },
]

describe('API util', () => {
  it('should return false if base url is not set', () => {
    axios.mockResolvedValue({ status: 200, data: { items } })

    return api.get('/catalog/databases').then((response) => {
      expect(response).toEqual(false)
    })
  })

  it('should get a valid response', () => {
    api.setBaseUrl('url.dev')
    axios.mockResolvedValue({ status: 200, data: { items } })

    return api.get('/catalog/databases').then((response) => {
      expect(response.status).toEqual(200)
      expect(response.data).toEqual({ items })
    })
  })

  it('should get an error response', () => {
    api.setBaseUrl('url.dev')
    axios.mockResolvedValue({ status: 500, error: 'Server error' })

    return api.get('/endpoint').then((response) => {
      expect(response.status).toEqual(500)
      expect(response.error).toBeDefined()
    })
  })

  it('should get a not authorized', () => {
    api.setBaseUrl('url.dev')
    axios.mockResolvedValue({ status: 401, error: 'not authorized' })

    return api.get('/endpoint').then((response) => {
      expect(response).toEqual(false)
    })
  })

  it('should reject with an error from server', () => {
    const error = {
      response: {
        data: {
          message: 'Internal Server Error',
        },
      },
    }

    axios.mockImplementation(() => Promise.reject(error))

    return api.get('/endpoint').catch((response) => {
      expect(response).toEqual('Internal Server Error')
    })
  })

  it('should reject with the common message', () => {
    const error = { response: 'error' }

    axios.mockImplementation(() => Promise.reject(error))

    return api.get('/endpoint').catch((response) => {
      expect(response).toEqual('common.error')
    })
  })

  it('should reject with throwing exception', () => {
    const error = {
      response: {
        data: {
          message: 'Internal Server Error',
        },
      },
    }

    axios.mockImplementation(() => Promise.reject(error))

    return api.get('/endpoint', {}, { handleException: false }).catch((response) => {
      expect(response).toEqual(error)
    })
  })
})
