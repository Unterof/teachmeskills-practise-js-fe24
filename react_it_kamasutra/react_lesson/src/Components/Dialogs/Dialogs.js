import React from "react";
import dialogs from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = (props) => {
  let path = "/dialogs/" + props.id;

  return (
    <div className={dialogs.item}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
    return (
    <div className={dialogs.message}>{props.message}</div>
    )
}

const Dialogs = () => {
  return (
    <div className={dialogs.container}>
      <div className={dialogs.dialogsItems}>
        <DialogsItem name="Kirill" id="1" />

        <DialogsItem name="Dmitry" id="2" />

        <DialogsItem name="Ksenya" id="3" />

        <DialogsItem name="Valery" id="4" />

        <DialogsItem name="Zohan" id="5" />
      </div>
      <div className={dialogs.messages}>
        <Message message = "Hi" />
        <Message message = "Hello how are you?" />
        <Message message = "I have enough time" />
        <Message message = "You need to learn javascript more!" />
        <Message message = "Men you look crazy" />
        
          
        </div>
      </div>
    
  );
};

export default Dialogs;
