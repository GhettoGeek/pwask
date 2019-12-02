import React from 'react'
import PropTypes from 'prop-types'
import MainTemplate from '../../common/templates/MainTemplate'
import { Header } from '../../common/components'
import UserMenuContainer from '../modules/user/containers/UserMenuContainer'
import ResourceDetailsContainer from '../modules/resource/containers/ResourceDetailsContainer'
import sideMenuItems from '../sideMenuItems'

function ResourceDetailsPage({ match }) {
  const { id } = match.params

  return (
    <MainTemplate
      header={(
        <Header sideMenuItems={sideMenuItems}>
          <UserMenuContainer />
        </Header>
      )}
    >
      <ResourceDetailsContainer id={Number(id)} />
    </MainTemplate>
  )
}

ResourceDetailsPage.propTypes = {
  match: PropTypes.shape().isRequired,
}

export default ResourceDetailsPage
