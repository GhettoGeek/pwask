import React from 'react'
import PropTypes from 'prop-types'
import { Icon, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  iconButton: {
    padding: 10,
  },
})

function EnhancedIcon({
  type, name, color, fontSize, onClick, ...props
}) {
  const classes = useStyles()

  if (type === 'material-ui') {
    return (
      <IconButton
        color={color}
        className={classes.iconButton}
        aria-label="icon-button"
        onClick={onClick}
      >
        <Icon fontSize={fontSize} {...props}>
          {name}
        </Icon>
      </IconButton>
    )
  }

  if (type === 'custom') {
    import(`./assets/${name}.svg`).then((IconComponent) => (
      <IconComponent />
    ))
  }

  return false
}

EnhancedIcon.propTypes = {
  type: PropTypes.oneOf(['custom', 'material-ui']),
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  onClick: PropTypes.func,
}

EnhancedIcon.defaultProps = {
  type: 'material-ui',
  color: 'primary',
  fontSize: 'default',
  onClick: () => {},
}

export default EnhancedIcon
