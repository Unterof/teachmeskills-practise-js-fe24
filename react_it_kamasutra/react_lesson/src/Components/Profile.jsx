import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <div className="upper-container">
        <img
          className="upper-container-image"
          src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
        ></img>
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_60lI5aocHk7Wt38bnHRx_ajm9u6RmPZPp954i6rrRfYS6K9k&usqp=CAU"></img>{" "}
        <div>profile</div>
      </div>
      <div>My posts</div>
      <div>input : my news</div>
      <button>send</button>
      <div>post 1</div>
      <div>post 2</div>
    </div>
  );
};

export default Profile;
