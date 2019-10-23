import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import {
  Link, Menu, MenuItem, Typography, IconButton,
} from '@material-ui/core'
import { AccountCircle as AccountIcon } from '@material-ui/icons'
import storage from '../../../utils/storage'

function UserAccount({ t }) {
  const [user, setUser] = React.useState({})
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  const [anchorEl, setAnchorEl] = React.useState(null)

  async function getUserInfo() {
    const infos = await storage.get('auth')

    if (infos) {
      setUser({
        name: infos.userName,
        email: infos.userEmail,
      })
      setIsAuthenticated(true)
    }
  }

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  React.useEffect(() => {
    getUserInfo()
  }, [user])

  return (
    <>
      <Typography color="secondary">
        {user.name}
      </Typography>
      <IconButton
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
      >
        <AccountIcon fontSize="large" />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
          isAuthenticated
            ? (
              ['dashboard', 'logout'].map((name) => (
                <MenuItem key={name}>
                  <Link component={RouterLink} to={`/${name}`}>
                    {t(`user.menu.${name}`)}
                  </Link>
                </MenuItem>
              ))
            )
            : (
              <MenuItem onClick={handleClose}>
                <Link component={RouterLink} to="/login">
                  {t('user.menu.login')}
                </Link>
              </MenuItem>
            )
        }
      </Menu>
    </>
  )
}

UserAccount.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(UserAccount)
