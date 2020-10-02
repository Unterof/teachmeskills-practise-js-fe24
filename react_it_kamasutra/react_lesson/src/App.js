import React from "react";
import "./css/App.css";
import Navbar from "./Components/Navbar/Navbar";
import { withRouter } from "react-router";
import {Route} from "react-router-dom";
import DialogsContainer from "./Containers/DialogsContainer";
import UsersContainer from "./Containers/UsersContainer";
import ProfileContainer from "./Containers/ProfileContainer";
import HeaderContainer from "./Containers/HeaderContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./assets/Preloader/Preloader";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialize) {
           return  <Preloader/>
         }
        return (

            <div className="app-wrapper">

                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <HeaderContainer/>
                <Navbar/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/login" render={() => <Login/>}/>

            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {

        initialize: state.appSection.initialized
    }
}

export default compose(withRouter,connect(mapStateToProps, {initializeApp})) (App);
