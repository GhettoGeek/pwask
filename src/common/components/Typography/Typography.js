import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

function EnhancedTypography({ variant, children, ...props }) {
  return (
    <Typography variant={variant} {...props}>
      {children}
    </Typography>
  )
}

EnhancedTypography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

EnhancedTypography.defaultProps = {
  variant: 'h1',
  children: '',
}

export default EnhancedTypography
