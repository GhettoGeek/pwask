import React from 'react'
import PropTypes from 'prop-types'
import MainTemplate from '../../common/templates/MainTemplate'
import { Header } from '../../common/components'
import UserMenuContainer from '../modules/user/containers/UserMenuContainer'
import ResourceSearchContainer from '../modules/resource/containers/ResourceSearchContainer'
import sideMenuItems from '../sideMenuItems'
import { urlUtil } from '../../common/utils'

function ResourceSearchPage({ match, location }) {
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
      <ResourceSearchContainer
        type={type}
        country={country}
        city={city}
      />
    </MainTemplate>
  )
}

ResourceSearchPage.propTypes = {
  match: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
}

export default ResourceSearchPage
