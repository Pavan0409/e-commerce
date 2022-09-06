import React, { useContext} from "react";
import classes from "./MusicProducts.module.css";
import { CartContext } from '../../StoreContext/CartContext';
import axios from "axios";

const productsArr = [
  {
    album: "Album 1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity:1,
  },
  {
    album: "Album 2",
    title: "Black and White Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity:1,
  },
  {
    album: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity:1,
  },
  {
    album: "Album 4",
    title: "Blue Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    quantity: 1,
  },
];

const MusicProducts = (props) => {
  const { cart, setCart, userId, setUserId, price, setPrice } = useContext(CartContext);
  
  function addItemHandler(product) {
    setCart([...cart,product])
    console.log(`Id:${userId}`)
    axios.post(`https://crudcrud.com/api/d66934dd983f4006b8bc114e21f16bca/cartitem${userId}`,product)
    .then((response) =>{
      console.log(`Axios:${response}`)
    }).catch((err) =>{
      console.log(`err:${err}`)
    })
    // setCart((prevState) => {
    //   return [...prevState, product];
    // });
    setPrice(price + product.price);
  }


  const removeItemHandler = (items)=>{
    setCart(cart.filter((c)=>c.album !==items.album))
  }

  
  
  return (
    <section className={classes.musicSection}>
      {productsArr.map((items) => {
        return (
          <ul  key={items.album} className={classes.musicContainer}>
            <h3>{items.album}</h3>
            <li className={classes.musicImage}>
              <img src={items.imageUrl} alt="Music pictures" />
            </li>
            <li className={classes.musicDetail}>
              <span>{items.title}:₹{items.price}</span>
            {cart.includes(items)?(
              <button className={classes.musicBtn} onClick={()=> removeItemHandler(items)}>Remove From Cart</button>
                  ): <button className={classes.musicBtn} onClick={()=> addItemHandler(items)}>ADD TO CART</button>}
            </li>
          </ul>
        );
      })}
      {console.log(`props.cartMusic ${cart}`)}
    </section>
  );
};

export default MusicProducts;
