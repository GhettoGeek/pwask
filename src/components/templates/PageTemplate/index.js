import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css, ThemeProvider } from 'styled-components'
import { injectGlobals, ifThen } from '../../../utils/style'
import defaultTheme, { resets } from '../../themes/default'

// injectGlobals([resets])

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eee;
`

const Header = styled.div`${({ loaded }) => css`
  ${ifThen(loaded, 'position: fixed', 'position: absolute')};
  left: 0;
  top: 0;
  width: 100%;
  z-index: 20;
`}`

const Content = styled.div`
  width: 100%;
  margin: 0;
`

const Footer = styled.footer`
  margin-top: auto;
  width: 100%;
`

class PageTemplate extends Component {
  static propTypes = {
    header: PropTypes.any.isRequired,
    children: PropTypes.any.isRequired,
    footer: PropTypes.any.isRequired,
  }

  state = {
    loaded: false,
  }

  render() {
    const {
      header,
      children,
      footer,
      ...props
    } = this.props
    const { loaded } = this.state

    return (
      <ThemeProvider theme={defaultTheme}>
        <Wrapper {...props}>
          <Header {...{ ...props, loaded }}>
            {header}
          </Header>
          <Content>
            {children}
          </Content>
          <Footer>
            {footer}
          </Footer>
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default PageTemplate
