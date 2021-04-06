import { connect } from "react-redux";
import { actionCreator, thunkCreator } from "../../../../redux/profile-reducer";
import ProfileInfo from "./ProfileInfo";
import React, { useEffect } from 'react'
import { withRouter } from "react-router";
import { compose } from "redux";
import withUsersRedirection from "../../../hoc/withUsersRedirection";
import selecror from "../../../../redux/selectors";

const ProfileInfoContainer = props => {

    const { authId, getProfileData, getProfileStatus } = props
    const { userId = authId } = props.match.params

    useEffect(() => {
        getProfileStatus(userId)
        getProfileData(userId)
    }, [authId, userId])

    const publishStatus = status => {
        const { putProfileStatus, resetForm } = props
        putProfileStatus({ status })
        resetForm('status')
    }

    return (
        <ProfileInfo {...props} publishStatus={publishStatus} />
    )
}

const mapStateToProps = (state) => {
    return {
        data: selecror.profile.getData(state),
        authId: selecror.auth.getAuthId(state),
        status: selecror.profile.getStatus(state)
    }
}

export default compose(
    connect(mapStateToProps, { ...actionCreator.info, ...thunkCreator }),
    withUsersRedirection,
    withRouter
)(ProfileInfoContainer)
