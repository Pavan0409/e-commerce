import React, { useState } from "react";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Store from "./components/Pages/store";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import { Routes, Route, Navigate } from "react-router-dom";
import CartList from "./Cart/CartList";
import { CartContext } from "./components/StoreContext/CartContext";
import Contact from "./components/Pages/Contact";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Login from "./components/Pages/Login/Login";

function App() {
  const [cartItems, setCartItems] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const CartItems = () => {
    setCartItems(true);
  };

  const cartItemsClose = () => {
    setCartItems(false);
  };

  const addRequestHandler = async (contact) => {
    const response = await fetch(
      "https://e-commerce-2186a-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Header showCartItem={CartItems} />
      {cartItems && <CartList Close={cartItemsClose} />}
      <Routes>
        <Route exact path="/store" element={<Store />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/homepage" element={<Home />} />
        <Route
          exact
          path="/contact"
          element={<Contact addRequest={addRequestHandler} />}
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          exact
          path="/login"
          element={<Login CheckLogin={setIsLoggedIn} />}
        />
        {!isLoggedIn && (
          <Route path="*" element={<Navigate to="/login"></Navigate>}></Route>
        )}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
