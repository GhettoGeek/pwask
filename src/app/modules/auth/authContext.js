import React from 'react'
import PropTypes from 'prop-types'
import createAuth0Client from '@auth0/auth0-spa-js'

const DEFAULT_REDIRECT_CALLBACK = () => {
  window.history.replaceState({}, document.title, window.location.pathname)
}

export const AuthContext = React.createContext()

export const useAuthContext = () => React.useContext(AuthContext)

export const AuthContextProvider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState()
  const [user, setUser] = React.useState()
  const [auth0Client, setAuth0] = React.useState()
  const [loading, setLoading] = React.useState(true)
  const [popupOpen, setPopupOpen] = React.useState(false)

  React.useEffect(() => {
    async function init() {
      const auth0FromHook = await createAuth0Client(initOptions)

      setAuth0(auth0FromHook)

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback()

        onRedirectCallback(appState)
      }

      const isAuthenticatedValue = await auth0FromHook.isAuthenticated()

      setIsAuthenticated(isAuthenticatedValue)

      if (isAuthenticated) {
        const userValue = await auth0FromHook.getUser()

        setUser(userValue)
      }

      setLoading(false)
    }

    init()
  }, [])

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true)
    try {
      await auth0Client.loginWithPopup(params)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
    } finally {
      setPopupOpen(false)
    }
    const userValue = await auth0Client.getUser()

    setUser(userValue)
    setIsAuthenticated(true)
  }

  const handleRedirectCallback = async () => {
    setLoading(true)
    await auth0Client.handleRedirectCallback()
    const userValue = await auth0Client.getUser()

    setLoading(false)
    setIsAuthenticated(true)
    setUser(userValue)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p),
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthContextProvider.propTypes = {
  children: PropTypes.shape(),
  onRedirectCallback: PropTypes.func.isRequired,
}

AuthContextProvider.defaultProps = {
  children: {},
}
