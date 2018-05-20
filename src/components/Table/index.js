import React, { Component } from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import UserList from '../../containers/Users'
export default class User extends Component {
  render () {

    return (
      <div>
        <Switch>
          <Route exact path='/users' component={UserList}/>
        </Switch>

      </div>
    )
  }
}
