import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import {
  List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core'
import Link from '../Link'
import Icon from '../Icon'

function EnhancedList({ items }) {
  const { t } = useTranslation()

  return (
    <List>
      {
        items.map((item) => (
          <ListItem button key={t(item.label)}>
            {item.icon && (
              <ListItemIcon>
                <Icon name={item.icon} />
              </ListItemIcon>
            )}
            <Link to={item.link}>
              <ListItemText primary={t(item.label)} />
            </Link>
          </ListItem>
        ))
      }
    </List>
  )
}

EnhancedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default EnhancedList
