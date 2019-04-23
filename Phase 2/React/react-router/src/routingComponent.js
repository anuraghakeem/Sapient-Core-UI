import React from 'react'
import UserListComponent from './userlistComponent'
import UserDetailsComponent from './userdetailsComponent'
import {Route, BrowserRouter, Link} from 'react-router-dom'

var UserList=()=><div className="jumbotron"><UserListComponent /></div>
// var UserDetails=()=><div className="jumbotron">Users Page!</div>
var UserDetails= (props)=>{
    var {match:{params}}=props;
    return(
        // Details
        <div className="jumbotron"><UserDetailsComponent login={params.login} /></div>
    )
     
}

var MainLayout=()=>(
    <div className="container">
        <nav>
            <Link to="/">Home </Link>            
        </nav>
        <Route path="/" exact component= {UserList}/>
        {/* <Route path="/users" exact component= {UsersPage}/> */}
        <Route path="/users/:login" exact component= {UserDetails}/>

    </div>
)

var RouterApp=()=>(
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
)
export default RouterApp;