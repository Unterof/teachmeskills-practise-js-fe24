
import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <a src="#">Profile</a>
      </div>
      <div>
        <a>Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;