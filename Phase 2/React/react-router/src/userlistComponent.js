import React from 'react';
import axios from 'axios';
import {Route, BrowserRouter, Link} from 'react-router-dom'

export default class UserListComponent extends React.Component {
    constructor() {
        super();
        this.state = { allUsers: [] }
    }
    componentDidMount() {
        
        let thePromise = axios.get('https://api.myjson.com/bins/10f8x0')
        thePromise.then(
            (response) => { this.setState({ allUsers: response.data }) },
            (error) => {console.log(error) }
        )
    }
    render(){
        var responseList = this.state.allUsers.map(p => <li><Link to={"/users/"+p.login}>{p.login} </Link></li>)
        return(<React.Fragment>
           <h1>All Users</h1>
            <ul>
                {/*  posts to be created*/}
                {responseList}
            </ul>
            </React.Fragment>
            
        )
    }
    
    }