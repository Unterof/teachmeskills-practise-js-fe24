import React from 'react'
import styles from './FormControls.module.css'
import {Field} from "redux-form";


const FormControl = ({input,meta:{touched,error},children}) => {
    const  hasError= touched && error;
    return (
        <div className={styles.formControl + ' '+ (hasError ? styles.error : '')}>
        <div>
        {children}
         </div>
         {hasError &&  <div><span>{error}</span></div>}
     </div>
    )
}

export const Textarea = (props) => {
   const  {input,meta,child,...restProps} = props
    return (
      
    <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
        
        
    )
}

export const Input = (props) => {
    const  {input,meta,child,...restProps} = props
    return (
      
    <FormControl {...props}><input {...input} {...restProps}/></FormControl>
        
        
    )
}

export const CreateField = (placeholder,checker,name,cmp, props = {},text = "") => {
    return (
        <div>
        <Field placeholder={placeholder} validate = {checker}  name = {name} component = {cmp} {...props} />
            {text}
        </div>
    )
}
