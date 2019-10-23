const storage = {
  set: (key, jsonData, expiration = 0) => {
    if (!window.localStorage || !window.JSON || !key) { return false }

    const record = {
      value: JSON.stringify(jsonData),
      expires: expiration !== 0 ? Date.now() + (expiration * 1000) : 0, // in milliseconds
    }

    localStorage.setItem(key, JSON.stringify(record))

    return jsonData
  },
  get: (key) => {
    if (!window.localStorage || !window.JSON || !key) { return false }

    const item = localStorage.getItem(key)

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
