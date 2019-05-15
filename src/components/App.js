import React, { Component, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import api from '../utils/api'
import GlobalContextProvider from '../store/GlobalContext'

import HomePage from './pages/HomePage'

class App extends Component {
  constructor() {
    super()
    this.getConfig()
  }

  state = {
    config: {},
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
        <GlobalContextProvider config={config}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={HomePage} exact />
            </Switch>
          </BrowserRouter>
        </GlobalContextProvider>
      </Suspense>
    )
  }
}

export default App
