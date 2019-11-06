import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import './common/utils/i18n'
import App from './app'
import * as serviceWorker from './app/serviceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)

serviceWorker.register()
