
import {
    follow,
    setCurrentPage,
    setFollowingProgress,
    setToggleStatus,
    setTotalUserCount,
    setUsers,
    unfollow
} from "../redux/users-reducer";
import {connect} from "react-redux";
import * as React from "react";

import Users from "../Components/Users/Users";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./../Components/Users/Users.module.css";
import {usersAPI} from "../api/api";




class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleStatus(true);



        usersAPI.getUsers (this.props.currentPage,this.props.pageSize).then(data => {

                this.props.setToggleStatus(false)

                this.props.setUsers(data.items)
                this.props.setTotalUserCount(data.totalCount)

            }
        )

    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.setToggleStatus(true)
        usersAPI.getUsers (page,this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
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
                      followingInProgress = {this.props.followingInProgress}
                      setFollowingProgress = {this.props.setFollowingProgress}
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
        isFetching: state.usersSection.isFetching,
        followingInProgress : state.usersSection.followingInProgress
    }
}




export default connect (mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUserCount,setToggleStatus,setFollowingProgress}) (UsersAPIComponent);



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

