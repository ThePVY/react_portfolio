import s from './Profile.module.css'
import { connect } from 'react-redux';
import selecror from '../../../redux/selectors';
import { actionCreator, thunkCreator } from '../../../redux/profile-reducer';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import Posts from './Posts/Posts'
import { useEffect } from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';

const Profile = (props) => {

    const { authId, getProfileData, getProfileStatus } = props
    const { userId = authId } = props.match.params

    useEffect(() => {
        getProfileStatus(userId)
        getProfileData(userId)
    }, [authId, userId, getProfileData, getProfileStatus])

    const publishStatus = status => {
        const { putProfileStatus, resetForm } = props
        putProfileStatus({ status })
        resetForm('status')
    }

    return (
        <div className={s.profile}>
            <ProfileInfo {...props} publishStatus={publishStatus} />
            <Posts {...props} iam={ !!authId && userId === authId } />
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        photos: selecror.profile.getPhotos(state),
        posts: selecror.profile.getPosts(state),
        authId: selecror.auth.getAuthId(state),
        userId: selecror.profile.getUserId(state),

        data: selecror.profile.getData(state),
        status: selecror.profile.getStatus(state)
    }
}

export default compose(
    connect(mapStateToProps, { ...thunkCreator, ...actionCreator.posts }),
    withRouter
)(Profile);