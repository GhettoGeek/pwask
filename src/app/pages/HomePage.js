import React from 'react'
import { useTranslation } from 'react-i18next'
import { Grid } from '@material-ui/core'
import {
  Edit as EditIcon,
} from '@material-ui/icons'
import { styled } from '../../common/utils/style'
import MainTemplate from '../../common/templates/MainTemplate'
import { Header, Hero, Typography } from '../../common/components'
import UserMenuContainer from '../modules/user/containers/UserMenuContainer'

const StyledTypography = styled(Typography)({
  fontSize: '30px',
  fontWeight: 'bold',
})

function HomePage() {
  const { t } = useTranslation()
  const sideMenuItems = [
    {
      label: t('sideMenu.item1'),
      icon: <EditIcon />,
      link: '#',
    },
    {
      label: t('sideMenu.item2'),
      icon: <EditIcon />,
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
          <StyledTypography color="primary" align="center">
            {t('homePage.title')}
          </StyledTypography>
        </Grid>
      </Grid>
      <Hero />
    </MainTemplate>
  )
}

export default HomePage
