import React, { useState } from "react";

export const CartContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const CartContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState("");
  const [price, setPrice] = useState(0);
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };
  // const cartElements = [
  //   {
  //     title:"Colors",
  //     price:100,
  //     imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  //     quantity:2,
  //   },
  // ];

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        userId,
        setUserId,
        price,
        setPrice,
        contextValue,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
