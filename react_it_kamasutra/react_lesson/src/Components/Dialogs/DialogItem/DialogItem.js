import styles from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


const DialogsItem = (props) => {
    let path = "/dialogs/" + props.id;


    return (
        <div className={styles.item}>
            <div>

                <NavLink to={path}> {props.name} </NavLink>
            </div>

        </div>
    );
};

export default DialogsItem;