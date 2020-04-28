import React from "react";
import post from "./Post.module.css";

const Post = () => {
  return (
    <div className={post.container}>
      <img
        className={post.post_ava}
        src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"
      />
      <div className={post.post_container}>
        post 1
        <div className={post.like}>like</div>
      </div>
    </div>
  );
};

export default Post;
