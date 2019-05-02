import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from './navbar.component'


export class UserList extends React.Component {
    render() {
        let usersToBeDisplayed = this.props.allUsers.map(val => <li key={val.id}><Link to={"/view/"+val.id} >
        {val.name}</Link></li>);
        return  <React.Fragment>
                    <NavBar/>
                    <h1>Users</h1>
                        <ul>{usersToBeDisplayed}</ul>
                </React.Fragment>
    }
}
