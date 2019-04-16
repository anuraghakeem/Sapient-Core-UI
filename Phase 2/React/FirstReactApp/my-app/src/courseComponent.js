import React from 'react';
import './courseComponent.css';
export default class ButtonComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={count:this.props.initialCount};
  }
  incrementCount(){
    //change logic
    // this.state.count++;
    this.setState({count:this.state.count+1})
  }    
  render() {
      return  <button className="btn btn-primary"
      onClick={this.incrementCount.bind(this)}>
                {this.state.count}
                </button>
  }
}