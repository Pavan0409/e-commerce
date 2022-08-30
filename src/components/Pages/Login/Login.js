import React, { useState, useRef } from "react";
import classes from "./Login.module.css";

const Login = () => {
  const loginEmailRef = useRef();
  const loginPassRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredLoginEmail = loginEmailRef.current.value;
    const enteredLoginPass = loginPassRef.current.value;

    setLoading(true);
    if (!isLogin) {
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBEIHQ4abeDetD53qy8eV5WJgBPEYw7kvI",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredLoginEmail,
            password: enteredLoginPass,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLogin(false);
        if (res.ok) {
            alert("you r loggingin")
            return res.json()
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.messsage;
            }
            alert(errorMessage);
            console.log(data);
          });
        }
      });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      {/* <h1>Login</h1> */}
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={loginEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={loginPassRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button type='button'>{isLogin ? "Login" : "Create Account"}</button>}
          {isLoading && <p>Sending request...</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
