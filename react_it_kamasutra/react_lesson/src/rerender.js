import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostText} from "./state";






export let rerenderEntireTree =(state) => {
    ReactDOM.render(

            <App state={state} addPost={addPost} updatePostText={updatePostText}/>


,document.getElementById('root')
    );
}




