import React from 'react';
import classes from "../Profile.module.css"

const ProfileInfo = () => {
    return (
        <div className={classes.upper_container}>
        <img
          className={classes.upper_container_image}
          src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        />

        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_60lI5aocHk7Wt38bnHRx_ajm9u6RmPZPp954i6rrRfYS6K9k&usqp=CAU" />
        <div>profile</div>
        </div>
      </div>

      
     
      
    )
}

export default ProfileInfo;