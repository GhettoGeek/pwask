import React from 'react'
import { Query } from 'react-apollo'
import { useResourceContext } from '../resourceContext'
import { getResourcesByIds } from '../resourceService'
import ResourceList from '../components/ResourceList'

function ResourceFavoritesContainer() {
  const [{ favorites }, dispatch] = useResourceContext()

  return (
    <Query query={getResourcesByIds(favorites)}>
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

export default ResourceFavoritesContainer
