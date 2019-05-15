/* eslint-disable react/no-unused-state */
import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const GlobalContext = createContext({})

export const withContext = Component => props => (
  <GlobalContext.Consumer>
    {store => <Component {...props} {...store} />}
  </GlobalContext.Consumer>
)

class GlobalContextProvider extends React.Component {
  state = {
    config: {},
    user: {},
  }

  componentDidMount() {
    const { config } = this.props

    this.setState({ config })
  }

  render() {
    const { state, props: { children } } = this

    return (
      <GlobalContext.Provider value={state}>
        {children}
      </GlobalContext.Provider>
    )
  }
}

GlobalContextProvider.propTypes = {
  config: PropTypes.shape().isRequired,
  children: PropTypes.shape().isRequired,
}

export default GlobalContextProvider
