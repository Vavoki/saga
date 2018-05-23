import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './style.css'
 class User extends Component {

   componentDidMount(){
      this.id = this.props.ownProps.match.params.id;
      this.props.findUser(this.id)

      console.log("props", this.props.user);
   }
   onClickDelete = () => {
     this.props.history.goBack();
     this.props.handleDelete(this.props.user.id);

  }
  render() {
    const {id} = this.props.user
    const {firstName} = this.props.user
    const {lastName} = this.props.user
    const {status} = this.props.user
    const {visits} = this.props.user
    const {progress} = this.props.user
    return (
      <div className='user-wrapper'>
        <div className="text-white"><span>id:</span><span >{id}</span></div>
        <div className="text-white"><span>Name:</span><span>{firstName} {lastName}</span></div>
        <div className="text-white"><span>status:</span><span> {status}</span></div>
        <div className="text-white"><span>visits:</span><span> {visits}</span></div>
        <div className="text-white"><span>progress:</span><span> {progress}</span></div>
        <div className="btn-wrapper">
          <button className="btn btn-light" onClick={this.onClickDelete}>Delete</button>
          <button className="btn btn-light" >Edit</button>
        </div>
      </div>
    )
  }
}
export default withRouter(User)
