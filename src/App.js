import React from "react";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import Merch from "./components/Layout/Merch/Merch";
import Music from "./components/Layout/Music/Music";

function App() {
  return (
    <div>
      <Header />
      <Music />
      <Merch />
      <button className="cart-btn-bottom">see the cart</button>
      <Footer />
    </div>
  );
}

export default App;
