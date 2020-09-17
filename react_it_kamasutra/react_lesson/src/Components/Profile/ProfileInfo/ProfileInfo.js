import React from "react";
import styles from "../Profile.module.css"
import avatar from "../../../assets/image/avatar.jpg"
import StatusField from "../../../Containers/StatusField";

const ProfileInfo = (props) => {
if (!props.profile){
    return (
        <img
            alt='avatar'

        src = {avatar}/>
    )

}

    return (
        <div className={styles.upper_container}>
            <img
                className={styles.upper_container_image}
                alt='1'
                src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
            />

            <div className = {styles.avaSection}>

                <img
                alt='avatar'
                    src={props.profile.photos.large}/>
                    <div>
                        <StatusField status={props.status} updateUserStatus={props.updateUserStatus}/>
                    </div>

             <p className={styles.aboutMe}>{props.profile.aboutMe}</p>
                {/*<img alt="avatar" src={avatar}/>*/}
            </div>
                <div>
                    <p className={styles.fullName}>{props.profile.fullName}</p>
                </div>

        </div>


    )
}

export default ProfileInfo;