import React from "react";
import classes from "./Footer.module.css";
import facebookLogo from "../../../assets/facebookLogo.png";
import SpotifyLogo from "../../../assets/SpotifyLogo.png";
import utubeLogo from "../../../assets/utubeLogo.jpg";

const Footer = () => {
  return (
    <div className={classes.footerBody}>
      <h2>The Generics</h2>
      <div className={classes.footericons}>
        <ul>
          <li>
           <a href="https://youtube.com" target="_blank" rel="noreferrer">
           <img src={utubeLogo} alt="Youtube logo" />
           </a>
          </li>
          <li>
            <a href="https://spotify.com" target="_blank" rel="noreferrer">
            <img src={SpotifyLogo} alt="spotify logo" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img src={facebookLogo} alt="Facebook logo" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
