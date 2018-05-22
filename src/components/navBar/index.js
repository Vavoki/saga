import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './style.css'
export default class User extends Component {
  render () {

    return (
      <div className='navBar'>
        <nav>
          <ul>
            <li><Link to='/users' ><span className='badge badge-pill badge-dark text-uppercase'>Users</span></Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}
