import React from "react";
import classes from "./MusicProducts.module.css";

const productsArr = [
  {
    album: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    album: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    album: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    album: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const MusicProducts = () => {
  return (
    <section className={classes.musicsection}>
      {productsArr.map((items) => {
        return (
          <ul className={classes.musicContainer}>
            <h3>{items.album}</h3>
            <li className={classes.musicImage}>
              <img src={items.imageUrl} alt="Music pictures" />
            </li>
            <li className={classes.musicDetail}>
              <span>₹{items.price}</span>
              <button className={classes.musicBtn}>ADD TO CART</button>
            </li>
          </ul>
        );
      })}
    </section>
  );
};

export default MusicProducts;
