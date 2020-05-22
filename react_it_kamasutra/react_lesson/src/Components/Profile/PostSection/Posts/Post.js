import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {



    return (
        <div className={styles.container}>
            <img
                className={styles.post_ava}
                src="https://i.pinimg.com/originals/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64.jpg"
            />
            <div className={styles.post_container}>
                {props.message}
                <div>
                    <button>
                        <div className={styles.like}>like</div>
                        {props.likesCount}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Post;
