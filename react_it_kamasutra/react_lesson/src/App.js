import React from "react";
import "./css/App.css";
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./Containers/DialogsContainer";
import UsersContainer from "./Containers/UsersContainer";
import ProfileContainer from "./Containers/ProfileContainer";
import HeaderContainer from "./Containers/HeaderContainer";
import Login from "./Components/Login/Login";



const App = () => {

    return (

 
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/dialogs" render={() => <DialogsContainer />}/>
            <Route path="/users" render = {() => <UsersContainer/>} />
            <Route path="/login" render = {() => <Login/>} />

        </div>
        
    );
};

export default App;
