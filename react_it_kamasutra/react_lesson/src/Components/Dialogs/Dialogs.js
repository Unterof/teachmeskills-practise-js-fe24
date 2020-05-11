import React from "react";
import dialogs from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={dialogs.container}>
            <div className={dialogs.dialogsItems}>
                <div className={dialogs.item}>
                    <NavLink to="/dialogs/1">Kirill</NavLink>
                </div>
                <div className={dialogs.item}>
                    <NavLink to="/dialogs/2"> Dmitry </NavLink>
                </div>
                <div className={dialogs.item}>
                    <NavLink to="/dialogs/3">Ksenya</NavLink>
                </div>
                <div className={dialogs.item}>
                    <NavLink to="/dialogs/4">Valery</NavLink>
                </div>
                <div className={dialogs.item}>
                    <NavLink to="/dialogs/5">Zohan</NavLink>
                </div>
            </div>
            <div className={dialogs.messages}>
                <div className={dialogs.message}>Hi!</div>
                <div className={dialogs.message}>Hello how are you?</div>
                <div className={dialogs.message}>I have enough time</div>
                <div className={dialogs.message}>You need to learn javascript more!</div>
            </div>
        </div>
    )
}

export default Dialogs;