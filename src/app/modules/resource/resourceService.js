import { gql } from 'apollo-boost'

export function getResourceById(id) {
  const query = gql`
    query resourceDetails {
      resource(where: {
        id: { _eq: "${id}" }
      }) {
        id
        name
        description
        country
        city
      }
    }
  `

  return query
}

export function getResourcesByType(type, country, city) {
  const query = gql`
    query resourceList {
      resource(where: {
        type: { _eq: "${type}" },
        country: { _eq: "${country}" },
        city: { _eq: "${city}" }
      }) {
        id
        name
        description
      }
    }
  `

  return query
}
