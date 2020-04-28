
import React from "react";
import select from "./css/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={select.nav}>
      <div className = {select.item}>
        <a src="#">Profile</a>
      </div>
      <div className = {select.item}>
        <a>Messages</a>
      </div>
      <div className = {select.item}>
        <a>News</a>
      </div>
      <div className = {select.item}>
        <a>Music</a>
      </div >
      <div className = {select.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
