import _ from 'lodash'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    auth: {
      domain: '7s4r.eu.auth0.com',
      clientId: 'xsvDr11y4zCl7yCTLtIc95vsFlwajjE5',
    },
  },
  development: {
    baseUrl: 'https://0.0.0.0:1234',
    apiUrl: 'https://jsonplaceholder.typicode.com/',
  },
  production: {
    baseUrl: 'https://spa-starter-kit.herokuapp.com',
    apiUrl: 'https://jsonplaceholder.typicode.com/',
  },
}

export default _.merge(config.all, config[config.all.env])
