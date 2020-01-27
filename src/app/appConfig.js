const config = {
  env: process.env.NODE_ENV || 'development',
  baseUrl: process.env.BASE_URL,
  apiUrl: process.env.API_URL,
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
}

export default config
