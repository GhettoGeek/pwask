import React from 'react'
import PropTypes from 'prop-types'
import { Link as RouterLink } from 'react-router-dom'
import { Link } from '@material-ui/core'

function EnhancedLink({ to, children, ...props }) {
  return (
    <Link
      component={RouterLink}
      underline="none"
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

EnhancedLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
}

EnhancedLink.defaultProps = {
  children: '',
}

export default EnhancedLink
