import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsItem = props.dialogsItems.dialogs.map(el => {
        return (
            <DialogsItem name={el.name} id={el.id}/>
        );
    })

    let messageItem = props.dialogsItems.dialogs.map(el => {
        return (
            <Message message={el.message}/>
        )
    })



        return (
        <div className={styles.container}>
            <div className={styles.dialogsItems}>

                {dialogsItem}
            </div>

            <div className={styles.messages}>
                {messageItem}
            </div>

        </div>
    );
};

export default Dialogs;
