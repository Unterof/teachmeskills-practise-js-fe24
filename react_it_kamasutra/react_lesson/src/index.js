
import * as serviceWorker from './serviceWorker';

import store from './state'
import ReactDOM from "react-dom";
import './index.css'
import App from "./App";
import React from "react";

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <App state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>


        , document.getElementById('root')
    );

}

    rerenderEntireTree(store.getState());

    store.subscriber(rerenderEntireTree);

serviceWorker.unregister();

