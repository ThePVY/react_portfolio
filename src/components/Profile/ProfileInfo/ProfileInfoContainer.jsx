import { connect } from "react-redux";
import { action } from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React from 'react'
import { withRouter } from "react-router";
import { profileAPI } from "../../../api/profile-api";

class ProfileInfoAPI extends React.Component {
    render = () => {
        return (
            <ProfileInfo {...this.props} />
        )
    }

    componentDidMount = () => {
        const { setUserProfileData, myId } = this.props
        const { userId = myId ? myId : 2 } = this.props.match.params
        profileAPI.getProfileData(userId).then((data) => {
            setUserProfileData(data)
        })
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.profile.info.data,
        myId: state.auth.data.id
    }
}


export default connect(mapStateToProps, action.info)(withRouter(ProfileInfoAPI));