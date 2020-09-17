import React from 'react';

import LoginForm from './LoginForm';
import  {reduxForm}  from 'redux-form';



const LoginReduxForm = reduxForm({form:'login'})(LoginForm)

const Login = (props) => {
   const formSubmit = (dataForm) => {
        console.log(dataForm)
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={formSubmit}/>

        </div>
    );
};


export default Login;