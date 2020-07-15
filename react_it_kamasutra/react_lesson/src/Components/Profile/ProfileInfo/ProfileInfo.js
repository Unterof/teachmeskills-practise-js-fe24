import React from "react";
import styles from "../Profile.module.css"
import avatar from "../../../assets/image/avatar.jpg"

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

            <div>

                <img
                alt='avatar'
                    src={props.profile.photos.large}/>


                {/*<img alt="avatar" src={avatar}/>*/}

                <div>profile</div>
            </div>
        </div>


    )
}

export default ProfileInfo;