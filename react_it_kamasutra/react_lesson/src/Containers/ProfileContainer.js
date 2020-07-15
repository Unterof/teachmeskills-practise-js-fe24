import * as React from "react";
import axios from "axios";
import Profile from "../Components/Profile/Profile";
import {setUserProfile} from "../redux/profile-reducer";
import {connect} from "react-redux";


class ProfileContainer extends React.Component {

    componentDidMount() {

        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {

            console.log(response.data)
            this.props.setUserProfile(response.data)

        })
    }


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

    render() {

        return (
          <Profile {...this.props} profile = {this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => {
 return {
     profile: state.postsSection.profile
 }
}

export default connect (mapStateToProps,{setUserProfile})(ProfileContainer)




