import React from "react";
import Header from "./../Components/Header/Header"

import {connect} from "react-redux";

import {getMeAuthorized, logoutMe} from "../redux/auth-reducer";



class HeaderContainer extends React.Component {
    componentDidMount() {

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        this.props.getMeAuthorized()
        // usersAPI.authMe()
        //     .then(response => {
        //             if (response.resultCode === 0) {
        //
        //                 let {id, email, login} = response.data;
        //                 this.props.setAuthUserData(id,email,login)
        //
        //
        //             }
        //
        //
        //         }
        //     )
    }

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
