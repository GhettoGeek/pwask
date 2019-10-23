import React, { Suspense } from 'react'
import {
  BrowserRouter, Switch, Route, Redirect,
} from 'react-router-dom'
import api from '../common/utils/api'
import storage from '../common/utils/storage'
import { AppContextProvider } from './appContext'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      config: {},
    }
    this.getConfig()
  }

  getConfig = async () => {
    const response = await fetch('/config.json')
    const config = await response.json()

    this.setState({ config })
    api.setBaseUrl(config.apiUrl)
  }

  render() {
    const { config } = this.state

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <AppContextProvider config={config}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/login">
                {() => {
                  window.location = config.loginUrl

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
        </AppContextProvider>
      </Suspense>
    )
  }
}

export default App
