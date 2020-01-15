import React from 'react'
import PropTypes from 'prop-types'
import { userReducer, userInitialState } from './userReducer'

const UserContext = React.createContext(null)

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(userReducer, userInitialState)
  const value = [state, dispatch]

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

UserContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
}

export const useUserContext = () => React.useContext(UserContext)

export const withUserContext = (Component) => ({ ...props }) => {
  const [state, dispatch] = useUserContext()

  return (<Component {...props} userState={state} userDispatch={dispatch} />)
}
