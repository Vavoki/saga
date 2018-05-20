import React, { Component } from 'react'

import User from '../../components/User'

export default class UserList extends Component {
    componentDidMount() {
        this.props.getUsers()
        console.log(this.props.getUsers());
    }

    render() {
        return (
            <div>
              <table>
                {this.props.users.map(user => <User key={user.id} {...user} /> )}
              </table>
            </div>
        )
    }
}
