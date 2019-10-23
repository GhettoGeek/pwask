import React from 'react'
import ReactDOM from 'react-dom'
import '@babel/polyfill'
import './common/utils/i18n'
import * as serviceWorker from './app/serviceWorker'
import App from './app'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

serviceWorker.register()
