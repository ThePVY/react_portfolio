import { connect } from "react-redux";
import { actionCreator, thunkCreator } from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React from 'react'
import { withRouter } from "react-router";

class ProfileInfoAPI extends React.Component {
    render = () => {
        return (
            <ProfileInfo {...this.props} />
        )
    }

    componentDidMount = () => {
        const { myId, getProfileData } = this.props
        const { userId = myId } = this.props.match.params
        getProfileData(userId)
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.profile.info.data,
        myId: state.auth.data.id
    }
}


export default connect(mapStateToProps, {...actionCreator.info, ...thunkCreator})(withRouter(ProfileInfoAPI));
