import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';


import Tabs from "./Tabs";
import Profile from "./Profile";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userId: 'Unterof',
      userData: null,
    };
  }

  submit(e) {
    e.preventDefault();

    if (this.state.userId === '') {
      alert('`userId` is required!!!');

      return;
    }

    this._getUserData();
  }

  async _getUserData() {
    let result = await fetch(`https://api.github.com/users/${this.state.userId}`);
    let userData = await result.json();

    console.warn(userData);

    this.setState({userData});
  }

  change(e) {
    this.setState({
      userId: e.target.value,
    })
  }

  render() {
    return (
      <div className="container">
        <div className='row'><h1>Github competitor</h1></div>
        <div className='row'>
          <form onSubmit={this.submit.bind(this)}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">User ID</label>
              <input
                onChange={this.change.bind(this)}
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.userId}
              />
              <small id="emailHelp" className="form-text text-muted">Enter your GitHub ID here
              </small>
            </div>
            <button type="submit" className="btn btn-primary"> Submit</button>
          </form>
        </div>
        <br/>
        {
          this.state.userData && (
            <>
              <Profile userData={this.state.userData}/>
              <br />
              <Tabs/>
            </>
          )
        }
      </div>
    );
  }
}

export default App;