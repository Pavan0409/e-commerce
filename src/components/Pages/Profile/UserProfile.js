import React from "react";
import ProfileForm from "./ProfileForm";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <section className={classes.Profile}>
      <h1>Your Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default UserProfile;
