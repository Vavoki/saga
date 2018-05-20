import React, { Component } from 'react'

import User from '../../components/User'

export default class TodoList extends Component {
    componentDidMount() {
        this.props.getUsers()
        console.log(this.props.getUsers());
    }

    render() {
        return (
            <div>
              <table>
                {this.props.users.map(todo => <User key={todo.id} {...todo} /> )}
              </table>
            </div>
        )
    }
}
