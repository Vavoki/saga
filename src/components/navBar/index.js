import React, { Component } from 'react'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
export default class User extends Component {
  render () {

    return (
      <div>
        <nav>
          <ul>
            <li><Link to='/users'>Users</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
