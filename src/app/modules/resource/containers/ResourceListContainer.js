import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import ResourceList from '../components/ResourceList'
import { Loader } from '../../../../common/components'

function ResourceListContainer({ type, country, city }) {
  const getResources = gql`
    query resourceListByTypeAndCountry {
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

  return (
    <Query query={getResources}>
      {({ loading, error, data }) => {
        if (loading) { return <Loader /> }
        if (error) { return <div>Error :(</div> }

        return (
          <ResourceList items={data.resource} />
        )
      }}
    </Query>
  )
}

ResourceListContainer.propTypes = {
  type: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
}

ResourceListContainer.defaultProps = {
  type: 'Type1',
  country: 'France',
  city: 'Paris',
}

export default ResourceListContainer
