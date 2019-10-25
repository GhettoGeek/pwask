import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import {
  Menu, MenuItem, IconButton,
} from '@material-ui/core'
import { AccountCircle as AccountIcon } from '@material-ui/icons'
import { Button, Link, Typography } from '../../../../../common/components'

function UserAccount({ isAuthenticated, user, onActions }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { t } = useTranslation()

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return isAuthenticated ? (
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
        {['dashboard'].map((name) => (
          <MenuItem key={name}>
            <Link to={`/${name}`}>
              {t(`user.menu.${name}`)}
            </Link>
          </MenuItem>
        ))}
        <MenuItem key="logout">
          <Button onClick={() => onActions('logout')}>
            {t('user.menu.logout')}
          </Button>
        </MenuItem>
      </Menu>
    </>
  ) : (
    <Button color="secondary" onClick={() => onActions('login')}>
      {t('user.menu.login')}
    </Button>
  )
}

UserAccount.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  onActions: PropTypes.func.isRequired,
}

UserAccount.defaultProps = {
  isAuthenticated: false,
  user: {},
}

export default UserAccount
