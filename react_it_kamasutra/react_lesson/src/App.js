import React from "react";
import "./css/App.css";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {Route} from "react-router-dom";


const App = (props) => {

    return (


        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Route exact path="/profile" render={() => <Profile state={props.state} dispatch={props.dispatch}/>}/>
            <Route path="/dialogs" render={() => <Dialogs store={props.store} state={props.state} dispatch={props.dispatch}/>}/>
            <Route path="/news" render={() => <News/>}/>
            <Route path="/music" render={() => <Music/>}/>
            <Route path="/settings" render={() => <Settings/>}/>
        </div>

    );
};

export default App;
