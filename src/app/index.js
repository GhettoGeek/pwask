import React, { Suspense } from 'react'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import storage from '../common/utils/storage'
import appConfig from './appConfig'
import { AppContextProvider } from './appContext'
import { AuthContextProvider } from './modules/auth'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

function onRedirectCallback(appState) {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  )
}

function App() {
  const client = new ApolloClient({
    uri: appConfig.apiUrl,
  })

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthContextProvider
        domain={appConfig.auth.domain}
        client_id={appConfig.auth.clientId}
        redirect_uri={window.location.origin}
        onRedirectCallback={onRedirectCallback}
      >
        <AppContextProvider>
          <ApolloProvider client={client}>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact>
                  <HomePage />
                </Route>
                <Route path="/login">
                  {() => {
                    window.location = appConfig.loginUrl

                    return null
                  }}
                </Route>
                <Route path="/logout">
                  {() => {
                    storage.remove('auth')

                    return <Redirect to="/" />
                  }}
                </Route>
                <Route path="*">
                  <ErrorPage />
                </Route>
              </Switch>
            </BrowserRouter>
          </ApolloProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </Suspense>
  )
}

export default App
