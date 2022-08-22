import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.headBody}>
      <div>
        <ul className={classes.list}>
          <a href="#">
            <li>HOME</li>
          </a>
          <a href="#">
            <li>STORE</li>
          </a>
          <a href="#">
            <li>ABOUT</li>
          </a>
          <a href="#" className={classes.cart}>
            cart<span className={classes.cartnumber}>0</span>
          </a>
        </ul>
        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
