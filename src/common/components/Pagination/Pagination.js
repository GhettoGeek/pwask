import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    height: 18,
    width: 18,
    cursor: 'pointer',
    border: 0,
    background: 'none',
    padding: 0,
  },
  dot: {
    backgroundColor: '#e4e6e7',
    height: 12,
    width: 12,
    borderRadius: 6,
    margin: 3,
  },
  active: {
    backgroundColor: theme.palette.primary.main,
  },
}))

function Pagination({ currentIndex, dots, onChangeIndex }) {
  const classes = useStyles()
  const handleClick = (event, index) => onChangeIndex(index)

  return dots > 1 ? (
    <div className={classes.root}>
      {[...Array(dots)].map((dot, index) => (
        <button
          type="button"
          className={classes.button}
          key={index}
          onClick={(event) => handleClick(event, index)}
        >
          <div
            className={clsx(classes.dot, {
              [classes.active]: index === currentIndex,
            })}
          />
        </button>
      ))}
    </div>
  ) : null
}

Pagination.propTypes = {
  dots: PropTypes.number,
  currentIndex: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func.isRequired,
}

Pagination.defaultProps = {
  dots: 3,
}

export default Pagination
