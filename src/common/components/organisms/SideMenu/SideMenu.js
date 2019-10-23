import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { withTranslation } from 'react-i18next'
import {
  Link, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Edit as EditIcon,
} from '@material-ui/icons'

function TemporaryDrawer({ t }) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <IconButton color="inherit" aria-label={t('sideMenu.openDrawer')} onClick={() => setIsOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <div
          tabIndex={0}
          role="button"
          onClick={() => setIsOpen(false)}
          onKeyDown={() => setIsOpen(false)}
        >
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
        </div>
      </Drawer>
    </div>
  )
}

TemporaryDrawer.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation()(TemporaryDrawer)
