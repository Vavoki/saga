import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './style.css'
import  Form from '../../containers/editForm/index'
export class User extends Component {
  constructor() {
    super()
    this.state  = {
      edit: false,
    }
  }
  componentDidMount(){
      this.id = this.props.ownProps.match.params.id;
      this.props.findUser(this.id)
   }

   onClickDelete ()  {
     this.props.handleDelete(this.props.user.id);
     this.props.history.goBack();
  }
   onClickEdit  ()  {
     this.setState({edit:true});
   }
  render() {
    const {id} = this.props.user
    const {firstName} = this.props.user
    const {lastName} = this.props.user
    const {status} = this.props.user
    const {visits} = this.props.user
    const {progress} = this.props.user
    if(!this.state.edit) {
      return (
        <div className='user-wrapper'>
          <h1>User</h1>
          <div className="text-white"><span>id:</span><span>{id}</span></div>
          <div className="text-white"><span>Name:</span><span>{firstName} {lastName}</span></div>
          <div className="text-white"><span>status:</span><span> {status}</span></div>
          <div className="text-white"><span>visits:</span><span> {visits}</span></div>
          <div className="text-white"><span>progress:</span><span> {progress}</span></div>
          <div className="btn-wrapper">
            <button className="btn btn-light deleteBtn" onClick={this.onClickDelete.bind(this)}>Delete</button>
            <button className="btn btn-light editeBtn" onClick={this.onClickEdit.bind(this)}>Edit</button>
          </div>
        </div>
      )
    } else  {
      return <Form />
    }
  }
}
export default withRouter(User)
