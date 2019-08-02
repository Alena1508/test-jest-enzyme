import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(event) {
    this.setState({counter: this.state.counter + 1});
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <div>{this.state.value}</div>
        <button
          onClick={this.buttonClicked}
          data-test="increment-button"
        >
          Click
        </button>
      </div>
    );
  }
}

export default App;
