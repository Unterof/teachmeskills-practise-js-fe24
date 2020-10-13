import React from 'react' ;
import Post from './Posts/Post';
import styles from './PostSection.module.css'
import PostSectionForm from './PostSectionForm';


const PostSection = (props) => {

    let postsElement = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    // let newPostElement = React.createRef();

    let onAddPost = (value) => {
        props.addPostActionCreator(value.postItem);
    }


    // let onPostChange = () => {

    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text)
    //     // props.dispatch(action);

    // }


    return (

        <div className={styles.container}>
     
            <PostSectionForm onSubmit={onAddPost}/>
            {/* <div>My posts</div>
            <div className={styles.containerInput}>
                <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}
                          placeholder='Type your post'/>
            </div>
            <div className={styles.containerButton}>
                <button onClick={onAddPost}>Add</button>
            </div> */}
          
          
          <div>{postsElement}</div>
            

        </div>
    )
}

export default PostSection;