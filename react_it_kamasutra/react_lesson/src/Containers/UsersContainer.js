import Users from "../Components/Users/Users";
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../redux/users-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {

    return {
        users: state.usersSection.users,
        pageSize: state.usersSection.pageSize,
        totalUserCount: state.usersSection.totalUserCount,
        currentPage: state.usersSection.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUser: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page));
        },
        setTotalUserCount: (count) => {
            dispatch(setTotalUserCountAC(count));
        }
    }
}


const UsersContainer = connect (mapStateToProps,mapDispatchToProps) (Users);

export default UsersContainer;



