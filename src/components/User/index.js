import React, { Component } from 'react'
export default class User extends Component {
    render () {
      const {id, firstName, lastName} = this.props
        return (
          <tbody>
            <tr>
              <td>{id}</td><td>{firstName}</td><td>{lastName}</td>
            </tr>
          </tbody>
        )
    }
}
