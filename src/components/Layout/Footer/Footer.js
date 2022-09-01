import React from "react";
import classes from "./Footer.module.css";
import facebookLogo from '../../../assets/facebookLogo.png';
import SpotifyLogo from '../../../assets/SpotifyLogo.png';
import utubeLogo from '../../../assets/utubeLogo.jpg';

const Footer = () => {
  return (
    <div className={classes.footerBody}>
      <h2>The Generics</h2>
      <div className={classes.footericons}>
        <ul>
          <li>
            <img
              src =  {utubeLogo}
              alt="Youtube logo"
            />
          </li>
          <li>
            <img
              src = {SpotifyLogo}
              alt="spotify logo"
            />
          </li>
          <li>
            <img
              src = {facebookLogo}
              alt="Facebook logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;