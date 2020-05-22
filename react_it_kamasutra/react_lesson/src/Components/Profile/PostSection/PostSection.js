import React from 'react' ;
import Post from './Posts/Post';
import styles from './PostSection.module.css'


const PostSection = (props) => {

    let postsElement = props.posts.map(el => {

        return (

            <Post message = {el.message} likesCount = {el.likesCount} />
        )

    })


    return (
 <div className={styles.container}>  
 <div>My posts</div>
      <textarea className={styles.containerInput}>input : my news</textarea>
      <div className = {styles.containerButton}>
          <button>Add</button>
      </div>
      
     {postsElement}

 </div>
    )
}

export default PostSection ;