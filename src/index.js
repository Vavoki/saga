import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './components/app'
import store from './store'
//import {Router, Route, hashHistory} from 'react-router'
const provider = (

      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>

)

const container = document.getElementById('root')

render(provider, container)
