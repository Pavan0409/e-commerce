import React, { useContext } from "react";
import classes from "./MerchProducts.module.css";
import { CartContext } from "../../StoreContext/CartContext";

const merchArr = [
  {
    id: "e1",
    title: "T-Shirt",
    price: 200,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Shirt.png",
    Quantity: 1,
  },
  {
    id: "e2",
    title: "Coffee Cup",
    price: 10,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Cofee.png",
    quantity: 1,
  },
];

const MerchProducts = (props) => {
const {cart, setCart} = useContext(CartContext);

  return (
    <section className={classes.merchSection}>
      {merchArr.map((items) => {
        return (
          <ul className={classes.merchContainer}>
            <h3>{items.title}</h3>
            <li className={classes.merchImage}>
              <img src={items.imageUrl} alt="Merch Pictures" />
            </li>
            <li className={classes.merchDetail}>
              <span>{items.title}:₹{items.price}</span>
              {cart.includes(items)?(
              <button className={classes.merchBtn} onClick={()=> {
                      setCart(cart.filter((c) => c.id !== items.id));
                    }}>Remove From Cart</button>
                  ): <button className={classes.merchBtn} onClick={()=> {
                    setCart([...cart, items])
                  }}>ADD TO CART</button>}
              {/* <button className={classes.merchBtn}>Add To Cart</button> */}
            </li>
          </ul>
        );
      })}
    </section>
  )
};

export default MerchProducts;
