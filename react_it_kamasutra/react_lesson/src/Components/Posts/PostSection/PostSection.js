import React from 'react' ;
import Post from '../Post';
import post from './PostSection.module.css'


const PostSection = () => {
    return (
 <div className={post.container}>  
 <div>My posts</div>
      <textarea className={post.containerInput}>input : my news</textarea>
      <div className = {post.containerButton}>
          <button>Add</button>
      </div>
      
      <Post message="Hello, I'm trying to understand prop's in react" likesCount = "5"/>
      <Post message="Good luck man" likesCount = "24"/>

 </div>
    )
}

export default PostSection ;