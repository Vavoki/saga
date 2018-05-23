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
    if (this.props.show) {
      return (
        <div className="overlay">
          <div className="my-modal">
            <div className="my-modal-header">
              <h4 className="font-weight-bold">New user</h4>
              <span onClick={this.props.toggleModal}><i className="fas fa-times"></i></span>
            </div>
            <div className="modal-body">
              <form className="addForm" onSubmit={this.onSubmitForm}>
                <div className="form-row">
                  <div className="col">
                    <input type="text" className="form-control" placeholder="First name" ref={node => this.nameInput = node} />
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" ref={node => this.surnameInput = node} />
                  </div>
                </div>
                <input type="text" className="form-control" placeholder="Age" ref={node => this.ageInput = node} />
                <select className="form-control" ref={node => this.statusInput = node}>
                  <option>relationship</option>
                  <option>single</option>
                  <option>complicated</option>
                </select>
                <button className="btn-default btn btn-dark">OK</button>
              </form>
            </div>
          </div>
        </div>)
    }else{
      return null
    }
  }
}
