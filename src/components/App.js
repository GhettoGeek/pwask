import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import HomePage from './pages/HomePage'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} exact />
    </Switch>
  </BrowserRouter>
)

export default App
