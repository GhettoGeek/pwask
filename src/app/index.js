import React, { Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { SnackbarProvider } from 'notistack'
import { ModalProvider } from 'react-modal-hook'
import appConfig from './appConfig'
import { AppContextProvider } from './appContext'
import { AuthContextProvider } from './modules/auth'
import { ResourceContextProvider } from './modules/resource'
import {
  HomePage,
  ResourceSearchPage,
  ResourceDetailsPage,
  ResourceFavoritesPage,
  ErrorPage,
} from './pages'

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
          <ResourceContextProvider>
            <ApolloProvider client={client}>
              <SnackbarProvider maxSnack={3}>
                <ModalProvider>
                  <BrowserRouter>
                    <Switch>
                      <Route path="/" component={HomePage} exact />
                      <Route path="/:type/:country/:city" component={ResourceSearchPage} exact />
                      <Route path="/resource/:id" component={ResourceDetailsPage} exact />
                      <Route path="/favorites" component={ResourceFavoritesPage} exact />
                      <Route path="*" component={ErrorPage} />
                    </Switch>
                  </BrowserRouter>
                </ModalProvider>
              </SnackbarProvider>
            </ApolloProvider>
          </ResourceContextProvider>
        </AppContextProvider>
      </AuthContextProvider>
    </Suspense>
  )
}

export default App
