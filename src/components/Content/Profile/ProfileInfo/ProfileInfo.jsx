import s from './ProfileInfo.module.css'
import Ava from './Ava/Ava'
import AboutMe from './AboutMe/AboutMe'
import Contacts from './Contacts/Contacts'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useEffect } from 'react';
import makeSlideContent, { removeScrollListener } from '../../../../scripts/makeSlideContent';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../../common/CustomFields/CustomFields';
import { useState } from 'react';
import ViewPanel from '../../../common/ViewPanel/ViewPanel';

const ProfileInfo = ({ data, status, authId, userId, publishStatus, uploadProfilePhoto }) => {

    const psProps = { status, publishStatus, authId, userId }

    const [editMode, setEditMode] = useState(false)
    const [showEdit, setShowEdit] = useState(false)

    useEffect(() => {
        const container = document.querySelector(`.${s.profileInfo}`)
        const content = document.querySelector(`.${s.content}`)
        const scrollListener = makeSlideContent(content, container)
        return () => {
            removeScrollListener(scrollListener)
        }
    }, [])

    const setEdit = () => {
        setShowEdit(true)
    }

    const resetEdit = () => {
        setShowEdit(false)
    }

    const uploadPhoto = ({ photo }) => {
        uploadProfilePhoto(photo, authId)
    }

    const closePanel = () => {
        setEditMode(false)
    }

    const showPanel = () => {
        setEditMode(true)
    }

    return (
        <div className={s.profileInfo}>
            <div className={s.content}>
                <Ava photos={data.photos} uploadPhoto={uploadPhoto} />
                <div className={`${s.info} centered-horizontal`} onMouseOver={setEdit} onMouseOut={resetEdit}>
                    <ProfileStatus {...psProps} />
                    <div onClick={showPanel} className={s.editProfile}>edit profile</div>
                    {
                        editMode ?
                            <ViewPanel isShown={editMode} content={<AddProfileInfoForm />} onClose={closePanel} />
                            :
                            <>
                                <AboutMe aboutMe={data.aboutMe} name={data.fullName} />
                                <Contacts contacts={data.contacts} />
                            </>
                    }
                </div>
                <div>
                    Images
                </div>
                <div>
                    Music
                </div>
                <div>
                    Video
                </div>

                <div className={s.takePlace}>FOR TAKE PLACE</div>
                <div className={s.takePlace}>FOR TAKE PLACE</div>
                <div className={s.takePlace}>FOR TAKE PLACE</div>
                <div className={s.takePlace}>FOR TAKE PLACE</div>
                <div className={s.takePlace}>FOR TAKE PLACE</div>
                <div className={s.takePlace}>FOR TAKE PLACE</div>

            </div>
        </div>
    );
};

export default ProfileInfo;

let AddProfileInfoForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className={s.infoForm}>
            {createField(Input, 'fullName', 'text', 'Enter your fullname')}
            {createField(Input, 'lookingForAJob', 'checkbox')}
            {createField(Textarea, 'lookingForAJobDescription', 'text', 'Some words about desired job')}
            {createField(Input, 'contacts.github', 'text', 'github')}
            {createField(Input, 'contacts.vk', 'text', 'vk')}
            {createField(Input, 'contacts.facebook', 'text', 'facebook')}
            {createField(Input, 'contacts.instagram', 'text', 'instagram')}
            {createField(Input, 'contacts.twitter', 'text', 'twitter')}
            {createField(Input, 'contacts.website', 'text', 'website')}
            {createField(Input, 'contacts.youtube', 'text', 'youtube')}
            {createField(Input, 'contacts.mainLink', 'text', 'mainLink')}
            <button type='submit'>Update profile information</button>
        </form>
    )
}

AddProfileInfoForm = reduxForm({ form: 'add-profile-info' })(AddProfileInfoForm)
