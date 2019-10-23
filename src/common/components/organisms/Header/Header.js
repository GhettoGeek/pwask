import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { styled } from '../../../utils/style'

import SideMenu from '../SideMenu/SideMenu'
import UserAccount from '../../molecules/UserAccount/UserAccount'

const Wrapper = styled('div')({
  display: 'flex',
})

const Title = styled(Typography)((theme) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(2),
}))

const Header = ({ t }) => (
  <Wrapper id="header">
    <AppBar position="static" color="primary">
      <Toolbar>
        <SideMenu />
        <Title
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
        >
          {t('header.title')}
        </Title>
        <UserAccount />
      </Toolbar>
    </AppBar>
  </Wrapper>
)

Header.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(Header)
