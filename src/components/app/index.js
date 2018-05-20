import React from 'react'
// import UserList from '../../containers/Users'
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import  NavBar from  '../navBar'
import  Table from  '../Table'

export default function App() {
    return (
        <div>
          <NavBar />
          <Table />
        </div>
    )
}
