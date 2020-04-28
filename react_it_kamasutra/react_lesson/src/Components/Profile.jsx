import React from "react";
import profile from "./css/Profile.module.css"
import Post from "./Posts/Post"

const Profile = () => {
  return (
    <div className={profile.container}>
      <div className={profile.upper_container}>
        <img
          className={profile.upper_container_image}
          src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        ></img>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_60lI5aocHk7Wt38bnHRx_ajm9u6RmPZPp954i6rrRfYS6K9k&usqp=CAU"></img>{" "}
        <div>profile</div>
      </div>
      <div>My posts</div>
      <textarea>input : my news</textarea>
      <button>Add</button>
      <Post />
      <Post />
    </div>
  );
};

export default Profile;
