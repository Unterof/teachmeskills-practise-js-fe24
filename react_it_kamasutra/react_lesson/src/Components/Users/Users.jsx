import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "../common/User/UserHelper";

// import Pagination from '@material-ui/lab/Pagination';


let Users = ({ users, totalUserCount, pageSize, currentPage, onPageChanged,...props }) => {
//Рефакторинг : для облегчения чтения и компиляции, разбили код по дополнительным компонентам
    return <div className={styles.container}>
        <Paginator totalUserCount={totalUserCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged} />


        {users.map(e => <User user={e}
            key={e.id}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow} />

        )
        }


    </div>


}







export default Users;


// axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "2ec176f6-8255-419b-9266-91536d0dd2c5"
//     }
// })
//     .then(response => {
//
//             if (response.data.resultCode === 0) {
//                 (props.unfollow(e.id))
//             }
//         }
//     )


// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${e.id}`, {}, {
//     withCredentials: true,
//     headers: {
//         "API-KEY": "2ec176f6-8255-419b-9266-91536d0dd2c5"
//     }
// })
//     .then(response => {
//
//             if (response.data.resultCode === 0) {
//                 (props.follow(e.id))
//             }
//
//         }
//     )

