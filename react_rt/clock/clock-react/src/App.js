import React from "react";
import moment from "moment";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isVisible: true,
      time: this.getTime(),
      date: this.getDate(),
    };

    setInterval(() => {
      this.setState({
        time: this.getTime(),
        date: this.getDate(),
      });
    }, 1000);
  }

  getTime() {
    return moment().format("h:mm:ss a");
  }

  getDate() {
    return moment().format("MMMM Do YYYY");
  }

  toggle() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  render() {
    return (
      <div className="App">
        <h1> React Clock </h1>
        <div>
          {/* <button className="btn btn-success" onClick={this.toggle.bind(this)}>
            {this.state.isVisible === true ? "hide" : "show"}
          </button> */}
          <BootstrapSwitchButton
            checked={this.state.isVisible}
            size="sm"
            onstyle="outline-success" offstyle="outline-danger"
            onlabel="Off"
            offlabel="On"
            onChange={this.toggle.bind(this)}
          />
        </div>
        <h2> {this.state.time} </h2>
        {this.state.isVisible && <h3> {this.state.date} </h3>}
      </div>
    );
  }
}

export default App;
