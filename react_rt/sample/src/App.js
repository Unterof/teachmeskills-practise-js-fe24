import React from 'react';
import './App.css';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Button from './Button';

const INITIAL_VALUE = 0;

class App extends React.Component {
  constructor() {
    super();

    // this.addToCount = this.addToCount.bind(this);
    // this.reset = this.reset.bind(this);
    // this.deductCount = this.deductCount.bind(this);

    this.state = {
      counter: INITIAL_VALUE,
    };
  }

  addToCount() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  reset() {
    this.setState({
      counter: INITIAL_VALUE,
    });
  }

  deductCount() {
    let nextValue;
    if (this.state.counter <= 0) {
      nextValue = 0;
    } else {
      nextValue = this.state.counter - 1;
    }

    this.setState({
      counter: nextValue,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <div className="btn-group" role="group" aria-label="Basic example">
          <Button title='-' onClick={this.deductCount.bind(this)} color='green'/>
          <Button title='refresh' onClick={this.reset.bind(this)} color='yellow'/>
          <Button title='+' onClick={this.addToCount.bind(this)} color='red'/>
        </div>
      </div>
    );
  }
}

export default App;