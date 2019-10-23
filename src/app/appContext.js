import React from 'react'
import PropTypes from 'prop-types'
import { appReducer, appInitialState } from './appReducer'

const AppContext = React.createContext(null)

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appReducer, appInitialState)
  const value = [state, dispatch]

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
}

export const useAppContext = () => React.useContext(AppContext)

export const withAppContext = (Component) => ({ ...props }) => {
  const [state, dispatch] = useAppContext()

  return (<Component {...props} appContext={state} dispatchApp={dispatch} />)
}
