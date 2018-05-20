import React, { Component } from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'

import UserList from '../../containers/Users'
import User_card from '../../containers/User_card'
export default class User extends Component {
  render () {

    return (
      <div>
        <Switch>
          <Route exact path='/users' component={UserList}/>
          <Route exact path='/users/:id' component={User_card}/>
        </Switch>

      </div>
    )
  }
}
