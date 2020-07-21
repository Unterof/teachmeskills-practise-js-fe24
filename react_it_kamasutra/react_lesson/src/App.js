import React from "react";
import "./css/App.css";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./Containers/DialogsContainer";
import UsersContainer from "./Containers/UsersContainer";
import ProfileContainer from "./Containers/ProfileContainer";
import HeaderContainer from "./Containers/HeaderContainer";



const App = () => {

    return (

 
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
            <Route path="/dialogs" render={() => <DialogsContainer />}/>
            <Route path="/users" render = {() => <UsersContainer/>} />
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
        </div>
        
    );
};

export default App;
