import React from "react";
import styles from "./Users.module.css";
import avatar from "../../assets/image/avatar.jpg";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import axios from "axios";


// import Pagination from '@material-ui/lab/Pagination';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (

        <div className={styles.container}>
            {/*<button onClick={this.getUser}>Get Users</button>*/}

            <div className={styles.pages}>

                {pages.map(e => {
                    return (
                        <span className={props.currentPage === e && styles.selectedPage}
                              onClick={() => {
                                  props.onPageChanged(e)
                              }}>{e}</span>
                        // <Pagination count={e} color="primary" className={this.props.currentPage === e && styles.selectedPage} onClick={()=>{this.onPageChanged(e)}} />
                    )
                })}

                {/*    <Pagination count={pages} color="primary" />*/}

            </div>

            {props.users.map(e => {
                return (
                    <div className={styles.containerItem} key={e.id}>

                        <div>
                            <NavLink to={'/profile/' + e.id}>
                                <img alt={e.name} src={e.photos.small != null ? e.photos.small : avatar}
                                     className={styles.avatar}/>
                            </NavLink>
                            {/*<Avatar alt={e.name} src={e.photos.small} />*/}
                            <div>
                                {e.followed ? <Button variant="contained" color="secondary"
                                                      onClick={() =>
                                                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, {
                                                              withCredentials: true,
                                                              headers: {
                                                                  "API-KEY": "2ec176f6-8255-419b-9266-91536d0dd2c5"
                                                              }
                                                          })
                                                              .then(response => {

                                                                      if (response.data.resultCode === 0) {
                                                                          (props.unfollow(e.id))
                                                                      }
                                                                  }
                                                              )


                                                      }>UNFOLLOW</Button>
                                    : <Button variant="contained" color="secondary" onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "2ec176f6-8255-419b-9266-91536d0dd2c5"
                                            }
                                        })
                                            .then(response => {

                                                    if (response.data.resultCode === 0) {
                                                        (props.follow(e.id))
                                                    }

                                                }
                                            )

                                    }}>FOLLOW</Button>}

                            </div>
                            <span>
                                <span>
                                    <div>{e.name}</div>
                                    <div>{e.status}</div>
                                </span>
                                <span>
                                    <div> {'e.location.country'} </div>
                                    <div>{'e.location.city'}</div>
                                </span>
                            </span>
                        </div>
                    </div>


                )
            })}
        </div>

    )
}


export default Users;