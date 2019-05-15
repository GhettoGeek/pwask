import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import { styled } from '../../../utils/style'

import Header from '../../organisms/Header'
import Footer from '../../organisms/Footer'

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
  typography: {
    useNextVariants: true,
  },
  spacing: {
    xs: '0.4rem',
    s: '0.8rem',
    m: '1.6rem',
    l: '2.5rem',
    xl: '3.2rem',
    xxl: '5rem',
    xxxl: '10rem',
  },
})

const Wrapper = styled('div')(theme => ({
  backgroundColor: theme.palette.common.grey,
}))

const HeaderWrapper = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  zIndex: 20,
})

const Content = styled('div')(theme => ({
  marginTop: theme.spacing.xl,
  padding: theme.spacing.l,
}))

const FooterWrapper = styled('footer')({
  marginTop: 'auto',
})

const PageTemplate = ({
  header,
  children,
  footer,
  ...props
}) => (
  <Wrapper {...props}>
    <MuiThemeProvider theme={muiTheme}>
      <HeaderWrapper>{header}</HeaderWrapper>
      <Content>{children}</Content>
      <FooterWrapper>{footer}</FooterWrapper>
    </MuiThemeProvider>
  </Wrapper>
)

PageTemplate.propTypes = {
  header: PropTypes.shape(),
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  footer: PropTypes.shape(),
}

PageTemplate.defaultProps = {
  header: <Header />,
  footer: <Footer />,
}

export default PageTemplate
