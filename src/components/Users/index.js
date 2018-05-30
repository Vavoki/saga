import React, { Component } from 'react'
import './style.css'
import User from '../../components/User'
import  Modal from  '../../containers/modal/index'
import  Btn from  '../../containers/button/index'
export default class UserList extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
      if(this.props.onLoad) {
        return <div className="spinner"><i className="fas fa-spinner spinner-icon"></i></div>
      }
        return (

            <div className="content-form">
              <Btn/>
              <Modal />
              <table className="table table-dark">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Status</th>
                  <th scope="col">Visits</th>
                  <th scope="col">Progress</th>
                </tr>
                </thead>
                {this.props.users.map(user => <User key={user.id} {...user} /> )}
              </table>
            </div>
        )
    }
}
