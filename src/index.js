import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './components/app'
import store from './store'

const provider = (
    <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
    </BrowserRouter>
)

const container = document.getElementById('root')

render(provider, container)
