import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { styled } from '../../../utils/style'

import SideMenu from '../SideMenu'
import UserAccount from '../../molecules/UserAccount'

const Wrapper = styled('div')({
  display: 'flex',
})

const Title = styled(Typography)(theme => ({
  flexGrow: 1,
  marginLeft: theme.spacing.m,
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
