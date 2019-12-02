import React from 'react'
import PropTypes from 'prop-types'
import MainTemplate from '../../common/templates/MainTemplate'
import { Header } from '../../common/components'
import UserMenuContainer from '../modules/user/containers/UserMenuContainer'
import ResourceListContainer from '../modules/resource/containers/ResourceListContainer'
import sideMenuItems from '../sideMenuItems'
import { urlUtil } from '../../common/utils'

function ResourceListPage({ match, location }) {
  const { type, country, city } = match.params
  const [coordinates, setCoordinates] = React.useState(null)

  React.useEffect(() => {
    if (location && location.search) {
      const { position } = urlUtil.parseQuery(location.search)

      setCoordinates(position)
    }
  }, [coordinates])

  return (
    <MainTemplate
      header={(
        <Header sideMenuItems={sideMenuItems}>
          <UserMenuContainer />
        </Header>
      )}
    >
      <ResourceListContainer
        type={type}
        country={country}
        city={city}
      />
    </MainTemplate>
  )
}

ResourceListPage.propTypes = {
  match: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
}

export default ResourceListPage
