import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { getResourceById } from '../resourceService'
import ResourceDetails from '../components/ResourceDetails'

function ResourceDetailsContainer({ id }) {
  return (
    <Query query={getResourceById(id)}>
      {({ loading, error, data }) => (
        <ResourceDetails
          data={data}
          loading={loading}
          error={error}
        />
      )}
    </Query>
  )
}

ResourceDetailsContainer.propTypes = {
  id: PropTypes.number.isRequired,
}

export default ResourceDetailsContainer
