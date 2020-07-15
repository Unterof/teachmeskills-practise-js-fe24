import React from "react";
import styles from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo/ProfileInfo";

import PostSectionContainer from "../../Containers/PostSectionContainer";


const Profile = (props) => {
    

    return (

        <div className={styles.container}>
            <ProfileInfo profile={props.profile}/>

            <PostSectionContainer  />
        </div>
    );
};

export default Profile;


