import React from "react";
import classes from "./Profile.module.css"

import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostSection from "../Posts/PostSection/PostSection";

const Profile = () => {
  return (
    <div className={classes.container}>
    <ProfileInfo />
    <PostSection />
    </div>
  );
};

export default Profile;


