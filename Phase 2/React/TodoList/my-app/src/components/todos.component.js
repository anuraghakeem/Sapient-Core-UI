import React from 'react';

export class Todos extends React.Component {
    render() {
        return  <React.Fragment>
        <div>
            <h3>To-Do Id: </h3>{this.props.tododetails.id}<br/>
            <h3>To-Do Title:</h3> {this.props.tododetails.title}<br/>
            <h3>To-Do Status:</h3> {this.props.tododetails.completed.toString()}
        </div>
    </React.Fragment>
    }
}
