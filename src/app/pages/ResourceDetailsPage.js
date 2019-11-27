import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
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
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <ResourceDetailsContainer id={Number(id)} />
        </Grid>
      </Grid>
    </MainTemplate>
  )
}

ResourceDetailsPage.propTypes = {
  match: PropTypes.shape().isRequired,
}

export default ResourceDetailsPage
