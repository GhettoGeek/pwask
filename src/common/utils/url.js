export function parseQuery(queryString) {
  const query = {}
  const pairs = ((queryString[0] === '?' || queryString[0] === '#') ? queryString.substr(1) : queryString).split('&')

  for (let i = 0; i < pairs.length; i += 1) {
    const pair = pairs[i].split('=')

    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
  }

  return query
}

export function downloadFromUrl(url, name = 'file.csv') {
  const link = document.createElement('a')

  link.download = name
  link.href = url
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
