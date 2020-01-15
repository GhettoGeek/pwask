import React from 'react'
import { Grid } from '@material-ui/core'
import MainTemplate from '../../common/templates/MainTemplate'
import {
  Header, Hero,
} from '../../common/components'
import UserMenuContainer from '../modules/user/containers/UserMenuContainer'
import ResourceTopContainer from '../modules/resource/containers/ResourceTopContainer'
import ResourceSearchBoxContainer from '../modules/resource/containers/ResourceSearchBoxContainer'
import config from '../appConfig'
import sideMenuItems from '../sideMenuItems'

function HomePage() {
  return (
    <MainTemplate
      header={(
        <Header sideMenuItems={sideMenuItems}>
          <UserMenuContainer />
        </Header>
      )}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Hero backgroundImage={`${config.cloudinary.apiUrl}/c_scale,w_800/ofzmjd.jpg`}>
            <Grid item sm={8} style={{ margin: '0 auto' }}>
              <ResourceSearchBoxContainer />
            </Grid>
          </Hero>
        </Grid>
        <Grid item xs={12}>
          <ResourceTopContainer />
        </Grid>
      </Grid>
    </MainTemplate>
  )
}

export default HomePage
