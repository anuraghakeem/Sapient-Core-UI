import React, { Component } from 'react';
import {NavBar} from './navbar.component';
import {Link} from 'react-router-dom';
export default class AddUser extends Component {
    bindfunction() {
        let formvalues = {
            id: this.refs.id.value,
            name: this.refs.name.value,
            username: this.refs.username.value,
            email: this.refs.email.value,
            address: {
                street: this.refs.street.value,
                suite: this.refs.suite.value,
                city: this.refs.city.value,
                zipcode: this.refs.zip.value

            },
            phone: this.refs.phone.value,
            website: this.refs.website.value
        };
        this.props.AddNewUser.bind(this,formvalues)();
    }
    render() {
        return (<React.Fragment>
            <NavBar/>
            <div className="container mt-4">
            <form>
                    <input className="form-control col-md-12 mb-4" ref="name" type="text" name="name"placeholder="name"/>
                    <input className="form-control col-md-12 mb-4" ref="id" type="text" name="id"placeholder="ID"/>
                    <input className="form-control col-md-12 mb-4" ref="username" type="text" name="username"placeholder="username"/>
                    <input className="form-control col-md-12 mb-4" ref="email" type="email" name="email"placeholder="email"/>
                    <input className="form-control col-md-12 mb-4" ref="street" type="text" name="street"placeholder="street"/>
                    <input className="form-control col-md-12 mb-4" ref="suite" type="text" name="suite"placeholder="suite"/>
                    <input className="form-control col-md-12 mb-4" ref="city" type="text" name="city"placeholder="city"/>
                    <input className="form-control col-md-12 mb-4" ref="zip" type="text" name="zipcode"placeholder="zipcode"/>
                    <input className="form-control col-md-12 mb-4" ref="phone" type="text" name="phone"placeholder="phone"/>
                    <input className="form-control col-md-12 mb-4" ref="website" type="text" name="website"placeholder="website"/>
                    <Link to="/" type="button"  className="btn btn-primary mb-5" onClick={this.bindfunction.bind(this)}> Add New User </Link>
             </form>
    </div>
        </React.Fragment>
        );
    }
}