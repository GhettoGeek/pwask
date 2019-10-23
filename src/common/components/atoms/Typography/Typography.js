import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

function EnhancedTypography({ variant }) {
  return (
    <Typography variant={variant} />
  )
}

EnhancedTypography.propTypes = {
  variant: PropTypes.string,
}

EnhancedTypography.defaultProps = {
  variant: 'h1',
}

export default EnhancedTypography
