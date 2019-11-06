import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import {
  Menu, MenuItem,
} from '@material-ui/core'
import {
  Button, Icon, Link,
} from '../../../../../common/components'

function UserAccount({ isAuthenticated, user, onActions }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const { t } = useTranslation()

  function handleClick(event) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <>
      <Icon
        type="material-ui"
        name="account_circle"
        fontSize="large"
        color="secondary"
        onClick={handleClick}
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {isAuthenticated && (
          <div>
            <MenuItem key="user">
              {`Hello ${user.name}`}
            </MenuItem>
            <MenuItem key="logout">
              <Button
                variant="text"
                onClick={() => onActions('logout')}
              >
                {t('user.menu.logout')}
              </Button>
            </MenuItem>
            <MenuItem key="dashboard">
              <Link to="dashboard">
                {t('user.menu.dashboard')}
              </Link>
            </MenuItem>
          </div>
        )}
        {!isAuthenticated && (
          <Button
            variant="text"
            onClick={() => onActions('login')}
          >
            {t('user.menu.login')}
          </Button>
        )}
      </Menu>
    </>
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
