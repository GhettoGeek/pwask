import React from 'react'
import PropTypes from 'prop-types'
import { resourceReducer, resourceInitialState } from './resourceReducer'

const ResourceContext = React.createContext(null)

export const ResourceContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(resourceReducer, resourceInitialState)
  const value = [state, dispatch]

  return (
    <ResourceContext.Provider value={value}>
      {children}
    </ResourceContext.Provider>
  )
}

ResourceContextProvider.propTypes = {
  children: PropTypes.shape().isRequired,
}

export const useResourceContext = () => React.useContext(ResourceContext)

export const withResourceContext = (Component) => ({ ...props }) => {
  const [state, dispatch] = useResourceContext()

  return (<Component {...props} resourceContext={state} dispatchUser={dispatch} />)
}
