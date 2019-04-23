import React from 'react';
import axios from 'axios';
import {Route, BrowserRouter, Link} from 'react-router-dom'

export default class UserDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { userDetails: [] }
    }
    componentDidMount() {
        let linkVar="https://api.github.com/users/"+this.props.login
        // let linkVar=linkVar + {this.props.state.login};
        let thePromise = axios.get(linkVar)
        thePromise.then(
            (response) => { this.setState({ userDetails: response.data }) },
            (error) => {console.log(error) }
        )
    }
    render(){
    // var responseList = this.state.userDetails.map(p => {return<React.Fragment><li>p.login</li><li>p.avatar_url</li></React.Fragment>})
    //     console.log(responseList);
        return(<React.Fragment>
           <h1>User Details</h1>
            <ul>
                {/*  posts to be created*/}
                {/* {responseList} */}
                <li>{userDetails.login}</li>
                <li>{userDetails.node_id}</li>
                <li>{userDetails.avatar_url}</li>

            </ul>
            </React.Fragment>
            
        )
    }
    
    }