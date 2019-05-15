import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import Link from '@material-ui/core/Link'
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import EditIcon from '@material-ui/icons/Edit'

class TemporaryDrawer extends React.Component {
  state = {
    open: false,
  }

  toggleDrawer = open => () => {
    this.setState({
      open,
    })
  }

  render() {
    const { open } = this.state
    const { t } = this.props

    const sideList = (
      <div width={250}>
        <List>
          <ListItem button key={t('sideMenu.item1')}>
            <ListItemIcon><EditIcon /></ListItemIcon>
            <Link component={RouterLink} to="/link1">
              <ListItemText primary={t('sideMenu.item1')} />
            </Link>
          </ListItem>
          <ListItem button key={t('sideMenu.item2')}>
            <ListItemIcon><EditIcon /></ListItemIcon>
            <Link component={RouterLink} to="/link2">
              <ListItemText primary={t('sideMenu.item2')} />
            </Link>
          </ListItem>
          <ListItem button key={t('sideMenu.item3')}>
            <ListItemIcon><EditIcon /></ListItemIcon>
            <Link component={RouterLink} to="/link3">
              <ListItemText primary={t('sideMenu.item3')} />
            </Link>
          </ListItem>
        </List>
      </div>
    )

    return (
      <div>
        <IconButton color="inherit" aria-label={t('sideMenu.openDrawer')} onClick={this.toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer open={open} onClose={this.toggleDrawer(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}

TemporaryDrawer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(TemporaryDrawer)
