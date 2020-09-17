import React from 'react';
import styles from './PostSection.module.css'
import {  Field, reduxForm  } from 'redux-form';


const PostSectionForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                <div>My posts</div>
            <div className={styles.containerInput}>
                <Field component="TextArea" name="postItem"
                          placeholder='Type your post'/>
            </div>
            <div className={styles.containerButton}>
                <button >Add</button>
            </div>
        </form>
    );
};



export default reduxForm({form:'postSectionItem'})(PostSectionForm);