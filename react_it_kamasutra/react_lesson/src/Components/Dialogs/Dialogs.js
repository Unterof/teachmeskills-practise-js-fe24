import React from "react";
import styles from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

import {Redirect} from "react-router-dom";
import DialogMessageItem from "./DialogsItemForm/DialogsItemForm.js";






const Dialogs = (props) => {
  let dialogsItem = props.dialogsItems.dialogs.map((el) => (
    <DialogsItem name={el.name} id={el.id} />
  ));

  let messageItem = props.dialogsItems.dialogs.map((el) => (
    <Message message={el.message} />
  ));

  let addNewMessage = (values) => {
      props.sendMessageCreator(values.messageItem)
  }



  if (!props.isAuth) return <Redirect to={`/login`} />;
  return (
    <div className={styles.container}>
      <div className={styles.dialogsItems}>{dialogsItem}</div>

      <div className={styles.messages}>
        <div>{messageItem}</div>
        <DialogMessageItem onSubmit={addNewMessage}/>
      </div>
    </div>
  );
};

export default Dialogs;
