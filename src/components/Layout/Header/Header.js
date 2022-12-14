import React, { useContext } from "react";
import classes from "./Header.module.css";
import { CartContext } from "../../StoreContext/CartContext";
import "./NavLink.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const { cart, contextValue } = useContext(CartContext);
  const isLoggedIn = contextValue.isLoggedIn;

  const logoutHandler = () => {
    contextValue.logout();
  };

  return (
    <div>
      <div className={classes.headBody}>
        <ul className={classes.list}>
          {/* <Link to="/homepage">HOME</Link>
        <Link to="/store"><li>STORE</li></Link>
        <Link to="/about"><li>ABOUT</li></Link> */}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/profile"
            >
              <li>Profile</li>
            </NavLink>
          )}

          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/homepage"
            >
              <li>Home</li>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/store"
            >
              <li>Store</li>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/about"
            >
              <li>About</li>
            </NavLink>
          )}
          {/* {!isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/login"
            >
              <li>About</li>
            </NavLink>
          )} */}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/contact"
            >
              <li>Contact</li>
            </NavLink>
          )}
          {!isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/login"
            >
              <li>Login</li>
            </NavLink>
          )}
          {isLoggedIn && (
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/login"
            >
              <li className={classes.logout}>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </NavLink>
          )}
          {isLoggedIn && (
            <button className={classes.cart} onClick={props.showCartItem}>
              <li>
                cart<span className={classes.cartnumber}>{cart.length}</span>
              </li>
            </button>
          )}
        </ul>
        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
