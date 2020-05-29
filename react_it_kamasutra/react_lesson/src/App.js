import React from "react";
import "./css/App.css";

import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import { BrowserRouter,Route} from "react-router-dom";


const App = (props) => {

    return (

        <BrowserRouter>

            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <Route path="/profile" render={() => <Profile state={props.state} addPost={props.addPost} updatePostText={props.updatePostText}exact/>}/>
                <Route path="/dialogs" render={() => <Dialogs state={props.state}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
