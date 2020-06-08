import * as serviceWorker from './serviceWorker';

import store from './state'
import ReactDOM from "react-dom";
import './index.css'
import App from "./App";
import React from "react";
import {BrowserRouter} from "react-router-dom";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter> , document.getElementById('root')
    );

}

rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);

serviceWorker.unregister();

