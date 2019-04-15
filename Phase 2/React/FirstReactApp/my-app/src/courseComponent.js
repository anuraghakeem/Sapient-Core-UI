import React from 'react';
import './courseComponent.css';
export default class CourseComponent extends React.Component {
    render() {
        return  <div className="col-md-3 courseStyle">
                <h1>{this.props.courseDetails.name}</h1>
                <h3>Duration :</h3>{this.props.courseDetails.duration}
                </div>
    
  }

}