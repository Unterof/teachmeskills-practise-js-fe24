import React from 'react';

import {required} from '../../utils/formHelpersFunctions';
import {CreateField, Input} from '../common/FormControls/FormControls';
import styles from './../Header/Header.module.css'



const LoginForm = ({handleSubmit,error,captcha}) => {

    return (

        <form onSubmit={handleSubmit}>

            {CreateField("email",[required],"email",Input)}
            {CreateField("password",[required],"password",Input,{type:"password"})}
            <span className={styles.formOnError}> {error}</span>
            {captcha && <div><img alt='captcha' src={captcha}/></div>  }
            {captcha && CreateField("",[required],"captcha",Input)}
            {CreateField(null,null,"rememberMe",Input, {type:"checkbox"},null,"Remember Me")}

            <div>
                <button>SUBMIT</button>
            </div>

        </form>
    )

}

export default LoginForm