import React from "react";
import styles from "./Users.module.css";
import avatar from "../../../assets/image/avatar.jpg"
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";



let User = ({user, followingInProgress, unfollow,  follow}) => {

  
    return (
        <div className={styles.containerItem} >

                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img alt={user.name} src={user.photos.small != null ? user.photos.small : avatar}
                                     className={styles.avatar}/>
                            </NavLink>
                            {/*<Avatar alt={e.name} src={e.photos.small} />*/}

                            <div>
                                {user.followed
                                    ? <Button disabled={followingInProgress.some(id => id === user.id)}
                                                      variant="contained" color="secondary"
                                                      onClick={() => {unfollow(user.id)}}>UNFOLLOW</Button>

                                    : <Button disabled={followingInProgress.some(id => id === user.id)}
                                              variant="contained" color="secondary"
                                              onClick={() => {follow(user.id)}}>FOLLOW</Button>}

                            </div>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div> {'e.location.country'} </div>
                                    <div>{'e.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    </div>


                )
            }



export default User;


