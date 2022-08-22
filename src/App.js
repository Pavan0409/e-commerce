import React, { useState} from "react";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Merch from "./components/Layout/Merch/Merch";
import Music from "./components/Layout/Music/Music";
import Cart from './Cart/Cart';

function App() {
  const [cartItems, setCartItems] = useState(false);

  const CartItems = () => {
    setCartItems(true);
  }

  const cartItemsClose = () => {
    setCartItems(false);
  }

  return (
    <div>
      <Header showCartItem={CartItems} />
      {cartItems && <Cart close={cartItemsClose} />}
      <Music />
      <Merch />
      <button className="cart-btn-bottom">see the cart</button>
      <Footer />
    </div>
  );
}

export default App;
