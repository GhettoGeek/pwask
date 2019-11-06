import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

function EnhancedButton({
  variant, color, children, ...props
}) {
  return (
    <Button
      variant={variant}
      color={color}
      {...props}
    >
      {children}
    </Button>
  )
}

EnhancedButton.propTypes = {
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
  ]),
}

EnhancedButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  children: '',
}

export default EnhancedButton
