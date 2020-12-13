import React from "react";
import styles from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSectionContainer from "../../Containers/PostSectionContainer";


const Profile = (props) => {
    

    return (

        <div className={styles.container}>
            <ProfileInfo saveProfile={props.saveProfile} updateUserPhoto={props.updateUserPhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
            <PostSectionContainer  />
        </div>
    );
};

export default Profile;


