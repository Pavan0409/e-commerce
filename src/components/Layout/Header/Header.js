import React from "react";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div>
      <div className={classes.headBody}>
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
          {/* <a href="#" className={classes.cart}>
            cart
            <span className={classes.cart} onClick={props.showcartItem}>
              Cart
            </span>
          </a> */}
          <a href="#" className={classes.cart} onClick={props.showCartItem}>
            cart<span className={classes.cartnumber}>4</span>
          </a>
        </ul>
        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
