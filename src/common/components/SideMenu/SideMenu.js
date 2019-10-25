import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import {
  Drawer, IconButton,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
} from '@material-ui/icons'
import List from '../List'

function TemporaryDrawer({ items }) {
  const { t } = useTranslation()
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
            <List items={items} />
          </div>
        </div>
      </Drawer>
    </div>
  )
}

TemporaryDrawer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.node,
    link: PropTypes.string,
  })),
}

TemporaryDrawer.defaultProps = {
  items: [],
}

export default TemporaryDrawer
