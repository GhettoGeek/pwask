import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'

function EnhancedLink({ to, children }) {
  return (
    <Link component={RouterLink} to={to}>
      {children}
    </Link>
  )
}

EnhancedLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ]),
}

EnhancedLink.defaultProps = {
  children: '',
}

export default EnhancedLink
