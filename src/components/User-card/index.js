import React, { Component } from 'react'

export default class TodoList extends Component {
  componentDidMount() {
    this.props.getUsers()

  }

  render() {
    console.log(this.props.users);
    return (
      <div>
        <h1>user</h1>
      </div>
    )
  }
}
