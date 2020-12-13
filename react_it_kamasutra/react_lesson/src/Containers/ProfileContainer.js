import * as React from "react";
import Profile from "../Components/Profile/Profile";
import {getUserStatus, profileUserThunk, setUserProfile, updateUserStatus, updateUserPhoto,saveProfile} from "../redux/profile-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import { withRouter } from "react-router-dom";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        profile: state.postsSection.profile,
        status: state.postsSection.status,
        authorizedId : state.auth.userId,
        isAuth: state.auth.isAuth

    }
}

class ProfileContainer extends React.Component {

    refreshProfile () {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId=this.props.authorizedId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.profileUserThunk(this.props.match.params.userId);
        this.props.getUserStatus(userId)
    }
   componentDidMount() {


            this.refreshProfile()

   }
    componentDidUpdate(prevProps,prevState,snapshot) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
          <Profile {...this.props}
                   isOwner={!this.props.match.params.userId}
                   profile = {this.props.profile}
                   status={this.props.status}
                   saveProfile={this.props.saveProfile}
                   updateUserStatus = {this.props.updateUserStatus} 
                   updateUserPhoto = {this.props.updateUserPhoto}/>
        )
    }
}






export default compose (withRouter,withAuthRedirect,connect(mapStateToProps,{profileUserThunk,setUserProfile,getUserStatus,updateUserStatus,updateUserPhoto,saveProfile}))(ProfileContainer)








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
