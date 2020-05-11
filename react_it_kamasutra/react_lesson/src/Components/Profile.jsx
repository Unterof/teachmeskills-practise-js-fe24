import React from "react";
import classes from "./css/Profile.module.css"
import Post from  "./Posts/Post"

const Profile = () => {
  return (
    <div className={classes.container}>
      <div className={classes.upper_container}>
        <img
          className={classes.upper_container_image}
          src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_60lI5aocHk7Wt38bnHRx_ajm9u6RmPZPp954i6rrRfYS6K9k&usqp=CAU" />{" "}
        <div>profile</div>
      </div>
      <div>My posts</div>
      <textarea>input : my news</textarea>
      <button>Add</button>
      <Post message="Hello, I'm trying to understand prop's in react" likesCount = "5"/>
      <Post message="Good luck man" likesCount = "24"/>
    </div>
  );
};

export default Profile;


