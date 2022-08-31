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
          <div>
          <li>
            <img
              // src="https://github.com/prasadyash2411/ecom-website/blob/main/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
              src =  {utubeLogo}
              alt="Youtube logo"
            />
          </li>
          </div>
          <li>
            <img
              // src="https://github.com/prasadyash2411/ecom-website/blob/main/img/Spotify%20Logo.png"
              src = {SpotifyLogo}
              alt="spotify logo"
            />
          </li>
          <li>
            <img
              // src="https://github.com/prasadyash2411/ecom-website/blob/main/img/Facebook%20Logo.png"
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
