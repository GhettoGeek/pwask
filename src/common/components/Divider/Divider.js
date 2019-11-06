import React from 'react'
import PropTypes from 'prop-types'
import { Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  divider: {
    height: 28,
    margin: 4,
  },
})

function EnhancedDivider({
  variant, orientation, light, absolute,
}) {
  const classes = useStyles()

  return (
    <Divider
      light={light}
      variant={variant}
      className={classes.divider}
      orientation={orientation}
      absolute={absolute}
    />
  )
}

EnhancedDivider.propTypes = {
  light: PropTypes.bool,
  variant: PropTypes.oneOf(['fullWidth', 'inset', 'middle']),
  orientation: PropTypes.oneOf(['vertical', 'horizontal']),
  absolute: PropTypes.bool,
}

EnhancedDivider.defaultProps = {
  light: false,
  variant: 'fullWidth',
  orientation: 'horizontal',
  absolute: false,
}

export default EnhancedDivider
