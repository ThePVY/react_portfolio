import { connect } from "react-redux";
import { actionCreator, thunkCreator } from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React from 'react'
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileInfoAPI extends React.Component {
    render = () => {
        return (
            <ProfileInfo {...this.props} />
        )
    }

    componentDidMount = () => {
        const { authId, getProfileData } = this.props
        const { userId = authId } = this.props.match.params
        getProfileData(userId)
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.profile.info.data,
        authId: state.auth.data.id,
        newStatus: state.profile.info.newStatus,
        status: state.profile.info.status
    }
}

export default compose(
    connect(mapStateToProps, {...actionCreator.info, ...thunkCreator}),
    withRouter
)(ProfileInfoAPI)
