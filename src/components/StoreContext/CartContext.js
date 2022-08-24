import React, { useState } from "react";
import { createContext } from "react";

export const Cart = createContext();

const CartContext = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
  ];

  const [cart, setCart] = useState(cartElements);

  return (
    <Cart.Provider value={{ cart, setCart }}>{props.children}</Cart.Provider>
  );
};

export default CartContext;