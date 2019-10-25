import React from 'react'
import PropTypes from 'prop-types'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { styled } from '../../utils/style'
import SideMenu from '../SideMenu'

const Wrapper = styled('div')({
  display: 'flex',
})

const Title = styled(Typography)((theme) => ({
  flexGrow: 1,
  marginLeft: theme.spacing(2),
}))

const Header = ({ title, sideMenuItems, children }) => (
  <Wrapper id="header">
    <AppBar position="static" color="primary">
      <Toolbar>
        <SideMenu items={sideMenuItems} />
        <Title
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
        >
          {title}
        </Title>
        {children}
      </Toolbar>
    </AppBar>
  </Wrapper>
)

Header.propTypes = {
  title: PropTypes.string,
  sideMenuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.node,
    link: PropTypes.string,
  })),
  children: PropTypes.shape(),
}

Header.defaultProps = {
  title: '',
  sideMenuItems: [],
  children: [],
}

export default Header
