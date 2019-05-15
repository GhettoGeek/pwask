import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

/*
  Helper to be used in components to avoid the verbosity of `withStyles`
 */
export const styled = Component => (style, options) => {
  function StyledComponent(props) {
    const { classes, className, ...other } = props
    return <Component className={classNames(classes.root, className)} {...other} />
  }

  StyledComponent.propTypes = {
    classes: PropTypes.shape().isRequired,
    className: PropTypes.string,
  }

  StyledComponent.defaultProps = {
    className: '',
  }

  const styles = typeof style === 'function' ? theme => ({ root: style(theme) }) : { root: style }
  return withStyles(styles, options)(StyledComponent)
}

/*
  Merges multiple template literals
 */
export const merge = (...templates) => [].concat(...templates)

/*
  Helper to write conditions in css with elegance
 */
export const ifThen = (condition, thenAssertion, elseAssertion = []) => {
  if (condition) {
    return thenAssertion
  }

  return elseAssertion
}
