import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SideMenu from '../SideMenu'
import Typography from '../Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
}))

function Header({ title, sideMenuItems, children }) {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <header id="header" className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <SideMenu items={sideMenuItems} />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {t(title)}
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
  sideMenuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.node,
    link: PropTypes.string,
  })),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
}

Header.defaultProps = {
  title: 'header.title',
  sideMenuItems: [],
  children: '',
}

export default Header
