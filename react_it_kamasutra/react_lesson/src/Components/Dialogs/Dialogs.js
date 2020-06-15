import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";



const Dialogs = (props) => {


    let dialogsItem = props.dialogsItems.dialogs.map(el => <DialogsItem name={el.name} id={el.id} />);

    let messageItem = props.dialogsItems.dialogs.map(el => <Message message={el.message}/>);

    let newMessageItem = props.dialogsItems.newMessageItem;

    let onSendMessageClick = () => {
        props.sendMessageCreator()
    }

    let onChangeMessageText = (event) => {
        let item = event.target.value
        props.onSendMessageClick(item)
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
