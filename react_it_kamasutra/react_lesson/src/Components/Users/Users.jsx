import * as React from "react";
import styles from "./Users.module.css";
import avatar from "../../assets/image/avatar.jpg";
import Button from "@material-ui/core/Button";
import Pagination from '@material-ui/lab/Pagination';
import * as axios from "axios";

class Users extends React.Component {

componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUser(response.data.items)
        this.props.setTotalUserCount(response.data.totalCount)

        }
    )

}
    onPageChanged = (page)=>{
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                this.props.setUser(response.data.items)

            }
        )
    }
    render() {
        let  pagesCount = Math.ceil(this.props.totalUserCount/this.props.pageSize)
        let pages =[] ;
        for (let i = 1;i<=pagesCount;i++){
            pages.push(i)
        }

       return (

            <div className={styles.container}>
                {/*<button onClick={this.getUser}>Get Users</button>*/}
                <div className={styles.pages}>
                {pages.map(e => {
                    return (
                          <span className={this.props.currentPage === e && styles.selectedPage}
                          onClick={()=>{this.onPageChanged(e)}}>{e}</span>
     )
                })}

                {/*    <Pagination count={pages} color="primary" />*/}
                
                </div>

                {this.props.users.map(e => {
                    return (
                             <div className={styles.containerItem} key={e.id}>

                            <div>
                                <img alt={e.name} src={e.photos.small != null ? e.photos.small : avatar}
                                     className={styles.avatar}/>
                                {/*<Avatar alt={e.name} src={e.photos.small} />*/}
                                <div>
                                    {e.followed ? <Button variant="contained" color="secondary"
                                                          onClick={() => (this.props.unfollow(e.id))}>UNFOLLOW</Button>
                                        : <Button variant="contained" color="secondary" onClick={() => {
                                            this.props.follow(e.id)
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
}

export default Users