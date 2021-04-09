import s from './ProfileInfo.module.css'
import Ava from './Ava/Ava'
import AboutMe from './AboutMe/AboutMe'
import Contacts from './Contacts/Contacts'
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useEffect } from 'react';
import makeSlideContent from '../../../../scripts/makeSlideContent';

const ProfileInfo = ({ data, status, authId, userId, publishStatus  }) => {

    const psProps = { status, publishStatus, authId, userId }

    useEffect(() => {
        const container = document.querySelector(`.${s.profileInfo}`)
        const content = document.querySelector(`.${s.content}`)

        makeSlideContent(content, container)
    }, [])
    
    return (
        <div className={s.profileInfo}>
            <div className={s.content}>
                <Ava photos={data.photos} />
                <ProfileStatus {...psProps} />
                <AboutMe aboutMe={data.aboutMe} name={data.fullName}/>
                <Contacts contacts={data.contacts} />
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