import React from 'react'
import { useTranslation } from 'react-i18next'
import Grid from '@material-ui/core/Grid'
import MainTemplate from '../../common/templates/MainTemplate'
import {
  Header, Hero, Icon,
} from '../../common/components'
import UserMenuContainer from '../modules/user/containers/UserMenuContainer'
import ResourceListContainer from '../modules/resource/containers/ResourceListContainer'
import ResourceSearchBoxContainer from '../modules/resource/containers/ResourceSearchBoxContainer'
import config from '../appConfig'

function HomePage() {
  const { t } = useTranslation()
  const sideMenuItems = [
    {
      label: t('sideMenu.item1'),
      icon: <Icon type="material-ui" name="Edit" />,
      link: '#',
    },
    {
      label: t('sideMenu.item2'),
      icon: <Icon type="material-ui" name="Edit" />,
      link: '#',
    },
  ]

  return (
    <MainTemplate
      header={(
        <Header
          title={t('header.title')}
          sideMenuItems={sideMenuItems}
        >
          <UserMenuContainer />
        </Header>
      )}
    >
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12}>
          <Hero backgroundImage={`${config.cloudinary.apiUrl}/ofzmjd.jpg`}>
            <Grid item sm={8} style={{ margin: '0 auto' }}>
              <ResourceSearchBoxContainer />
            </Grid>
          </Hero>
        </Grid>
        <Grid item xs={12}>
          <ResourceListContainer />
        </Grid>
      </Grid>
    </MainTemplate>
  )
}

export default HomePage
