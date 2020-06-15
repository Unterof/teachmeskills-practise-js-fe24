import React from "react";
import "./css/App.css";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./Containers/DialogsContainer";



const App = (props) => {

    return (

 
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route exact path="/profile" render={() => <Profile />}/>
            <Route path="/dialogs" render={() => <DialogsContainer />}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
        </div>
        
    );
};

export default App;
