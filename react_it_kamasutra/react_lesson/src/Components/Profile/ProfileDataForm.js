import React from "react";
import styles from "./Profile.module.css";
import {required} from "../../utils/formHelpersFunctions";
import {CreateField, Input, Textarea} from "../common/FormControls/FormControls";
import {reduxForm} from "redux-form";


const ProfileDataForm =({handleSubmit})=>{
return (

    <form onSubmit={handleSubmit}>
        <div>
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
        {/*<div className={styles.contacts}>*/}
        {/*    {Object.keys(profile.contacts).map(key => {*/}
        {/*            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
        {/*        }*/}
        {/*    )}*/}
        {/*</div>*/}
    </form>
)
}

const ProfileDataFormContainer =  reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormContainer

