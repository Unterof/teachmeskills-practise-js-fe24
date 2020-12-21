import React from "react";
import styles from "./Profile.module.css";
import {required} from "../../utils/formHelpersFunctions";
import {CreateField, Input, Textarea} from "../common/FormControls/FormControls";
import {reduxForm} from "redux-form";


const ProfileDataForm =({handleSubmit,profile,error})=>{


return (

    <form onSubmit={handleSubmit} >
     <button >save</button>
        <div>

            {error &&<div> <span  className={styles.formOnError}> {error}</span></div>}
            
            <p className={styles.fullName}>{CreateField("Full name",[required],"fullName",Input,)}</p>
        </div>
        <div>
            <b>Looking for a job:{CreateField("looking For A Job",null,"lookingForAJob",Input,{type:"checkbox"}) }</b>
        </div>

        <div>
            <b>Professional skills :{CreateField("Skills",null,"lookingForAJobDescription",Textarea) } </b>
        </div>
        <div>
            <b>About me : {CreateField("About Me",null,"aboutMe",Textarea) }</b>
        </div>
        <div className={styles.contacts}>
           {Object.keys(profile.contacts).map(key => {
                   return <div className={styles.contacts} key={key}>{key}:{CreateField(key,null,`contacts.${key}`,Input,)} </div> }
               
           )}
        </div>
    </form>
)
}

const ProfileDataFormContainer =  reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormContainer

