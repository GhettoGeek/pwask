import React from 'react'
import PropTypes from 'prop-types'
import {
  List, ListItem, ListItemIcon, ListItemText,
} from '@material-ui/core'
import Link from '../Link'

function EnhancedList({ items }) {
  return (
    <List>
      {
        items.map((item) => (
          <ListItem button key={item.label}>
            {item.icon && (
              <ListItemIcon>{item.icon}</ListItemIcon>
            )}
            <Link to={item.link}>
              <ListItemText primary={item.label} />
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
