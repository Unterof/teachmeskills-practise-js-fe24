import React from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "React Timer",
    };
  }
  render() {
    return (
      <div className="App">
        <div>React Timer</div>
        <div>H M S</div>
        <div class="time">02 : 30 : 30 </div>
        <div>
          <div class="row-1">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div class="row-2">
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
          <div class="row-3">
            <span>7</span>
            <span>8</span>
            <span>9</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
