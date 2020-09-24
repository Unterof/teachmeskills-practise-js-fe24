import React from 'react';
import { Field } from "redux-form";
import { required } from '../../utils/FormControls';
import { Input } from '../common/FormControls/FormControls';



const LoginForm = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"email"}
                    validate={[required]}
                    name={"email"} component={Input} />
            </div>
            <div>
                <Field placeholder={"Password"}
                    validate={[required]}
                    name={"password"} type={"password"} component={Input} />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> Remember Me
            </div>
            <div>
                <button>SUBMIT</button>
            </div>
        </form>
    )

};

export default LoginForm