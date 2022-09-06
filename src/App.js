import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
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
import UserProfile from './components/Pages/Profile/UserProfile';

function App() {
  const [cartItems, setCartItems] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {  cart, setCart, userId, setUserId } = useContext(CartContext);
  
  useEffect(() => {
    if(localStorage.getItem("userId")){
      console.log(localStorage.getItem("userId"));
      setUserId(localStorage.getItem("userId"));
    }
  }, [setUserId]);

  const CartItems = () => {
    // setCartItems(true);
    if(localStorage.getItem("userId")){
      setCartItems(true);
      axios
      .get(
        `https://crudcrud.com/api/d66934dd983f4006b8bc114e21f16bca/cartitem${userId}`
      )
      .then((response) => {
        console.log(`userId: ${userId}`);
        response.data.map((item) => {
          console.log(`Response Data before ${item}`);
          setCart((prevState) =>  [...prevState, item]);
          console.log(`Response Data after ${item}`);
        });
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
    }else{
      alert("Please login first");
    }
  };

  const cartItemsClose = () => {
    setCartItems(false);
  };

  useEffect(() => {
    if (localStorage.getItem("TokenId")) {
      setIsLoggedIn(true);
    }
  }, []);

  const addRequestHandler = async (contact) => {
    const response = await fetch(
      "https://react-http-62b90-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
      {
        method: "POST",
        body: JSON.stringify(contact),
        headers: {
          "Content-Type": "application/json",
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
        <Route exact path="/profile" element={<UserProfile />} />
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
