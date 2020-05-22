import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dialogs = [

        {name: "Kirill",message: "Hi",id: "1"},
        {name: "Dmitry",message: "Hello how are you?",id: "2",},
        {name: "Ksenya",message: "I have enough time",id: "3",},
        {name: "Valery",message: "You need to learn javascript more!",id: "4",},
        {name: "Zohan",message: "Men you look crazy",id: "5",}


]

const posts = [

            {message: "Hello, I'm trying to understand prop's in react", likesCount : "5"},
            {message: "Good luck man" , likesCount : "24"}

]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs}/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
