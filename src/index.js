import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './features/base'
import * as serviceWorker from './serviceWorker'
import './styles/global.scss'
import { Provider } from 'react-redux'
import { initStore } from './features/base/redux'

let { store } = initStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
