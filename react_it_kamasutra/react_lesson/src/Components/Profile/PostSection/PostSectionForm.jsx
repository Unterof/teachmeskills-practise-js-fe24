import React from 'react';
import styles from './PostSection.module.css'
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/FormControls';
import { Textarea } from '../../common/FormControls/FormControls';

const maxLength30 = maxLength(30)

const PostSectionForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>My posts</div>
            <div className={styles.containerInput}>
                <Field component={Textarea} name="postItem"
                    placeholder='Type your post' validate={[required, maxLength30]} />
            </div>
            <div className={styles.containerButton}>
                <button >Add</button>
            </div>
        </form>
    );
};



export default reduxForm({ form: 'postSectionItem' })(PostSectionForm);