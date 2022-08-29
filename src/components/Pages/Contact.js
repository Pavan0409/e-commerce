import React, { useRef } from "react";
import classes from "./Contact.module.css";

const Contact = (props) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const emailId = emailRef.current.value;
    const phonenum = phoneRef.current.value;

    const contact = {
      name: name,
      emailId: emailId,
      phonenum: phonenum,
    };

    props.addRequest(contact);
    console.log(props.addRequest(contact));
  };

  return (
    <div className={classes.contactBody}>
      <h1>Any Issues? Contact us directly</h1>
      <form className={classes.contactForm} onSubmit={onSubmitHandler}>
        <div className={classes.contactName}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" ref={nameRef} />
        </div>
        <div className={classes.contactEmail}>
          <label htmlFor="email">Email Id</label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div className={classes.contactPhone}>
          <label htmlFor="mobile">Phone number</label>
          <input id="mobile" type="number" ref={phoneRef} />
        </div>
        <button className={classes.contactBtn}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
