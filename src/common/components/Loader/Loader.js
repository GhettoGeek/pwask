import React from 'react'
import PropTypes from 'prop-types'
import { CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
}))

function Loader({ size }) {
  const classes = useStyles()

  return (
    <CircularProgress size={size} className={classes.root} />
  )
}

Loader.propTypes = {
  size: PropTypes.number,
}

Loader.defaultProps = {
  size: 40,
}

export default Loader
