import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

function EnhancedButton({ children, ...props }) {
  return (
    <Button {...props}>
      {children}
    </Button>
  )
}

EnhancedButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ]),
}

EnhancedButton.defaultProps = {
  children: '',
}

export default EnhancedButton
