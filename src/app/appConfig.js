import merge from 'lodash/merge'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    auth: {
      domain: '7s4r.eu.auth0.com',
      clientId: 'xsvDr11y4zCl7yCTLtIc95vsFlwajjE5',
    },
    google: {
      apiUrl: 'https://maps.googleapis.com/maps/api/js',
      apiKey: process.env.GOOGLE_API_KEY,
      getDirectionUrl: 'https://maps.google.com/maps?daddr=',
    },
    cloudinary: {
      apiUrl: 'https://res.cloudinary.com/dn8yxt3je/image/upload',
    },
  },
  development: {
    baseUrl: 'https://0.0.0.0:1234',
    apiUrl: 'https://pwa-starter-kit-backend.herokuapp.com/v1/graphql',
  },
  production: {
    baseUrl: 'https://pwask.netlify.com',
    apiUrl: 'https://pwa-starter-kit-backend.herokuapp.com/v1/graphql',
  },
}

export default merge(config.all, config[config.all.env])
