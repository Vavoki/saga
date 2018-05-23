import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import './style.css'
import UserList from '../../containers/Users'
import User_card from '../../containers/User-card/index'
export default class User extends Component {
  render () {

    return (
      <div className="content">

        <Switch>
          <Route exact path='/users' component={UserList}/>
          <Route exact path='/users/:id' component={User_card}/>
        </Switch>

      </div>
    )
  }
}
