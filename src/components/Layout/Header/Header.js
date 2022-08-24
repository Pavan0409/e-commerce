import React, {useContext} from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { Cart } from '../../StoreContext/CartContext';


const Header = (props) => {
const { cart } = useContext(Cart);

  return (
    <div>
      <div className={classes.headBody}>
        <ul className={classes.list}><a href="/homepage"><li>HOME</li></a>
        <Link to="/"><li>STORE</li></Link>
        <Link to="/"><li>ABOUT</li></Link>
          <a href="#" className={classes.cart} onClick={props.showCartItem}>
            cart<span className={classes.cartnumber}>{ cart.length }</span>
          </a>
        </ul>
        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
