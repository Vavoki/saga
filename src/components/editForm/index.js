import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './style.css'
 class Form extends Component{
  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.nameInput && this.surnameInput.value && this.ageInput.value && this.statusInput.value && this.progressInput.value ){
      const editUser = {
        id:this.props.user.id,
        firstName: this.nameInput.value,
        lastName: this.surnameInput.value,
        age: this.ageInput.value,
        status: this.statusInput.value,
        progress: this.progressInput.value ,
      };
      this.props.handleUpdate(editUser)
    }else{
      alert('Enter info')
    }

    this.props.history.goBack();
  };
   componentDidMount(){
     this.id = this.props.user.id;
     this.props.findUser(this.id)
   }
  render() {

    const {firstName, status, lastName, progress, age} = this.props.user
      return (

              <form onSubmit={this.onSubmitForm}>

                <label htmlFor="firstName" className="text-white">First name</label>
                <input type="text"  id="firstName" defaultValue={firstName} className="form-control" placeholder="First name" ref={node => this.nameInput = node} />

                <label htmlFor="lastName" className="text-white">Last name</label>
                <input type="text"  id="lastName" defaultValue={lastName} className="form-control" placeholder="Last name" ref={node => this.surnameInput = node} />

                <label htmlFor="age" className="text-white">Age</label>
                <input type="text" id="age" defaultValue={age} className="form-control" placeholder="Age" ref={node => this.ageInput = node} />

                <label htmlFor="status" className="text-white">Status</label>
                <select className="form-control" id="status" defaultValue={status} ref={node => this.statusInput = node}>
                  <option>relationship</option>
                  <option>single</option>
                  <option>complicated</option>
                </select>

                <label htmlFor="progress" className="text-white">Progress</label>
                <input type="text" id="progress" defaultValue={progress} className="form-control" placeholder="Age" ref={node => this.progressInput = node} />
                <button className="btn-default btn btn-light" >Edit</button>
              </form>
      )
  }
}
export default withRouter(Form)
