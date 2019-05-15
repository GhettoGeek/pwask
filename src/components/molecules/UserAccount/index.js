import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import Link from '@material-ui/core/Link'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AccountIcon from '@material-ui/icons/AccountCircle'
import storage from '../../../utils/storage'

class UserAccount extends Component {
  static propTypes = {
    t: PropTypes.func.isRequired,
  }

  state = {
    user: {},
    isAuthenticated: false,
    anchorEl: null,
  }

  componentDidMount() {
    this.getUserInfo()
  }

  getUserInfo = () => {
    const infos = storage.get('auth')

    if (infos) {
      this.setState({
        user: {
          name: infos.userName,
          email: infos.userEmail,
        },
        isAuthenticated: true,
      })
    }
  }

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { user, isAuthenticated, anchorEl } = this.state
    const { t } = this.props

    return (
      <>
        <Typography color="secondary">
          {user.name}
        </Typography>
        <IconButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="secondary"
        >
          <AccountIcon fontSize="large" />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {
            isAuthenticated
              ? (
                ['dashboard', 'logout'].map(name => (
                  <MenuItem key={name}>
                    <Link component={RouterLink} to={`/${name}`}>
                      {t(`user.menu.${name}`)}
                    </Link>
                  </MenuItem>
                ))
              )
              : (
                <MenuItem onClick={this.handleClose}>
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
}

export default withTranslation()(UserAccount)
