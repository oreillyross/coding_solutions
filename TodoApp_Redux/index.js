import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { todaApp } from './reducers'
import App from './components/App'

const store = createStore(todaApp)

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector('#root')
    )
