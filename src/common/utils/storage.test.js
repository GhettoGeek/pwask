import storage from './storage'

const data = {
  key1: 'value1',
  key2: 'value2',
}

describe('Storage util', () => {
  it('should set a value', () => {
    const result = storage.set('test', data)

    expect(result).toEqual(data)
  })

  it('should get a value', () => {
    const result = storage.get('test')

    expect(result).toEqual(data)
  })

  it('should set a value with expires', () => {
    const result = storage.set('test2', data, 1000)

    expect(result).toEqual(data)
  })

  it('should get a value with expires', () => {
    const result = storage.get('test2')

    expect(result).toEqual(data)
  })

  it('should remove a value', () => {
    const result = storage.remove('test')

    expect(result).toEqual(undefined)
  })

  it('should return false when localStorage does not exists', () => {
    window.localStorage = false
    window.JSON = false

    const get = storage.get()

    expect(get).toEqual(false)

    const set = storage.set('test', data, 1000)

    expect(set).toEqual(false)
  })
})
