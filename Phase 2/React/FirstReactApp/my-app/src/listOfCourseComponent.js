import React from 'react';
import ButtonComponent from './courseComponent'
import TextRenderComponent from './lifecycleHooksComponent';
import PostsComponent from './ajaxComponent';
export default class ListOfButtons extends React.Component {
    constructor(){
        super();
        // this.courses=[{name:"React",duration:"3 days"},{name:"Angular",duration:"2 days"},{name:"Node",duration:"1 days"},{name:"Mongo",duration:"5 days"}];
        this.state={buttons:[10,20,30,40,50],text:""}
    }

    addNewButton(){
        //Take value from textbox
        console.log(this.refs.txtInput.value)
        
        this.setState({buttons:[...this.state.buttons,+(this.refs.txtInput.value)]})
    }

    delAButton(){
       
        //Take value from textbox        
        let theButtonToBeDeleted= this.refs.txtInput.value;       
        var theNewList= this.state.buttons.filter(x => x!= theButtonToBeDeleted);       
        this.setState({buttons:theNewList});
    }

    // componentWillUnmount(){
    //     console.log('Unmounting');
    // }


    // addText(){
    //     //Take value from textbox
    //     console.log(this.refs.txtInput2.value)
        
    //     this.setState({text:this.refs.txtInput2.value})
    // }

    render() {
        var list=this.state.buttons.map(c => 
            <ButtonComponent initialCount={c} key={c}/>);
        return  <div className="container">
                <div className="row">
                Enter Number:<input type="text" ref="txtInput"/>
                <button className="btn btn-success" onClick={this.addNewButton.bind(this)}>ADD</button>
                <button className="btn btn-danger" onClick={this.delAButton.bind(this)}>DEL</button>
                <div className="row">{list}</div>
                </div>
                {/* <div className="row">
                <input type="text" ref="txtInput2" onChange={this.addText.bind(this)}/>
                <div className="row">{this.state.text}</div>
                </div> */}
                <TextRenderComponent text={this.state.text} />
                <PostsComponent />
                </div>
    }
}