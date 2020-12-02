import React from "react";
import styles from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";


const Header = (props) => {
  return (
    <header className={styles.header}>
      <div >
        <img
          src="https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"
          alt="lion"
        />

        <div className = {styles.loginBlock}>
            {props.isAuth ? <div>{props.login}<Button onClick={props.logoutMe} variant="contained"  href="#contained-buttons">
                LOGOUT
            </Button></div> : <NavLink to='/login'>Login</NavLink>}

        </div>


      </div>
    </header>
  );
};

export default Header;
