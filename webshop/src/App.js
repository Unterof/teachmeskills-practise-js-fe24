import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import Login from './containers/Login';
import Products from './containers/Products';
import MyCart from './components/MyCart';

import data from './data/data';

function App({loadProducts, products, cartItems}) {
    useEffect(() => {
        loadProducts(data);
    }, []);

    function renderNavigation() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Webshop</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/" exact>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/products">Products ({products.length})</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' activeClassName='active' to="/cart">My Cart ({cartItems.length})</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

    return (
        <div className="container">
            {renderNavigation()}
            <h1>Webshop</h1>

            <Switch>
                <Route path="/" exact>
                    <h3>Hello to Webshop!</h3>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/products">
                    <Products />
                </Route>
                <Route path="/cart">
                    <MyCart />
                </Route>
            </Switch>
        </div>
    );
}

App.propTypes = {
    cartItems: PropTypes.array,
};

export default App;