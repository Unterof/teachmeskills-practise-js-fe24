import React from "react";
import styles from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSection from "./PostSection/PostSection";


const Profile = (props) => {


    return (
        <div className={styles.container}>
            <ProfileInfo/>

            <PostSection posts={props.state.postsSection} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;


