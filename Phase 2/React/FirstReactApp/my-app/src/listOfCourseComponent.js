import React from 'react';
import ButtonComponent from './courseComponent'
export default class ListOfButtons extends React.Component {
    constructor(){
        super();
        // this.courses=[{name:"React",duration:"3 days"},{name:"Angular",duration:"2 days"},{name:"Node",duration:"1 days"},{name:"Mongo",duration:"5 days"}];
        this.state={buttons:[10,20,30,40,50]}
    }

    addNewButton(){
        //Take value from textbox
        console.log(this.refs.txtInput.value)
        
        this.setState({buttons:[...this.state.buttons,+(this.refs.txtInput.value)]})
    }

    delAButton(){
        //Take value from textbox
        console.log(this.refs.txtInput.value)
        let theButtonToBeDeleted= this.refs.txtInput.value;
        var theNewList= this.state.buttons.filter(v=>v!==theButtonToBeDeleted);
        this.setState({buttons:theNewList});
    }
    render() {
        var list=this.state.buttons.map(c => 
            <ButtonComponent initialCount={c} key={c}/>);
        return  <div className="container">
                Enter Number:<input type="text" ref="txtInput"/>
                <button className="btn btn-success" onClick={this.addNewButton.bind(this)}>ADD</button>
                <button className="btn btn-danger" onClick={this.delAButton.bind(this)}>DEL</button>
                <div className="row">{list}</div>
                </div>
    }
}