import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Store from "./components/Pages/store";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import { Routes, Route } from "react-router-dom";
import CartList from "./Cart/CartList";
import CartContext from "./components/StoreContext/CartContext";

function App() {
  const [cartItems, setCartItems] = useState(false);

  const CartItems = () => {
    setCartItems(true);
  };

  const cartItemsClose = () => {
    setCartItems(false);
  };

  return (
    <CartContext>
      <Header showCartItem={CartItems} />
      {cartItems && <CartList Close={cartItemsClose} />}
      <Routes>
        <Route exact path="/" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/homepage" element={<Home />} />
      </Routes>
      <Footer />
    </CartContext>
  );
}

export default App;
