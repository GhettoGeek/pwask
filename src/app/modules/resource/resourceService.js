import { gql } from 'apollo-boost'
import { urlUtil } from '../../../common/utils'

export function getResourceById(id) {
  const query = gql`
    query resourceDetails {
      resource(where: {
        id: { _eq: "${id}" }
      }) {
        id
        name
        description
        address
        images {
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
    query resourceList {
      resource(where: {
        type: { _eq: "${urlUtil.capitalize(type)}" },
        country: { _eq: "${urlUtil.capitalize(country)}" },
        city: { _eq: "${urlUtil.capitalize(city)}" }
      }) {
        id
        name
        description
        address
        images {
          url
          title
        }
      }
    }
  `

  return query
}
