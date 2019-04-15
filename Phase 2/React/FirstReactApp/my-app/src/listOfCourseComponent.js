import React from 'react';
import CourseComponent from './courseComponent'
export default class ListOfCoursesComponent extends React.Component {
    constructor(){
        super();
        this.courses=[{name:"React",duration:"3 days"},{name:"Angular",duration:"2 days"},{name:"Node",duration:"1 days"},{name:"Mongo",duration:"5 days"}];
    }
    render() {
        var list=this.courses.map(c => 
            <CourseComponent courseDetails={c}/>);
        return  <div className="container">
                <div className="row">{list}</div>
                </div>
    }
}