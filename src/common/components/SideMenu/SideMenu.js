import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Drawer } from '@material-ui/core'
import List from '../List'
import Icon from '../Icon'

function TemporaryDrawer({ items }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <Icon
        name="menu"
        color="inherit"
        aria-label={t('sideMenu.openDrawer')}
        onClick={() => setIsOpen(true)}
      />
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
