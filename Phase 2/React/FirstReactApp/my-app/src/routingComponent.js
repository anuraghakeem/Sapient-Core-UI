import React from 'react'
import {Route, BrowserRouter, Link} from 'react-router-dom'

var HomePage=()=><div className="jumbotron">Homme Page!</div>
var UsersPage=()=><div className="jumbotron">Users Page!</div>
var SpecificUsersPage= (props)=>{
    var {match:{params}}=props;
    return(
        <div className="jumbotron">Specific Users Page for {params.userID}!</div>
    )
     
}

var MainLayout=()=>(
    <div className="container">
        <nav>
            <a href= "/users">Users </a>
            {/* Use link instead of <a> if you don't want to refresh*/}
            <Link to="/">Home </Link>
            <Link to="/users/69">A specific User </Link>
            
        </nav>
        <Route path="/" exact component= {HomePage}/>
        <Route path="/users" exact component= {UsersPage}/>
        <Route path="/users/:userID" exact component= {SpecificUsersPage}/>

    </div>
)

var RouterApp=()=>(
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
)
export default RouterApp;