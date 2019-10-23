import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { styled } from '../../../utils/style'

const StyledCircularProgress = styled(CircularProgress)((theme) => ({
  margin: theme.spacing(2),
}))

function Loader({ size }) {
  return (
    <StyledCircularProgress size={size} />
  )
}

Loader.propTypes = {
  size: PropTypes.number,
}

Loader.defaultProps = {
  size: 40,
}

export default Loader
