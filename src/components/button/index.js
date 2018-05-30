import React, { Component } from 'react'


export default class AddUserBtn extends Component{
  onClick = () =>{
    this.props.toggleModal()
  }

  render(){
    return(
      <button  onClick= {this.onClick} className="btn-default btn btn-dark">Add user</button>)
  }
}
