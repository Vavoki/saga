import React, { Component } from 'react'


export default class AddUserBtn extends Component{
  onClick = (e) =>{
    e.preventDefault()
    this.props.toggleModal()
  }

  render(){
    return(
      <button  onClick= {this.onClick} className="btn-default btn btn-dark">Add user</button>)
  }
}
