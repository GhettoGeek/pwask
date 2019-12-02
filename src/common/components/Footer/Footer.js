import React from 'react'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '../BottomNavigation'

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
})

function Footer() {
  const classes = useStyles()

  return (
    <Grid
      item
      xs={12}
      id="footer"
      component="footer"
      className={classes.root}
    >
      <BottomNavigation />
    </Grid>
  )
}

export default Footer
