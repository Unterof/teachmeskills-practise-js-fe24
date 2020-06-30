
import {followAC, setCurrentPageAC, setTotalUserCountAC, setUsersAC, unfollowAC} from "../redux/users-reducer";
import {connect} from "react-redux";
import * as React from "react";
import * as axios from "axios";
import Users from "../Components/Users/Users";


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUser(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)

            }
        )

    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
                this.props.setUser(response.data.items)

            }
        )
    }

    render() {
        return <Users totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
    }
}

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


const UsersContainer = connect (mapStateToProps,mapDispatchToProps) (UsersAPIComponent);

export default UsersContainer;



