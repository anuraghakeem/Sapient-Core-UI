import React from 'react';

 class TextRenderComponent extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { count: this.props.initialCount };
        this.state = { text: "" }
    }
    addText() {
        //Take value from textbox
        console.log("--- addText start ---")
        console.log(this.refs.txtInput2.value)
        this.setState({ text: this.refs.txtInput2.value })
        console.log("--- addText finish ---")
    }

    componentWillMount() {
        console.log('---componentWillMount---')
    }

    // --- render ---

    componentDidMount() {
        console.log('---componentDidMount---')
    }

    shouldComponentUpdate() {
        //Called before render
        // console.log(this.state);
        //Three parameters: 1. Arguments
        console.log('---shouldComponentUpdate start---')
        console.log(arguments)

        if (arguments[1].text.length < 10){
            console.log('---shouldComponentUpdate over---')
            return true;
        }
            
        else{
            console.log('---shouldComponentUpdate over---');
            return false;
        }   
    }

    componentWillUpdate() {
        console.log('---componentWillUpdate---')
    }

    componentDidUpdate() {
        console.log('---componentdidUpdate---')
    }

    render() {
        console.log('---render---');
        // console.log(this.state);
        return  <div className="row">
                <input type="text" ref="txtInput2" onChange={this.addText.bind(this)} />
                <div className="row">{this.state.text}</div>
                </div>
    }
}
export default TextRenderComponent;