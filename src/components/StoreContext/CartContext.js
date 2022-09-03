import React, { useState } from "react";

export const CartContext = React.createContext({
  token:"",
  isLoggedIn:false,
  login:(token) => {},
  logout:() => {},
});

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = {
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler,
  };
  const cartElements = [
    {
      title:"Colors",
      price:100,
      imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity:2,
    },
  ];

  return (
    <CartContext.Provider value={{ cart, setCart, contextValue }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
