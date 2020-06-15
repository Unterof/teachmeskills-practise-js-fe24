import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/redux-store";

let rerenderEntireTree = (state) => {


    ReactDOM.render(
        <BrowserRouter>
        <Provider store={store}>

            <App />

        </Provider>
        </BrowserRouter> , document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());

store.subscribe(() => {

    let state = store.getState();
        rerenderEntireTree(state);
});

// state={state} dispatch={store.dispatch.bind(store)}