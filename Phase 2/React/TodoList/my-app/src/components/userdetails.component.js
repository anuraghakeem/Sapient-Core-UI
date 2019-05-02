import React from 'react';

export class UserDetails extends React.Component {
    render() {
        console.log()
        return  <React.Fragment>
                <h4>Name:</h4> {this.props.userDetails.name}<br/>
                <h4>Email:</h4> {this.props.userDetails.email}<br/>
                <h4>Address:</h4> <br/>
                <strong>Street:</strong> {this.props.userDetails.address.street}<br/>
                <strong>Suite:</strong> {this.props.userDetails.address.suite}<br/>
                <strong>City:</strong> {this.props.userDetails.address.city}<br/>
                <strong>Zipcode:</strong> {this.props.userDetails.address.zipcode}<br/>
                <strong>Phone:</strong> {this.props.userDetails.phone}<br/>
                <strong>Website:</strong> {this.props.userDetails.website}<br/>
        </React.Fragment>
    }
}
