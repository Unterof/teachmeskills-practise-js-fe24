import React, { useState } from "react";
import styles from "../Profile.module.css";
import avatar from "../../../assets/image/avatar.jpg";
import StatusFieldHooks from "./StatusFieldHooks";
import Preloader from "../../../assets/Preloader/Preloader";
import ProfileDataForm from "../ProfileDataForm";

// import StatusField from "../../../Containers/StatusField";

const ProfileInfo = React.memo((props) => {
  const [editMode, setEditMode] = useState(false);

  let editProfile = () => {
    setEditMode(true);
  };
  if (!props.profile) {
    return <Preloader />;
  }
  const pickupPhoto = (e) => {
    if (e.target.files.length) {
      props.updateUserPhoto(e.target.files[0]);
    }
  };
 
  const onSubmit = (formData) => {
   props.saveProfile(formData).then(()=>{
    setEditMode(false)
   })
   
   
  };
  return (
    <div className={styles.upper_container}>
      <img
        className={styles.upper_container_image}
        alt="1"
        src="https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg"
      />

      <div className={styles.avaSection}>
        <img
          alt="avatar"
          src={
            props.profile.photos.large || props.profile.photos.small || avatar
          }
        />
        <div>
          {editMode ? (
            <ProfileDataForm 
            initialValues={props.profile}
             profile={props.profile}
              onSubmit={onSubmit} />
          ) : (
            <ProfileData editProfile={editProfile} profile={props.profile} />
          )}
          <div>
            {props.isOwner && <input onChange={pickupPhoto} type="file" />}
          </div>
          <div>
            <StatusFieldHooks
              status={props.status}
              updateUserStatus={props.updateUserStatus}
            />
          </div>
        </div>

      
        {/*<img alt="avatar" src={avatar}/>*/}
      </div>
    </div>
  );
});

export default ProfileInfo;

const ProfileData = ({ profile, editProfile }) => {
  return (
    <div>
      <button onClick={editProfile}>edit</button>
      <div>
        <p className={styles.fullName}>{profile.fullName}</p>
      </div>
      <div>
        <b>Looking for a job:{profile.lookingForAJob ? "yes" : "no"}</b>
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>Professional skills : {profile.lookingForAJobDescription}</b>
        </div>
      )}
      <div>
        <b>About me : {profile.aboutMe}</b>
      </div>
      <div className={styles.contacts}>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div>
      <b>{contactTitle}</b> : {contactValue}
    </div>
  );
};
