import { gql } from 'apollo-boost'
import { urlUtil } from '../../../common/utils'

export function getResourceById(id) {
  const query = gql`
    query resource {
      resource(where: {
        id: { _eq: "${id}" }
      }) {
        id
        name
        description
        address
        images(limit: 3) {
          url
          title
        }
      }
    }
  `

  return query
}

export function getResourcesByIds(ids) {
  const query = gql`
    query resources {
      resource(where: {
        id: { _in: [${ids}] }
      }) {
        id
        name
        description
        address
        images(limit: 3) {
          url
          title
        }
      }
    }
  `

  return query
}

export function getResourcesByType(type, country, city) {
  const query = gql`
    query resources {
      resource(where: {
        type: { _eq: "${urlUtil.capitalize(type)}" },
        country: { _eq: "${urlUtil.capitalize(country)}" },
        city: { _eq: "${urlUtil.capitalize(city)}" }
      }) {
        id
        name
        description
        address
        images(limit: 3) {
          url
          title
        }
      }
    }
  `

  return query
}
