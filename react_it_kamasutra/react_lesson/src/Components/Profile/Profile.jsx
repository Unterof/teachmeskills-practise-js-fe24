import React from "react";
import classes from "./Profile.module.css"
import Post from  "../Posts/Post"
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
  return (
    <div className={classes.container}>
    <ProfileInfo />
      <div>My posts</div>
      <textarea>input : my news</textarea>
      <button>Add</button>
      <Post message="Hello, I'm trying to understand prop's in react" likesCount = "5"/>
      <Post message="Good luck man" likesCount = "24"/>
    </div>
  );
};

export default Profile;


