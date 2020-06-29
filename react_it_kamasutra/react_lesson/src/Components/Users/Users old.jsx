import React from 'react'
import styles from './Users.module.css'
// import Avatar from "@material-ui/core/Avatar";
import avatar from '../../assets/image/avatar.jpg'
import Button from "@material-ui/core/Button";
import * as axios from "axios";

const Users = (props) => {
    let getUser = () => {
        if (props.users.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {

                props.setUser(response.data.items)
            }
            )
        }
      
    }

    return (
       <div className={styles.container}>
            <button onClick={getUser}>Get Users</button>
            {props.users.map(e => {
                return (

                 
                    <div className={styles.containerItem} key={e.id}>
                        
                        <div>
                            <img alt={e.name} src={e.photos.small != null ? e.photos.small : avatar} className={styles.avatar} />
                            {/*<Avatar alt={e.name} src={e.photos.small} />*/}
                            <div>
                                {e.followed ? <Button variant="contained" color="secondary" onClick={() => (props.unfollow(e.id))}>UNFOLLOW</Button>
                                    : <Button variant="contained" color="secondary" onClick={() => {
                                        props.follow(e.id)
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


export default Users




  // props.setUser([
        //
        //     {id: 1,fullName: "Kirill",avatar: 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg',
        //         followed: true , status: "What a time", location :  {city: 'Minsk' , country : 'Belarus'}
        //     },
        //     {id: 2,fullName: "Dmitry",avatar: 'https://sun9-40.userapi.com/c840526/v840526209/82f3a/RfYB8MdOph4.jpg?ava=1',
        //         followed: false , status: "I'm learning javascript",location :  {city: 'Moscow' , country : 'Russia'}
        //     },
        //     {id: 3,fullName: "Ksenya",avatar:'https://nashkomp.ru/wp-content/uploads/2017/01/0-2.jpg',
        //         followed: true ,status: "I'm bruclee", location :  {city: 'Kiev' , country : 'Ukraine'}
        //     },
        // ]
        // )