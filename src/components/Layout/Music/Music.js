import React from 'react'
import MusicProducts from './MusicProducts';
import classes from './Music.module.css';

const Music = () => {
  return (
    <div className={classes.music}>
    <h2>MUSIC</h2>
    <MusicProducts />
    </div>
  )
}

export default Music;

