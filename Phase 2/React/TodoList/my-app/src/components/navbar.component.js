import React from 'react';
import {Link} from 'react-router-dom'

export class NavBar extends React.Component{
    render(){
        return <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/users" className="nav-link" >Home <span className="sr-only">(current)</span></Link> &nbsp;&nbsp;
                        </li>
                        <li className="nav-item active">
                            <Link to="/addUser" className="nav-link" >Add New User <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            </React.Fragment>
    }
}