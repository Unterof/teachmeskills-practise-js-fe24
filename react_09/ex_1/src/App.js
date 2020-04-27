import React from "react";
import logo from "./logo.svg";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import countryData from "./data/countries";
import statesData from "./data/states";
import citiesData from "./data/cities";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      delivery:'no',
      countryId: null,
      stateId: null,

      countryStates:[],
      stateCities:[]
    };
  }

  onChange(name,e) {
    this.setState({
      [name]: e.target.value,
    })
  }

  onCountryChanged(e){
  this.setState({
    countryId:e.target.value,
  })
  

  let countryStates = [];
  statesData.forEach((state)=>{
    if (state['country_id'] === +e.target.value) {
      countryStates.push(state)
      
  }
  });
  this.setState({
    countryStates
  });
  }

  onStateChanged(e) {
    this.onChange('stateId',e);

    let stateCities = [];
    citiesData.forEach((city) => {
      if (city['state_id'] === +e.target.value) {
        stateCities.push(city);
      }
    });
    this.setState({
      stateCities,
    });
  }



  
  onFirstNameChange(e){
   this.setState({
     firstName:e.target.value,
     
   }) 
      }

  onLastNameChange(e){
    this.setState({
      lastName:e.target.value,
    })
  }

  onDeliveryChange(e){
    this.setState({
      delivery:e.target.value,
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="header-label"> React Checkout </h1>
        <div className="form-group">
          <label>
            First Name
            <input
            onChange={this.onFirstNameChange.bind(this)}
              name="First Name"
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="First Name"
              value={this.state.firstName}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            Last Name
            <input
            onChange={this.onLastNameChange.bind(this)}
              name="Last Name"
              type="text"
              aria-label="Last name"
              className="form-control"
              placeholder="Last Name"
              value={this.state.lastName}
            />
          </label>
        </div>
     {/* -------------------------------------------------radio check----------------------------------------------------------------------------------- */}

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="delivery"
            onChange={this.onDeliveryChange.bind(this)}
            value="yes"
            checked={this.state.delivery==='yes'}
          />
          <label className="form-check-label" for="exampleRadios1">
            Delivery Yes
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="delivery"
            onChange={this.onDeliveryChange.bind(this)}
            value="no"
            checked={this.state.delivery==='no'}
          />
          <label className="form-check-label" for="exampleRadios2">
            Delivery No
          </label>
        </div>
        {/* -------------------------------------------------country select----------------------------------------------------------------------------------- */}
        <div className="form-group">
          <select className="form-control">
            onChange={this.onCountryChanged.bind(this)}
            <option>... Select country ...</option>
            {
              countryData.map((countryData)=> <option  value={countryData['id']}>{countryData['name']}</option>)
            }
        
          </select>
        </div>

        <div className="form-group">
        <select
              className="form-control"
              onChange={this.onStateChanged.bind(this)}
            >
              <option>... Select state ...</option>
              {
                this.state.countryStates.map((state) =>
                  <option value={state['id']} >{state['name']}</option>)
              }
            </select>
        </div>

        <div className="form-group">
          <select className="form-control">
          <option>... Select city ...</option>
          {/* {cityData.map((cityData)=><option option={cityData['id']}>{cityData['name']}</option>) } */}
          </select>
        </div>
        {/* -------------------------------------------------payment--------------------------------------------------------------------------- */}
        <label>Payment:</label>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio1"
            name="customRadio"
            class="custom-control-input"
          />
          <label className="custom-control-label" for="customRadio1">
            Cash
          </label>
        </div>
        <div className="custom-control custom-radio">
          <input
            type="radio"
            id="customRadio2"
            name="customRadio"
            class="custom-control-input"
          />
          <label className="custom-control-label" for="customRadio2">
            Credit Card
          </label>
        </div>

        <div className="form-group">
        
            <input
              name="cardNumber"
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="Card Number"
            />
        
        

        
         
            <input
              name="expDate"
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="Exp Date"
            />
         
        

       
         
            <input
              name="cVV"
              type="text"
              aria-label="First name"
              className="form-control"
              placeholder="CVV "
            />
          
        </div>

        <button type="button" className="btn btn-warning">Submit</button>

      </div>
    );
  }
}

export default App;
