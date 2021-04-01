import { connect } from "react-redux";
import { actionCreator, thunkCreator } from "../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React from 'react'
import { withRouter } from "react-router";
import { compose } from "redux";

class ProfileInfoAPI extends React.Component {
    render = () => {
        console.log('ProfileInfo render')
        return (
            <ProfileInfo {...this.props} publishStatus={this.publishStatus} />
        )
    }

    componentDidMount = () => {
        const { authId, getProfileData, getProfileStatus } = this.props
        const { userId = authId } = this.props.match.params
        getProfileStatus(userId)
        getProfileData(userId)
    }

    componentDidUpdate = (prevProps, prevState) => {
        const { authId, getProfileData, getProfileStatus } = this.props
        const { userId = authId } = this.props.match.params

        if (prevProps.authId !== authId ||
            prevProps.match.url !== this.props.match.url) {
            getProfileStatus(userId)
            getProfileData(userId)
            console.log('Get Profile Status and Data')
        }
    }

    publishStatus = status => {
        const { putProfileStatus } = this.props
        putProfileStatus({ status })
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.profile.info.data,
        authId: state.auth.data.id,
        userId: state.profile.userId,
        newStatus: state.profile.info.newStatus,
        status: state.profile.info.status
    }
}

export default compose(
    connect(mapStateToProps, { ...actionCreator.info, ...thunkCreator }),
    withRouter
)(ProfileInfoAPI)
