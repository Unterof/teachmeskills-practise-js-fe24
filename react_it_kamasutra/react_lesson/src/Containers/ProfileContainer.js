import * as React from "react";
import Profile from "../Components/Profile/Profile";
import {getUserStatus, profileUserThunk, setUserProfile, updateUserStatus} from "../redux/profile-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        profile: state.postsSection.profile,
        status: state.postsSection.status

    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId=9401;
        }

        this.props.profileUserThunk(this.props.match.params.userId);
        this.props.getUserStatus(userId)


    }
   render() {
        return (
          <Profile {...this.props} profile = {this.props.profile} status={this.props.status} updateUserStatus = {this.props.updateUserStatus} />
        )
    }
}





// let profileContainerWithRouter = withRouter(ProfileContainer)

export default compose (withRouter,withAuthRedirect,connect(mapStateToProps,{profileUserThunk,setUserProfile,getUserStatus,updateUserStatus}))(ProfileContainer)








// let userId = this.props.match.params.userId
// if (!userId) {
//     userId = 2
// }
// debugger
// usersAPI.profileUser(userId).then(data => {
//     this.props.setUserProfile(data)
// })
// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
//
//
//     this.props.setUserProfile(response.data)
//
// })


// componentDidMount() {
//     this.props.setToggleStatus(true)
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
//         .then(response => {
//             console.log(response.data)
//
//
//             this.props.setToggleStatus(false)
//
//             this.props.setUserProfile(response.data)
//
//         }
//     )
//
// }
