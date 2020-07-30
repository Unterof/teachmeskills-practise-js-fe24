
import {
    unfollowUser,
    followUser,
    getUsers,
    setCurrentPage,
    setFollowingProgress,

} from "../redux/users-reducer";
import {connect} from "react-redux";
import * as React from "react";

import Users from "../Components/Users/Users";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./../Components/Users/Users.module.css";





class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);


    }

    onPageChanged = (page) => {
        this.props.getUsers(page,this.props.pageSize)
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
                      unfollowUser = {this.props.unfollowUser}
        followUser = {this.props.followUser}
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




export default connect (mapStateToProps,{setCurrentPage,setFollowingProgress,unfollowUser,followUser,getUsers}) (UsersAPIComponent);



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

