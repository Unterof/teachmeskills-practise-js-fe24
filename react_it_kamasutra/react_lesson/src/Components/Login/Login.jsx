import React from 'react';

import LoginForm from './LoginForm';
import {reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {loginMe} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";


const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = ({loginMe,isAuth,captcha}) => {
    const formSubmit = (formData) => {

        loginMe(formData.email, formData.password, formData.rememberMe,formData.captcha)

    }
    if (isAuth) { return <Redirect to={`/profile`}/>}


    return (
           <div>
                <h2>LOGIN</h2>
                <LoginReduxForm onSubmit={formSubmit} captcha={captcha}/>


            </div>
    );
};

let mapStateToProps = (state) => ({
    isAuth : state.auth.isAuth,
    captcha : state.auth.captcha

})


export default connect (mapStateToProps, {loginMe}) (Login);