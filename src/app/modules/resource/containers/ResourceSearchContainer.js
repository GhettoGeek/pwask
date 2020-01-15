import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { useResourceContext } from '../resourceContext'
import { getResourcesByType } from '../resourceService'
import ResourceList from '../components/ResourceList'

function ResourceSearchContainer({ type, country, city }) {
  const [{ favorites }, dispatch] = useResourceContext()

  return (
    <Query query={getResourcesByType(type, country, city)}>
      {({ loading, error, data }) => (
        <ResourceList
          items={data && data.resource}
          loading={loading}
          error={error}
          isFavorite={(id) => favorites.includes(id)}
          addToFavorites={(id) => dispatch({ type: 'ADD_FAVORITE', id })}
        />
      )}
    </Query>
  )
}

ResourceSearchContainer.propTypes = {
  type: PropTypes.string,
  country: PropTypes.string,
  city: PropTypes.string,
}

ResourceSearchContainer.defaultProps = {
  type: 'Type1',
  country: 'France',
  city: 'Paris',
}

export default ResourceSearchContainer
