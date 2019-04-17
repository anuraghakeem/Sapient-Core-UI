import React from 'react';

export default class TextRenderComponent extends React.Component {
    constructor(props){
      super(props);
      this.state={count:this.props.initialCount};
      this.state={buttons:[10,20,30,40,50],text:""}
    }
    addText(){
        //Take value from textbox
        console.log(this.refs.txtInput2.value)
        
        this.setState({text:this.refs.txtInput2.value})
    }

    
    componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('did mount')
    }

    shouldComponentUpdate(){
        //Called before render
        // console.log(this.state);
        //Three parameters: 
        console.log('shouldComponentUpdate');
        console.log(arguments);

        if(arguments[1].text.length<10)
            return true;
        else return false;
    }

    componentWillUpdate(){
        console.log('componentWillUpdate');
    }

    componentDidMount(){
        console.log('componentdidUpdate');
    }

    render() {
        console.log('render');
        // console.log(this.state);
        return <div className="row">
                <input type="text" ref="txtInput2" onChange={this.addText.bind(this)}/>
                <div className="row">{this.state.text}</div>
                </div>
    }
  }