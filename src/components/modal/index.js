import React, { Component } from 'react'
import './style.css'
export default class Modal extends Component{
  onSubmitForm = (e) =>{
    e.preventDefault();
    if(this.nameInput && this.surnameInput.value && this.ageInput.value && this.statusInput.value){
      const newUser = {
        firstName: this.nameInput.value,
        lastName: this.surnameInput.value,
        age: this.ageInput.value,
        status: this.statusInput.value,
        visits: 0,
        progress: 0,
      };
      this.props.toggleModal()
      this.props.handleSubmit(newUser)
    }else{
      alert('Enter info')
    }
  };

  render() {
    console.log(this.props)
    if (this.props.show) {
      return (
        <div className="overlay">
          <div className="my-modal">
            <div className="my-modal-header">
              <h4>New user</h4>
              <span onClick={this.props.toggleModal}>close</span>
            </div>
            <div className="modal-body">
              <form className="addForm" onSubmit={this.onSubmitForm}>
                <input type="text" placeholder="Name" ref={node => this.nameInput = node}/>
                <input type="text" placeholder="Surname" ref={node => this.surnameInput = node}/>
                <input type="text" placeholder="Age" ref={node => this.ageInput = node}/>
                <input type="text" placeholder="Status" ref={node => this.statusInput = node}/>
                <button className="btn-default">OK</button>
              </form>
            </div>
          </div>
        </div>)
    }else{
      return null
    }
  }
}
