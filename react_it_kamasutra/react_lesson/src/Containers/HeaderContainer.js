import React from "react";
import Header from "./../Components/Header/Header"

import {connect} from "react-redux";

import {getMeAuthorized, logoutMe} from "../redux/auth-reducer";



class HeaderContainer extends React.Component {
      render() {

        return (
            <Header  {...this.props}/>
        )

    }

}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {getMeAuthorized,logoutMe})(HeaderContainer);
