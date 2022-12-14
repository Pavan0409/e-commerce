import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";
import { CartContext } from "../../StoreContext/CartContext";

const Login = (props) => {
  const { contextValue, cart, setCart, userId, setUserId } = useContext(CartContext);
  // console.log(contextValue);

  const loginEmailRef = useRef();
  const loginPassRef = useRef();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredLoginEmail = loginEmailRef.current.value;
    const enteredLoginPass = loginPassRef.current.value;
    
    let userSavedId = (Math.random()+1).toString(36).substring(7)
    console.log(userSavedId)
    localStorage.setItem('userId',userSavedId)
    setUserId(userSavedId)


    setLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCXtCxFgYl2z1ztkX6gxP4bKe5vt4wnPdU";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXtCxFgYl2z1ztkX6gxP4bKe5vt4wnPdU";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredLoginEmail,
        password: enteredLoginPass,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLogin(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        alert("Login SuccesFull");
        console.log(data);
        localStorage.setItem('TokenId', data.idToken)
        // setT(data.idToken);
        contextValue.login(data.idToken);
        navigate("/store");
        props.CheckLogin(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // useEffect(() => {
  //   console.log(contextValue.token);
  // }, []);

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={loginEmailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            autoComplete="on"
            required
            ref={loginPassRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
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
