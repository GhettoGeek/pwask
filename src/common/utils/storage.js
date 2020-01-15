const storage = {
  set: (key, value, expiration = 0, scope = '') => {
    if (!window.localStorage || !window.JSON || !key) { return false }

    const record = {
      value: JSON.stringify(value),
      expires: expiration !== 0 ? Date.now() + (expiration * 1000) : 0, // in milliseconds
    }

    localStorage.setItem(`${key}${scope}`, JSON.stringify(record))

    return value
  },
  get: (key, scope = '') => {
    if (!window.localStorage || !window.JSON || !key) { return false }

    const item = localStorage.getItem(`${key}${scope}`)

    if (!item) { return false }

    const record = JSON.parse(item)

    if (record.expires !== 0) {
      return Date.now() < record.expires && JSON.parse(record.value)
    }

    return JSON.parse(record.value)
  },
  remove: (key) => {
    localStorage.removeItem(key)
  },
}

export default storage
