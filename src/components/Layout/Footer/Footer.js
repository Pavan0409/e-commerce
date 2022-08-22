import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footerBody}>
      <h2>The Generics</h2>
      <div className={classes.footericons}>
        <ul>
          <li>
            <img
              src="https://github.com/prasadyash2411/ecom-website/blob/main/img/6260efc8fc9a9002669d2f4ad9956cc0.jpg"
              alt="Youtube logo"
            />
          </li>
          <li>
            <img
              src="https://github.com/prasadyash2411/ecom-website/blob/main/img/Spotify%20Logo.png"
              alt="spotify logo"
            />
          </li>
          <li>
            <img
              src="https://github.com/prasadyash2411/ecom-website/blob/main/img/Facebook%20Logo.png"
              alt="Facebook logo"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
