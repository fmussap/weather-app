'use strict'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'

import App from './app'
import reducers from 'reducer'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Provider store={createStoreWithMiddleware(reducers)}>
        <NextApp />
      </Provider>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderApp(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default
    renderApp(NextApp)
  })
}
