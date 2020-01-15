import React from 'react'
import MainTemplate from '../../common/templates/MainTemplate'
import { Header } from '../../common/components'
import UserMenuContainer from '../modules/user/containers/UserMenuContainer'
import ResourceFavoritesContainer from '../modules/resource/containers/ResourceFavoritesContainer'
import sideMenuItems from '../sideMenuItems'

function ResourceFavoritesPage() {
  return (
    <MainTemplate
      header={(
        <Header sideMenuItems={sideMenuItems}>
          <UserMenuContainer />
        </Header>
      )}
    >
      <ResourceFavoritesContainer />
    </MainTemplate>
  )
}

export default ResourceFavoritesPage
