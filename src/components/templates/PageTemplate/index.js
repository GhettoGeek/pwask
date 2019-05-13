import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: #eee;
`

const Header = styled.div`${() => css`
  position: absolute;
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
    )
  }
}

export default PageTemplate
