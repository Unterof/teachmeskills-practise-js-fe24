import React from "react";
import styles from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={styles.item}>
            <NavLink to={path}> {props.name} </NavLink>{" "}
        </div>
    );
};

const Message = (props) => {


    return (
        <div className={styles.message}> {props.message} </div>
    );
};


const Dialogs = (props) => {

    let dialogsItem = props.dialogs.map(el => {
        return (
            <DialogsItem name={el.name} id={el.id}/>
        )
    })

    let messageItem = props.dialogs.map(el => {
        return (
            <Message message={el.message}/>
        )
    })

    return (
        <div className={styles.container}>
            <div className={styles.dialogsItems}>
                {dialogsItem}
            </div>
            {" "}
            <div className={styles.messages}>
                {messageItem}
            </div>
            {" "}
        </div>
    );
};

export default Dialogs;
