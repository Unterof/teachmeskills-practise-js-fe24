import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageCreator} from "../../redux/store";


const Dialogs = (props) => {
    let state = props.store.getState().dialogsItems;

    let dialogsItem = state.dialogs.map(el => {
        return (
            <DialogsItem name={el.name} id={el.id}/>
        );
    })


    let messageItem = state.dialogs.map(el => {
        return (
            <Message message={el.message}/>
        )
    })
    let newMessageItem = state.newMessageItem;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onChangeMessageText = (event) => {
        let item = event.target.value
        props.store.dispatch(updateNewMessageCreator(item))
    }


    return (
        <div className={styles.container}>
            <div className={styles.dialogsItems}>


                {dialogsItem}
            </div>

            <div className={styles.messages}>
                <div>{messageItem}</div>
                <div>
                    <div><textarea value={newMessageItem}
                                   onChange={onChangeMessageText}
                                   placeholder='Type your message'/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;
