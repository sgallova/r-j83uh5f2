import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      texto: '',
      count: 0
    }
  }

  getTextAndCount = (event) => {
    this.setState({ texto: event.target.value, count: event.target.value.length });
  }


  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.getTextAndCount}></textarea>
        <div className="counter">{this.state.count}</div>
      </div>
    );
  }
}

export default App;
