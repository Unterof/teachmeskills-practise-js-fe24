
import {
    follow,
    setCurrentPage,
    setToggleStatus,
    setTotalUserCount,
    setUsers,
    unfollow
} from "../redux/users-reducer";
import {connect} from "react-redux";
import * as React from "react";
import  axios from "axios";
import Users from "../Components/Users/Users";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./../Components/Users/Users.module.css";



class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleStatus(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {

                this.props.setToggleStatus(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)

            }
        )

    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.setToggleStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setToggleStatus(false)
            }

        )
    }

    render() {

        return <>    {this.props.isFetching ? <CircularProgress color="secondary" className={styles.toggle}/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      />
                      </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: state.usersSection.users,
        pageSize: state.usersSection.pageSize,
        totalUserCount: state.usersSection.totalUserCount,
        currentPage: state.usersSection.currentPage,
        isFetching: state.usersSection.isFetching
    }
}




export default connect (mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUserCount,setToggleStatus}) (UsersAPIComponent);



// let mapDispatchToProps = (dispatch) => {
// return {
//
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUser: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page));
//         },
//         setTotalUserCount: (count) => {
//             dispatch(setTotalUserCountAC(count));
//         },
//         setToggleStatus: (isFetching) => {
//             dispatch(setToggleStatusAC(isFetching));
//         }
//     }
// }

