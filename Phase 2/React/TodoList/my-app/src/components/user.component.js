import React from 'react';
import { Todos } from './todos.component';
import { UserDetails } from './userdetails.component';
import {NavBar} from './navbar.component';

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {id: props.match.params.id};
    }
    render() {

        let todos = this.props.allTodos.filter((val) => this.state.id == val.userId);
        let userDetails =  this.props.allUsers.find((val) => this.state.id == val.id);      
        let todosToBeDisplayed = todos.map((val,i) => <Todos tododetails={val} key={val.id}/>)
        console.log(userDetails);
        return  <React.Fragment>
            <NavBar />    
        <div className="container">
            <UserDetails userDetails = {userDetails}/>
            <h2> Todos </h2>
            {todosToBeDisplayed}
        </div>        
        </React.Fragment>
    }
}
