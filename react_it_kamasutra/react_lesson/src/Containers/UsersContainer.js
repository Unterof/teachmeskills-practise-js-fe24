
import {
    followUser,
    unfollowUser,
    requestUsers,
    setCurrentPage,
    setFollowingProgress,

} from "../redux/users-reducer";
import {connect} from "react-redux";
import * as React from "react";
import Users from "../Components/Users/Users";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import styles from "./../Components/Users/Users.module.css";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import Preloader from "../assets/Preloader/Preloader";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsers
} from "../redux/users-selector";






class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);


    }

    onPageChanged = (page) => {
        this.props.getUsers(page,this.props.pageSize)
    }

    render() {


        return <>    {this.props.isFetching ? <Preloader/> : null}
            <Users totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.followUser}
                   unfollow={this.props.unfollowUser}
                       />
                      </>
    }
}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress : getFollowingInProgress(state)

    }
}




export default compose (withAuthRedirect,connect(mapStateToProps,{setCurrentPage,setFollowingProgress,getUsers: requestUsers,followUser,unfollowUser})) (UsersAPIComponent);



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

