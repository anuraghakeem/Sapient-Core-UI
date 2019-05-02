import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import {UserList} from './userlist.component';
import {User} from './user.component';
import AddUser from './adduser.component'
export class RouterApp extends React.Component {
    componentDidMount() {
        this.props.FetchTodos();
        this.props.FetchUsers();
    }
    render() {
        return <div>
            <Switch>
                <Route path="/" exact render={()=> <Redirect to={{pathname: '/users'}}/>}/>
                <Route path="/users" exact render={() => <UserList {...this.props} />} />
                <Route path="/view/:id" exact render={(props)=> <User {...props}{...this.props}/>}/>
                <Route path="/addUser" render={() => <AddUser {...this.props} />} />
            </Switch>
        </div>
    }
}