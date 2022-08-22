import React from "react";
import classes from "./Merch.module.css";
import MerchProducts from "./MerchProducts";

const Merch = () => {
  return (
    <div className={classes.merchBody}>
      <h2>Merch</h2>
      <MerchProducts />
    </div>
  );
};

export default Merch;
