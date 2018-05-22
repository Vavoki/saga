import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class User extends Component {
  onClick = () => {
    this.props.history.push(`/users/${this.props.id}`)
  };
    render () {
      const {id, firstName, lastName, age ,status, visits, progress} = this.props
        return (
          <tbody>
            <tr onClick={this.onClick}>

              <th scope="row">{id}</th><td>{firstName}</td><td>{lastName}</td><td>{age}</td><td>{status}</td><td>{visits}</td><td>{progress}</td>
            </tr>
          </tbody>
        )
    }
}
export default withRouter(User);
