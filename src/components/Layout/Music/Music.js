import React from "react";
import MusicProducts from "./MusicProducts";
import classes from "./Music.module.css";

const Music = (props) => {
  return (
    <div className={classes.music}>
      <h2>MUSIC</h2>
      <MusicProducts />
    </div>
  );
};

export default Music;
