import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

var HomePage=()=><div className="jumbotron">Homme Page!</div>
var UsersPage=()=><div className="jumbotron">Users Page!</div>

var MainLayout=()=>(
    <div className="container">
        <Route path="/" exact component= {HomePage}/>
        <Route path="/users" exact component= {UsersPage}/>
    </div>
)

var RouterApp=()=>(
    <BrowserRouter>
        <MainLayout />
    </BrowserRouter>
)
export default RouterApp;