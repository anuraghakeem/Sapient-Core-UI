import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={count:0}
  }
  increment(){
    this.setState({count:this.state.count+1});
  }
  render(){
    return (
      <div className="App">
        <p>Count : {this.state.count}</p>
        <button onClick={this.increment.bind(this)}>Increment Count</button>
      </div>
    );
  }
}

export default App;
