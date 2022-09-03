import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../StoreContext/CartContext";
import classes from "./ProfileForm.module.css";

const ProfileForm = () => {
  const newPasswordInputRef = useRef();
  const navigate = useNavigate();
  const { contextValue } = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCXtCxFgYl2z1ztkX6gxP4bKe5vt4wnPdU', {
      method: "POST",
      body: JSON.stringify({
        idToken: contextValue.token,
        password: enteredNewPassword,
        returnSecureToken: true
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
       console.log(res)
       navigate('/store');
       alert('Password Changed succesfully'); 
    });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new password"
          minLength="7"
          autoComplete="on"
          ref={newPasswordInputRef}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
