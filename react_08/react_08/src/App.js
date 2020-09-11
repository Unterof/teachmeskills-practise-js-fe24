import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css";
import Button from "./Button";

const INITIAL_VALUE = 0;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: INITIAL_VALUE,
    };
    this.onPlus = this.onPlus.bind(this);
    this.onMinus = this.onMinus.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onPlus() {
    console.log("on plus");
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  onMinus() {


    this.setState({
      counter: this.state.counter - 1,
    });
  }

  onReset() {
    this.setState({
      counter: INITIAL_VALUE,
    });

    
  }


  
  render() {
    return (
      <div className="App">
        <h1>{this.state.counter}</h1>
        <div>
          <Button title="-" onClick={this.onMinus} color = 'red' />
          <Button title="reset" onClick={this.onReset} color = 'yellow' />
          <Button title="+" onClick={this.onPlus} color = 'green'/>
        </div>
      </div>
    );
  }
}

export default App;
