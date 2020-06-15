import React from 'react';
import styles from "../Profile.module.css"

const ProfileInfo = () => {
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_60lI5aocHk7Wt38bnHRx_ajm9u6RmPZPp954i6rrRfYS6K9k&usqp=CAU"/>
                <div>profile</div>
            </div>
        </div>


    )
}

export default ProfileInfo;