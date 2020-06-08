import React from 'react' ;
import Post from './Posts/Post';
import styles from './PostSection.module.css'
import {addPostActionCreator, onPostChangeActionCreator} from "../../../state";




const PostSection = (props) => {

    let postsElement = props.posts.posts.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }



    let onPostChange = () => {

        let text = newPostElement.current.value;
        let action = onPostChangeActionCreator(text)
        props.dispatch(action);


    }


    return (

        <div className={styles.container}>
            <div>My posts</div>
            <div className={styles.containerInput}>
                <textarea ref={newPostElement} value={props.posts.newPostText} onChange={onPostChange}/>
            </div>
            <div className={styles.containerButton}>
                <button onClick={addPost}>Add</button>
            </div>

            {postsElement}

        </div>
    )
}

export default PostSection;