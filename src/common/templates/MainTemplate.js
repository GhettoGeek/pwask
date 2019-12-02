import React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline, Grid } from '@material-ui/core'
import {
  createMuiTheme, MuiThemeProvider, withStyles, makeStyles,
} from '@material-ui/core/styles'
import { Footer, Header, Breadcrumb } from '../components'

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#8389d5',
      main: '#525ca3',
      dark: '#1f3374',
    },
    secondary: {
      light: '#F9F9F9',
      main: '#FFF',
      dark: '#5E5E5E',
    },
    common: {
      white: '#FFF',
      black: '#262626',
      grey: '#EEE',
      danger: '#d32f2f',
      alert: '#ffa000',
      success: '#388e3c',
    },
  },
  spacing: 5,
  typography: {
    useNextVariants: true,
  },
})

const GlobalCss = withStyles((theme) => ({
  '@global': {
    'font-family': '"Roboto", "Helvetica", "Arial", sans-serif',
    body: {
      backgroundColor: theme.palette.common.grey,
    },
  },
}))(() => null)

const useStyles = makeStyles((theme) => ({
  content: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(9),
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

function PageTemplate({ header, children, footer }) {
  const classes = useStyles()

  return (
    <>
      <GlobalCss />
      <CssBaseline />
      <MuiThemeProvider theme={muiTheme}>
        {header}
        <Grid
          container
          id="content"
          className={classes.content}
        >
          <Grid item xs={12}><Breadcrumb /></Grid>
          <Grid item xs={12}>{children}</Grid>
        </Grid>
        {footer}
      </MuiThemeProvider>
    </>
  )
}

PageTemplate.propTypes = {
  header: PropTypes.shape(),
  children: PropTypes.node.isRequired,
  footer: PropTypes.shape(),
}

PageTemplate.defaultProps = {
  header: <Header />,
  footer: <Footer />,
}

export default PageTemplate
